"use client";

import { useMutatePostView } from "@/hooks/use-view";
import { useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";

export function UpdateView({ slug }: { slug: string }) {
  const updatePostView = useMutatePostView();
  useEffect(() => {
    updatePostView.mutate({ slug });
  }, [slug]);
  return <></>;
}

export function UpdateViewContainer({ slug }: { slug: string }) {
  const mounted = useMounted();
  if (!mounted) return null;

  return <UpdateView slug={slug} />;
}
