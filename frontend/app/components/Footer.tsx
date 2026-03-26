"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-[var(--text-primary)]">
              <span className="bg-[var(--primary)] text-white px-2 py-1 rounded-md">
                H
              </span>
              Handleey
            </div>

            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              Manage your online reputation, monitor reviews, and build trust —
              all in one powerful platform.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="#product" className="hover:text-[var(--text-primary)]">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--text-primary)]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--text-primary)]">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)]">
                  About
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-[var(--text-primary)]">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--text-primary)]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Get Started
            </h3>

            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Start managing your reputation today.
            </p>

            <button className="px-5 py-2 bg-[var(--accent)] text-white rounded-full text-sm hover:bg-[var(--accent-hover)] transition">
              Book Demo
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Handleey. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[var(--text-secondary)]">
            <a href="#">
              <SiX size={18} className="hover:text-[var(--text-primary)]" />
            </a>
            <a href="#">
              <FaLinkedinIn
                size={18}
                className="hover:text-[var(--text-primary)]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
