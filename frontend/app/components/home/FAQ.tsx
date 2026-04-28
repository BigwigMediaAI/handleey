"use client";

import { useState } from "react";

const faqs = [
  {
    question: "WHAT IS Handlyee?",
    answer:
      "Handlyee is a software tool designed to help businesses manage and improve their online reputation by collecting, analyzing, and leveraging customer feedback. With Handlyee, businesses can monitor and respond to reviews across multiple online platforms, generate more positive reviews, and gain insights into customer sentiment and satisfaction. The tool also offers analytics and reporting features to help businesses measure the impact of their reputation management efforts and make data-driven decisions.",
  },
  {
    question: "WHAT’S A REVIEW REQUEST PAGE?",
    answer:
      "A review request page is a custom landing page customers visit to leave feedback. It increases response rates significantly.",
  },
  {
    question: "HOW DOES IT FILTER OUT BAD REVIEWS?",
    answer:
      "Low-rated reviews are routed privately so you can resolve issues before they go public.",
  },
  {
    question: "WHAT PLATFORMS CAN I POST REVIEWS ON?",
    answer:
      "Google, Facebook, TripAdvisor, and 20+ platforms plus your own website.",
  },
  {
    question: "WHAT ARE EMAIL & SMS CREDITS?",
    answer:
      "Credits allow sending review requests via email and SMS. QR & WhatsApp are free.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-24 px-4"
      style={{ background: "var(--bg)" }}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
          Everything you need to know about Handlyee.
        </p>
      </div>

      {/* ACCORDION */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-xl transition-all duration-300"
              style={{
                border: isOpen
                  ? "1px solid var(--accent)"
                  : "1px solid var(--border)",
                background: isOpen ? "var(--bg-secondary)" : "var(--bg)",
              }}
            >
              {/* HEADER */}
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h3
                  className="text-base md:text-lg font-semibold transition"
                  style={{
                    color: isOpen ? "var(--accent)" : "var(--text-primary)",
                  }}
                >
                  {faq.question}
                </h3>

                {/* ICON */}
                <span
                  className="text-2xl font-bold transition"
                  style={{
                    color: isOpen ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
