"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#demo" },
  { name: "Plans", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled ? "var(--bg)" : "transparent",
        borderBottom: isScrolled ? "1px solid var(--border)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-lg"
          style={{ color: "var(--text-primary)" }}
        >
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
          >
            H
          </div>
          Handlyee
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition relative"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.name}

              {/* underline hover */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300"
                style={{
                  background: "var(--accent)",
                }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://api.whatsapp.com/send?phone=918368573451"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md text-sm font-semibold transition"
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

        {/* MOBILE ICON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: "var(--text-primary)" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setIsOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 left-0 h-full w-[80%] max-w-sm p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            background: "var(--bg)",
            borderRight: "1px solid var(--border)",
          }}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <div
              className="flex items-center gap-3 font-bold text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                }}
              >
                H
              </div>
              Handlyee
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--text-primary)" }}
            >
              <X size={24} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://api.whatsapp.com/send?phone=918368573451"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 block w-full text-center py-3 rounded-md font-semibold"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
