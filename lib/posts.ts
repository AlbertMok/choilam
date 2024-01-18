import { allPosts } from "contentlayer/generated";

export const getTagCountSorted = () => {
  const tagCount: Record<string, number> = {};
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagCount[tag]) {
        tagCount[tag] += 1;
      } else {
        tagCount[tag] = 1;
      }
    });
  });

  return Object.entries(tagCount).sort((a, b) => {
    return b[1] - a[1];
  });
};
