import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorBox } from "@/components/AuthorBox";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { postBodies } from "@/content/bodies";
import {
  adjacentPosts,
  formatDate,
  getPost,
  orderedPosts,
} from "@/content/blog";
import { slugify } from "@/lib/slugify";
import { blogPostingJson, breadcrumbJson, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return orderedPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    type: "article",
    publishedTime: post.date,
    authors: [{ name: post.author }],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const Body = postBodies[post.slug];
  if (!Body) notFound();
  const { previous: prev, next } = adjacentPosts(post.slug);

  return (
    <>
      <article>
        <header className="border-b border-line bg-ink text-white">
          <div className="page-shell py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog/" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/80">{post.kicker}</li>
              </ol>
            </nav>
            <p className="kicker !text-tide-soft">{post.kicker}</p>
            <h1 className="display mt-3 max-w-4xl text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70">{post.excerpt}</p>
            <p className="mt-6 text-sm text-white/50">
              {formatDate(post.date)} · {post.minutes} min read · {post.author}
            </p>
          </div>
        </header>
        <div className="page-shell grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div>
            <AuthorBox name={post.author} placement="top" />
            <Body />
            <AuthorBox name={post.author} placement="bottom" />
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="kicker">On this page</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {post.headings.map((heading) => (
                <li key={heading}>
                  <a href={`#${slugify(heading)}`} className="text-ink-muted hover:text-tide">
                    {heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <nav
          className="page-shell flex flex-col gap-4 border-t border-line py-10 sm:flex-row sm:justify-between"
          aria-label="Adjacent posts"
        >
          {prev ? (
            <Link href={`/blog/${prev.slug}/`} className="max-w-sm hover:text-tide">
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
                Previous
              </span>
              <span className="mt-1 block font-semibold">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}/`}
              className="max-w-sm text-left sm:text-right hover:text-tide"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
                Next
              </span>
              <span className="mt-1 block font-semibold">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </article>
      <CtaBand />
      <JsonLd
        data={blogPostingJson({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}/`,
          datePublished: post.date,
          authorName: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
    </>
  );
}
