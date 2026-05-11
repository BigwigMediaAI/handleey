"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/Theme-toggle";

export default function PrivacyPolicy() {
  return (
    <div>
      <header
        className="fixed top-0 left-0 w-full z-50"
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-bold text-lg">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center font-bold"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              C
            </div>
            <span style={{ color: "var(--text-primary)" }}>Critiquee</span>
          </Link>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA */}
            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              className="px-5 py-2 rounded-md text-sm font-semibold transition"
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
        </div>
      </header>
      <div className="min-h-screen bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* HEADER */}
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p
            className="text-sm mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* INTRO */}
          <p className="mb-6 leading-relaxed">
            Welcome to <strong>Critiquee</strong>. Your privacy is important to
            us. This Privacy Policy explains how we collect, use, and protect
            your information when you use our platform.
          </p>

          {/* SECTION */}
          <Section title="1. Information We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Account credentials</li>
              <li>Usage data (pages visited, interactions, device info)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To personalize your experience</li>
              <li>To communicate updates, offers, or support</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell your personal data. However, we may share your
              information with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Trusted service providers (hosting, analytics)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </Section>

          <Section title="4. Cookies & Tracking">
            <p>
              We use cookies to enhance your experience. You can choose to
              disable cookies through your browser settings.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement appropriate security measures to protect your data.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent anytime</li>
            </ul>
          </Section>

          <Section title="7. Third-Party Services">
            <p>
              Our platform may contain links to third-party services. We are not
              responsible for their privacy practices.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2 font-medium">support@critiquee.com</p>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({ title, children }: any) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div
        className="leading-relaxed text-[15px]"
        style={{ color: "var(--text-secondary)" }}
      >
        {children}
      </div>
    </div>
  );
}
