"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Product() {
  return (
    <div>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            One Platform to Manage <br />
            <span className="text-[var(--accent)]">
              Reviews, Reputation & Growth
            </span>
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            Handleyee helps you track reviews, respond with AI, and improve your
            brand across Google, TripAdvisor & social platforms.
          </p>
        </div>

        {/* BIG SCREENSHOT */}
        <div className="mt-16 max-w-6xl mx-auto border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl">
          <img src="/screenshot/img1.jpeg" className="w-full" />
        </div>
      </section>

      {/* 🔥 FEATURE BLOCK 1 */}
      <section className="py-24 bg-[var(--bg-secondary)] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Manage All Reviews in One Place
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              View, filter, and respond to reviews from Google, TripAdvisor, and
              more — without switching platforms.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>✔ Unified review inbox</li>
              <li>✔ Filter by rating & platform</li>
              <li>✔ Assign reviews to teams</li>
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src="/screenshot/img2.jpeg"
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </section>

      {/* 🔥 FEATURE BLOCK 2 */}
      <section className="py-24 bg-[var(--bg)] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <img
            src="/screenshot/img3.jpeg"
            className="rounded-2xl shadow-xl border order-2 md:order-1"
          />

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              AI-Powered Smart Replies
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              Generate professional, brand-aligned replies instantly using AI.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>✔ Auto-generate responses</li>
              <li>✔ Customize tone & style</li>
              <li>✔ Save hours of manual work</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔥 FEATURE BLOCK 3 */}
      <section className="py-24 bg-[var(--bg-secondary)] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Analytics & Performance Insights
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              Track ratings, trends, and customer sentiment to improve your
              business performance.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>✔ Rating trends & breakdown</li>
              <li>✔ Sentiment analysis</li>
              <li>✔ Competitor insights</li>
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src="/screenshot/img4.jpeg"
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </section>

      {/* 🔥 SOCIAL + MULTI PLATFORM */}
      <section className="py-24 bg-[var(--bg)] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Manage Reviews + Social in One Dashboard
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            Handle comments, messages, and reviews across all platforms from one
            place.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[5, 6, 7].map((n) => (
            <img
              key={n}
              src={`/screenshot/img${n}.jpeg`}
              className="rounded-2xl shadow-lg border hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* 🔥 HOW HANDLEYEE WORKS (PREMIUM) */}
      <section className="relative py-28 bg-[var(--bg-secondary)] px-4 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            How Handleyee Works
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            A simple workflow to turn customer feedback into business growth.
          </p>

          {/* STEPS */}
          <div className="mt-16 grid md:grid-cols-4 gap-6 relative">
            {[
              {
                title: "Connect Platforms",
                desc: "Integrate Google, TripAdvisor & social accounts.",
              },
              {
                title: "Track Reviews",
                desc: "Monitor all reviews from one dashboard.",
              },
              {
                title: "Reply with AI",
                desc: "Generate smart replies instantly.",
              },
              {
                title: "Improve Ratings",
                desc: "Boost reputation and customer trust.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Glow hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                <div className="relative">
                  {/* Step number */}
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[var(--accent)] text-white font-bold mb-4 shadow">
                    {i + 1}
                  </div>

                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <FinalCTA />

      <Footer />
    </div>
  );
}
