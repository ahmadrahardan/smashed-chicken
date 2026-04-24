import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fotoFormalku from "../assets/logo.png";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        photoRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
      );

      if (contentRef.current) {
        tl.from(
          Array.from(contentRef.current.children),
          { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.7",
        );
      }

      gsap.to(photoRef.current, {
        y: 10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="aboutme"
      className="relative min-h-screen overflow-hidden bg-white flex items-center py-20"
    >
      {/* Ornamen background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-20 h-24 w-24 rounded-full bg-[#FDE7E9] blur-2xl opacity-70" />
        <div className="absolute left-16 top-28 h-16 w-16 rounded-full border border-[#F8C9CF] opacity-60" />
        <div className="absolute right-24 top-24 h-32 w-32 rounded-full bg-[#FDE7E9] blur-3xl opacity-50" />
        <div className="absolute right-[42%] top-24 flex gap-3 opacity-60">
          <span className="h-2 w-2 rounded-full bg-[#D62E37]" />
          <span className="h-2 w-2 rounded-full bg-[#D62E37]" />
          <span className="h-2 w-2 rounded-full bg-[#D62E37]" />
          <span className="h-2 w-2 rounded-full bg-[#D62E37]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* KIRI - FOTO */}
          <div ref={photoRef} className="flex justify-center lg:justify-start">
            <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] md:h-[430px] md:w-[430px]">
              {/* lingkaran accent belakang */}
              <div className="absolute inset-0 rounded-full border-[14px] border-[#F8B7BF]" />
              <div className="absolute -left-6 top-12 h-20 w-20 rounded-full bg-[#FDE7E9] opacity-80" />
              <div className="absolute right-2 top-10 h-5 w-5 rounded-full bg-[#D62E37]" />
              <div className="absolute right-[-10px] top-20 h-2.5 w-2.5 rounded-full bg-[#D62E37]" />
              <div className="absolute right-8 top-28 h-3 w-3 rounded-full bg-[#D62E37]" />

              {/* frame foto */}
              <div className="absolute inset-[18px] overflow-hidden rounded-full border-[10px] border-white shadow-xl">
                <img
                  src={fotoFormalku}
                  alt="About Me"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* dekorasi bawah */}
              <div className="absolute bottom-3 left-0 rotate-[-8deg] rounded-md border border-[#F8C9CF] bg-white px-3 py-2 shadow-sm">
                <div className="h-10 w-16 rounded bg-[#F7E7EA]" />
              </div>
            </div>
          </div>

          {/* KANAN - KONTEN */}
          <div ref={contentRef} className="text-center lg:text-left">
            <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl">
              Tentang Ayam Geprek Abang
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
              I am a highly motivated Information Systems student with a strong
              interest in web development and digital technology. I enjoy
              building responsive and user-friendly applications while improving
              my skills in frontend, backend, and database management.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#D62E37]" />
                <p className="text-left text-gray-700 text-base sm:text-lg">
                  Passionate about web development and UI design.
                </p>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#D62E37]" />
                <p className="text-left text-gray-700 text-base sm:text-lg">
                  Experienced with Laravel, React, Tailwind, and MySQL.
                </p>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#D62E37]" />
                <p className="text-left text-gray-700 text-base sm:text-lg">
                  Strong teamwork, communication, and problem-solving skills.
                </p>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#D62E37]" />
                <p className="text-left text-gray-700 text-base sm:text-lg">
                  Always eager to learn and explore new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
