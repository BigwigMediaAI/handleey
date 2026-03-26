"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Solution() {
  return (
    <div>
      <Navbar />

      {/* 🔥 HERO (PROBLEM FIRST) */}
      <section className="relative bg-[var(--bg)] pt-32 pb-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm text-[var(--accent)] mb-3">
            The Problem Most Businesses Ignore
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Your Online Reputation is
            <br />
            <span className="text-red-500">Costing You Customers</span>
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Every unanswered review, every low rating, and every missed feedback
            silently pushes customers toward your competitors.
          </p>
        </div>
      </section>

      {/* 🔥 PAIN SECTION */}
      <section className="bg-[var(--bg-secondary)] py-28 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            What’s Actually Happening 👇
          </h2>

          <div className="mt-12 space-y-6 text-lg text-[var(--text-secondary)]">
            <p>❌ Customers read negative reviews and leave instantly</p>
            <p>❌ You don’t reply fast enough — trust drops</p>
            <p>❌ Ratings stay low even when your service is good</p>
            <p>❌ You have no idea what customers really feel</p>
            <p>❌ Competitors outrank you because they manage reviews better</p>
          </div>
        </div>
      </section>

      {/* 🔥 TRANSFORMATION */}
      <section className="py-32 bg-[var(--bg)] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            Now Imagine This Instead...
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            Every review handled instantly. Every customer heard. Every rating
            improved.
          </p>

          <div className="mt-12 space-y-4 text-lg text-[var(--text-primary)] font-medium">
            <p>✅ Every review gets a professional response</p>
            <p>✅ Negative feedback turns into positive experience</p>
            <p>✅ Your rating increases consistently</p>
            <p>✅ Customers trust your brand instantly</p>
          </div>
        </div>
      </section>

      {/* 🔥 SOLUTION */}
      <section className="py-32 bg-[var(--bg-secondary)] px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Handleyee Turns Feedback Into Growth
            </h2>

            <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
              Instead of chasing reviews manually, Handleyee gives you a
              complete system to manage, respond, and improve your reputation
              automatically.
            </p>

            <div className="mt-8 space-y-4 text-[var(--text-secondary)]">
              <p>✔ One dashboard for all reviews</p>
              <p>✔ AI-powered instant replies</p>
              <p>✔ Deep insights into customer sentiment</p>
              <p>✔ Team workflows for faster action</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden border shadow-2xl">
            <img src="/screenshot/img2.jpeg" />
          </div>
        </div>
      </section>

      {/* 🔥 USE CASES */}
      <section className="py-28 bg-[var(--bg)] px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Built for Businesses That Care About Growth
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "🏨 Hotels",
              desc: "Improve ratings across booking platforms and attract more guests.",
            },
            {
              title: "🍽 Restaurants",
              desc: "Turn feedback into better experiences and repeat customers.",
            },
            {
              title: "📊 Agencies",
              desc: "Manage multiple clients and scale reputation services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 RESULT */}
      <section className="py-28 bg-[var(--bg-secondary)] px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          The Result?
        </h2>

        <div className="mt-12 space-y-4 text-xl font-medium text-[var(--text-primary)]">
          <p>⭐ Higher ratings</p>
          <p>🤝 Strong customer trust</p>
          <p>📈 More conversions & revenue</p>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
