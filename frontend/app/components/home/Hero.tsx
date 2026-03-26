"use client";

import { useState } from "react";
import ContactPopup from "../Popup";
import Link from "next/link";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="relative bg-[var(--bg)] pt-32 pb-20 px-4 md:px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-medium text-[var(--accent)] mb-3">
            🚀 Trusted ORM Platform
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Control & Grow Your <br />
            <span className="text-[var(--accent)]">Online Reputation</span>
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-lg">
            Monitor reviews, analyze sentiment, and improve your brand image —
            all from one powerful dashboard built for modern businesses.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-6 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--accent-hover)] transition transform hover:scale-105"
            >
              Book Demo
            </button>

            <Link
              href="#products"
              className="px-6 py-3 border border-[var(--border)] rounded-full font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition"
            >
              Explore Features
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-sm text-[var(--text-secondary)]">
            Helping businesses manage 1000+ reviews efficiently
          </p>
        </div>

        {/* RIGHT SIDE (Dashboard Mock UI) */}
        <div className="relative">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 shadow-lg">
            {/* Fake Dashboard */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-[var(--text-primary)]">
                Reputation Overview
              </h3>
              <span className="text-sm text-[var(--success)]">+12% Growth</span>
            </div>

            {/* Ratings */}
            <div className="mb-4">
              <p className="text-sm text-[var(--text-secondary)]">
                Average Rating
              </p>
              <p className="text-3xl font-bold text-[var(--text-primary)]">
                4.7 ⭐
              </p>
            </div>

            {/* Bars */}
            <div className="space-y-2">
              <div className="h-2 bg-[var(--border)] rounded-full">
                <div className="h-2 w-[80%] bg-[var(--accent)] rounded-full" />
              </div>
              <div className="h-2 bg-[var(--border)] rounded-full">
                <div className="h-2 w-[60%] bg-[var(--accent)] rounded-full" />
              </div>
              <div className="h-2 bg-[var(--border)] rounded-full">
                <div className="h-2 w-[90%] bg-[var(--accent)] rounded-full" />
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-4 text-sm text-[var(--text-secondary)]">
              +245 new reviews this month
            </div>
          </div>
        </div>
      </div>
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}
