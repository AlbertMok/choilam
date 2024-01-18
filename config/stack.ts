import type { WithToolTipLogoIconProps } from "@/components/LogoIcons/withToolTipLogoIcon";
import { ReactIcon } from "@/ui/icon/48/ReactIcon";
import { NextJsIcon } from "@/ui/icon/48/NextJsIcon";
import { TypescriptIcon } from "@/ui/icon/48/TypescriptIcon";
import { TailwindCSSIcon } from "@/ui/icon/48/TailwindCSSIcon";
import { StorybookIcon } from "@/ui/icon/48/StorybookIcon";
import { NodeJsIcon } from "@/ui/icon/48/NodeJsIcon";
import { VercelIcon } from "@/ui/icon/48/VercelIcon";
import { PlanetScaleIcon } from "@/ui/icon/48/PlanetScaleIcon";
import { MysqlIcon } from "@/ui/icon/48/MysqlIcon";
import { PrismaIcon } from "@/ui/icon/48/PrismaIcon";
import { FigmaIcon } from "@/ui/icon/48/FigmaIcon";
import { AEIcon } from "@/ui/icon/48/AEIcon";
import { PRIcon } from "@/ui/icon/48/PRIcon";
import { BlenderIcon } from "@/ui/icon/48/BlenderIcon";
import { WebstormIcon } from "@/ui/icon/48/WebstormIcon";
import { UEIcon } from "@/ui/icon/48/UEIcon";

// 前端技术栈展示
export const frontendStack: WithToolTipLogoIconProps[] = [
  {
    LogoIcon: ReactIcon,
    content: "React",
    href: "https://react.dev/",
  },
  {
    LogoIcon: NextJsIcon,
    content: "Next.js",
    href: "https://beta.nextjs.org/",
  },
  {
    LogoIcon: TypescriptIcon,
    content: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    LogoIcon: TailwindCSSIcon,
    content: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    LogoIcon: StorybookIcon,
    content: "Storybook",
    href: "https://storybook.js.org/docs/7.0/",
  },
];

// 后端技术栈展示
export const backendStack: WithToolTipLogoIconProps[] = [
  {
    LogoIcon: NodeJsIcon,
    content: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    LogoIcon: PrismaIcon,
    content: "Prisma",
    href: "https://www.prisma.io/",
  },
  {
    LogoIcon: PlanetScaleIcon,
    content: "PlanetScale",
    href: "https://planetscale.com/",
  },
  {
    LogoIcon: MysqlIcon,
    content: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    LogoIcon: VercelIcon,
    content: "Vercel",
    href: "https://vercel.com/",
  },
];

// 设计工具技术栈展示
export const designToolStack: WithToolTipLogoIconProps[] = [
  {
    LogoIcon: FigmaIcon,
    content: "Figma",
    href: "https://www.figma.com/",
  },
  {
    LogoIcon: AEIcon,
    content: "After Effects",
    href: "https://www.adobe.com/products/aftereffects.html",
  },
  {
    LogoIcon: PRIcon,
    content: "Premiere",
    href: "https://www.adobe.com/products/premiere.html",
  },
  {
    LogoIcon: BlenderIcon,
    content: "Blender",
    href: "https://www.blender.org/",
  },
];

export const devToolStack: WithToolTipLogoIconProps[] = [
  {
    LogoIcon: WebstormIcon,
    content: "Webstorm",
    href: "https://www.jetbrains.com/webstorm/",
  },
  {
    LogoIcon: UEIcon,
    content: "Unreal Engine",
    href: "https://www.unrealengine.com/",
  },
];
