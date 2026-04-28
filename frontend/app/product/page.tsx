"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Product() {
  return (
    <div className="bg-[#f8fafc]">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-16 text-center bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 to-transparent" />

        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
          Manage Reviews, Social Media & Reputation
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Everything you need to grow your business — from reviews to social —
          in one powerful dashboard.
        </p>

        <div className="mt-10 max-w-6xl mx-auto">
          <img
            src="/screenshot/img (1).jpeg"
            className="rounded-xl shadow-lg border"
          />
        </div>
      </section>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto py-12 space-y-10">
        <FeatureCard
          title="Review Management"
          desc="View, filter and respond to all reviews from Google, TripAdvisor and more."
          img="/screenshot/img (21).jpeg"
          points={[
            "All reviews in one place",
            "Filter by rating & sentiment",
            "Reply instantly",
            "Never miss a review",
          ]}
        />

        <FeatureCard
          title="AI Smart Replies"
          desc="Generate professional replies instantly with AI."
          img="/screenshot/img (20).jpeg"
          reverse
          points={[
            "Auto reply generation",
            "Custom tone & style",

            "Save hours daily",
          ]}
        />

        <FeatureCard
          title="Social Media Management"
          desc="Manage comments, messages and engagement from all platforms."
          img="/screenshot/img (17).jpeg"
          points={[
            "Unified inbox",
            "Reply to comments",
            "Track engagement",
            "Multi-platform view",
          ]}
        />

        <FeatureCard
          title="Post Creation & Scheduling"
          desc="Create and schedule posts across all platforms."
          img="/screenshot/img (16).jpeg"
          reverse
          points={[
            "Schedule posts",
            "Upload images",
            "Multi-platform publish",
            "Content calendar",
          ]}
        />

        <FeatureCard
          title="Team & Department Workflow"
          desc="Assign reviews and manage team collaboration."
          img="/screenshot/img (15).jpeg"
          points={[
            "Department-wise assignment",
            "Approval workflow",
            "User roles",
            "Better collaboration",
          ]}
        />

        <FeatureCard
          title="Analytics & Reports"
          desc="Track performance and make better decisions."
          img="/screenshot/img (12).jpeg"
          reverse
          points={[
            "Review trends",
            "Performance metrics",
            "Activity logs",
            "Insights dashboard",
          ]}
        />

        <FeatureCard
          title="Platform Integrations"
          desc="Connect Google, Facebook, Instagram and more."
          img="/screenshot/img (13).jpeg"
          points={[
            "Google Business",
            "TripAdvisor",
            "Facebook & Instagram",
            "Real-time sync",
          ]}
        />

        <FeatureCard
          title="Multi Branch Management"
          desc="Manage multiple locations easily."
          img="/screenshot/img (11).jpeg"
          reverse
          points={[
            "Separate workspaces",
            "Branch switching",
            "Central control",
            "Scalable setup",
          ]}
        />
        <FeatureCard
          title="Google My Business Optimization"
          desc="Improve your visibility, ranking, and customer trust on Google with powerful insights and automation."
          img="/screenshot/img (5).jpeg"
          reverse
          points={[
            "Track Google reviews in real-time",
            "Monitor rating trends & performance",
            "Improve local ranking visibility",
            "Analyze competitors in your area",
            "Respond instantly with AI",
            "Boost customer trust & conversions",
          ]}
        />
      </div>

      {/* GRID GALLERY */}
      <section className="bg-white py-16 border-t">
        <h2 className="text-3xl font-bold text-center mb-10">
          Powerful Features at a Glance
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[18, 6, 8, 9, 3, 10].map((n) => (
            <img
              key={n}
              src={`/screenshot/img (${n}).jpeg`}
              className="rounded-lg border shadow-sm hover:shadow-md transition"
            />
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

/* COMPONENT */

function FeatureCard({
  title,
  desc,
  img,
  points,
  reverse = false,
}: {
  title: string;
  desc: string;
  img: string;
  points: string[];
  reverse?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
      <div
        className={`grid md:grid-cols-2 gap-8 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <img src={img} className="rounded-lg border shadow-md" />

        {/* CONTENT */}
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-500">✔</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
