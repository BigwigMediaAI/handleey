"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SEND OTP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setShowOtpModal(true);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 VERIFY OTP
  const handleVerifyOtp = async () => {
    try {
      setVerifyLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: form.phone,
            otp,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Lead submitted successfully 🚀");

      // reset everything
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setOtp("");
      setShowOtpModal(false);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setVerifyLoading(false);
    }
  };

  return (
    <>
      {/* ================= FORM ================= */}
      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
          Send an Enquiry
        </h3>

        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Fill the form and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[var(--accent)] text-white rounded-lg disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Submit Enquiry 🚀"}
          </button>
        </form>
      </div>

      {/* ================= OTP MODAL ================= */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-center">Verify OTP</h3>

            <p className="text-sm text-gray-500 text-center mt-2">
              Enter the OTP sent to your email/phone
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mt-4 border rounded-lg px-4 py-2 text-center tracking-widest"
            />

            <button
              onClick={handleVerifyOtp}
              disabled={verifyLoading}
              className="w-full mt-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
            >
              {verifyLoading ? "Verifying..." : "Verify & Submit"}
            </button>

            <button
              onClick={() => setShowOtpModal(false)}
              className="w-full mt-2 text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
