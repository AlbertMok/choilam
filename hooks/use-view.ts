import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { env } from "@/lib/env.mjs";

const viewsScheme = z.object({
  views: z.number(),
});

/**
 * get the post views count
 * @param slug 
 * @returns 
 */
export function usePostViews(slug: string) {
  const { data } = useQuery({
    queryKey: ["views", slug],
    queryFn: async () => {
      const response = await fetch(`${env.NEXT_PUBLIC_URL}/api/views/${slug}`);

      return viewsScheme.parse(await response.json());
    },
  });

  return { data };
}

/**
 * mutate the views count of the post
 * @returns 
 */
export function useMutatePostView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug }: { slug: string }) => {
      return fetch(`${env.NEXT_PUBLIC_URL}/api/views/${slug}`, {
        method: "POST",
      });
    },

    onMutate: async ({ slug }) => {
      await queryClient.cancelQueries(["views", slug]);
      const previousViews = viewsScheme.optional().parse(queryClient.getQueryData(["views", slug]));

      if (!previousViews) {
        return;
      }

      const newViews = {
        views: previousViews.views + 1,
      };
      queryClient.setQueryData(["views", slug], viewsScheme.parse(newViews));
      return { previousViews, newViews };
    },

    onError: (error, { slug }, context) => {
      if (error instanceof Error) {
        console.log(error.message);
      }

      context && queryClient.setQueryData(["views", slug], context.previousViews);
    },

    onSettled: async (data, error, { slug }) => {
      await queryClient.invalidateQueries({
        queryKey: ["views", slug],
        exact: true,
      });
    },
  });
}
