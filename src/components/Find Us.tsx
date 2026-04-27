import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgChicken from "../assets/fried-chicken.jpg";
import gofood from "../assets/gofood.png";
import grabfood from "../assets/grabfood.png";
import shopeefood from "../assets/shopeefood.png";
import phone from "../assets/iphone.png";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const FindUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".order-card",
        { y: 25, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        phoneRef.current,
        { x: -80, opacity: 0, rotate: -8 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="findus"
      className="relative flex min-h-[35vh] items-center overflow-hidden bg-[#FBF1EB] py-8 md:min-h-[50vh] md:py-20"
    >
      <div className="relative mx-auto h-[270px] w-full md:h-[300px] lg:h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${bgChicken})` }}
        />

        <div className="absolute inset-0 bg-[#E51F1F]/65" />

        <div className="relative mx-auto grid h-full max-w-screen-xl grid-cols-1 items-center gap-8 px-6 md:px-10 lg:grid-cols-2 lg:px-14">
          <div className="relative hidden h-full items-center lg:flex">
            <img
              ref={phoneRef}
              src={phone}
              alt="Instagram Mockup"
              className="absolute left-[30px] top-1/2 z-20 h-[500px] w-auto -translate-y-1/2 object-contain"
            />
          </div>

          <div
            ref={contentRef}
            className="relative z-30 text-center text-white lg:text-left"
          >
            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Temukan Kami di
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#"
                className="order-card inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <img src={gofood} alt="GoFood" className="h-7 w-7 object-contain" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Order via
                  </p>
                  <p className="text-sm font-semibold sm:text-base">GoFood</p>
                </div>
              </a>

              <a
                href="#"
                className="order-card inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <img src={grabfood} alt="GrabFood" className="h-7 w-7 object-contain" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Order via
                  </p>
                  <p className="text-sm font-semibold sm:text-base">GrabFood</p>
                </div>
              </a>

              <a
                href="#"
                className="order-card inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <img
                  src={shopeefood}
                  alt="ShopeeFood"
                  className="h-7 w-7 object-contain"
                />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Order via
                  </p>
                  <p className="text-sm font-semibold sm:text-base">ShopeeFood</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;