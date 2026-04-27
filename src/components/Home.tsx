import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ayam from "../assets/ayam.webp";
import bgChicken from "../assets/fried-chicken.webp";
import panah from "../assets/panah.webp";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rotateTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -80, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      gsap.fromTo(
        photoRef.current,
        { x: 120, scale: 0.85, rotate: 6, opacity: 0 },
        {
          x: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.3,
        },
      );

      gsap.to(photoRef.current, {
        y: 18,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const toRotate = [
      "Murah Meriah...",
      "Pedasnya Nampol...",
      "Bikin Nagih...",
      "Porsi Mantap...",
    ];

    const period = 2000;
    let loopNum = 0;
    let txt = "";
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const fullTxt = toRotate[loopNum % toRotate.length];

      txt = isDeleting
        ? fullTxt.substring(0, txt.length - 1)
        : fullTxt.substring(0, txt.length + 1);

      if (rotateTextRef.current) {
        rotateTextRef.current.innerHTML = `
          <span class="text-yellow-300 drop-shadow-lg">${txt}</span>
          <span class="text-white/90">|</span>
        `;
      }

      let delta = 120 - Math.random() * 60;

      if (isDeleting) delta /= 2;

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && txt === "") {
        isDeleting = false;
        loopNum++;
        delta = 450;
      }

      timeout = setTimeout(tick, delta);
    };

    tick();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#E51F1F]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: `url(${bgChicken})`,
        }}
      />

      <div className="absolute inset-0 bg-[#E51F1F]/65" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(255,255,255,0.25), transparent 30%), radial-gradient(circle at 75% 55%, rgba(255,200,100,0.3), transparent 35%)",
        }}
      />

      <div className="absolute right-[13%] top-1/2 h-[580px] w-[580px] -translate-y-1/2 rounded-full bg-white/35 blur-3xl" />
      <div className="absolute right-[12%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-yellow-200/30 blur-2xl" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 pt-24 sm:pt-28 lg:px-14 lg:pt-0">
        <div className="grid min-h-[calc(100vh-88px)] grid-cols-1 items-center gap-0 lg:grid-cols-12 lg:gap-10">
          <div ref={textRef} className="text-center lg:col-span-6 lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Ayam Geprek Abang
            </h1>

            <div className="mt-3 h-[1.4em] text-2xl font-extrabold sm:text-3xl md:text-4xl">
              <div ref={rotateTextRef} />
            </div>

            <div className="mt-8">
              <button className="rounded-full bg-white px-7 py-3 font-semibold text-[#E51F1F] shadow-md transition hover:scale-105">
                Menu Kita
              </button>
            </div>
          </div>

          <div
            ref={photoRef}
            className="relative -mt-24 flex justify-center lg:col-span-6 lg:mt-0 lg:justify-end"
          >
            <img
              src={Ayam}
              alt="Product"
              className="w-[380px] scale-x-[-1] object-contain drop-shadow-2xl sm:w-[620px] md:w-[820px] lg:w-[1050px]"
            />

            <div className="absolute right-2 top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white font-bold text-[#E51F1F] shadow-lg sm:h-24 sm:w-24">
              <span className="text-xs">Hanya</span>
              <span className="text-4xl">10K</span>
              <span className="text-xs">rupiah</span>
            </div>

            <img
              src={panah}
              alt="Ayam Crispy Sambal Bawang Pedas Gurih"
              className="absolute right-[-1px] bottom-1 z-20 w-[180px] object-contain drop-shadow-xl sm:w-[140px] md:w-[200px] lg:w-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Kurva putih bawah */}
      <div className="pointer-events-none absolute bottom-[-10px] left-0 z-20 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block h-[90px] w-full md:h-[130px] lg:h-[150px]"
        >
          <path
            d="M0,120 C220,40 480,40 720,110 C950,175 1220,170 1440,40 L1440,180 L0,180 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;
