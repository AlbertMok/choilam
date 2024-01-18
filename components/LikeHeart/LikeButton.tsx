"use client";

import { memo, useState } from "react";
import { likeScheme, useMutatePostLike, usePostLikes } from "@/hooks/use-like";
import { useDebouncedCallback } from "use-debounce";
import { useQueryClient } from "@tanstack/react-query";
import { LikeHeart } from "@/ui/components/LikeHeart";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/ui/components/Tooltip";

export const LikeButton = memo(({ slug }: { slug: string }) => {
  const { data } = usePostLikes(slug);
  const mutateLike = useMutatePostLike(); // change the amount of the like
  const [batchedLikes, setBatchedLikes] = useState(0);

  const queryClient = useQueryClient();

  const debounced = useDebouncedCallback(() => {
    mutateLike.mutate({ slug, count: batchedLikes });
    setBatchedLikes(0);
  }, 1000);

  function handleClick() {
    if (!data || data.currentUserLikes >= 3) {
      return;
    }

    const previousLikes = likeScheme.parse(queryClient.getQueryData(["likes", slug]));
    const newLikes = {
      likes: previousLikes.likes + 1,
      currentUserLikes: previousLikes.currentUserLikes + 1,
    };
    queryClient.setQueryData(["likes", slug], likeScheme.parse(newLikes));

    setBatchedLikes((count) => {
      if (count > 3) return 3;
      return count + 1;
    });

    debounced();
  }

  return (
    <>
      {data && (
        <div className="relative">
          <LikeHeart step={data.currentUserLikes} />
          {data.currentUserLikes < 3 ? (
            <button onClick={handleClick} className={cn("absolute inset-0 m-auto h-10 w-10")} />
          ) : (
            <Tooltip content="最多点赞 3 次" delayDuration={100}>
              <button onClick={handleClick} className={cn("absolute inset-0 m-auto h-10 w-10")} />
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
});
LikeButton.displayName = "LikeButton";
