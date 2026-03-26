"use client";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Hotel Owner, Delhi",
    review:
      "Handleyee helped us go from 3.9 to 4.7 ⭐ in just 8 weeks. AI replies saved hours every day and our response rate is now above 90%.",
  },
  {
    name: "Ankit Verma",
    role: "Marketing Head, Hospitality Group",
    review:
      "We manage 5+ properties and everything is centralized now. Reviews, social comments, analytics — all in one dashboard.",
  },
  {
    name: "Priya Singh",
    role: "Agency Owner",
    review:
      "The AI replies + team workflow is insane. We handle multiple clients easily and never miss a review again.",
  },
];

const stats = [
  { value: "10K+", label: "Reviews Managed" },
  { value: "4.8⭐", label: "Avg Rating Improved" },
  { value: "200+", label: "Businesses Onboarded" },
  { value: "95%", label: "Response Rate Achieved" },
];

export default function Testimonials() {
  return (
    <div>
      {/* 🔥 TESTIMONIALS */}
      <section className="relative bg-[var(--bg-secondary)] py-24 px-4 md:px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto text-center relative">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Trusted by Businesses That Care About Reputation
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            From hotels to agencies — teams use Handleyee to manage reviews,
            respond faster, and grow their brand trust.
          </p>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="relative group bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 text-yellow-400 mb-4 text-sm">
                    ★★★★★
                  </div>

                  {/* Review */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    “{t.review}”
                  </p>

                  {/* User */}
                  <div className="mt-6 flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-semibold">
                      {t.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <p className="mt-10 text-sm text-[var(--text-secondary)]">
            ⭐ Used by 200+ businesses across hospitality & services
          </p>
        </div>
      </section>

      {/* 🔥 STATS SECTION */}
      <section className="relative bg-[var(--bg)] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
