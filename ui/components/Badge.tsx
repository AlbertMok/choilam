import { classed } from "@/classed.config";
import Link from "next/link";

export const Badge = classed("span", {
  base: "inline-flex select-none items-center justify-center font-medium whitespace-nowrap text-xs px-3 rounded-md py-1.5",
  variants: {
    color: {
      primary: "bg-primary-4 text-primary-11",
      accent: "bg-accent-4 text-accent-11",
      neutral: "bg-neutral-4 text-neutral-11",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

export const BadgeLink = classed(
  Link,
  Badge,
  "hover:text-white hover:bg-accent-9"
);
