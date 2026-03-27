"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Let’s Grow Your Reputation 🚀
          </h1>

          <p className="mt-5 text-lg text-[var(--text-secondary)]">
            Have questions or want a demo? Our team is ready to help you scale
            your brand with smarter reputation management.
          </p>
        </div>
      </section>

      {/* 🔥 CONTACT HUB */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Email Us",
              value: "support@handleey.com",
              icon: "📧",
            },
            {
              title: "Call Us",
              value: "+91 9876543210",
              icon: "📱",
            },
            {
              title: "Location",
              value: "India",
              icon: "📍",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent rounded-2xl" />

              <div className="relative">
                <div className="text-3xl mb-3">{item.icon}</div>

                <h3 className="font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 MAIN SECTION (CONTENT + FORM) */}
      <section className="bg-[var(--bg)] py-28 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
              Let’s Build Something Amazing Together
            </h2>

            <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
              Whether you're trying to improve your ratings, respond faster to
              customers, or scale your reputation strategy — Handleyee gives you
              the tools to do it effortlessly.
            </p>

            <div className="mt-8 space-y-4 text-[var(--text-secondary)]">
              <p>✔ Get a personalized demo</p>
              <p>✔ Understand how Handleyee fits your business</p>
              <p>✔ Start improving your reputation instantly</p>
            </div>

            {/* Highlight Card */}
            <div className="mt-10 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6">
              <p className="text-sm text-[var(--text-secondary)]">
                ⚡ Most businesses see improvement in ratings within
                <span className="text-[var(--accent)] font-semibold">
                  {" "}
                  30 days
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 🔥 MAP */}
      <section className="bg-[var(--bg-secondary)] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center mb-10">
            Find Us
          </h2>

          <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
