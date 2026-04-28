"use client";

const plans = [
  {
    title: "Starter",
    price: "₹999/mo",
    cta: "Start Free Trial",
    href: "https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I%27m%20interested%20in%20the%20Starter%20plan%20for%20Review%20Uplift.",
    items: ["Review landing page", "Review QR code", "Review widget"],
    highlight: false,
  },
  {
    title: "Growth",
    price: "₹1,999/mo",
    cta: "Schedule Demo",
    href: "https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I%27m%20interested%20in%20scheduling%20a%20demo%20for%20the%20Growth%20plan.",
    items: [
      "Everything in Starter",
      "Negative review protection",
      "NFC stand + review card",
      "AI reply automation",
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "₹3,999/mo",
    cta: "Schedule Demo",
    href: "https://api.whatsapp.com/send?phone=918368573451&text=Hello,%20I%27m%20interested%20in%20scheduling%20a%20demo%20for%20the%20Premium%20plan.",
    items: [
      "Everything in Growth",
      "Advanced review analytics",
      "Social proof sharing",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section
      id="pricing"
      className="py-24 px-4 md:px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        {/* TAG */}
        <p
          className="text-sm font-semibold uppercase tracking-[0.3em]"
          style={{ color: "var(--accent)" }}
        >
          Pricing plans
        </p>

        {/* TITLE */}
        <h2
          className="mt-4 text-4xl font-bold sm:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          Pricing built for growth and momentum.
        </h2>

        {/* SUBTEXT */}
        <p
          className="mx-auto mt-5 max-w-2xl text-lg leading-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Choose the plan that fits your review strategy. Every package includes
          review automation, reputation protection, and WhatsApp support.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col h-full p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg"
            style={{
              background: "var(--bg)",
              border: `1px solid ${
                plan.highlight ? "var(--accent)" : "var(--border)"
              }`,
            }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-sm uppercase tracking-[0.2em]"
                  style={{ color: "var(--accent)" }}
                >
                  {plan.title}
                </p>

                <p
                  className="mt-4 text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {plan.price}
                </p>
              </div>

              {plan.highlight && (
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "var(--accent)",
                    color: "#000",
                  }}
                >
                  Popular
                </span>
              )}
            </div>

            {/* FEATURES */}
            <ul className="mt-10 space-y-4 flex-1">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={plan.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full text-center px-6 py-4 rounded-md font-semibold transition"
              style={{
                background: plan.highlight
                  ? "var(--accent)"
                  : "var(--bg-secondary)",
                color: plan.highlight ? "#000" : "var(--text-primary)",
                border: plan.highlight ? "none" : "1px solid var(--border)",
              }}
              onMouseOver={(e) => {
                if (plan.highlight) {
                  e.currentTarget.style.background = "var(--accent-hover)";
                }
              }}
              onMouseOut={(e) => {
                if (plan.highlight) {
                  e.currentTarget.style.background = "var(--accent)";
                }
              }}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
