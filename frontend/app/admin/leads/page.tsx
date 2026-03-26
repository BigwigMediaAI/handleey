"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  company?: string;
  message?: string;
  marked?: boolean;
  isVerified?: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

export default function AdminLead() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filtered, setFiltered] = useState<Lead[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const API = process.env.NEXT_PUBLIC_API_BASE;

  // 🔥 Fetch Leads
  useEffect(() => {
    fetch(`${API}/lead/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: Lead, b: Lead) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setLeads(sorted);
        setFiltered(sorted);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔥 Filter by date
  useEffect(() => {
    if (!selectedDate) {
      setFiltered(leads);
      setPage(1);
      return;
    }

    const f = leads.filter((l) =>
      new Date(l.createdAt).toISOString().startsWith(selectedDate),
    );

    setFiltered(f);
    setPage(1);
  }, [selectedDate, leads]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const current = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  // ✅ Mark
  const handleMark = async (id: string, marked: boolean) => {
    await fetch(`${API}/lead/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ marked }),
    });

    setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, marked } : l)));
  };

  // ❌ Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead?")) return;

    await fetch(`${API}/lead/${id}`, { method: "DELETE" });

    setLeads((prev) => prev.filter((l) => l._id !== id));
  };

  return (
    <div className="p-4 md:p-6 bg-[var(--bg-secondary)] min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Leads</h1>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-white"
        />
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-[var(--text-secondary)]">
          Loading leads...
        </p>
      )}

      {/* EMPTY */}
      {!loading && filtered.length === 0 && (
        <div className="text-center text-[var(--text-secondary)] mt-20">
          No Leads Found
        </div>
      )}

      {/* ================= MOBILE ================= */}
      <div className="md:hidden space-y-4">
        {current.map((l) => (
          <div
            key={l._id}
            className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{l.name}</h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {new Date(l.createdAt).toLocaleString()}
                </p>
              </div>

              <button onClick={() => handleDelete(l._id)}>
                <Trash2 size={18} className="text-red-500" />
              </button>
            </div>

            <div className="mt-2 text-sm space-y-1">
              <p>Email: {l.email || "N/A"}</p>
              <p>Phone: {l.phone}</p>
              <p>Company: {l.company || "N/A"}</p>
              <p>Message: {l.message || "-"}</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                checked={l.marked || false}
                onChange={(e) => handleMark(l._id, e.target.checked)}
              />
              <span className="text-sm">Mark</span>

              {l.isVerified && (
                <span className="text-xs text-green-600 ml-auto">Verified</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block bg-white border border-[var(--border)] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[var(--bg-secondary)] text-left">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {current.map((l) => (
              <tr
                key={l._id}
                className="border-t hover:bg-[var(--bg-secondary)]"
              >
                <td className="p-3 font-medium">{l.name}</td>
                <td>{l.email || "-"}</td>
                <td>{l.phone}</td>
                <td>{l.company || "-"}</td>
                <td className="max-w-[200px] truncate">{l.message || "-"}</td>
                <td>{new Date(l.createdAt).toLocaleDateString()}</td>
                <td className="flex items-center gap-3 p-3">
                  <input
                    type="checkbox"
                    checked={l.marked || false}
                    onChange={(e) => handleMark(l._id, e.target.checked)}
                  />

                  <button onClick={() => handleDelete(l._id)}>
                    <Trash2 className="text-red-500" size={18} />
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
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-1 bg-[var(--accent)] text-white rounded">
            {page}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
