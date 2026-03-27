"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { ShieldCheck, Zap, BarChart3, Users, Brain, Globe } from "lucide-react";
import Link from "next/link";

const points = [
  {
    icon: <Brain size={20} />,
    title: "AI-Powered Intelligence",
    desc: "Smart replies, sentiment analysis & automation powered by AI.",
  },
  {
    icon: <Zap size={20} />,
    title: "Real-Time Monitoring",
    desc: "Track reviews, comments & feedback instantly across platforms.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Advanced Analytics",
    desc: "Get deep insights into ratings, trends & business performance.",
  },
  {
    icon: <Users size={20} />,
    title: "Team Collaboration",
    desc: "Assign reviews, manage departments & streamline workflows.",
  },
  {
    icon: <Globe size={20} />,
    title: "Multi-Platform Control",
    desc: "Manage Google, TripAdvisor, social media — all in one place.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trusted by Businesses",
    desc: "Helping brands improve ratings, trust & online presence.",
  },
];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm font-medium text-[var(--accent)] mb-3">
              About Handleyee
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
              The Future of <br />
              <span className="text-[var(--accent)]">
                Reputation Management
              </span>
            </h1>

            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
              Handleyee is an AI-powered platform that helps businesses manage
              reviews, respond instantly, track performance, and grow their
              online reputation across multiple platforms.
            </p>

            <div className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <p>✔ AI-generated replies</p>
              <p>✔ Multi-platform integrations</p>
              <p>✔ Analytics & competitor insights</p>
            </div>

            {/* 🔥 CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/918368573451?text=Hi%2C%20I%E2%80%99m%20interested%20in%20Handleey.%20I%E2%80%99d%20like%20to%20know%20how%20it%20can%20help%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--accent-hover)] transition"
              >
                Chat on WhatsApp
              </a>

              <Link
                href="/product"
                className="px-7 py-3 border border-[var(--border)] rounded-full font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition"
              >
                Explore Product →
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]">
              <Image
                src="/abouthero.png"
                alt="Handleyee Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-[var(--accent)] opacity-20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* 🔥 MISSION / VISION (UPGRADED) */}
      <section className="relative bg-[var(--bg-secondary)] py-28  overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm text-[var(--accent)] font-medium mb-3">
              Our Purpose
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
              We help businesses turn
              <br />
              <span className="text-[var(--accent)]">
                customer feedback into growth
              </span>
            </h2>

            <p className="mt-6 text-[var(--text-secondary)] leading-relaxed max-w-lg">
              Handleyee is built to simplify reputation management — helping
              businesses monitor reviews, respond instantly with AI, and improve
              customer experience at scale.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              <p>✔ Manage reviews across multiple platforms</p>
              <p>✔ Respond instantly with AI-powered replies</p>
              <p>✔ Track performance with real-time analytics</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="group relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

              <div className="relative">
                <p className="text-xs text-[var(--accent)] font-semibold mb-2">
                  OUR MISSION
                </p>

                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Empower Businesses with Smart Reputation Tools
                </h3>

                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  We aim to help businesses respond faster, understand customers
                  better, and build long-term trust using AI-driven insights.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

              <div className="relative">
                <p className="text-xs text-[var(--accent)] font-semibold mb-2">
                  OUR VISION
                </p>

                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Become the Operating System for Reputation Management
                </h3>

                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  We envision a future where every business manages reviews,
                  social presence, and customer feedback from one intelligent
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 WHY HANDLEYEE */}
      <section className="bg-[var(--bg)] py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Why Businesses Choose Handleyee
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Built for modern businesses that want to manage reviews, automate
            responses, and grow their reputation faster.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {points.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-xl transition"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                <div className="relative">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
