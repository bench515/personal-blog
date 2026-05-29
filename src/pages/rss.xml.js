import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  const items = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
      categories: post.data.tags,
    }));

  return rss({
    title: "My Personal Blog",
    description: "A personal blog about technology, life, and ideas.",
    site: context.site,
    items,
    customData: `<language>zh-CN</language>`,
  });
}
