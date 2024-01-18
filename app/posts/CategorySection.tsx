import { BadgeLink } from "@/ui/components/Badge";
import { getTagCountSorted } from "@/lib/posts";

export function CategorySection({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="font-serif text-3xl font-bold text-primary-11">分类</div>
      <div className="mt-6 flex h-fit flex-wrap items-start gap-2">
        {getTagCountSorted()
          .slice(0, 6)
          .map((tag) => (
            <BadgeLink key={tag[0]} href={`/posts/tags/${tag[0]}`} color="accent">
              {tag[0]}
            </BadgeLink>
          ))}
      </div>
    </section>
  );
}
