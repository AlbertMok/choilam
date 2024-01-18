import { cn } from "@/lib/utils";

export function HeadSection({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
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
