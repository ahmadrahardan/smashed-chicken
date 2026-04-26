import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const MapsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        contentRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
      ).fromTo(
        mapRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="maps"
      className="relative min-h-screen overflow-hidden bg-white flex items-center py-20"
    >
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div ref={contentRef} className="text-center lg:text-left">
            <h2 className="text-4xl font-bold leading-tight text-[#111] sm:text-5xl">
              Kunjungi Tempat Kami!
            </h2>

            <div className="mt-8 space-y-3 text-base text-gray-600 sm:text-lg">
              <p>Jl. Imam Bonjol, Tegal Besar Kulon (Seberang MTsN 1 Jember)</p>
              <p>08.00 - 16.00 WIB</p>
              <p>0819-1322-3450</p>
              <a
                href="https://instagram.com/ayamgeprekabang.jember"
                className="inline-block text-[#6aa5e8] transition hover:text-[#3b82f6]"
              >
                @ayamgeprekabang.jember
              </a>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div ref={mapRef} className="w-full">
            <div className="overflow-hidden bg-white shadow-sm">
              <iframe
                title="Ayam Geprek Abang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.938027429767!2d113.68690995694848!3d-8.188083157826162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd697005cdf7f01%3A0x4d75070118a008e4!2sAyam%20Geprek%20Abang%20-%20Tegal%20Besar!5e0!3m2!1sid!2sid!4v1777010601814!5m2!1sid!2sid"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
