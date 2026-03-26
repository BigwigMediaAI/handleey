import Image from "next/image";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { ShieldCheck, Zap, BarChart3, Users } from "lucide-react";
import { Shield, Lightbulb, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Trusted & Reliable",
    desc: "Secure and dependable platform trusted by growing businesses.",
  },
  {
    icon: <Zap size={20} />,
    title: "Real-time Insights",
    desc: "Instant alerts and updates so you never miss important feedback.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Smart Analytics",
    desc: "Understand trends and customer sentiment with powerful dashboards.",
  },
  {
    icon: <Users size={20} />,
    title: "Built for Businesses",
    desc: "Designed to support startups, agencies, and enterprises alike.",
  },
];

const values = [
  {
    icon: <Shield size={20} />,
    title: "Transparency",
    desc: "We believe in clear, honest insights so businesses can make confident decisions.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Innovation",
    desc: "We continuously improve using modern technology to deliver better solutions.",
  },
  {
    icon: <HeartHandshake size={20} />,
    title: "Customer First",
    desc: "Our focus is always on helping businesses succeed and grow their reputation.",
  },
];

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="relative bg-[var(--bg)] pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium text-[var(--accent)] mb-3">
              About Handleey
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
              Building Trust in the <br />
              <span className="text-[var(--accent)]">Digital World</span>
            </h1>

            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-lg">
              Handleey helps businesses monitor reviews, understand customer
              sentiment, and build a strong online reputation — all from a
              single, powerful platform.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <p>✔ Monitor reviews across platforms</p>
              <p>✔ AI-powered sentiment insights</p>
              <p>✔ Improve brand trust & ratings</p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
              <Image
                src="/abouthero.png" // 👉 add this image in public folder
                alt="About Handleey"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-6">
              🎯
            </div>

            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Our Mission
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              Our mission is to empower businesses with simple yet powerful
              tools to manage their online reputation, respond to customers, and
              build long-term trust.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-6">
              🚀
            </div>

            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Our Vision
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              We envision a world where every business can build a strong
              digital reputation and connect better with their customers through
              data-driven insights.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Why Choose Handleey
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              We combine simplicity, powerful analytics, and real-time
              monitoring to help businesses build and maintain a strong online
              reputation.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {points.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Our Values
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            These principles guide everything we build and how we serve our
            customers.
          </p>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                  {value.icon}
                </div>

                <h3 className="font-semibold text-[var(--text-primary)]">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {value.desc}
                </p>
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

// abab
