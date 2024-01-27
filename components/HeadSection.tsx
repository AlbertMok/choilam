import { cn } from "@/lib/utils";

interface HeadBriefInfo {
  title: string;
  description: string;
  className?: string;
}

/**
 * head of page contains some brief info
 * @param param0 
 * @returns 
 */
export function HeadSection({
  title,
  description,
  className,
}: HeadBriefInfo) {
  return (
    <section
      className={cn(
        "flex flex-col items-center space-y-3.5 lg:py-4",
        className
      )}
    >
      <h1 className="font-serif text-5xl font-bold text-neutral-12">{title}</h1>
      <p className="break-keep text-base text-neutral-12">{description}</p>
    </section>
  );
}
