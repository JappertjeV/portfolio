import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, Tag, ArrowRight, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on automation, software development, and building things.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <PenLine size={22} className="text-zinc-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-50">Blog</h1>
          </div>
          <p className="text-zinc-400">
            Thoughts on automation, APIs, and building things that work.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-zinc-800 rounded-xl">
            <PenLine size={40} className="mx-auto mb-4 text-zinc-700" />
            <p className="text-zinc-400 font-medium mb-2">No posts yet</p>
            <p className="text-zinc-600 text-sm">
              Add Markdown files to{" "}
              <code className="text-zinc-400 bg-zinc-800 px-1 py-0.5 rounded">content/blog/</code>{" "}
              to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-zinc-100 text-lg mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700/50 text-zinc-400 text-xs"
                          >
                            <Tag size={9} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-zinc-600 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="flex-shrink-0 text-zinc-700 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all mt-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
