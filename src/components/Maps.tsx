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
        { x: 0, opacity: 1, duration: 0.9 }
      ).fromTo(
        mapRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        "-=0.6"
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
          <div
            ref={contentRef}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-extrabold leading-tight text-[#111] sm:text-5xl">
              Empire State Building
            </h2>

            <div className="mt-8 space-y-3 text-base text-gray-600 sm:text-lg">
              <p>350 5th Ave, New York, NY 10118</p>
              <p>1 212-736-3100</p>
              <a
                href="mailto:contacts@esbnyc.com"
                className="inline-block text-[#6aa5e8] transition hover:text-[#3b82f6]"
              >
                contacts@esbnyc.com
              </a>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div ref={mapRef} className="w-full">
            <div className="overflow-hidden bg-white shadow-sm">
              <iframe
                title="Empire State Building Map"
                src="https://www.google.com/maps?q=Empire%20State%20Building,New%20York&z=13&output=embed"
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