import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import { PostListSection } from "@/components/PostListSection";

export function generateMetadata() {
  return {
    title: "文章",
  };
}

export default function Page() {
  const sortedPosts = allPosts.sort((a, b) => {
    return dayjs(b.date).unix() - dayjs(a.date).unix();
  });

  return (
    <PostListSection
      className="animate-page-in-2"
      label={"最新发布"}
      postList={sortedPosts}
    />
  );
}
