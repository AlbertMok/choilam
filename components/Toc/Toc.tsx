// based on https://github.com/shadcn/ui/blob/main/apps/www/components/toc.tsx
"use client";

import * as React from "react";
import { useMounted } from "@/hooks/use-mounted";

import type { TableOfContents } from "@/lib/toc";
import { TocFooter } from "@/components/Toc/TocFooter";
import { useActiveItem } from "@/hooks/use-active-item";
import { Tree } from "@/components/Toc/Tree";

interface TocProps {
  toc: TableOfContents;
}

export function Toc({ toc, slug }: TocProps & { slug: string }) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1] ?? "")
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc.items || !mounted) {
    return <TocFooter slug={slug} />;
  }

  return (
    <>
      <div className="space-y-1">
        <p className="font-medium tracking-widest">本页大纲</p>
        <Tree tree={toc} activeItem={activeHeading} />
      </div>
      <TocFooter slug={slug} />
    </>
  );
}
