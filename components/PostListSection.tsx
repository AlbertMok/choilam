import type { Post } from "contentlayer/generated";
import { PostCard } from "@/components/PostCard";
import { cn, formatDay } from "@/lib/utils";

export function PostListSection({ label, postList, className }: { label: string; postList: Post[]; className?: string }) {
  return (
    <section className={cn("flex-grow", className)}>
      <div className="font-serif text-3xl font-bold text-primary-11">{label}</div>
      <div className="mt-6 flex flex-col space-y-8">
        {postList.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={formatDay(post.date)}
            slug={post.slug}
            className="lg:max-w-md xl:max-w-lg"
          />
        ))}
      </div>
    </section>
  );
}
