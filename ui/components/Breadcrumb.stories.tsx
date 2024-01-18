import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/ui/components/Breadcrumb";
import Link from "next/link";

const meta = {
  title: "Breadcrumb",
} satisfies Meta;

export default meta;

export const Breadcrumb_: StoryObj<{
  config: {
    name: string;
    href: string;
  }[];
}> = {
  args: {
    config: [
      {
        name: "主页",
        href: "/",
      },
      {
        name: "文章",
        href: "/posts",
      },
      {
        name: "zebeqo.dev 项目回顾",
        href: "/posts/zebeqo-dev",
      },
    ],
  },
  render: ({ config }) => {
    return (
      <Breadcrumb>
        {config.map((item, index) => {
          if (index === config.length - 1) {
            return (
              <BreadcrumbLink key={item.name} as="span" isCurrent>
                {item.name}
              </BreadcrumbLink>
            );
          } else {
            return (
              <>
                <BreadcrumbLink key={item.name} as={Link} href={item.href}>
                  {item.name}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            );
          }
        })}
      </Breadcrumb>
    );
  },
};
