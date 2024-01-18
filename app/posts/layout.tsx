import { HeadSection } from "@/components/HeadSection";
import { CategorySection } from "@/app/posts/CategorySection";
import { HottestPostSection } from "@/app/posts/HottestPostSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadSection
        title="文章"
        description="主要写一些最近我在思考什么 ✍️️"
        className="animate-page-in-1"
      />
      <div className="mt-10 flex flex-col space-y-12 lg:flex-row lg:justify-between lg:space-y-0">
        {children}
        <div className="max-w-lg lg:max-w-xs">
          <CategorySection className="animate-page-in-2" />
          {/* @ts-expect-error async Server Component */}
          <HottestPostSection className="animate-page-in-2 mt-12" />
        </div>
      </div>
    </>
  );
}
