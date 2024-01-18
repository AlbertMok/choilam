import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx/Mdx";
import { notFound } from "next/navigation";
import { getTableOfContents } from "@/lib/toc";
import { Toc } from "@/components/Toc/Toc";
import { UpdateViewContainer } from "@/components/UpdateView";
import Link from "next/link";
import { BadgeLink } from "@/ui/components/Badge";
import { formatDay } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/ui/components/Breadcrumb";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return {
    title: post?.title ?? "",
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const toc = await getTableOfContents(post.body.raw);

  return (
    <>
      <Breadcrumb className="animate-page-in-1">
        <BreadcrumbLink as={Link} href="/">
          主页
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbLink as={Link} href="/posts">
          文章
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbLink as="span" isCurrent>
          {post.title}
        </BreadcrumbLink>
      </Breadcrumb>
      <div className="prose prose-olive md:prose-lg prose-h1:font-bold">
        <h1>{post.title}</h1>
        <div className="not-prose flex h-fit flex-wrap items-start gap-2">
          {post.tags.map((tag) => (
            <BadgeLink key={tag} href={`/posts/tags/${tag}`} color="accent">
              {tag}
            </BadgeLink>
          ))}
        </div>
        {post.last_modified_at && (
          <blockquote className="text-neutral-11">
            最后编辑于 {formatDay(post.last_modified_at)}
          </blockquote>
        )}
      </div>
      <UpdateViewContainer slug={params.slug} />
      <div className="relative flex justify-center xl:justify-between">
        <Mdx code={post.body.code} />
        <div className="mt-10 hidden xl:block">
          <div className="sticky top-32 w-56">
            <Toc toc={toc} slug={params.slug} />
          </div>
        </div>
      </div>
    </>
  );
}
