"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./Theme-toggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Plans", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          background: isScrolled ? "var(--bg)" : "transparent",
          borderBottom: isScrolled ? "1px solid var(--border)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-bold text-lg">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              H
            </div>
            <span style={{ color: "var(--text-primary)" }}>Handlyee</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition"
                style={{ color: "var(--text-secondary)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* CTA */}
            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              className="px-5 py-2 rounded-md text-sm font-semibold transition"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "var(--accent-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
            >
              Start Free Trial
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex items-center gap-3 md:hidden">
            {/* THEME TOGGLE (NOW VISIBLE ON MOBILE) */}
            <ThemeToggle />

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              style={{ color: "var(--text-primary)" }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 left-0 h-full w-[80%] max-w-sm p-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            background: "var(--bg)",
            borderRight: "1px solid var(--border)",
          }}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <span
              className="text-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Menu
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X style={{ color: "var(--text-primary)" }} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* TOGGLE + CTA */}
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              className="block text-center py-3 rounded-md font-semibold"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
