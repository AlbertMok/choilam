import Link from "next/link";
import { db } from "@/lib/db";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <Link key={post.slug} href={`/posts/${post.slug}`} className="group relative font-medium">
      {post.title}
      <ArrowSmallRightIcon className="absolute -left-8 top-0.5 hidden h-5 w-5 text-accent-11 transition-transform duration-200 group-hover:translate-x-1.5 sm:block" />
    </Link>
  );
};

export async function HottestPostSection({ className }: { className?: string }) {
  const hotPosts = await db.post.findMany({
    orderBy: {
      views: "desc",
    },
    take: 4,
  });

  const hotPosts_contentlayer = hotPosts.map((post) => {
    return allPosts.find((p) => p.slug === post.slug);
  });

  return (
    <section className={className}>
      <div className="font-serif text-3xl font-bold text-primary-11">热门文章</div>
      <div className="mt-6 flex flex-col space-y-4">
        {hotPosts_contentlayer.map((post) => {
          if (!post?.title) throw new Error("post.title is undefined");
          return <PostItem key={post.slug} post={post} />;
        })}
      </div>
    </section>
  );
}
