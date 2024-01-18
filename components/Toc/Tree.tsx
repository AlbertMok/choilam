// based on https://github.com/shadcn/ui/blob/main/apps/www/components/toc.tsx

import { cn } from "@/lib/utils";
import * as React from "react";
import type { TableOfContents } from "@/lib/toc";

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem: string;
}

export function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block text-sm no-underline",
                item.url === `#${activeItem}`
                  ? "font-medium text-accent-11"
                  : "text-neutral-11 hover:text-neutral-12"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
