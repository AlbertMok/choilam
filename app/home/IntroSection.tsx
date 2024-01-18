import { withToolTipLogoIcon } from "@/components/LogoIcons/withToolTipLogoIcon";
import { sns } from "@/config/sns";
import { cn } from "@/lib/utils";

export const IntroSection = ({ className }: { className?: string }) => (
  <section className={cn("pt-[72px]", className)}>
    <h1 className="mb-6 font-serif text-5xl font-bold">你好, 我是 Albert 👋</h1>
    <div className="leading-7 font-serif">
      <p>欢迎来到我的个人网站。</p>
      <p>我使用 Next.js, Typescript, TailwindCSS 开发网页应用。</p>
      <p>我对 web 开发和设计有着浓厚的兴趣，喜欢探索和使用新的工具。</p>
    </div>
    <div className="mt-4 flex space-x-4">
      {sns.map((item) => {
        const Icon = withToolTipLogoIcon(item);
        return (
          <Icon
            key={item.content}
            className="h-6 w-6 text-neutral-9 hover:text-neutral-11"
          />
        );
      })}
    </div>
  </section>
);
