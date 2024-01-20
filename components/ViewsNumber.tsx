"use client";

import { usePostViews } from "@/hooks/use-view";
import { useMounted } from "@/hooks/use-mounted";
import { LoadingDots } from "@/components/LoadingDots";
import { Suspense } from "react";

const ViewsNumber = ({ slug }: { slug: string }) => {
  // get the views data of the post by post slug
  const { data } = usePostViews(slug);
  return <>{data?.views}</>;
};

export const ViewsNumberContainer = ({ slug }: { slug: string }) => {
  const mounted = useMounted();
  if (!mounted) return <LoadingDots />;

  return (
    <Suspense fallback={<LoadingDots />}>
      <ViewsNumber slug={slug} />
    </Suspense>
  );
};
