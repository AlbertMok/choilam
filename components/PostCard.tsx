import { CalendarDaysIcon, EyeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { ViewsNumberContainer } from "@/components/ViewsNumber";
import { cn } from "@/lib/utils";

/**
 * 文章卡片
 * @param param0
 * @returns
 */
export function PostCard({
  title,
  summary,
  date,
  slug,
  className,
}: {
  title: string;
  summary: string;
  date: string;
  slug: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "group w-full max-w-none rounded-2xl border border-neutral-7 bg-neutral-2 p-6 shadow transition-shadow duration-300 ease-in-out hover:shadow-lg sm:max-w-lg",
        className
      )}
      href={`/posts/${slug}`}
    >
      <div className="text-xl font-medium text-neutral-12 group-hover:text-accent-11">{title}</div>
      <div className="mt-1 flex space-x-4 text-neutral-11">
        <div className="flex items-center space-x-1">
          <CalendarDaysIcon className="h-4 w-4" />
          <div>{date}</div>
        </div>
        <div className="flex items-center space-x-1">
          <EyeIcon className="h-4 w-4" />
          <div>
            {/* 浏览次数 */}
            <ViewsNumberContainer slug={slug} /> 次浏览
          </div>
        </div>
      </div>
      <div className="mt-3 text-lg text-neutral-11">{summary}</div>
    </Link>
  );
}
