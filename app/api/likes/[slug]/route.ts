import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createHash } from "crypto";
import { z } from "zod";
import { env } from "@/lib/env.mjs";

// https://github.com/delbaoliveira/website/blob/main/pages/api/likes/%5Bslug%5D.ts
const getRequestSessionId = (request: NextRequest, slug: string) => {
  const ipAddress = request.headers.get("x-forwarded-for") ?? "0.0.0.0";

  const currentUserId =
    // Since a users IP address is part of the sessionId in our database, we
    // hash it to protect their privacy. By combining it with a salt, we get
    // get a unique id we can refer to, but we won't know what their ip
    // address was.
    createHash("md5")
      .update(ipAddress + env.MD5_SALT, "utf8")
      .digest("hex");

  // Identify a specific users interactions with a specific post
  return slug + "___" + currentUserId;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session_id = getRequestSessionId(request, params.slug);

    const [post, user] = await Promise.all([
      db.post.findUnique({
        where: { slug: params.slug },
      }),

      db.session.findUnique({
        where: { session_id },
      }),
    ]);

    if (post === null) {
      return new NextResponse("Post not found", {
        status: 404,
      });
    }

    return NextResponse.json({
      likes: post.likes,
      currentUserLikes: user?.likes ?? 0,
    });
  } catch (e) {
    if (e instanceof Error) {
      return new NextResponse(e.message, {
        status: 500,
      });
    }
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { count } = z
      .object({
        count: z.number().min(1).max(3),
      })
      .parse(await request.json());

    const session_id = getRequestSessionId(request, params.slug);

    const currentUser = await db.session.findUnique({
      where: { session_id },
    });

    if ((currentUser?.likes ?? 0) + count > 3) {
      return new NextResponse("You can't like more than 3 times", {
        status: 400,
      });
    }

    const [post, user] = await Promise.all([
      db.post.update({
        where: { slug: params.slug },
        data: {
          likes: {
            increment: count,
          },
        },
      }),
      db.session.upsert({
        where: { session_id: session_id },
        create: {
          session_id: session_id,
          likes: count,
        },
        update: {
          likes: {
            increment: count,
          },
        },
      }),
    ]);
    return NextResponse.json({
      likes: post.likes,
      currentUserLikes: user.likes,
    });
  } catch (e) {
    if (e instanceof Error) {
      return new NextResponse(e.message, {
        status: 500,
      });
    }
  }
}
