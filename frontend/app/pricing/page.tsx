"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      desc: "Perfect for small businesses getting started",
      features: [
        "Basic ORM Monitoring",
        "5 Reviews Management",
        "Email Support",
        "Monthly Reports",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "₹2,999",
      desc: "Best for growing brands",
      features: [
        "Advanced ORM Tools",
        "Unlimited Reviews",
        "Priority Support",
        "Weekly Reports",
        "Competitor Tracking",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large businesses & agencies",
      features: [
        "Full ORM Suite",
        "Dedicated Manager",
        "Custom Integrations",
        "24/7 Support",
        "Advanced Analytics",
      ],
      highlight: false,
    },
  ];

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="bg-[var(--bg)] pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          Simple & Transparent Pricing
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
          Choose a plan that fits your business needs. No hidden charges.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-[var(--bg-secondary)] py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${
                plan.highlight
                  ? "border-[var(--accent)] bg-[var(--bg)] shadow-lg scale-105"
                  : "border-[var(--border)] bg-[var(--bg)]"
              }`}
            >
              {/* PLAN NAME */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold mt-4 text-[var(--text-primary)]">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-sm text-[var(--text-secondary)]">
                    /month
                  </span>
                )}
              </p>

              {/* DESC */}
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                {plan.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[var(--text-secondary)] flex gap-2"
                  >
                    ✅ {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-6 w-full py-3 rounded-lg ${
                  plan.highlight
                    ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                    : "border border-[var(--border)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="bg-[var(--bg)] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Compare Plans
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border border-[var(--border)] rounded-xl">
              <thead className="bg-[var(--bg-secondary)] text-left">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">Starter</th>
                  <th className="p-4">Growth</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Reviews Management", "5", "Unlimited", "Unlimited"],
                  ["Support", "Email", "Priority", "24/7"],
                  ["Reports", "Monthly", "Weekly", "Custom"],
                  ["Analytics", "Basic", "Advanced", "Full"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[var(--border)]">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 text-sm text-left">
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

      {/* CTA */}
      <section className="bg-[var(--bg-secondary)] py-16 text-center px-4">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Not sure which plan is right?
        </h2>
        <p className="text-[var(--text-secondary)] mt-2">
          Talk to our team and we’ll guide you.
        </p>

        <button className="mt-6 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)]">
          Contact Sales
        </button>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
