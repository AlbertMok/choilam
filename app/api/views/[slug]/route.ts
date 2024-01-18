import { db } from "@/lib/db";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { allPosts } from "contentlayer/generated";
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await db.post.findUnique({
      where: { slug: params.slug },
    });

    const views = post?.views;

    if (views === undefined) {
      if (allPosts.find((post) => post.slug === params.slug)) {
        await db.post.create({
          data: {
            slug: params.slug,
            views: 0,
          },
        });
        return NextResponse.json({
          views: 0,
        });
      }

      return new NextResponse("Post not found.", {
        status: 404,
      });
    }

    return NextResponse.json({
      views,
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
    const post = allPosts.find((post) => post.slug === params.slug);

    if (!post) {
      return new NextResponse("Post not found.", {
        status: 404,
      });
    }

    const { views } = await db.post.upsert({
      where: { slug: params.slug },
      create: { slug: params.slug, views: 1 },
      update: { views: { increment: 1 } },
    });

    return NextResponse.json({
      views,
    });
  } catch (e) {
    if (e instanceof Error) {
      return new NextResponse(e.message, {
        status: 500,
      });
    }
  }
}
