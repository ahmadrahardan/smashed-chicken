import ornament from "../assets/ornament.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    text: "Ayam gepreknya enak banget! Bagian luarnya crispy, tapi dalamnya tetap juicy dan lembut. Sambalnya pedasnya pas, nggak cuma pedas tapi juga ada rasa gurih yang bikin nagih. Porsinya cukup mengenyangkan, cocok banget buat makan siang atau malam.",
    name: "Rahardan",
    role: "Mahasiswa S2",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    rating: 5.0,
    text: "Rasa ayam geprek di sini sangat memuaskan. Tekstur ayamnya renyah di luar dan tetap lembut di dalam. Sambalnya memiliki cita rasa pedas yang seimbang dengan sentuhan gurih yang khas. Ditambah dengan pelayanan yang cepat, pengalaman makan jadi lebih menyenangkan.",
    name: "Felix Edna",
    role: "Ketum HIMASIF",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    rating: 5.0,
    text: "Ayamnya cukup enak dengan tekstur yang renyah, dan dagingnya juga tidak kering. Sambalnya pedas, tapi menurut saya rasanya masih bisa dibuat lebih seimbang karena sedikit terlalu asin. Secara keseluruhan tetap layak dicoba, apalagi untuk pecinta ayam geprek.",
    name: "Ahmad Pratama",
    role: "CEO Ayam Cumlaude",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    rating: 5.0,
    text: "Ayam geprek di sini benar-benar juara! Crispy di luar, juicy di dalam, dan sambalnya pedasnya nendang banget. Setiap gigitan terasa nikmat dan bikin pengen nambah lagi. Cocok banget buat kamu yang cari makanan simpel tapi penuh rasa! 🔥🍗",
    name: "Almas Teva",
    role: "Pegawai SPPG (MBG)",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    rating: 5.0,
    text: "Ayam gepreknya wenak soro….ayamnya lembut…bumbunya meresap…dapet dagingnya banyak…gak kebanyakan tepung hehe….nasi nya pulen bikin makan tambah niqmat…yang paling juara sambal gepreknya…pedes gurih bawangnya berasa seger….",
    name: "Amal Nurcahyono",
    role: "Warga",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    rating: 5.0,
    text: "Ayam geprek di sini benar-benar juara! Crispy di luar, juicy di dalam, dan sambalnya pedasnya nendang banget. Setiap gigitan terasa nikmat dan bikin pengen nambah lagi. Cocok banget buat kamu yang cari makanan simpel tapi penuh rasa!",
    name: "Lidya Permatasari",
    role: "Warga",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 text-[#F4B400]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm sm:text-base">
          ★
        </span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-700">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};

const TestimonialCard = ({
  text,
  name,
  role,
  avatar,
  image,
  rating,
}: {
  text: string;
  name: string;
  role: string;
  avatar: string;
  image: string;
  rating: number;
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <StarRating rating={rating} />

      <p className="mt-4 pr-20 text-sm leading-6 text-gray-600 sm:text-base">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>
          <h4 className="text-sm font-bold text-gray-900 sm:text-base">
            {name}
          </h4>
          <p className="text-xs text-gray-500 sm:text-sm">{role}</p>
        </div>
      </div>

      <img
        src={image}
        alt="testimonial visual"
        className="absolute bottom-4 right-4 h-16 w-16 rounded-full object-cover shadow-md"
      />
    </div>
  );
};

const FeedbacksSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        sliderRef.current,
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        dotsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
      id="feedbacks"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FBF1EB] py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={ornament}
          alt=""
          className="absolute left-[-80px] top-24 h-[500px] w-[500px] object-contain opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 md:px-10">
        <div ref={headingRef} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            Ulasan dari Pelanggan Kami
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Kelezatan crispy yang membuat mereka ingin lagi dan lagi.
          </p>
        </div>

        <div ref={sliderRef} className="relative mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((group, index) => (
              <div
                key={index}
                className="grid w-full flex-shrink-0 grid-cols-1 gap-6 px-2 lg:grid-cols-2"
              >
                {group.map((item) => (
                  <TestimonialCard
                    key={item.id}
                    text={item.text}
                    name={item.name}
                    role={item.role}
                    avatar={item.avatar}
                    image={item.image}
                    rating={item.rating}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          ref={dotsRef}
          className="mt-8 flex items-center justify-center gap-2"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === i ? "w-6 bg-[#E53935]" : "w-2 bg-[#F2B8B5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSection;