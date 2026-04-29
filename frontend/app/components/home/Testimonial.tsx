"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
  {
    name: "Rohit Mehta",
    role: "Restaurant Owner",
    review:
      "Our review collection doubled within a month. The NFC cards are a game changer.",
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
        {/* HEADER */}
        <p
          className="text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--accent)" }}
        >
          Trusted reviews
        </p>

        <h2
          className="mt-4 text-4xl font-bold sm:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          Customers love how easy it feels.
        </h2>

        <p
          className="mx-auto mt-5 max-w-2xl text-lg leading-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Real stories from real businesses that scaled their reputation with
          Handlyee.
        </p>

        {/* SWIPER */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={4500} // smooth continuous feel
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="relative h-[280px] rounded-2xl p-6 flex flex-col"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* TOP ACCENT LINE (fixed to top) */}
                  <div
                    className="absolute top-0 left-0 w-full h-[4px] rounded-t-2xl"
                    style={{ background: "var(--accent)" }}
                  />

                  {/* CONTENT */}
                  <div className="flex flex-col h-full mt-2">
                    {/* RATING */}
                    <div
                      className="flex items-center gap-2 text-sm mb-3"
                      style={{ color: "var(--accent)" }}
                    >
                      ★★★★★
                    </div>

                    {/* SCROLLABLE REVIEW */}
                    <div className="flex-1 overflow-y-auto pr-2">
                      <p
                        className="text-sm leading-relaxed text-start"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        "{t.review}"
                      </p>
                    </div>

                    {/* USER (fixed bottom) */}
                    <div
                      className="flex items-center gap-4 mt-4 pt-4 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg font-bold"
                        style={{
                          background: "var(--accent)",
                          color: "#000",
                        }}
                      >
                        {t.name.charAt(0)}
                      </div>

                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-10 text-sm" style={{ color: "var(--text-secondary)" }}>
          Many businesses use Handlyee for hospitality, retail, and services.
        </p>
      </div>
    </section>
  );
}
