import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePhoto from "../assets/ayam.png";
import bgChicken from "../assets/fried-chicken.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
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
    const text = "Crispy, Juicy, Boldly Delicious!";
    let index = 0;

    if (titleRef.current) {
      titleRef.current.innerHTML = "";
    }

    const typing = setInterval(() => {
      if (!titleRef.current) return;

      const currentText = text.substring(0, index);
      titleRef.current.innerHTML = currentText.replace(/\n/g, "<br />");

      index++;

      if (index > text.length) {
        clearInterval(typing);
      }
    }, 55);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#E51F1F] flex items-center"
    >

      <div
        className="absolute inset-0 bg-center bg-cover opacity-45"
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

      {/* Cahaya putih memancar di belakang ayam */}
      <div className="absolute right-[13%] top-1/2 h-[580px] w-[580px] -translate-y-1/2 rounded-full bg-white/35 blur-3xl" />
      <div className="absolute right-[12%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-yellow-200/30 blur-2xl" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-14">
        <div className="grid min-h-[calc(100vh-88px)] grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* LEFT - TEXT */}
          <div ref={textRef} className="text-center lg:col-span-6 lg:text-left">
            <h1
              ref={titleRef}
              className="min-h-[150px] text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            />

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0">
              Dive into the flavor-packed world of Zentucky Fried Chicken. Made
              with the finest ingredients, our crispy delights will keep you
              coming back for more. Order now and savor the goodness!
            </p>

            <div className="mt-8">
              <button className="rounded-full bg-white px-7 py-3 font-semibold text-[#E51F1F] shadow-md transition hover:scale-105">
                Menu Kita
              </button>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div
            ref={photoRef}
            className="relative flex justify-center lg:col-span-6 lg:justify-end"
          >
            <img
              src={profilePhoto}
              alt="Product"
              className="w-[520px] scale-x-[-1] object-contain drop-shadow-2xl sm:w-[700px] md:w-[880px] lg:w-[1050px]"
            />

            <div className="absolute right-2 top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white font-bold text-[#E51F1F] shadow-lg sm:h-24 sm:w-24">
              <span className="text-xs">Hanya</span>
              <span className="text-4xl">10K</span>
              <span className="text-xs">rupiah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
