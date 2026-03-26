"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactPopup from "./Popup";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Product", href: "#product" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-lg border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg cursor-pointer text-[var(--text-primary)]"
        >
          <span className="bg-[var(--primary)] text-white px-2 py-1 rounded-md">
            H
          </span>
          Handleey
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/contacts"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Contact
          </a>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-5 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-hover)] transition transform hover:scale-105"
          >
            Book Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 flex flex-col gap-4 bg-[var(--bg)]/95 backdrop-blur-lg border-t border-[var(--border)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/contacts"
            className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Contact
          </a>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="mt-2 py-2 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-hover)] transition"
          >
            Book Demo
          </button>
        </div>
      </div>

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </header>
  );
}
