"use client";

import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border)] pt-20 pb-10 px-4 md:px-6 overflow-hidden">
      {/* 🔥 Top Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-[var(--text-primary)]">
              <span className="bg-[var(--accent)] text-white px-2 py-1 rounded-md shadow">
                H
              </span>
              Handleey
            </div>

            <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              AI-powered platform to manage reviews, respond instantly, and grow
              your online reputation across all platforms.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6 text-[var(--text-secondary)]">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition"
              >
                <SiX size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="/product"
                  className="hover:text-[var(--text-primary)] transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-[var(--text-primary)] transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="hover:text-[var(--text-primary)] transition"
                >
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="/about"
                  className="hover:text-[var(--text-primary)] transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-[var(--text-primary)] transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="hover:text-[var(--text-primary)] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Contact
            </h3>

            <p className="text-sm text-[var(--text-secondary)]">
              support@handleey.com
            </p>

            <p className="text-sm text-[var(--text-secondary)] mt-2">
              +91 8368573451
            </p>
          </div>
        </div>

        {/* 🔥 BOTTOM */}
        <div className="border-t border-[var(--border)] mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Handleey. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
            <a className="hover:text-[var(--text-primary)] transition">
              Privacy Policy
            </a>
            <a className="hover:text-[var(--text-primary)] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
