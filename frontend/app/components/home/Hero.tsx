"use client";

import { useState } from "react";
import ContactPopup from "../Popup";
import Link from "next/link";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 md:px-6 overflow-hidden">
      {/* 🔵 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* 🔥 LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-sm text-[var(--accent)] mb-4">
            🚀 AI-Powered ORM Platform
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Turn Reviews Into <br />
            <span className="text-[var(--accent)]">Revenue & Reputation</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
            Manage reviews, auto-reply with AI, track performance, and grow your
            brand across Google, TripAdvisor & social platforms — all in one
            dashboard.
          </p>

          {/* 🔥 CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-7 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--accent-hover)] transition transform hover:scale-105 shadow-lg"
            >
              🚀 Book Free Demo
            </button>

            <Link
              href="/products"
              className="px-7 py-3 border border-[var(--border)] rounded-full font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition"
            >
              Explore Platform →
            </Link>
          </div>

          {/* Trust + Features */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]">
            <span>⭐ 4.8 Avg Rating Managed</span>
            <span>⚡ AI Auto Replies</span>
            <span>🌐 Multi-Platform Sync</span>
          </div>
        </div>

        {/* 💻 RIGHT SIDE (REALISTIC DASHBOARD CARD) */}
        <div className="relative">
          <div className="relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-[var(--text-primary)]">
                Live Reputation Dashboard
              </h3>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                +18% Growth
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-xs text-[var(--text-secondary)]">Rating</p>
                <p className="font-bold text-lg">4.8 ⭐</p>
              </div>

              <div>
                <p className="text-xs text-[var(--text-secondary)]">Reviews</p>
                <p className="font-bold text-lg">+1,245</p>
              </div>

              <div>
                <p className="text-xs text-[var(--text-secondary)]">Replies</p>
                <p className="font-bold text-lg text-green-500">92%</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1">
                  <span>5★ Reviews</span>
                  <span>78%</span>
                </div>
                <div className="h-2 bg-[var(--border)] rounded-full">
                  <div className="h-2 w-[78%] bg-green-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1">
                  <span>Response Rate</span>
                  <span>92%</span>
                </div>
                <div className="h-2 bg-[var(--border)] rounded-full">
                  <div className="h-2 w-[92%] bg-[var(--accent)] rounded-full" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 border-t border-[var(--border)] pt-4 text-sm">
              <p className="text-[var(--text-primary)] font-medium">
                🆕 New Review
              </p>
              <p className="text-[var(--text-secondary)]">
                “Amazing stay! Staff was very helpful.”
              </p>
              <p className="text-green-500 text-xs mt-1">
                AI replied instantly ✔
              </p>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-[var(--accent)] opacity-20 blur-3xl rounded-full" />
        </div>
      </div>

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}
