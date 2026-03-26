"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ImageIcon, X } from "lucide-react";
import "quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string;
  coverImage?: string;
  coverImageAlt?: string;
}

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImageAlt: "",
    coverImage: null as File | null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title,
        slug: existingBlog.slug,
        excerpt: existingBlog.excerpt,
        content: existingBlog.content,
        author: existingBlog.author,
        tags: existingBlog.tags || "",
        coverImageAlt: existingBlog.coverImageAlt || "",
        coverImage: null,
      });
    }
  }, [existingBlog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title" && !existingBlog) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      setFormData((p) => ({ ...p, title: value, slug: autoSlug }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setFormData((p) => ({ ...p, coverImage: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const sanitizeHtml = (html: string) => {
    return html
      .replace(/&nbsp;/g, " ")
      .replace(/<wbr\s*\/?>/gi, "")
      .replace(/\s+/g, " ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const blogData = new FormData();
      const cleanedContent = sanitizeHtml(formData.content);

      Object.entries({
        ...formData,
        content: cleanedContent,
      }).forEach(([key, value]) => {
        if (value) blogData.append(key, value as any);
      });

      const res = await fetch(
        existingBlog
          ? `${process.env.NEXT_PUBLIC_API_BASE}/blog/${existingBlog.slug}`
          : `${process.env.NEXT_PUBLIC_API_BASE}/blog/add`,
        {
          method: existingBlog ? "PUT" : "POST",
          body: blogData,
        },
      );

      if (!res.ok) throw new Error();

      alert(existingBlog ? "Blog updated" : "Blog added");
      onSuccess();
      onClose();
    } catch {
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl flex flex-col max-h-[95vh] overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border)]">
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              {existingBlog ? "Edit Blog" : "Create Blog"}
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Manage your blog content
            </p>
          </div>

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* FORM */}
        <form
          id="blog-form"
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 py-5 space-y-6"
        >
          {/* BASIC */}
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="input"
            required
          />

          <input
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
            className="input"
            required
          />

          <textarea
            name="excerpt"
            placeholder="Excerpt"
            rows={3}
            value={formData.excerpt}
            onChange={handleChange}
            className="input"
            required
          />

          {/* EDITOR */}
          <div className="border border-[var(--border)] h-[230px] overflow-y-auto rounded-xl overflow-hidden">
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={(v) => setFormData((p) => ({ ...p, content: v }))}
              modules={quillModules}
              className="quill-fixed"
            />
          </div>

          {/* SEO */}
          <input
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            className="input"
            required
          />

          <input
            name="tags"
            placeholder="Tags"
            value={formData.tags}
            onChange={handleChange}
            className="input"
          />
          <input
            name="coverImageAlt"
            placeholder="Cover Image Alt Text (SEO important)"
            value={formData.coverImageAlt}
            onChange={handleChange}
            className="input"
            required
          />

          {/* IMAGE */}
          <label className="border-2 border-dashed border-[var(--border)] rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer">
            {preview ? (
              <img src={preview} className="h-full object-cover" />
            ) : (
              <>
                <ImageIcon />
                <p className="text-sm text-[var(--text-secondary)]">
                  Upload Image
                </p>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </form>

        {/* FOOTER */}
        <div className="border-t border-[var(--border)] px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-[var(--border)]"
          >
            Cancel
          </button>

          <button
            type="submit"
            form="blog-form"
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
          >
            {submitting ? "Saving..." : existingBlog ? "Update" : "Publish"}
          </button>
        </div>
      </div>

      {/* 🔥 Reusable Input Style */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid var(--border);
          border-radius: 10px;
          outline: none;
        }
        .input:focus {
          box-shadow: 0 0 0 2px var(--accent);
        }
      `}</style>
    </div>
  );
};

export default AddBlog;
