"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTripadvisor,
} from "react-icons/fa";
import {
  SiAirbnb,
  SiExpedia,
  SiFoursquare,
  SiReddit,
  SiTrustpilot,
  SiX,
  SiYoutube,
  SiYelp,
  SiZomato,
} from "react-icons/si";
import { useEffect, useMemo, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=918368573451&text=Hello%2C%20I%27m%20interested%20in%20Critiquee.";
const PLATFORM_LOGIN = "https://vendors.critiquee.com/login";

const rotatingLines = [
  "Built for large-scale, multi-location businesses",
  "Turn feedback into five-star growth",
  "Manage every review from one place",
  "Reply faster with AI assistance",
  "Build trust before customers arrive",
  "Publish useful blogs on autopilot",
  "Launch your own white-label ORM platform",
];

const supportedPlatforms = [
  { name: "Google", icon: FaGoogle, color: "#4285f4" },
  { name: "Yelp", icon: SiYelp, color: "#ff1a1a" },
  { name: "Trustpilot", icon: SiTrustpilot, color: "#00b67a" },
  { name: "Foursquare", icon: SiFoursquare, color: "#f94877" },
  { name: "Zomato", icon: SiZomato, color: "#e23744" },
  { name: "Justdial", mark: "JD", color: "#f37a20" },
  { name: "Facebook", icon: FaFacebookF, color: "#1877f2" },
  { name: "Instagram", icon: FaInstagram, color: "#e94d8a" },
  { name: "LinkedIn", icon: FaLinkedinIn, color: "#0a66c2" },
  { name: "X", icon: SiX, color: "#ffffff" },
  { name: "YouTube", icon: SiYoutube, color: "#ff0000" },
  { name: "Reddit", icon: SiReddit, color: "#ff4500" },
  { name: "Tripadvisor", icon: FaTripadvisor, color: "#34e0a1" },
  { name: "Airbnb", icon: SiAirbnb, color: "#ff5a5f" },
  { name: "OpenTable", mark: "OT", color: "#da3743" },
  { name: "Agoda", mark: "agoda", color: "#7453db" },
  { name: "Expedia", icon: SiExpedia, color: "#fcbf14" },
];

const services = [
  [
    "Review management",
    "Bring Google, Facebook, TripAdvisor and every customer conversation into one calm, powerful workspace.",
    "#f6b80c",
  ],
  [
    "AI review replies",
    "Give every customer a thoughtful response in seconds while your brand voice stays consistent.",
    "#2f7cf6",
  ],
  [
    "Review collection",
    "QR codes and NFC tools make it beautifully simple for happy customers to leave feedback.",
    "#14b887",
  ],
  [
    "Social proof",
    "Turn positive reviews into shareable posts and persuasive widgets that make your credibility visible.",
    "#8b5cf6",
  ],
  [
    "Reputation insights",
    "See sentiment, response rate and review trends clearly—then know exactly what needs attention.",
    "#ef5350",
  ],
  [
    "AI blogging engine",
    "Generate and schedule daily SEO blogs for every client, built around their service, location and brand voice.",
    "#8b5cf6",
  ],
  [
    "Vendor programme",
    "Sell a fully white-labelled reputation platform under your own agency brand, with your own clients and pricing.",
    "#34e0a1",
  ],
];

const features = [
  ["One inbox", "Reviews, messages and comments in one focused dashboard."],
  [
    "Smart replies",
    "AI-assisted replies that are fast, personal and on-brand.",
  ],
  [
    "More reviews",
    "NFC and QR collection journeys that customers actually finish.",
  ],
  ["Clear signals", "Practical insight from every rating, response and trend."],
];

const stats = [
  ["50+", "Platforms connected"],
  ["15 sec", "To collect a review"],
  ["24/7", "Reputation monitoring"],
  ["1", "Unified workspace"],
];

const testimonials = [
  {
    quote:
      "Critiquee turned a scattered review process into our most reliable source of new business.",
    name: "Arjun Mehta",
    role: "Founder, The Urban Plate",
    score: "4.9",
    color: "#f6b80c",
  },
  {
    quote:
      "The AI replies sound like us, but our team now responds while the customer moment is still fresh.",
    name: "Nisha Kapoor",
    role: "Marketing Director, Aster Clinics",
    score: "98%",
    color: "#34e0a1",
  },
  {
    quote:
      "Our clients see the value immediately. It feels like a premium platform built around their brand.",
    name: "Rohan Shah",
    role: "Agency Partner, Growth Loop",
    score: "3×",
    color: "#b99cff",
  },
];

const networkPlatforms = [
  {
    name: "Google",
    icon: FaGoogle,
    color: "#4285f4",
    position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "#1877f2",
    position: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "#e94d8a",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "#0a66c2",
    position: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Tripadvisor",
    icon: FaTripadvisor,
    color: "#34e0a1",
    position: "left-[17%] top-[17%] -translate-x-1/2 -translate-y-1/2",
  },
];

const ormCapabilities = [
  [
    "Google Business Profile",
    "Connect locations, monitor reviews and keep your listing reputation healthy.",
  ],
  [
    "Multi-platform inbox",
    "Fetch and reply to reviews from Google, Facebook, Tripadvisor, Justdial and more.",
  ],
  [
    "Review request campaigns",
    "Send smart review invitations through QR, NFC, WhatsApp, SMS and email.",
  ],
  [
    "AI response assistant",
    "Generate brand-safe review replies that still sound human and personal.",
  ],
  [
    "Sentiment & competitor tracking",
    "Understand trends, spot risks and track how your reputation compares.",
  ],
  [
    "Social publishing",
    "Turn great reviews into polished social posts and share them from one workspace.",
  ],
  [
    "Widgets & social proof",
    "Show your strongest reviews directly on your website to improve conversion.",
  ],
  [
    "Teams, branches & approvals",
    "Give each location and team the right access, workflow and approval process.",
  ],
];

const faqs = [
  [
    "Which platforms can I connect?",
    "Critiquee brings together Google, Facebook, TripAdvisor, Booking.com, Justdial and 50+ channels in one workspace.",
  ],
  [
    "Can Critiquee reply to reviews automatically?",
    "Yes. Use AI-assisted responses to draft thoughtful replies quickly, then review and publish them with confidence.",
  ],
  [
    "How do QR and NFC review tools work?",
    "Customers tap your NFC stand or scan a QR code and are guided to leave feedback in just a few seconds.",
  ],
  [
    "Can I protect against negative feedback?",
    "Critiquee helps you route private feedback into a recovery workflow, so your team can resolve concerns before they escalate.",
  ],
];

function useCinematicMotion() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 72, opacity: 0, rotateX: -12, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 86%" },
          },
        );
      });

      gsap.fromTo(
        ".story-letter",
        { opacity: 0, y: 70, rotateX: -85 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.016,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".story-scene",
            start: "top 55%",
            end: "bottom 58%",
            scrub: 1,
          },
        },
      );

      gsap.to(".globe-line", {
        strokeDashoffset: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".results-scene",
          start: "top 66%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".capability-row",
        { x: -90, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".capabilities-scene",
            start: "top 70%",
          },
        },
      );

    });

    media.add("(min-width: 768px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero-scene",
            start: "top top",
            end: "+=145%",
            scrub: 1,
            pin: true,
          },
        })
        .to(
          ".hero-copy",
          { y: -130, opacity: 0, scale: 0.76, filter: "blur(14px)" },
          0,
        )
        .to(".hero-network", { scale: 1.22, y: 105, opacity: 0.35 }, 0)
        .to(".hero-orbit", { rotate: 120, scale: 1.28 }, 0)
        .to(".hero-next", { y: 0, opacity: 1 }, 0.38);

      gsap.to(".services-track", {
        xPercent: -78,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-scene",
          start: "top top",
          end: "+=360%",
          scrub: 1,
          pin: true,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".growth-scene",
            start: "top top",
            end: "+=145%",
            scrub: 1,
            pin: true,
          },
        })
        .to(".growth-vendor", { xPercent: -16, yPercent: -7, rotate: -5 }, 0)
        .to(".growth-blog", { xPercent: 16, yPercent: 7, rotate: 5 }, 0)
        .to(".growth-core", { scale: 1.08, opacity: 0.45 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".signal-scene",
            start: "top top",
            end: "+=175%",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          ".signal-heading",
          { y: 90, opacity: 0, filter: "blur(12px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", ease: "power3.out" },
          0,
        )
        .to(".signal-copy", { xPercent: -115, opacity: 0 }, 0.32)
        .to(".signal-dashboard", { scale: 1.04, rotateY: -8, rotateX: 5 }, 0.18)
        .to(".signal-wave", { strokeDashoffset: 0 }, 0.3)
        .to(".signal-score", { scale: 1.35, opacity: 1 }, 0.48)
        .to(".signal-chip", { y: 0, opacity: 1, stagger: 0.08 }, 0.55)
        .to(".signal-final", { y: 0, opacity: 1 }, 0.7);

      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      gsap.set(cards.slice(1), { yPercent: 125, rotate: 10, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".testimonials-scene",
            start: "top top",
            end: "+=230%",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          ".testimonial-intro",
          { y: 70, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)" },
          0,
        )
        .to(
          cards[0],
          { scale: 0.9, xPercent: -12, rotate: -7, opacity: 0.52 },
          0.35,
        )
        .to(cards[1], { yPercent: 0, rotate: 0, opacity: 1 }, 0.35)
        .to(
          cards[1],
          { scale: 0.9, xPercent: 12, rotate: 7, opacity: 0.52 },
          0.63,
        )
        .to(cards[2], { yPercent: 0, rotate: 0, opacity: 1 }, 0.63)
        .to(
          ".testimonial-orb",
          { scale: 1.45, rotate: 180, opacity: 0.85 },
          0.1,
        );
    });
    media.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 46, opacity: 0, rotate: 3 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.14,
          scrollTrigger: { trigger: ".testimonials-scene", start: "top 74%" },
        },
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
      media.revert();
      lenis.destroy();
    };
  }, []);
}

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 1800);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#05070b] text-white"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto grid h-24 w-24 place-items-center rounded-[30px] border border-white/15 bg-[#f6b80c] text-4xl font-black text-[#071121]"
              animate={{
                borderRadius: ["30px", "999px", "30px"],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 2.1, repeat: Infinity }}
            >
              C
            </motion.div>
            <p className="mt-6 text-xs font-black uppercase tracking-[.36em] text-[#f6b80c]">
              Loading Critiquee
            </p>
            <motion.div
              className="mt-5 h-px w-64 bg-white/15"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  useCinematicMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [line, setLine] = useState(0);
  const story = useMemo(
    () => "REPUTATION IS BUILT ONE CUSTOMER MOMENT AT A TIME.",
    [],
  );
  useEffect(() => {
    const id = window.setInterval(
      () => setLine((i) => (i + 1) % rotatingLines.length),
      1800,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="cinematic-site relative overflow-x-clip bg-[#05070b] text-white">
      <Loader />
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between rounded-full border border-white/10 bg-[#05070b]/70 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3 text-lg font-black">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f6b80c] text-[#08111d]">
              C
            </span>
            CRITIQUEE
          </a>
          <div className="hidden gap-7 text-xs font-bold uppercase tracking-[.16em] text-white/60 md:flex">
            <a href="#features">Platform</a>
            <a href="#services">Solutions</a>
            <a href="#results">Results</a>
            <a href="#faq">FAQ</a>
          </div>
          <a
            href={PLATFORM_LOGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#f6b80c] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#071121] md:block"
          >
            Visit platform
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mx-2 mt-2 grid gap-5 rounded-2xl border border-white/10 bg-[#0d1119] p-6 text-sm font-bold">
            <a onClick={() => setMenuOpen(false)} href="#features">
              Platform
            </a>
            <a onClick={() => setMenuOpen(false)} href="#services">
              Solutions
            </a>
            <a onClick={() => setMenuOpen(false)} href="#results">
              Results
            </a>
            <a
              href={PLATFORM_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#f6b80c] px-4 py-3 text-center text-[#071121]"
            >
              VISIT PLATFORM
            </a>
          </div>
        )}
      </header>

      <section
        id="top"
        className="hero-scene relative min-h-[700px] overflow-hidden md:min-h-screen"
      >
        <div className="absolute inset-0 cinematic-grid opacity-60" />
        <div className="hero-orbit absolute left-1/2 top-1/2 h-[76vmin] w-[76vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f6b80c]/25" />
        <div className="hero-orbit absolute left-1/2 top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(246,184,12,.16),transparent_28%),linear-gradient(180deg,transparent_35%,#05070b_88%)]" />
        <div className="hero-copy relative z-10 grid min-h-[700px] place-items-center px-5 pb-28 pt-32 text-center md:min-h-screen">
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[.34em] text-[#f6b80c]">
              Built for large-scale, multi-location business management
            </p>
            <h1 className="mx-auto max-w-6xl text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[.82] tracking-[-.06em]">
              Turn every
              <br />
              customer voice
              <br />
              into momentum.
            </h1>
            <p className="mt-8 text-sm font-bold uppercase tracking-[.16em] text-[#f6b80c] md:text-base">
              {rotatingLines[line]}
              <span className="ml-2 inline-block h-5 w-px animate-pulse bg-[#f6b80c] align-middle" />
            </p>
          </div>
        </div>
        <div className="hero-network pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[min(84vw,760px)] w-[min(84vw,760px)] -translate-x-1/2 -translate-y-1/2 opacity-80">
          <div className="network-orbit absolute inset-[5%] rounded-full border border-dashed border-[#f6b80c]/30" />
          <div className="network-orbit network-orbit-slow absolute inset-[20%] rounded-full border border-white/10" />
          <div className="network-center absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#f6b80c]/50 bg-[#f6b80c]/10 shadow-[0_0_80px_rgba(246,184,12,.34)]">
            <span className="text-4xl text-[#f6b80c]">★</span>
            <span className="absolute -bottom-7 whitespace-nowrap text-[9px] font-black uppercase tracking-[.25em] text-[#f6b80c]">
              Your reputation
            </span>
          </div>
          <div className="network-orbit absolute inset-[5%] rounded-full">
            {networkPlatforms.map(({ name, icon: Icon, color, position }) => (
              <div key={name} className={`network-icon absolute ${position}`}>
                <div
                  className="network-icon-inner grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-[#0b1018]/90 text-xl shadow-xl backdrop-blur"
                  style={{ color }}
                >
                  <Icon />
                </div>
                <span className="mt-2 block text-center text-[9px] font-bold uppercase tracking-wider text-white/55">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-next absolute inset-x-0 bottom-10 z-30 translate-y-12 px-5 text-center opacity-0">
          <p className="text-2xl font-black uppercase leading-[.86] md:text-5xl">
            See every review.
            <br />
            Shape every impression.
          </p>
        </div>
      </section>

      <section className="story-scene relative min-h-screen overflow-hidden px-5 py-32 md:px-12 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(47,124,246,.18),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(246,184,12,.14),transparent_30%)]" />
        <p
          data-reveal
          className="relative text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]"
        >
          A better way to be trusted
        </p>
        <h2 className="relative mt-10 max-w-7xl text-[clamp(3.4rem,8vw,8.2rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
          {story.split("").map((letter, i) => (
            <span className="story-letter inline-block origin-bottom" key={i}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </h2>
        <p
          data-reveal
          className="relative mt-14 max-w-3xl text-lg leading-8 text-white/65 md:text-2xl md:leading-10"
        >
          Critiquee makes feedback simple to collect, impossible to miss, and
          effortless to act on. Your team gets the clarity to respond quickly
          and the tools to turn happy customers into your best marketing
          channel.
        </p>
      </section>

      <section
        id="features"
        className="relative bg-[#0b1018] px-5 py-28 md:px-12 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1400px] items-end gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div data-reveal>
            <p className="text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
              One calm command center
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-[.86] tracking-[-.05em] md:text-7xl">
              Every review.
              <br />
              Every signal.
              <br />
              One clear view.
            </h2>
          </div>
          <div
            data-reveal
            className="grid min-h-[470px] grid-cols-2 gap-3 rounded-sm border border-white/10 bg-black/25 p-3"
          >
            {features.map(([title, text], i) => (
              <div
                key={title}
                className="flex flex-col justify-end border border-white/10 bg-white/[.035] p-5"
                style={{
                  backgroundImage: `radial-gradient(circle at ${i % 2 ? "75% 20%" : "25% 30%"}, rgba(246,184,12,.13), transparent 38%)`,
                }}
              >
                <span className="mb-auto text-xs font-black text-[#f6b80c]">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-black uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="platforms-scene relative overflow-hidden bg-[#070b12] px-5 py-28 md:px-12 lg:px-16">
        <div className="absolute inset-0 cinematic-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7cf6]/10 blur-[130px]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
          <div data-reveal>
            <p className="text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
              Everywhere your customers speak
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-[.84] tracking-[-.06em] md:text-7xl">
              One team.<br />
              Every location.<br />
              Every platform.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Bring reviews, messages and social signals from your entire
              business footprint into one live command centre. Scale from one
              storefront to hundreds of locations without losing the local
              context that customers expect.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-white/10 py-5 text-center">
              {[
                ["50+", "Channels"],
                ["∞", "Locations"],
                ["1", "Live view"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-white/10 last:border-r-0">
                  <strong className="block text-3xl font-black text-[#f6b80c]">{value}</strong>
                  <span className="mt-1 block text-[9px] font-black uppercase tracking-[.16em] text-white/45">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/10 bg-[#101722]/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl md:p-7">
            <div className="platform-panel-header flex items-start justify-between gap-3 border-b border-white/10 pb-5">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[.22em] text-white/45">Platform coverage</p>
                <p className="mt-1 text-sm font-bold text-white/80">All customer conversations, in motion</p>
              </div>
              <span className="shrink-0 rounded-full border border-[#34e0a1]/25 bg-[#34e0a1]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[.14em] text-[#34e0a1]">Live sync</span>
            </div>
            <div className="platform-marquee mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {supportedPlatforms.map(({ name, icon: Icon, mark, color }, index) => (
                <div key={`${name}-${index}`} className="platform-chip flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.035] px-3 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-black/25 text-base" style={{ color }}>
                    {Icon ? <Icon /> : <span className="text-[9px] font-black tracking-[-.08em]">{mark}</span>}
                  </span>
                  <span className="truncate text-xs font-black tracking-[-.02em] text-white/75">{name}</span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101722] to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="services-scene relative h-screen overflow-hidden"
      >
        <div className="flex h-screen items-center overflow-hidden">
          <div className="services-track flex w-max gap-5 px-[8vw]">
            {services.map(([title, text, color], index) => (
              <a
                href="#contact"
                key={title}
                className="group grid h-[72vh] w-[84vw] shrink-0 content-between border border-white/10 bg-[#10151e] p-7 md:w-[64vw] md:p-10 lg:w-[52vw]"
                style={{ boxShadow: `inset 0 0 130px ${color}22` }}
              >
                <div className="flex justify-between">
                  <span className="text-sm font-black tracking-[.22em] text-white/45">
                    0{index + 1}
                  </span>
                  <span
                    className="h-14 w-14 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
                <div>
                  <h3 className="max-w-[13ch] text-[clamp(2.5rem,6vw,5.6rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
                    {title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
                    {text}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-[#f6b80c] transition group-hover:bg-[#f6b80c] group-hover:text-black">
                    Explore <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-scene relative overflow-hidden bg-[#0b1018] px-5 py-28 md:px-12 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(246,184,12,.12),transparent_24%),radial-gradient(circle_at_15%_90%,rgba(47,124,246,.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div data-reveal className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
              The complete ORM operating system
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-[.86] tracking-[-.05em] md:text-7xl">
              Everything clients need to be found, trusted and chosen.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              From collecting a review to publishing the customer story behind
              it, Critiquee connects every reputation workflow in one place.
            </p>
          </div>
          <div className="mt-16 grid gap-x-10 md:grid-cols-2">
            {ormCapabilities.map(([title, text], index) => (
              <div
                key={title}
                className="capability-row flex gap-5 border-t border-white/10 py-7"
              >
                <span className="pt-1 text-xs font-black tracking-[.18em] text-[#f6b80c]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-[-.03em]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-7 text-white/55">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-scene relative min-h-screen overflow-hidden bg-[#05070b] px-5 py-20 md:h-screen md:px-12 md:py-0 lg:px-16">
        <div className="growth-core absolute left-1/2 top-1/2 z-0 grid h-56 w-56 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#f6b80c]/30 bg-[#f6b80c]/10 text-center shadow-[0_0_140px_rgba(246,184,12,.22)]">
          <span className="text-sm font-black uppercase leading-5 tracking-[.18em] text-[#f6b80c]">
            One platform
            <br />
            More growth
          </span>
        </div>
        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-10rem)] max-w-[1400px] items-center gap-8 md:h-full lg:grid-cols-2">
          <article className="growth-vendor relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#132a36,#0c1119_60%)] p-8 shadow-2xl md:p-12">
            <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full bg-[#34e0a1]/20 blur-2xl" />
            <p className="text-xs font-black uppercase tracking-[.28em] text-[#34e0a1]">
              For agencies & vendors
            </p>
            <h2 className="mt-8 max-w-md text-5xl font-black uppercase leading-[.84] tracking-[-.05em]">
              Build your own ORM business.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
              Join the Critiquee Vendor Programme and offer a fully
              white-labelled software platform under your own name. You own your
              brand, client relationship and market.
            </p>
            <ul className="mt-8 grid gap-3 text-sm font-bold text-white/80">
              {[
                "Your logo, colours and custom domain",
                "Create and manage client accounts",
                "Set your own packages and pricing",
                "Scalable tools for every business type",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#34e0a1]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={PLATFORM_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#34e0a1]/40 bg-[#34e0a1]/10 px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-[#34e0a1] transition hover:bg-[#34e0a1] hover:text-[#071121]"
            >
              Visit platform <ArrowUpRight size={15} />
            </a>
          </article>
          <article className="growth-blog relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#241a46,#0c1119_60%)] p-8 shadow-2xl md:p-12">
            <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full bg-[#a78bfa]/25 blur-2xl" />
            <p className="text-xs font-black uppercase tracking-[.28em] text-[#b99cff]">
              AI content engine
            </p>
            <h2 className="mt-8 max-w-md text-5xl font-black uppercase leading-[.84] tracking-[-.05em]">
              Daily SEO blogs, automatically.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
              Create location-aware, service-led blog content for each client
              automatically. Build topical authority, keep websites active and
              turn search visibility into steady growth.
            </p>
            <ul className="mt-8 grid gap-3 text-sm font-bold text-white/80">
              {[
                "Daily blog generation and scheduling",
                "Client brand voice and service keywords",
                "Local SEO topics for every business location",
                "Review insights turned into useful content",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#b99cff]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="signal-scene relative min-h-screen overflow-hidden bg-[#080c13] px-5 py-20 md:h-screen md:px-12 md:py-0 lg:px-16">
        <div className="absolute inset-0 opacity-70 cinematic-grid" />
        <div className="absolute left-[12%] top-[10%] h-80 w-80 rounded-full bg-[#2f7cf6]/15 blur-[110px]" />
        <div className="absolute bottom-[-10%] right-[6%] h-96 w-96 rounded-full bg-[#f6b80c]/12 blur-[120px]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-10rem)] max-w-[1400px] items-center gap-12 md:h-full lg:grid-cols-[.8fr_1.2fr]">
          <div className="signal-copy relative z-10">
            <p className="signal-heading text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
              Intelligence in motion
            </p>
            <h2 className="signal-heading mt-8 text-5xl font-black uppercase leading-[.84] tracking-[-.06em] md:text-7xl">
              Watch trust become your next advantage.
            </h2>
            <p className="signal-heading mt-8 max-w-xl text-lg leading-8 text-white/60">
              Every rating, response and customer moment becomes a clear
              signal—so your team can act before opportunities disappear.
            </p>
          </div>
          <div className="signal-dashboard relative mx-auto w-full max-w-3xl [perspective:1200px]">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#101824]/85 p-5 shadow-[0_35px_100px_rgba(0,0,0,.5)] backdrop-blur-xl md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-black uppercase tracking-[.22em] text-white/45">
                <span>Reputation pulse</span>
                <span className="text-[#34e0a1]">● Live</span>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-[1.1fr_.9fr]">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold text-white/45">
                        Trust score
                      </p>
                      <strong className="signal-score mt-2 block text-6xl font-black tracking-[-.08em] text-[#f6b80c] opacity-0">
                        94
                      </strong>
                    </div>
                    <span className="rounded-full bg-[#34e0a1]/15 px-3 py-1 text-xs font-black text-[#34e0a1]">
                      +18%
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 460 130"
                    className="mt-6 h-28 w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="signalGradient" x1="0" x2="1">
                        <stop stopColor="#2f7cf6" />
                        <stop offset="1" stopColor="#f6b80c" />
                      </linearGradient>
                    </defs>
                    <path
                      className="signal-wave"
                      d="M0 104 C48 96 56 74 96 82 S148 22 195 52 S259 104 300 62 S368 21 460 8"
                      fill="none"
                      stroke="url(#signalGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="650"
                      strokeDashoffset="650"
                    />
                  </svg>
                </div>
                <div className="grid gap-3">
                  {[
                    ["New reviews", "28", "#2f7cf6"],
                    ["Reply rate", "98%", "#34e0a1"],
                    ["Reach", "42K", "#b99cff"],
                  ].map(([label, value, color]) => (
                    <div
                      key={label}
                      className="signal-chip translate-y-8 rounded-xl border border-white/10 bg-white/[.035] p-4 opacity-0"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[.14em] text-white/45">
                        {label}
                      </p>
                      <strong
                        className="mt-1 block text-2xl font-black"
                        style={{ color }}
                      >
                        {value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="signal-final mt-5 flex items-center justify-between rounded-2xl border border-[#f6b80c]/20 bg-[#f6b80c]/[.07] p-4 text-sm opacity-0">
                <span className="font-bold text-white/75">
                  Your reputation is accelerating.
                </span>
                <span className="text-[#f6b80c]">↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-scene relative min-h-screen overflow-hidden bg-[#05070b] px-5 py-24 md:h-screen md:py-0 md:px-12 lg:px-16">
        <div className="testimonial-orb absolute left-1/2 top-1/2 h-[65vmin] w-[65vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f6b80c]/20 bg-[#f6b80c]/[.045] shadow-[0_0_150px_rgba(246,184,12,.12)]" />
        <div className="absolute inset-0 cinematic-grid opacity-30" />
        <div className="relative mx-auto grid min-h-[80vh] max-w-[1400px] items-center gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="testimonial-intro relative z-10">
            <p className="text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
              Loved in the real world
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-[.84] tracking-[-.06em] md:text-7xl">
              The kind of growth customers notice.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-white/60">
              The most convincing proof is a team that feels more in control of
              every customer conversation.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm font-black uppercase tracking-[.16em] text-white/45">
              <span className="text-[#f6b80c]">01</span>
              <span className="h-px w-12 bg-white/20" />
              <span>03 stories</span>
            </div>
          </div>
          <div className="relative min-h-[460px] md:min-h-[540px]">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="testimonial-card absolute inset-x-0 top-0 flex min-h-[440px] flex-col justify-between rounded-[30px] border border-white/15 bg-[#101722]/90 p-7 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-xl md:min-h-[510px] md:p-11"
                style={{
                  zIndex: index + 1,
                  boxShadow: `inset 0 0 90px ${testimonial.color}12, 0 30px 80px rgba(0,0,0,.45)`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-5xl font-black leading-none"
                    style={{ color: testimonial.color }}
                  >
                    &ldquo;
                  </span>
                  <div className="rounded-2xl border border-white/10 px-4 py-3 text-right">
                    <strong
                      className="block text-2xl font-black"
                      style={{ color: testimonial.color }}
                    >
                      {testimonial.score}
                    </strong>
                    <span className="text-[9px] font-black uppercase tracking-[.16em] text-white/45">
                      reputation lift
                    </span>
                  </div>
                </div>
                <blockquote className="max-w-3xl text-[clamp(1.7rem,3.4vw,3.6rem)] font-black leading-[.94] tracking-[-.05em]">
                  {testimonial.quote}
                </blockquote>
                <footer className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="font-black uppercase tracking-[-.02em]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-white/45">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex gap-1 text-[#f6b80c]">★★★★★</div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="results-scene relative overflow-hidden px-5 py-28 md:px-12 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
              Trust, made measurable
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-[.86] tracking-[-.05em] md:text-7xl">
              Build a brand
              <br />
              customers
              <br />
              choose first.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="border border-white/10 bg-white/[.035] p-5"
                >
                  <strong className="block text-4xl font-black text-[#f6b80c]">
                    {value}
                  </strong>
                  <span className="mt-3 block text-xs font-bold uppercase tracking-[.14em] text-white/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[570px] rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(47,124,246,.25),transparent_58%)]">
            <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 h-full w-full"
            >
              {[
                "M120 260 C230 100 430 140 495 270",
                "M120 370 C250 500 415 445 500 320",
                "M300 88 C365 220 355 420 275 520",
              ].map((line) => (
                <path
                  key={line}
                  className="globe-line"
                  d={line}
                  fill="none"
                  stroke="#f6b80c"
                  strokeWidth="2"
                  strokeDasharray="700"
                  strokeDashoffset="700"
                />
              ))}
            </svg>
            {[
              "left-[18%] top-[42%]",
              "left-[58%] top-[25%]",
              "left-[70%] top-[63%]",
              "left-[38%] top-[73%]",
            ].map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} h-3 w-3 rounded-full bg-[#f6b80c] shadow-[0_0_28px_#f6b80c]`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="bg-white px-5 py-28 text-[#071121] md:px-12 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-xs font-black uppercase tracking-[.32em] text-[#c98d00]">
              Questions, answered
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-[.86] tracking-[-.05em] md:text-7xl">
              Everything you need to know.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-8 text-[#526071]">
              Clear tools, a simple setup, and a reputation workflow your whole
              team can adopt.
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-black/10 p-6 open:border-[#c98d00]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-black uppercase leading-7">
                  <span>{q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/15 text-[#c98d00] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 border-t border-black/10 pt-5 leading-7 text-[#526071]">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative grid min-h-[82vh] place-items-center overflow-hidden px-5 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(246,184,12,.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(47,124,246,.18),transparent_24%)]" />
        <div data-reveal className="relative max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[.32em] text-[#f6b80c]">
            Start growing your reputation
          </p>
          <h2 className="mt-8 text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[.78] tracking-[-.07em]">
            Ready to be
            <br />
            remembered?
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-lg leading-8 text-white/65">
            Create review moments that feel effortless for customers and
            invaluable to your business.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            className="mt-10 inline-flex rounded-full bg-[#f6b80c] px-8 py-4 text-sm font-black uppercase tracking-[.14em] text-[#071121] transition hover:scale-105 hover:bg-white"
          >
            Start free trial
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs font-bold uppercase tracking-[.16em] text-white/40">
        © {new Date().getFullYear()} Critiquee · Reputation, in motion.
      </footer>
    </main>
  );
}
