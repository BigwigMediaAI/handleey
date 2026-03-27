"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactPopup from "./Popup";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Solutions", href: "/solution" },
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

          <a
            href="https://wa.me/918368573451?text=Hi%2C%20I%E2%80%99m%20interested%20in%20Handleey.%20I%E2%80%99d%20like%20to%20know%20how%20it%20can%20help%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-hover)] transition transform hover:scale-105 text-center"
          >
            Chat on WhatsApp
          </a>
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
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Blur */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative z-50 flex flex-col h-full bg-[var(--bg)]/95 backdrop-blur-xl transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* 🔥 TOP BAR */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--border)]">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-lg text-[var(--text-primary)]">
              <span className="bg-[var(--primary)] text-white px-2 py-1 rounded-md">
                H
              </span>
              Handleey
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-primary)]"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 px-6 py-8 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-[var(--text-primary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/contacts"
              className="font-medium text-[var(--text-primary)]"
            >
              Contact
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto px-6 pb-8">
            <a
              href="https://wa.me/918368573451?text=Hi%2C%20I%E2%80%99m%20interested%20in%20Handleey.%20I%E2%80%99d%20like%20to%20know%20how%20it%20can%20help%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--accent-hover)] transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </header>
  );
}
