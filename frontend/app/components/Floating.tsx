"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP PANEL ================= */}
      <div className="hidden md:block">
        {open && (
          <div
            className="fixed bottom-28 right-6 w-[320px] rounded-xl shadow-2xl overflow-hidden z-50"
            style={{ background: "var(--bg)" }}
          >
            {/* HEADER */}
            <div
              className="px-5 py-4 text-white font-semibold text-center"
              style={{ background: "var(--accent)" }}
            >
              How would you like to contact us?
            </div>

            {/* OPTIONS */}
            <div className="divide-y" style={{ borderColor: "var(--border)" }}>
              <a
                href="https://api.whatsapp.com/send?phone=918368573451"
                target="_blank"
                className="flex items-center gap-4 px-5 py-4"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-medium">Start Free Trial</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    We are available 24x7
                  </p>
                </div>
              </a>

              <a
                href="tel:+918368573451"
                className="flex items-center gap-4 px-5 py-4"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium">Call: +91 8368573451</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    10am - 7pm (IST)
                  </p>
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I%27d%20like%20to%20schedule%20a%20demo"
                target="_blank"
                className="flex items-center gap-4 px-5 py-4"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500 text-white">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="font-medium">Schedule a Demo</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    15 min Google Meet / Zoom
                  </p>
                </div>
              </a>
            </div>

            <div
              className="text-center text-xs py-2"
              style={{ color: "var(--text-secondary)" }}
            >
              Powered by Handlyee
            </div>
          </div>
        )}

        {/* FLOAT BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="fixed bottom-12 right-6 h-14 w-14 rounded-full flex items-center justify-center shadow-xl z-50"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* ================= MOBILE BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <div
          className="flex"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* WHATSAPP */}
          <a
            href="https://api.whatsapp.com/send?phone=918368573451"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold"
            style={{
              background: "#fff",
              color: "#25D366",
            }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* CALL */}
          <a
            href="tel:+918368573451"
            className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}
