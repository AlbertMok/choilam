import type { Meta, StoryObj } from "@storybook/react";
import { NextJsIcon } from "@/ui/icon/48/NextJsIcon";
import type { WithToolTipLogoIconProps } from "@/components/LogoIcons/withToolTipLogoIcon";
import { withToolTipLogoIcon } from "@/components/LogoIcons/withToolTipLogoIcon";
import React from "react";

const meta = {
  title: "LogoIcons/withToolTipLogoIcon",
} satisfies Meta;

export default meta;

export const WithToolTip_: StoryObj<WithToolTipLogoIconProps> = {
  args: {
    LogoIcon: NextJsIcon,
    content: "Next.js",
    href: "https://beta.nextjs.org/",
  },
  render: (args) => {
    return <>{React.createElement(withToolTipLogoIcon(args))}</>;
  },
};
