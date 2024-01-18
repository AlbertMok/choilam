"use client";

import * as Separator from "@radix-ui/react-separator";
import { memo, Suspense } from "react";
import { LikeHeart } from "@/ui/components/LikeHeart";
import { LikeButton } from "@/components/LikeHeart/LikeButton";
import { LoadingDots } from "@/components/LoadingDots";
import { LikesNumber } from "@/components/LikesNumber";
import * as React from "react";
import { useMounted } from "@/hooks/use-mounted";

export const TocFooter = memo(({ slug }: { slug: string }) => {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <>
      <Separator.Root className="relative my-4 h-px bg-neutral-6" decorative>
        <div className="absolute -left-6 -top-[19px] scale-75">
          <Suspense fallback={<LikeHeart step={0} />}>
            <LikeButton slug={slug} />
          </Suspense>
        </div>
      </Separator.Root>
      <span className="ml-12 cursor-default text-lg font-bold text-neutral-11">
        <Suspense fallback={<LoadingDots />}>
          <LikesNumber slug={slug} />
        </Suspense>
      </span>
    </>
  );
});
TocFooter.displayName = "TocFooter";
