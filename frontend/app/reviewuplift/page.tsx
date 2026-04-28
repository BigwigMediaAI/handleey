import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Monitor,
  Share2,
  Layers,
  QrCode,
  Smartphone,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Negative Reviews Protection",
    text: "Send bad reviews privately and make positive reviews public for better brand control.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI ChatGPT Review Reply",
    text: "Generate smart, personalized replies instantly with AI-driven review responses.",
  },
  {
    icon: <Monitor size={22} />,
    title: "Website Review Widgets",
    text: "Embed review widgets on your site so customers can leave feedback quickly.",
  },
  {
    icon: <Share2 size={22} />,
    title: "Share on Social Media",
    text: "Publish top reviews to social channels and boost your online visibility.",
  },
  {
    icon: <Layers size={22} />,
    title: "All Reviews In One Place",
    text: "Monitor Google, Facebook, TripAdvisor and more from one dashboard.",
  },
  {
    icon: <QrCode size={22} />,
    title: "QR Code Stand Tap Or Scan",
    text: "Let customers leave reviews in seconds with NFC or QR code scanning.",
  },
];

const plans = [
  {
    name: "Basic Plan",
    cta: "START FREE TRIAL",
    price: "₹999/mo",
    points: [
      "Review Landing Page",
      "Review QR Code",
      "Review Us Template",
      "Basic Support",
    ],
    link: "https://api.whatsapp.com/send?phone=918111081112&text=Hello,%20I'm%20Interested%20in%20the%20Basic%20Plan",
  },
  {
    name: "Standard Plan",
    cta: "SCHEDULE A DEMO",
    price: "₹1,999/mo",
    points: [
      "Everything in Basic+",
      "Negative Review Protection",
      "Free Basic Digital Card",
      "1 NFC Standee + 1 Review Card",
    ],
    link: "https://tidycal.com/reviewuplift/15-minute-meeting",
  },
  {
    name: "Premium Plan",
    cta: "SCHEDULE A DEMO",
    price: "₹3,999/mo",
    points: [
      "Everything in Standard+",
      "AI ChatGPT Auto Reply",
      "Social Sharing & Reminders",
      "Video Reviews + Premium Support",
    ],
    link: "https://tidycal.com/reviewuplift/15-minute-meeting",
  },
];

const faqs = [
  {
    question: "WHAT IS REVIEW UPLIFT?",
    answer:
      "Review Uplift is a reputation management platform that helps businesses collect, analyze, and respond to customer reviews across multiple channels.",
  },
  {
    question: "WHAT’S A REVIEW REQUEST PAGE?",
    answer:
      "A review request page is a customizable landing page customers visit to share feedback and leave ratings easily.",
  },
  {
    question: "HOW DOES IT FILTER OUT BAD REVIEWS?",
    answer:
      "Reviews can be routed privately so bad feedback is handled before it appears publicly, protecting your online reputation.",
  },
  {
    question: "WHAT PLATFORMS CAN I POST REVIEWS ON?",
    answer:
      "You can connect Google, Facebook, TripAdvisor, and 20+ other platforms to publish reviews from one place.",
  },
  {
    question: "WHAT ARE EMAIL & SMS CREDITS?",
    answer:
      "Credits are used to send review requests and reminders through email and SMS so you can reach customers directly.",
  },
  {
    question: "CAN I RESPOND TO REVIEWS VIA THE APP?",
    answer:
      "Yes — you can monitor all reviews and reply instantly from the dashboard using AI-assisted responses.",
  },
];

export const metadata = {
  title: "Review Uplift | Handleey Clone",
  description:
    "A Review Uplift landing page clone built inside the Handleey Next.js app.",
};

export default function ReviewUpliftPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text-primary)]">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.18),transparent_40%)]" />
          <div className="relative max-w-7xl mx-auto px-4 py-20 lg:px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 border border-white/10">
                  100X your positive reviews. Avoid Negative Reviews. AI-ChatGPT
                  powered replies.
                </div>

                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Boost Reviews & Rank{" "}
                    <span className="text-indigo-400">#1 on Google</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Review Uplift is the easiest way to manage your online
                    reputation, collect reviews, and respond with AI-powered
                    replies across Google and 20+ review platforms.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://api.whatsapp.com/send?phone=918111081112&text=Hello,%20I'm%20Interested%20in%20Free%20Trial"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                  >
                    START FREE TRIAL
                  </a>
                  <Link
                    href="#plans"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    See Plans <ChevronRight className="ml-2" size={16} />
                  </Link>
                </div>

                <p className="text-sm text-slate-400">
                  No Credit Card Required.
                </p>
              </div>

              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
                <div className="absolute -left-10 top-12 w-36 h-36 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -right-10 bottom-10 w-44 h-44 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="space-y-6">
                  <div className="rounded-3xl bg-slate-950/90 p-5 shadow-inner shadow-slate-950/20">
                    <div className="flex items-center justify-between text-sm text-slate-300 mb-4">
                      <span>Review Uplift Dashboard</span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
                        Live
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-3xl bg-slate-900 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Rating
                          </p>
                          <p className="mt-2 text-xl font-semibold">4.8 ⭐</p>
                        </div>
                        <div className="rounded-3xl bg-slate-900 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Reviews
                          </p>
                          <p className="mt-2 text-xl font-semibold">1,245+</p>
                        </div>
                        <div className="rounded-3xl bg-slate-900 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Replies
                          </p>
                          <p className="mt-2 text-xl font-semibold text-emerald-400">
                            92%
                          </p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 p-5">
                        <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                          <span>5★ Reviews</span>
                          <span>78%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <div className="h-full w-4/5 rounded-full bg-indigo-500" />
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 p-5">
                        <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                          <span>Response Rate</span>
                          <span>92%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <div className="h-full w-[92%] rounded-full bg-emerald-400" />
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-900 p-5 border border-slate-800">
                        <p className="text-sm text-slate-400">🆕 New Review</p>
                        <p className="mt-2 text-base text-slate-100">
                          “Amazing stay! Staff was very helpful.”
                        </p>
                        <p className="mt-3 text-xs text-emerald-300">
                          AI replied instantly ✔
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-secondary)] py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Integrates with Google and 20+ Review Platforms
            </p>
          </div>
        </section>

        <section className="py-20 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Key Benefits Of Review Uplift
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
                Everything your business needs to capture feedback, protect
                reputation, and grow with AI-assisted review management.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 transition"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-100 to-slate-50 text-indigo-600 mb-6 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-secondary)] py-20 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
                NFC Card and Stand
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] max-w-xl leading-relaxed">
                Introducing the ReviewUplift NFC QR Code Stand, the easiest way
                for customers to leave feedback in seconds. Tap or scan, submit
                a review, and boost visibility instantly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://api.whatsapp.com/send?phone=918111081112&text=Hello,%20I'm%20Interested%20in%20Free%20Trial"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  START FREE TRIAL
                </a>
                <a
                  href="tel:+918111081112"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Customer Care +91 81110 81112
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-xl">
              <div className="h-72 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-slate-100 to-slate-200" />
            </div>
          </div>
        </section>

        <section id="plans" className="py-20 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Our Plans
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
              Choose the plan that fits your growth goals and start collecting
              better reviews today.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                    {plan.name}
                  </p>
                  <p className="mt-4 text-3xl font-bold text-[var(--text-primary)]">
                    {plan.price}
                  </p>
                </div>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 text-[var(--accent)]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--bg-secondary)] py-20 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
                What Customers Are Saying
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] max-w-xl leading-relaxed">
                Manage reviews, save time with AI replies, and keep every
                customer interaction on point.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Rahul Sharma
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Hotel Owner, Delhi
                </p>
                <p className="mt-4 text-[var(--text-secondary)]">
                  “Handleey helped us go from 3.9 to 4.7 ⭐ in just 8 weeks. AI
                  replies saved hours every day.”
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Ankit Verma
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Marketing Head, Hospitality Group
                </p>
                <p className="mt-4 text-[var(--text-secondary)]">
                  “We manage 5+ properties and everything is centralized now.
                  Reviews and analytics in one place.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              FAQ's
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[var(--text-primary)]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
