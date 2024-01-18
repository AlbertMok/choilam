"use client";

import { usePostLikes } from "@/hooks/use-like";

export function LikesNumber({ slug }: { slug: string }) {
  const { data } = usePostLikes(slug);

  return <>{data?.likes}</>;
}
