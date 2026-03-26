"use client";

import { BarChart3, Bell, MessageSquare, Star, Activity } from "lucide-react";
import { Link, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Star size={20} />,
    title: "Review Monitoring",
    desc: "Track and manage reviews across multiple platforms in one place.",
  },
  {
    icon: <Activity size={20} />,
    title: "Sentiment Analysis",
    desc: "Understand customer feedback with AI-powered sentiment insights.",
  },
  {
    icon: <Bell size={20} />,
    title: "Real-time Alerts",
    desc: "Get instant notifications when new reviews are posted.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Analytics Dashboard",
    desc: "Visualize trends and performance with smart analytics.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Review Responses",
    desc: "Reply to customer feedback quickly and effectively.",
  },
];

const steps = [
  {
    icon: <Link size={22} />,
    title: "Connect Platforms",
    desc: "Integrate Google, Facebook, and other platforms to collect all your reviews in one place.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Track & Analyze",
    desc: "Monitor reviews and understand customer sentiment with real-time insights.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Improve Reputation",
    desc: "Respond faster, fix issues, and boost your ratings to grow your brand trust.",
  },
];

export default function Features() {
  return (
    <div>
      <section className="bg-[var(--bg-secondary)] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Powerful Features to Manage Your Reputation
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Everything you need to monitor, analyze, and improve your online
            presence — all in one platform.
          </p>

          {/* Features Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-left hover:shadow-lg transition group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="px-6 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--accent-hover)] transition">
              View Full Product →
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[var(--bg)] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            How Handleey Works
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Get started in minutes and take full control of your online
            reputation with a simple workflow.
          </p>

          {/* Steps */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs bg-[var(--accent)] text-white px-2 py-1 rounded-full">
                  Step {index + 1}
                </div>

                {/* Card */}
                <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 pt-8 hover:shadow-lg transition">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
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
    </div>
  );
}
