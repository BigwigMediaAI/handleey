"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import Link from "next/link";
import Fuse from "fuse.js";
import ContactForm from "../components/ContactForm";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  datePublished: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`,
      );
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fuse = new Fuse(blogs, {
    keys: ["title", "excerpt"],
    threshold: 0.3,
  });

  const filteredBlogs =
    search.trim() === "" ? blogs : fuse.search(search).map((r) => r.item);

  return (
    <div>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Insights to Grow Your Reputation 🚀
          </h1>

          <p className="mt-4 text-[var(--text-secondary)]">
            Learn how to manage reviews, build trust, and grow your business.
          </p>

          {/* 🔍 SEARCH (UPGRADED) */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-sm"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* 🔥 MAIN */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">
            {loading ? (
              <p className="text-[var(--text-secondary)]">Loading blogs...</p>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[var(--accent)]/10 text-2xl">
                  📝
                </div>

                <h2 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                  {search ? "No results found" : "No blogs yet"}
                </h2>

                <p className="text-[var(--text-secondary)] mt-2 max-w-md mx-auto">
                  {search
                    ? "Try searching with different keywords."
                    : "We’re working on amazing content. Stay tuned!"}
                </p>
              </div>
            ) : (
              filteredBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="group block"
                >
                  <div className="relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                    {/* IMAGE */}
                    <div className="h-56 overflow-hidden">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 relative">
                      <p className="text-xs text-[var(--accent)] font-medium mb-2">
                        BLOG ARTICLE
                      </p>

                      <h3 className="text-xl font-semibold text-[var(--text-primary)] leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-[var(--text-secondary)] mt-3 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      <div className="mt-4 flex justify-between items-center text-xs text-[var(--text-secondary)]">
                        <span>
                          {new Date(blog.datePublished).toDateString()}
                        </span>

                        <span className="text-[var(--accent)] font-medium">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* RIGHT */}
          <div className="sticky top-28 h-fit">
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Get a Free Demo 🚀
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
