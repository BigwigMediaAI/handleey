"use client";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Hotel Owner, Delhi",
    review:
      "Handlyee helped us go from 3.9 to 4.7 stars in just 8 weeks. AI replies saved hours every day and our response rate is now above 90%.",
  },
  {
    name: "Ankit Verma",
    role: "Marketing Head, Hospitality Group",
    review:
      "We manage 5+ properties with one dashboard now. Reviews, analytics, and social proof all flow through the same platform.",
  },
  {
    name: "Priya Singh",
    role: "Agency Owner",
    review:
      "The automation and slick review experience make our life easier. Customers love the tap-to-review flow and the reporting is excellent.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="demo"
      className="py-24 px-4 md:px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* TAG */}
        <p
          className="text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--accent)" }}
        >
          Trusted reviews
        </p>

        {/* TITLE */}
        <h2
          className="mt-4 text-4xl font-bold sm:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          Customers love how easy it feels.
        </h2>

        {/* SUBTEXT */}
        <p
          className="mx-auto mt-5 max-w-2xl text-lg leading-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Real stories from real businesses that scaled their reputation with
          Handlyee.
        </p>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 text-left transition hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              {/* TOP BORDER LINE */}
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl"
                style={{ background: "var(--accent)" }}
              />

              <div className="space-y-6">
                {/* RATING */}
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  <span>★★★★★</span>
                  <span style={{ color: "var(--text-secondary)" }}>
                    Top rated
                  </span>
                </div>

                {/* REVIEW */}
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  "{t.review}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl font-bold"
                    style={{
                      background: "var(--accent)",
                      color: "#000",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-10 text-sm" style={{ color: "var(--text-secondary)" }}>
          Many businesses use Handlyee for hospitality, retail, and services.
        </p>
      </div>
    </section>
  );
}
