"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Boost Reviews & Rank #1 on Google",
    description:
      "100X your positive reviews, avoid negative feedback, AI-powered replies, NFC cards and social sharing — all in one platform.",
    image: "/screenshot/img (1).jpeg",
  },
  {
    title: "Collect Reviews Instantly",
    description:
      "Use QR codes and NFC cards to collect reviews in seconds. No friction, no hassle — just tap and review.",
    image: "/screenshot/img (2).jpeg",
  },
  {
    title: "AI Replies That Save Time",
    description:
      "Automatically respond to reviews using AI and build trust with your customers effortlessly.",
    image: "/screenshot/img (3).jpeg",
  },
];

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I'm%20interested%20in%20starting%20a%20free%20trial.";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20 px-4 "
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* SLIDER */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full grid md:grid-cols-2 items-center gap-10"
            >
              {/* LEFT */}
              <div className="space-y-6">
                <h1
                  className="text-4xl md:text-5xl font-bold leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {slide.title}
                </h1>

                <p
                  className="text-lg max-w-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {slide.description}
                </p>

                {/* CTA BUTTON */}
                <a
                  href={WHATSAPP_LINK}
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

                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  No Credit Card Required.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <img
                    src={slide.image}
                    alt="slide"
                    className="w-full h-[350px] md:h-[420px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-3 w-3 rounded-full transition"
              style={{
                background: current === i ? "var(--accent)" : "var(--border)",
                transform: current === i ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
