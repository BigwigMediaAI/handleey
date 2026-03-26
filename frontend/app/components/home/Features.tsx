"use client";

import {
  BarChart3,
  Bell,
  MessageSquare,
  Star,
  Activity,
  Globe,
  Users,
  Brain,
} from "lucide-react";
import { Link, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Star size={20} />,
    title: "Unified Review Inbox",
    desc: "Manage Google, TripAdvisor & all reviews from one centralized dashboard.",
  },
  {
    icon: <Brain size={20} />,
    title: "AI-Powered Replies",
    desc: "Generate smart, brand-aligned responses instantly with customizable tone.",
  },
  {
    icon: <Activity size={20} />,
    title: "Sentiment Intelligence",
    desc: "Understand customer emotions with AI-driven sentiment & feedback insights.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Advanced Analytics",
    desc: "Track ratings, trends, performance & growth with real-time dashboards.",
  },
  {
    icon: <Users size={20} />,
    title: "Team & Department Workflow",
    desc: "Assign reviews to teams, enable approvals & streamline responses.",
  },
  {
    icon: <Globe size={20} />,
    title: "Multi-Platform Integration",
    desc: "Connect Google, Facebook, Instagram, LinkedIn & more seamlessly.",
  },
  {
    icon: <Bell size={20} />,
    title: "Real-Time Alerts",
    desc: "Get notified instantly when new reviews or comments are posted.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Social Engagement",
    desc: "Reply to comments & messages across all platforms from one place.",
  },
];

const steps = [
  {
    icon: <Link size={22} />,
    title: "Connect Your Platforms",
    desc: "Integrate Google, TripAdvisor & social channels in just a few clicks.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Monitor & Analyze",
    desc: "Track reviews, sentiment, competitors & performance in real-time.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Respond & Grow",
    desc: "Use AI + team workflows to reply faster and improve your ratings.",
  },
];

export default function Features() {
  return (
    <div>
      {/* 🔥 FEATURES SECTION */}
      <section className="relative bg-[var(--bg-secondary)] py-24 px-4 md:px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto text-center relative">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Everything You Need to Manage Your Reputation
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            From AI-powered replies to deep analytics and multi-platform
            management — Handleyee gives you complete control over your brand
            reputation.
          </p>

          {/* GRID */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Glow hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                <div className="relative">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                    {feature.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 HOW IT WORKS */}
      <section className="relative bg-[var(--bg)] py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            How Handleyee Works
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            A simple 3-step workflow to turn customer feedback into growth.
          </p>

          {/* STEPS */}
          <div className="mt-16 grid gap-10 md:grid-cols-3 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-xl transition group-hover:-translate-y-1">
                  {/* Step number */}
                  <div className="text-xs font-medium text-[var(--accent)] mb-3">
                    STEP {index + 1}
                  </div>

                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-5">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
