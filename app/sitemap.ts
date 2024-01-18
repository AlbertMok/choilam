import { allPosts } from "contentlayer/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://zebeqo.dev/posts/${post.slug}`,
    lastModified: post.last_modified_at.split("T")[0],
  }));

  const routes = ["/home", "/posts", "/projects"].map((route) => ({
    url: `https://zebeqo.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
