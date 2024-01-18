import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { classed } from "@/classed.config";

const Breadcrumb = classed("nav", "relative break-words flex items-center");

const BreadcrumbLink = classed("a", {
  base: "text-sm font-medium underline-offset-4 inline-flex items-center",
  variants: {
    isCurrent: {
      true: "text-neutral-11",
      false: "hover:underline",
    },
  },
  defaultVariants: {
    isCurrent: false,
  },
});

const BreadcrumbSeparator = classed(
  ChevronRightIcon,
  "mx-2 h-4 w-4 text-neutral-11"
);

export { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator };
