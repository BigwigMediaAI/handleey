"use client";

import {
  ShieldCheck,
  Sparkles,
  Monitor,
  Share2,
  Layers,
  QrCode,
} from "lucide-react";

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
      <section className="bg-[#f5f5f5] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* TOP HEADING */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Integrates with Google and 20+ Review Platform
          </h3>

          {/* MAIN TITLE */}
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
            Key Benefits Of Handlyee
          </h2>

          {/* GRID */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-[#eeeeee] p-8 text-left rounded-md hover:shadow-md transition"
              >
                {/* ICON BOX */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-yellow-500 text-black rounded">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
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
                src="/aboutHero.png" // replace with your image
                alt="Reputation Platform Dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-4"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/screenshot/img (1).jpeg"
                alt="NFC Card"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* small line */}
            <div
              className="w-12 h-[3px]"
              style={{ background: "var(--accent)" }}
            />

            {/* TITLE */}
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              NFC Card and Stand
            </h2>

            {/* DESCRIPTION */}
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Introducing the Handlyee NFC QR Code Stand, the ultimate tool for
              collecting valuable feedback from your customers. With just a tap
              or a scan, customers can leave a review in just 15 seconds, making
              it easier than ever to gather feedback and improve your business.
            </p>

            {/* CTA + CONTACT */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I'm%20interested%20in%20starting%20a%20free%20trial."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-md font-semibold transition inline-block"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "var(--accent-hover)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "var(--accent)")
                }
              >
                START FREE TRIAL
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
