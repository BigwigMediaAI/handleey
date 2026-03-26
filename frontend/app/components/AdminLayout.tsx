"use client";

import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Gauge, Notebook, Users } from "lucide-react";
import Cookies from "js-cookie";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Gauge size={18} />, label: "Dashboard", to: "/admin" },
    { icon: <Users size={18} />, label: "Leads", to: "/admin/leads" },
    { icon: <Notebook size={18} />, label: "Blogs", to: "/admin/blogs" },
  ];

  const handleLogout = () => {
    Cookies.remove("adminAuth");
    router.push("/login");
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      {/* ===== MOBILE TOP NAV ===== */}
      <div className="lg:hidden bg-white flex items-center justify-between px-5 py-4 border-b border-[var(--border)] shadow-sm">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="bg-[var(--accent)] text-white px-2 py-1 rounded-md">
            H
          </span>
          Admin
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-xl text-[var(--text-primary)]"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/5 h-full bg-white z-50 transform transition-transform duration-300 
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <span className="font-bold text-lg">Admin Panel</span>

          <button onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col mt-4">
          {navItems.map(({ icon, label, to }) => (
            <Link
              key={to}
              href={to}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-6 py-3 text-sm transition 
              ${
                pathname === to
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 mt-4 text-sm text-red-500 border-t"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-[var(--border)] p-5 fixed h-full">
        <div className="font-bold text-lg mb-8 flex items-center gap-2">
          <span className="bg-[var(--accent)] text-white px-2 py-1 rounded-md">
            H
          </span>
          Admin Panel
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ icon, label, to }) => (
            <Link
              key={to}
              href={to}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition 
              ${
                pathname === to
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 border-t mt-4"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 lg:ml-64 overflow-y-auto p-6 bg-[var(--bg-secondary)]">
        {children}
      </main>
    </div>
  );
}
