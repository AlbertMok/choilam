import { allPosts } from "contentlayer/generated";
import { featuredPost } from "@/config/featuredPost";
import { PostCard } from "@/components/PostCard";
import { formatDay } from "@/lib/utils";

export const FeatureSection = ({ className }: { className?: string }) => {
  // 暂时用所有文章作为代替
  const featuredPosts = featuredPost.map((slug) => {
    const post = allPosts.find((post) => post.slug === slug);
    if (!post) {
      throw new Error(`Post with slug ${slug} not found.`);
    }
    return post;
  });

  return (
    <section className={className}>
      <h2 className="font-serif text-4xl font-bold text-primary-11">精选文章</h2>
      <div className="mt-6">
        <div className="flex flex-col space-y-8">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} title={post.title} summary={post.summary} date={formatDay(post.date)} slug={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};
