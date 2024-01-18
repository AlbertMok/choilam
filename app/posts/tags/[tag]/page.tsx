import { getTagCountSorted } from "@/lib/posts";
import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import { PostListSection } from "@/components/PostListSection";

export function generateStaticParams() {
  return getTagCountSorted().map((tag) => ({
    tag: tag[0],
  }));
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);

  return {
    title: `#${decodedTag} | 文章`,
  };
}

export default function Page({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);

  const sortedPosts = allPosts
    .filter((post) => post.tags.includes(decodedTag))
    .sort((a, b) => {
      return dayjs(b.date).unix() - dayjs(a.date).unix();
    });

  return (
    <PostListSection
      className="animate-page-in-2"
      label={`# ${decodedTag}`}
      postList={sortedPosts}
    />
  );
}
