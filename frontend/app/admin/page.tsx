"use client";

import { JSX, useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    leads: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/lead/all`);

        if (!res.ok) throw new Error("Failed to fetch leads");

        const leads = await res.json();

        setCounts({
          leads: leads.length || 0,
        });
      } catch (err: any) {
        console.error("Dashboard Error:", err);
        setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cards = [{ title: "Leads", icon: <FaUsers />, count: counts.leads }];

  return (
    <section className="px-4 py-8 space-y-8">
      <h2 className="text-2xl font-bold text-center text-[var(--text-primary)]">
        Admin Dashboard
      </h2>

      {/* 🔥 Loading */}
      {loading && (
        <p className="text-center text-[var(--text-secondary)]">
          Loading dashboard...
        </p>
      )}

      {/* ❌ Error */}
      {error && <p className="text-center text-[var(--error)]">{error}</p>}

      {/* ✅ Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </div>
      )}
    </section>
  );
};

// ---------------- CARD ----------------
const StatCard = ({
  title,
  icon,
  count,
}: {
  title: string;
  icon?: JSX.Element;
  count: number | string;
}) => (
  <div
    className="
      rounded-2xl p-5
      bg-white
      border border-[var(--border)]
      shadow-sm
      hover:shadow-md
      hover:-translate-y-1
      transition
    "
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-[var(--text-secondary)]">{title}</span>
      {icon && <div className="text-xl text-[var(--accent)]">{icon}</div>}
    </div>

    <div className="text-3xl font-bold text-[var(--text-primary)]">{count}</div>
  </div>
);

export default Dashboard;
