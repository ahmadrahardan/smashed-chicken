import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    text: "I enjoy learning and building projects with a strong focus on clean design, responsive layouts, and functional user experience. Every project helps me grow both technically and creatively.",
    name: "Ahmad Rahardan",
    role: "Information Systems Student",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    rating: 5.0,
    text: "My journey in technology is driven by curiosity, consistency, and collaboration. I love exploring web development, solving problems, and turning ideas into meaningful digital experiences.",
    name: "Ahmad Rahardan",
    role: "Web Developer Enthusiast",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    rating: 5.0,
    text: "My journey in technology is driven by curiosity, consistency, and collaboration. I love exploring web development, solving problems, and turning ideas into meaningful digital experiences.",
    name: "Ahmad Rahardan",
    role: "Web Developer Enthusiast",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    rating: 5.0,
    text: "My journey in technology is driven by curiosity, consistency, and collaboration. I love exploring web development, solving problems, and turning ideas into meaningful digital experiences.",
    name: "Ahmad Rahardan",
    role: "Web Developer Enthusiast",
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

  return (
    <section
      id="feedbacks"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FBF1EB] py-20"
    >
      {/* background ornaments tetap */}

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 md:px-10">
        {/* heading tetap */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Crispy delights will keep you coming back for more.
          </p>
        </div>

        {/* slider */}
        <div className="relative mx-auto overflow-hidden">
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

        {/* dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
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
