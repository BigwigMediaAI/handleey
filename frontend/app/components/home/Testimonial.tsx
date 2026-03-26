"use client";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, LocalBiz",
    review:
      "Handleey completely transformed how we manage reviews. Our rating improved from 3.9 to 4.6 in just 2 months.",
  },
  {
    name: "Ankit Verma",
    role: "Marketing Head, GrowthX",
    review:
      "The real-time alerts and sentiment analysis are game changers. We never miss a review now.",
  },
  {
    name: "Priya Singh",
    role: "Agency Owner",
    review:
      "Managing multiple clients is so easy with Handleey. The dashboard is clean and super powerful.",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Reviews Managed",
  },
  {
    value: "4.7⭐",
    label: "Average Rating",
  },
  {
    value: "200+",
    label: "Businesses Trust Us",
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
  },
];

export default function Testimonials() {
  return (
    <div>
      <section className="bg-[var(--bg-secondary)] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Trusted by businesses and agencies to manage and grow their online
            reputation.
          </p>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-left shadow-sm hover:shadow-lg transition"
              >
                {/* Stars */}
                <div className="text-yellow-400 mb-3">★★★★★</div>

                {/* Review */}
                <p className="text-sm text-[var(--text-secondary)]">
                  “{t.review}”
                </p>

                {/* User */}
                <div className="mt-4">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-md transition"
              >
                <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
