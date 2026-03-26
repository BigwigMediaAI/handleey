"use client";

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4 md:px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#6366f1,_#8b5cf6)] opacity-90" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Take Control of Your Online Reputation Today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-white/80 text-lg">
          Start managing reviews, improving ratings, and building trust — all in
          one powerful platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
            Book Demo 🚀
          </button>

          <button className="px-6 py-3 border border-white/50 rounded-full font-medium hover:bg-white/10 transition">
            Explore Product
          </button>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-white/70">
          No credit card required • Get started in minutes
        </p>
      </div>
    </section>
  );
}
