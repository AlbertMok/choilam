import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { env } from "@/lib/env.mjs";

// 定义一个 like 模式
export const likeScheme = z.object({
  likes: z.number(),
  currentUserLikes: z.number(),
});

/**
 * get the post's likes amount
 * @param slug article's slug
 * @returns
 */
export function usePostLikes(slug: string) {
  const { data } = useQuery({
    queryKey: ["likes", slug],
    queryFn: async () => {
      const response = await fetch(`${env.NEXT_PUBLIC_URL}/api/likes/${slug}`);

      return likeScheme.parse(await response.json());
    },
  });

  return { data };
}

/**
 * mutate the like's amount of the post
 * @returns
 */
export function useMutatePostLike() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug, count }: { slug: string; count: number }) => {
      return fetch(`${env.NEXT_PUBLIC_URL}/api/likes/${slug}`, {
        method: "POST",
        body: JSON.stringify({ count }),
      });
    },
    onSettled: async (data, error, { slug }) => {
      await queryClient.invalidateQueries({
        queryKey: ["likes", slug],
        exact: true,
      });
    },
  });
}
