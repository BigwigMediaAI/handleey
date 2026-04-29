"use client";

import { Mail } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const socials = [
  {
    icon: Mail,
    link: "mailto:help@handlyee.com",
  },
  {
    icon: FaFacebookF,
    link: "https://facebook.com/yourpage",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com/yourprofile",
  },
  {
    icon: FaLinkedinIn,
    link: "https://linkedin.com/company/yourcompany",
  },
];

export default function Footer() {
  return (
    <footer id="contact">
      {/* CTA SECTION */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* BACKGROUND USING YOUR COLORS */}
        <div
          className="absolute inset-0 opacity-95"
          style={{
            background: `linear-gradient(135deg, var(--accent), var(--accent-hover))`,
          }}
        />

        {/* SOFT GLOW (less harsh) */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] blur-3xl rounded-full opacity-30"
          style={{ background: "var(--accent)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Let’s not waste time & get started.
            <br className="hidden md:block" />
            Shall we?
          </h2>

          {/* BUTTON */}
          <div className="mt-10">
            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              className="inline-block px-10 py-4 rounded-xl font-semibold tracking-wide transition-all duration-300"
              style={{
                background: "#000",
                color: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
            >
              LET'S DISCUSS YOUR PROJECT →
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM FOOTER */}
      <div
        className="py-6 px-4"
        style={{
          background: "var(--card-bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="pb-16 md:pb-0 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* LEFT */}
          <p style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Handlyee · Privacy Policy
          </p>

          {/* CENTER */}
          <p style={{ color: "var(--text-secondary)" }}>
            Made with <span className="text-red-500">❤️</span>
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {socials.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-md cursor-pointer transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--text-secondary)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
