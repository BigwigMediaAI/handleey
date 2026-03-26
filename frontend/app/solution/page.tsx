"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Solution() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            Turn Reviews Into Growth 🚀
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            Handleey helps you manage your online reputation, convert unhappy
            customers into loyal ones, and grow your brand trust effortlessly.
          </p>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Struggling With Your Online Reputation?
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            These problems silently kill your growth 👇
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Negative reviews damaging your brand image",
              "Low ratings reducing customer trust",
              "No structured way to collect feedback",
              "Customers leaving without sharing experience",
              "Missed opportunities to improve service",
              "Losing leads to competitors with better reviews",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:shadow-md transition"
              >
                <p className="text-[var(--text-secondary)] text-sm">
                  ❌ {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[var(--bg)] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Handleey Solves It All
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            We help you take control of your reputation and turn feedback into
            growth opportunities.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Collect real customer feedback easily",
              "Improve ratings with smart workflows",
              "Respond to reviews instantly",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]"
              >
                <p className="text-[var(--text-primary)] font-medium">
                  ✅ {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            Built for Every Business
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Local */}
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                🏪 Local Businesses
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Boost Google ratings, attract more walk-in customers, and build
                strong local trust.
              </p>
            </div>

            {/* Brands */}
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                🏢 Growing Brands
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Manage large-scale feedback, improve brand perception, and scale
                reputation effortlessly.
              </p>
            </div>

            {/* Agencies */}
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                🧑‍💼 Agencies
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Handle multiple clients, automate review workflows, and deliver
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--bg)] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          How It Works
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "Collect Feedback",
            "Analyze Insights",
            "Respond to Reviews",
            "Grow Your Reputation",
          ].map((step, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>

              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Why Businesses Choose Handleey
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "⭐ Increase ratings & reviews",
            "🤝 Build customer trust",
            "📈 Boost conversions & revenue",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] hover:shadow-md transition"
            >
              <p className="text-[var(--text-primary)] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
