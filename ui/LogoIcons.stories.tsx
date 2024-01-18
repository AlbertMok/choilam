import type { Meta, StoryObj } from "@storybook/react";
import { ReactIcon } from "@/ui/icon/48/ReactIcon";
import { NextJsIcon } from "@/ui/icon/48/NextJsIcon";
import { TypescriptIcon } from "@/ui/icon/48/TypescriptIcon";
import { TailwindCSSIcon } from "@/ui/icon/48/TailwindCSSIcon";
import { StorybookIcon } from "@/ui/icon/48/StorybookIcon";
import { NodeJsIcon } from "@/ui/icon/48/NodeJsIcon";
import { PlanetScaleIcon } from "@/ui/icon/48/PlanetScaleIcon";
import { PrismaIcon } from "@/ui/icon/48/PrismaIcon";
import { MysqlIcon } from "@/ui/icon/48/MysqlIcon";
import { VercelIcon } from "@/ui/icon/48/VercelIcon";
import { FigmaIcon } from "@/ui/icon/48/FigmaIcon";
import { AEIcon } from "@/ui/icon/48/AEIcon";
import { PRIcon } from "@/ui/icon/48/PRIcon";
import { BlenderIcon } from "@/ui/icon/48/BlenderIcon";
import { WebstormIcon } from "@/ui/icon/48/WebstormIcon";
import { UEIcon } from "@/ui/icon/48/UEIcon";

const meta = {
  title: "LogoIcons",
} satisfies Meta;

export default meta;

export const LogoIcons_: StoryObj = {
  render: () => {
    return (
      <div className="grid grid-cols-5 gap-4">
        <ReactIcon />
        <NextJsIcon />
        <TypescriptIcon />
        <TailwindCSSIcon />
        <StorybookIcon />
        <NodeJsIcon />
        <PlanetScaleIcon />
        <PrismaIcon />
        <MysqlIcon />
        <VercelIcon />
        <FigmaIcon />
        <AEIcon />
        <PRIcon />
        <BlenderIcon />
        <WebstormIcon />
        <UEIcon />
      </div>
    );
  },
};
