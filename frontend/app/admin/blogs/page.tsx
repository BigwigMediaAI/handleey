"use client";

import { useEffect, useState } from "react";
import { Edit, Trash2, Code, ImageIcon } from "lucide-react";
import Fuse from "fuse.js";
import { formatHtml } from "../../utils/formatHtml";
import AddBlog from "@/app/components/AddBlog";

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  datePublished: string;
  slug: string;
  coverImage?: string;
}

export default function AdminBlogsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`,
      );
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fuse = new Fuse(blogs, {
    keys: ["title", "author"],
    threshold: 0.3,
    ignoreLocation: true,
  });

  const filteredBlogs =
    searchQuery.trim() === ""
      ? blogs
      : fuse.search(searchQuery).map((result) => result.item);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="h-screen bg-[var(--bg)] text-[var(--text-primary)] flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-[var(--bg)] border-b border-[var(--border)] p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Blogs</h1>

        <div className="flex gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded px-3 py-2 text-sm w-full sm:w-64 focus:ring-2 focus:ring-[var(--accent)] outline-none"
          />

          <button
            onClick={() => {
              setEditingBlog(null);
              setShowAddModal(true);
            }}
            className="bg-[var(--accent)] text-white px-4 py-2 rounded hover:bg-[var(--accent-hover)] transition"
          >
            Add Blog
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {loading ? (
          <p className="text-[var(--text-secondary)]">Loading...</p>
        ) : filteredBlogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] mb-4">
              <ImageIcon className="text-[var(--text-secondary)]" size={28} />
            </div>

            {/* TITLE */}
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              No blogs found
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-sm">
              You haven’t created any blog posts yet. Start by adding your first
              blog.
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() => {
                setEditingBlog(null);
                setShowAddModal(true);
              }}
              className="mt-5 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition"
            >
              + Create Blog
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto border border-[var(--border)] rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-[var(--bg-secondary)]">
                  <tr>
                    <th className="px-4 py-3 border-b border-[var(--border)] text-left">
                      Title
                    </th>
                    <th className="px-4 py-3 border-b border-[var(--border)] text-left">
                      Content
                    </th>
                    <th className="px-4 py-3 border-b border-[var(--border)] text-left">
                      Author
                    </th>
                    <th className="px-4 py-3 border-b border-[var(--border)] text-left">
                      Created
                    </th>
                    <th className="px-4 py-3 border-b border-[var(--border)] text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedBlogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="hover:bg-[var(--bg-secondary)] transition"
                    >
                      <td className="px-4 py-3 font-medium">{blog.title}</td>

                      <td className="px-4 py-3 max-w-[250px]">
                        <div
                          className="line-clamp-3 text-[var(--text-secondary)]"
                          dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                      </td>

                      <td className="px-4 py-3 text-[var(--text-secondary)]">
                        {blog.author}
                      </td>

                      <td className="px-4 py-3 text-[var(--text-secondary)]">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-3 flex gap-3">
                        <button
                          onClick={() => {
                            setEditingBlog(blog);
                            setShowAddModal(true);
                          }}
                          className="text-[var(--accent)] hover:opacity-80"
                        >
                          <Edit size={16} />
                        </button>

                        <button
                          onClick={() => {
                            setEditingSlug(blog.slug);
                            setShowImageModal(true);
                          }}
                          className="text-purple-500"
                        >
                          <ImageIcon size={16} />
                        </button>

                        <button
                          onClick={async () => {
                            setEditingSlug(blog.slug);
                            setHtmlContent(await formatHtml(blog.content));
                            setShowHtmlEditor(true);
                          }}
                          className="text-yellow-500"
                        >
                          <Code size={16} />
                        </button>

                        <button
                          onClick={async () => {
                            if (!confirm("Delete blog?")) return;
                            await fetch(
                              `${process.env.NEXT_PUBLIC_API_BASE}/blog/${blog.slug}`,
                              { method: "DELETE" },
                            );
                            fetchBlogs();
                          }}
                          className="text-[var(--error)]"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-end mt-6 gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 border border-[var(--border)] rounded"
                >
                  Prev
                </button>

                <span className="px-3 py-1 bg-[var(--accent)] text-white rounded">
                  {currentPage}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1 border border-[var(--border)] rounded"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* ADD BLOG MODAL */}
      {showAddModal && (
        <AddBlog
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchBlogs}
          existingBlog={editingBlog}
        />
      )}

      {/* HTML MODAL */}
      {/* HTML MODAL */}
      {showHtmlEditor && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-[var(--bg)] text-[var(--text-primary)] border border-[var(--border)] rounded-xl p-6 w-full max-w-3xl shadow-lg">
            <h2 className="font-bold mb-4">Edit HTML</h2>

            <textarea
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="w-full h-64 p-3 border border-[var(--border)] bg-[var(--bg-secondary)] rounded font-mono"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowHtmlEditor(false)}
                className="px-4 py-2 border border-[var(--border)] rounded"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  if (!editingSlug) return;

                  try {
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_API_BASE}/blog/${editingSlug}`, // ✅ FIXED endpoint
                      {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ content: htmlContent }),
                      },
                    );

                    if (!res.ok) throw new Error();

                    alert("Blog updated successfully");
                    setShowHtmlEditor(false);
                    fetchBlogs();
                  } catch (err) {
                    console.error(err);
                    alert("Failed to update blog");
                  }
                }}
                className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-hover)]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE MODAL */}

      {showImageModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-[var(--bg)] border border-[var(--border)] p-6 rounded-2xl w-full max-w-md shadow-xl">
            {/* HEADER */}
            <h2 className="text-lg font-semibold mb-4">Update Cover Image</h2>

            {/* UPLOAD AREA */}
            <label className="border-2 border-dashed border-[var(--border)] rounded-xl h-44 flex flex-col items-center justify-center cursor-pointer hover:bg-[var(--bg-secondary)] transition relative overflow-hidden">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <ImageIcon
                    size={28}
                    className="text-[var(--text-secondary)] mb-2"
                  />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Click or drag image to upload
                  </p>
                  <span className="text-xs text-[var(--text-secondary)] mt-1">
                    PNG, JPG up to 5MB
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files?.length
                    ? setSelectedImage(e.target.files[0])
                    : null
                }
                className="hidden"
              />
            </label>

            {/* FILE NAME */}
            {selectedImage && (
              <p className="text-xs text-[var(--text-secondary)] mt-2 truncate">
                {selectedImage.name}
              </p>
            )}

            {/* ACTIONS */}
            <div className="flex justify-end gap-2 mt-5">
              <button
                onClick={() => {
                  setShowImageModal(false);
                  setSelectedImage(null);
                }}
                className="px-4 py-2 rounded-lg border border-[var(--border)] hover:bg-[var(--bg-secondary)]"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  if (!selectedImage || !editingSlug) return;

                  const formData = new FormData();
                  formData.append("coverImage", selectedImage);

                  try {
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_API_BASE}/blog/${editingSlug}/image`,
                      {
                        method: "PATCH",
                        body: formData,
                      },
                    );

                    if (!res.ok) throw new Error();

                    alert("Image updated successfully");
                    setShowImageModal(false);
                    setSelectedImage(null);
                    fetchBlogs();
                  } catch (err) {
                    console.error(err);
                    alert("Failed to update image");
                  }
                }}
                disabled={!selectedImage}
                className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] disabled:opacity-50"
              >
                Update Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
