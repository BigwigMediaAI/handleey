"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Product() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            The Ultimate ORM Platform for Modern Businesses 🚀
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            Handleey helps you collect feedback, manage reviews, and build a
            powerful online reputation — all in one place.
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Everything You Need to Manage Reputation
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "📩 Smart Feedback Collection",
                desc: "Collect real-time feedback from customers effortlessly.",
              },
              {
                title: "⭐ Review Management",
                desc: "Track, respond, and improve your online reviews.",
              },
              {
                title: "📊 Analytics Dashboard",
                desc: "Understand customer sentiment with powerful insights.",
              },
              {
                title: "⚡ Automation",
                desc: "Automate review requests and responses.",
              },
              {
                title: "🔔 Real-time Alerts",
                desc: "Get notified instantly for new reviews.",
              },
              {
                title: "🌐 Multi-platform Sync",
                desc: "Manage Google, Facebook & more in one place.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] hover:shadow-md transition"
              >
                <h3 className="font-semibold text-[var(--text-primary)]">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-[var(--bg)] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          A Dashboard Built for Growth
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
          Clean, intuitive interface that helps you take action faster.
        </p>

        <div className="mt-10 border border-[var(--border)] rounded-xl p-6 bg-[var(--bg-secondary)] max-w-4xl mx-auto">
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div
                key={num}
                className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg-secondary)] hover:shadow-lg transition"
              >
                <img
                  src={`/screenshot/img${num}.jpeg`}
                  alt={`Dashboard preview ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          How Handleey Works
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "Collect Feedback",
            "Analyze Reviews",
            "Engage Customers",
            "Improve Reputation",
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

      {/* ADVANCED FEATURES */}
      <section className="bg-[var(--bg)] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            Powerful Features for Scale
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              "AI-powered sentiment analysis",
              "Custom review response templates",
              "Multi-location management",
              "Detailed reporting & insights",
              "Team collaboration tools",
              "API integrations",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 border border-[var(--border)] rounded-xl flex items-center gap-3"
              >
                <span className="text-[var(--accent)]">✔</span>
                <p className="text-[var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HANDLEEY */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Why Handleey Stands Out
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "All-in-one ORM platform",
            "Easy to use interface",
            "Scalable for any business",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--border)] rounded-xl bg-[var(--bg)]"
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
