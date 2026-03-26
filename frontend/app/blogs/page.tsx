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

  // 🔍 Search
  const fuse = new Fuse(blogs, {
    keys: ["title", "excerpt"],
    threshold: 0.3,
  });

  const filteredBlogs =
    search.trim() === "" ? blogs : fuse.search(search).map((r) => r.item);

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="bg-[var(--bg)] pt-32 pb-14 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          Our Blog
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Insights, tips & strategies for business growth 🚀
        </p>

        {/* SEARCH */}
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-[var(--bg-secondary)] py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* LEFT: BLOG LIST */}
          <div className="md:col-span-2 space-y-6">
            {loading ? (
              <p className="text-[var(--text-secondary)]">Loading blogs...</p>
            ) : filteredBlogs.length === 0 ? (
              // 🔥 EMPTY STATE
              <div className="text-center py-16">
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
                  className="block border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg)] hover:shadow-md transition"
                >
                  {/* IMAGE */}
                  <div className="h-48 bg-[var(--bg-secondary)] overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] mt-2 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] mt-3">
                      {new Date(blog.datePublished).toDateString()}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="sticky top-24 h-fit">
            <ContactForm />
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
