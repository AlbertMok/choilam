import { withToolTipLogoIcon } from "@/components/LogoIcons/withToolTipLogoIcon";
import { backendStack, designToolStack, devToolStack, frontendStack } from "@/config/stack";
import { cn } from "@/lib/utils";

const Skill = ({ name, description, children }: { name: string; description: string; children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col space-y-4 sm:w-[380px]">
      <h2 className="font-serif text-4xl font-bold text-primary-11">{name}</h2>
      <p className="mt-4 text-neutral-11">{description}</p>
      {children}
    </div>
  );
};

const SkillGroup = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center space-x-4">
    <p className="hidden font-serif text-xl min-[420px]:block">{label}：</p>
    <div className="flex space-x-4">{children}</div>
  </div>
);

const TechSkill = () => (
  <Skill name={"技术栈"} description={"我习惯于使用这些技术开发 web 应用。"}>
    <SkillGroup label={"前端"}>
      {frontendStack.map((item) => {
        const Icon = withToolTipLogoIcon(item);
        return <Icon key={item.content} />;
      })}
    </SkillGroup>
    <SkillGroup label={"后端"}>
      {backendStack.map((item) => {
        const Icon = withToolTipLogoIcon(item);
        return <Icon key={item.content} />;
      })}
    </SkillGroup>
  </Skill>
);

const ToolSkill = () => (
  <Skill name={"工具集"} description={"我能用这些工具进行各种各样的创作。"}>
    <SkillGroup label={"设计"}>
      {designToolStack.map((item) => {
        const Icon = withToolTipLogoIcon(item);
        return <Icon key={item.content} />;
      })}
    </SkillGroup>
    <SkillGroup label={"开发"}>
      {devToolStack.map((item) => {
        const Icon = withToolTipLogoIcon(item);
        return <Icon key={item.content} />;
      })}
    </SkillGroup>
  </Skill>
);

export const SkillSection = ({ className }: { className?: string }) => (
  <section className={cn("flex flex-col space-y-12", className)}>
    <TechSkill />
    <ToolSkill />
  </section>
);
