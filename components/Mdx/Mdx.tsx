import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "@/components/Mdx/MdxImage";
import Link from "@/components/Mdx/MdxLink";
import TweetClient from "@/components/Mdx/TweetClient";

const components = {
  Image,
  a: Link,
  Tweet: TweetClient,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-olive min-w-0 font-serif md:prose-lg lg:max-w-3xl">
      <Component components={components} />
    </article>
  );
}
