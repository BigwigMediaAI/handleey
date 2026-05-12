"use client";
import Link from "next/link";
import Footer from "../components/Footer";

import ThemeToggle from "../components/Theme-toggle";

export default function Terms() {
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

      <div className="min-h-screen bg-[var(--bg)] pt-24">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* HEADER */}
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>

          <p
            className="text-sm mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* INTRO */}
          <p className="mb-6 leading-relaxed">
            Welcome to <strong>Critiquee</strong>. By accessing or using our
            platform, you agree to comply with and be bound by the following
            terms and conditions.
          </p>

          {/* SECTIONS */}
          <Section title="1. Use of Service">
            <p>
              You agree to use Critiquee only for lawful purposes. You must not
              misuse the platform, attempt unauthorized access, or disrupt the
              service.
            </p>
          </Section>

          <Section title="2. User Accounts">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You are responsible for maintaining account confidentiality
              </li>
              <li>All activities under your account are your responsibility</li>
              <li>Provide accurate and up-to-date information</li>
            </ul>
          </Section>

          <Section title="3. Payments & Subscriptions">
            <p>
              Some features may require payment. By purchasing, you agree to our
              pricing and billing terms. All payments are non-refundable unless
              stated otherwise.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content, branding, and technology related to Critiquee are our
              intellectual property. You may not copy, distribute, or reuse any
              content without permission.
            </p>
          </Section>

          <Section title="5. Prohibited Activities">
            <ul className="list-disc pl-6 space-y-2">
              <li>Using the platform for illegal activities</li>
              <li>Attempting to hack or exploit the system</li>
              <li>Uploading harmful or abusive content</li>
            </ul>
          </Section>

          <Section title="6. Termination">
            <p>
              We reserve the right to suspend or terminate your account if you
              violate these terms or misuse the platform.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              Critiquee is provided “as is” without warranties. We are not
              liable for any indirect, incidental, or consequential damages.
            </p>
          </Section>

          <Section title="8. Changes to Terms">
            <p>
              We may update these terms at any time. Continued use of the
              platform means you accept the updated terms.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>For any questions regarding these Terms, contact us at:</p>
            <p className="mt-2 font-medium">vipul@bigwigmedia.in</p>
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
