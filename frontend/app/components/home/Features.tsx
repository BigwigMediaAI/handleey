"use client";

import {
  ShieldCheck,
  Sparkles,
  Monitor,
  Share2,
  Layers,
  QrCode,
  Send,
  MessageCircle,
  MapPin,
  Globe,
  Star,
  Zap,
  Smartphone,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { FaFacebook } from "react-icons/fa";

const logos = [
  "/logos/google.png",
  "/logos/trip.png",
  "/logos/justdial.png",
  "/logos/Booking.png",
  "/logos/fb.png",
  "/logos/zomato.png",
  "/logos/insta.png",
  "/logos/twitter.png",
  "/logos/linkedin.png",
  "/logos/swiggy.png",
  "/logos/Reddit.png",
];

const benefits = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Negative Reviews Protection",
    desc: "Send negative reviews privately and make positive reviews public, giving you full control over your online reputation.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI ChatGPT Review Reply",
    desc: "Respond personally to every customer with AI ChatGPT. Boost satisfaction with customized replies tailored to each interaction.",
  },
  {
    icon: <Monitor size={22} />,
    title: "Website Review Widgets",
    desc: "Add review widgets to your website and make it easy for customers to leave feedback.",
  },
  {
    icon: <Share2 size={22} />,
    title: "Share on Social Media",
    desc: "Share positive reviews on social media to increase brand visibility and attract new customers.",
  },
  {
    icon: <Layers size={22} />,
    title: "All Reviews In One Place",
    desc: "Monitor and manage reviews from multiple sources (e.g., Google and Facebook) at one place.",
  },
  {
    icon: <QrCode size={22} />,
    title: "QR Code Stand Tap Or Scan",
    desc: "Allow customers to easily leave a review by scanning a QR code or tapping an NFC standee.",
  },
];

export default function Features() {
  return (
    <>
      <section className="py-16" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Integrates with 50+ Platforms on One Dashboard
            </h2>
          </div>

          {/* LOGO GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-20 rounded-xl transition"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.05)";
                }}
              >
                <img
                  src={logo}
                  alt="platform"
                  className="h-10 object-contain transition"
                  style={{ opacity: 0.8 }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.8")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 px-4"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <img src="/hero/allinone.png" className="w-full rounded-2xl" />

          {/* RIGHT CONTENT */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Manage All Reviews & Social Media in One Dashboard
            </h2>

            <p
              className="mt-5 text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Connect all your platforms like Google, Facebook, TripAdvisor, and
              more. Respond to reviews, comments, and messages from one unified
              interface.
            </p>

            {/* ICON LIST */}
            <div className="mt-8 space-y-5">
              {/* ITEM 1 */}
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-500/10">
                  <MessageCircle className="text-yellow-500" size={18} />
                </div>
                <p
                  className="text-sm md:text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  Reply to all reviews from one place
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-500/10">
                  <Layers className="text-yellow-500" size={18} />
                </div>
                <p
                  className="text-sm md:text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  Manage multiple platforms easily
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-500/10">
                  <Send className="text-yellow-500" size={18} />
                </div>
                <p
                  className="text-sm md:text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  Never miss a customer message
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Integrate with 50+ Platforms Instantly
            </h2>

            <p
              className="mt-5 text-lg max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              From Google to TripAdvisor, Booking.com to Justdial — connect all
              your platforms in minutes and manage everything from one place.
            </p>

            {/* FEATURE LIST */}
            <div>
              {/* ITEM */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 ">
                  <Star className="text-yellow-500" size={20} />
                </div>
                <span
                  className="text-base font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Google Reviews
                </span>
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
                  <FaFacebook className="text-blue-500" size={20} />
                </div>
                <span
                  className="text-base font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Facebook & Instagram
                </span>
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-500/10">
                  <Globe className="text-green-500" size={20} />
                </div>
                <span
                  className="text-base font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  TripAdvisor & Booking.com
                </span>
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <span
                  className="text-base font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Justdial & more
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img src="/hero/allp.png" alt="All Platforms" className="w-full " />

            {/* OPTIONAL GLOW EFFECT */}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-20 px-4"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* MAIN TITLE */}
          <h2
            className="mt-6 text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Key Benefits Of Handlyee
          </h2>

          {/* GRID */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="p-8 text-left rounded-xl transition"
                style={{
                  background: "var(--card-bg2)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(0,0,0,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                {/* ICON BOX */}
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{
                    background: "var(--icon-bg)",
                    color: "var(--icon-color)",
                  }}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Your New Reputation Management Platform
          </h2>

          {/* SUBTEXT (optional but recommended) */}
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage reviews, automate responses, and grow your brand — all from
            one powerful dashboard.
          </p>

          {/* IMAGE */}
          <div className="mt-14">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src="/abouthero.png"
                alt="Reputation Platform Dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 relative overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT IMAGE */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
              <img
                src="/hero/nfc.png"
                alt="NFC Card"
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* TITLE */}
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              NFC Card and Stand
            </h2>

            {/* DESCRIPTION */}
            <p
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Introducing the Handlyee NFC QR Code Stand, the ultimate tool for
              collecting valuable feedback from your customers. With just a tap
              or scan, customers can leave a review in seconds.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-500/10">
                  <Smartphone className="text-yellow-500" size={18} />
                </div>
                <span style={{ color: "var(--text-primary)" }}>
                  Tap or scan to review instantly
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-500/10">
                  <Zap className="text-yellow-500" size={18} />
                </div>
                <span style={{ color: "var(--text-primary)" }}>
                  Collect feedback in under 15 seconds
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-500/10">
                  <Star className="text-yellow-500" size={18} />
                </div>
                <span style={{ color: "var(--text-primary)" }}>
                  Boost your online ratings effortlessly
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I'm%20interested%20in%20starting%20a%20free%20trial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:scale-105"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                }}
              >
                Start Free Trial →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
