"use client";

import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-4 py-20 md:px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-6">
            <div
              className="flex items-center gap-3 font-bold text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                }}
              >
                H
              </div>
              Handlyee
            </div>

            <p
              className="max-w-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              A premium reputation platform for growing businesses. Collect
              reviews, reply instantly, and build trust effortlessly.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md font-semibold transition"
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
              Start Free Trial
            </a>
          </div>

          {/* CENTER */}
          <div>
            <h3
              className="text-lg font-semibold mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Explore
            </h3>

            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Features", href: "#features" },
                { label: "Testimonials", href: "#demo" },
                { label: "Plans", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3
              className="text-lg font-semibold mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Contact
            </h3>

            <p style={{ color: "var(--text-secondary)" }}>help@handlyee.com</p>
            <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
              +91 83685 73451
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaFacebookF].map((Icon, i) => (
                <div
                  key={i}
                  className="h-10 w-10 flex items-center justify-center rounded-md transition cursor-pointer"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "var(--bg)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Handlyee. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://reviewuplift.com/privacy-policy.html"
              style={{ color: "var(--text-secondary)" }}
            >
              Privacy Policy
            </a>
            <a
              href="https://merchant.razorpay.com/policy/NaUwucTZt7ivqT/terms"
              style={{ color: "var(--text-secondary)" }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
