import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fotoFormalku from "../assets/logo.png";
import dot from "../assets/dot.png";

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
      <img
        src={dot}
        alt=""
        className="absolute left-1 top-6 h-64 w-64 object-contain opacity-80"
      />
      <img
        src={dot}
        alt=""
        className="absolute right-1 bottom-6 h-64 w-64 object-contain opacity-80"
      />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* KIRI - FOTO */}
          <div ref={photoRef} className="flex justify-center lg:justify-start">
            <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] md:h-[430px] md:w-[430px]">
              {/* lingkaran accent belakang */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,#ffffff_0deg,#ffffff_190deg,#f9a0aa_230deg,#fe2424_285deg,#f9a0aa_335deg,#ffffff_360deg)] p-[14px] opacity-80 rotate-[-150deg]">
                <div className="h-full w-full rounded-full bg-white" />
              </div>

              {/* logo */}
              <div className="absolute inset-[14px] overflow-hidden rounded-full bg-white">
                <img
                  src={fotoFormalku}
                  alt="About Me"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* KANAN - KONTEN */}
          <div ref={contentRef} className="text-center lg:text-left">
            <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
              Tentang Ayam Geprek Abang
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
              Ayam Geprek Abang merupakan usaha kuliner dengan produk yang
              ditawarkan meliputi ayam geprek, sosis geprek, dan nugget geprek.
              UMKM ini beroperasi setiap hari mulai pukul 08.00 hingga 16.00.
              Harga yang ditawarkan relatif terjangkau, dengan rata-rata harga
              per porsi sebesar Rp10.000. Dalam satu hari, jumlah penjualan
              berkisar antara 45 hingga 60 porsi, yang menunjukkan adanya
              permintaan yang cukup stabil. Lokasi usaha ini berada di Jl. Imam
              Bonjol, Tegal Besar Kulon, Tegal Besar, Kecamatan Kaliwates,
              Kabupaten Jember, Jawa Timur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
