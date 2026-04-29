"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* PANEL */}
      {open && (
        <div
          className="fixed bottom-24 right-6 w-[320px] rounded-xl shadow-2xl overflow-hidden z-50"
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
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-medium">Start Free Trial</p>
                <p className="text-sm text-gray-500">We are available 24x7</p>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+918368573451"
              className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium">Call: +91 8368573451</p>
                <p className="text-sm text-gray-500">10am - 7pm (IST)</p>
              </div>
            </a>

            {/* Demo */}
            <a
              href="https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I%27d%20like%20to%20schedule%20a%20demo"
              target="_blank"
              className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500 text-white">
                <Calendar size={20} />
              </div>
              <div>
                <p className="font-medium">Schedule a Demo</p>
                <p className="text-sm text-gray-500">
                  15 min Google Meet / Zoom
                </p>
              </div>
            </a>

            {/* Video */}
            {/* <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 cursor-pointer">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white">
                ▶
              </div>
              <div>
                <p className="font-medium">See How it Works</p>
              </div>
            </div> */}
          </div>

          {/* FOOTER */}
          <div className="text-center text-xs py-2 text-gray-400">
            Powered by Handlyee
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full flex items-center justify-center shadow-xl z-50 transition"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
