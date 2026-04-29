"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "var(--accent)";
        e.currentTarget.style.color = "#000";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "var(--bg-secondary)";
        e.currentTarget.style.color = "var(--text-primary)";
      }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
