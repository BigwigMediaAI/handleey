"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative bg-[var(--bg)] pt-32 pb-20 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Let’s Talk 👋
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            Have questions, feedback, or want a demo? We’re here to help you
            manage and grow your online reputation.
          </p>
        </div>
      </section>

      {/* 📄 INFO */}
      <section className="bg-[var(--bg)] py-10 px-4 md:px-6 text-center">
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Our team is always ready to assist you. Reach out through any channel
          or send us a message — we’ll respond as quickly as possible.
        </p>
      </section>

      {/* 📦 CONTACT CARDS */}
      <section className="bg-[var(--bg-secondary)] py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {/* Email */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-[var(--text-primary)]">
              📧 Email
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              support@handleey.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-[var(--text-primary)]">
              📱 Phone
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              +91 9876543210
            </p>
          </div>

          {/* Address */}
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-[var(--text-primary)]">
              📍 Address
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">India</p>
          </div>
        </div>
      </section>

      {/* 🧩 FORM + CONTENT */}
      <section className="bg-[var(--bg)] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Let’s Start a Conversation
            </h2>

            <p className="mt-4 text-[var(--text-secondary)]">
              Whether you’re looking to improve your brand reputation or just
              exploring Handleey, our team is here to guide you.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>✔ Quick response from our team</li>
              <li>✔ Personalized demo available</li>
              <li>✔ No spam, only helpful communication</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <ContactForm />
        </div>
      </section>

      {/* 🗺️ MAP */}
      <section className="bg-[var(--bg-secondary)] py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Find Us Here
          </h2>

          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
