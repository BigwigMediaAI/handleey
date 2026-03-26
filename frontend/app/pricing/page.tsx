"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      desc: "For small businesses starting with reputation management",
      features: [
        "Review Monitoring",
        "Basic Analytics",
        "5 Reviews / month",
        "Email Support",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "₹2,999",
      desc: "Best for scaling brands & serious growth",
      features: [
        "Unlimited Reviews",
        "AI Reply Generator",
        "Advanced Analytics",
        "Competitor Tracking",
        "Priority Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For agencies & large businesses",
      features: [
        "Multi-location Management",
        "Dedicated Manager",
        "Custom Integrations",
        "Full Analytics Suite",
        "24/7 Support",
      ],
      highlight: false,
    },
  ];

  return (
    <div>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Simple, Transparent Pricing
          </h1>

          <p className="mt-4 text-[var(--text-secondary)]">
            Choose a plan that grows with your business — no hidden fees.
          </p>
        </div>
      </section>

      {/* 🔥 PRICING CARDS */}
      <section className="bg-[var(--bg-secondary)] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-[var(--bg)] border-[var(--accent)] shadow-2xl scale-105"
                  : "bg-[var(--bg)] border-[var(--border)] hover:shadow-xl"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

              <div className="relative">
                {/* Badge */}
                {plan.highlight && (
                  <div className="mb-4 text-xs inline-block px-3 py-1 bg-[var(--accent)] text-white rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Name */}
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {plan.name}
                </h3>

                {/* Price */}
                <p className="text-4xl font-bold mt-4 text-[var(--text-primary)]">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-[var(--text-secondary)]">
                      /month
                    </span>
                  )}
                </p>

                {/* Desc */}
                <p className="text-sm text-[var(--text-secondary)] mt-3">
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[var(--text-secondary)] flex gap-2"
                    >
                      <span className="text-[var(--accent)]">✔</span> {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 w-full py-3 rounded-full font-medium transition ${
                    plan.highlight
                      ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-lg"
                      : "border border-[var(--border)] hover:bg-[var(--bg-secondary)]"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 FEATURE COMPARISON (UPGRADED) */}
      <section className="bg-[var(--bg)] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            Compare Features
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4">Starter</th>
                  <th className="p-4">Growth</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Reviews", "5", "Unlimited", "Unlimited"],
                  ["AI Replies", "❌", "✔", "✔"],
                  ["Analytics", "Basic", "Advanced", "Full"],
                  ["Support", "Email", "Priority", "24/7"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[var(--border)]">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-[var(--bg-secondary)] py-24 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          Not Sure Which Plan is Right?
        </h2>

        <p className="mt-3 text-[var(--text-secondary)]">
          Talk to our team and we’ll help you choose the best plan.
        </p>

        <button className="mt-6 px-8 py-3 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-hover)] transition shadow-lg">
          Contact Sales
        </button>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
