"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import Image from "next/image";

export default function Solution() {
  return (
    <div className="bg-[#f8fafc]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-16 px-4 text-center bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 to-transparent" />

        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Turn Customer Feedback Into
          <span className="text-[var(--accent)] block">
            Your Growth Engine 🚀
          </span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Stop losing customers due to bad reviews. Manage feedback, respond
          faster, and improve your ratings — all in one platform.
        </p>

        <div className="mt-10 max-w-6xl mx-auto">
          <img
            src="/screenshot/img (1).jpeg"
            className="rounded-xl shadow-lg border"
          />
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Problems Businesses Face Today 😓
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Negative reviews scare customers",
              "Slow responses reduce trust",
              "No clear feedback insights",
              "Low ratings hurt visibility",
              "Manual work wastes time",
              "Competitors outrank you",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-20  bg-white border-y">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/screenshot/img (2).jpeg"
            alt="dashboard"
            width={800}
            height={500}
            className="rounded-xl border shadow-md"
          />

          <div>
            <h2 className="text-3xl font-bold">Meet Handleyee 💡</h2>

            <p className="mt-4 text-gray-600">
              A powerful platform to manage reviews, automate replies, and
              improve your business reputation.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔ AI-powered replies</li>
              <li>✔ Centralized dashboard</li>
              <li>✔ Real-time insights</li>
              <li>✔ Team collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <FeatureCard
          title="Manage Reviews Easily"
          desc="All your reviews in one place with powerful filters and actions."
          img="/screenshot/img (21).jpeg"
        />

        <FeatureCard
          title="Reply Instantly with AI"
          desc="Generate smart, professional replies in seconds."
          img="/screenshot/img (20).jpeg"
          reverse
        />

        <FeatureCard
          title="Track Performance"
          desc="Understand trends, ratings, and customer sentiment."
          img="/screenshot/img (12).jpeg"
        />
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-4 bg-white border-y">
        <h2 className="text-3xl font-bold text-center">How It Works ⚡</h2>

        <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "Connect your platforms",
            "Monitor reviews in one dashboard",
            "Reply and improve ratings",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-[#f8fafc] rounded-xl border text-center"
            >
              <div className="text-2xl font-bold text-[var(--accent)]">
                {i + 1}
              </div>
              <p className="mt-3 text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center">
          Built for Every Business
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "🏨 Hotels",
              desc: "Increase bookings with better ratings",
            },
            { title: "🍽 Restaurants", desc: "Improve guest experience" },
            { title: "📊 Agencies", desc: "Manage multiple clients easily" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border shadow-sm text-center"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-20 px-4 bg-white border-y text-center">
        <h2 className="text-3xl font-bold">What You’ll Achieve 🚀</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "⭐ Higher Ratings",
            "🤝 More Customer Trust",
            "📈 Increased Revenue",
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[#f8fafc] rounded-xl border">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

/* FEATURE CARD */

function FeatureCard({
  title,
  desc,
  img,
  reverse = false,
}: {
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className={`grid md:grid-cols-2 gap-8 items-center`}>
        <img src={img} className="rounded-lg border shadow" />

        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
