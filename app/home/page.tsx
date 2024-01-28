import { FeatureSection } from "@/app/home/FeatureSection";
import { IntroSection } from "@/app/home/IntroSection";
import { SkillSection } from "@/app/home/SkillSection";
import { NotionAPI } from "notion-client";

export function generateMetadata() {
  return {
    title: "主页",
  };
}

export default function Page() {
  return (
    <div className="flex flex-col space-y-12">
      <IntroSection className="animate-page-in-1" />
      <div className="flex flex-col space-y-12 xl:flex-row xl:justify-between xl:space-y-0">
        <FeatureSection className="animate-page-in-2" />
        <SkillSection className="animate-page-in-2" />
      </div>
    </div>
  );
}
