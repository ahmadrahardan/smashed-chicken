type Item = {
  year: string;
  desc1: string;
  desc2: string;
  price?: string;
  highlight?: boolean;
};

const topCards: Item[] = [
  {
    year: "EDUCATION",
    desc1: "University of Jember",
    desc2: "Bachelor of Information Systems",
    price: "2023 - Present",
  },
  {
    year: "EXPERIENCE",
    desc1: "Media and Technology Division Staff",
    desc2: "Information Systems Student Association (HIMASIF)",
    price: "Dec 2024 - Present",
    highlight: true,
  },
  {
    year: "EXPERIENCE",
    desc1: "Website Division Staff",
    desc2: "Ilkom Developer League (IDLe) 2025",
    price: "Aug 2025 - Oct 2025",
  },
];

const bottomCards: Item[] = [
  {
    year: "SPECIAL EXPERIENCE",
    desc1: "Secretariat Division Staff",
    desc2: "IT-CONVERT & PICTURE 2025",
    price: "Feb 2025 - Sep 2025",
  },
  {
    year: "SPECIAL EXPERIENCE",
    desc1: "Head of Publication, Decoration, and Documentation Committee",
    desc2: "INHOFIS 2025 & Sarasehan 2025",
    price: "Jul 2025 - Oct 2025",
  },
];

const SmallCard = ({ item }: { item: Item }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-md transition hover:-translate-y-1 hover:shadow-lg ${
        item.highlight ? "bg-[#FF2E2E] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="max-w-[65%]">
          <p
            className={`text-sm font-extrabold uppercase leading-tight ${
              item.highlight ? "text-white" : "text-[#222]"
            }`}
          >
            {item.year}
          </p>

          <h3
            className={`mt-1 text-xl font-extrabold leading-tight ${
              item.highlight ? "text-white" : "text-[#111]"
            }`}
          >
            {item.desc1}
          </h3>

          <p
            className={`mt-1 text-sm leading-5 ${
              item.highlight ? "text-white/85" : "text-gray-500"
            }`}
          >
            {item.desc2}
          </p>

          <div className="mt-4 inline-block rounded-full bg-[#B71C1C] px-4 py-1.5 text-sm font-bold text-white shadow">
            {item.price}
          </div>
        </div>

        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#F7C62F]" />
          <div
            className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-lg font-extrabold ${
              item.highlight
                ? "bg-[#C91515] text-[#FFD54A]"
                : "bg-white text-[#FF2E2E]"
            }`}
          >
            {item.year.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );
};

const LargeCard = ({ item }: { item: Item }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center">
        <div className="max-w-[65%]">
          <p className="text-sm font-extrabold uppercase text-[#111]">
            {item.year}
          </p>

          <h3 className="mt-1 text-2xl font-extrabold leading-tight text-[#111]">
            {item.desc1}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">{item.desc2}</p>

          <div className="mt-4 inline-block -rotate-6 text-4xl font-extrabold text-[#D82020]">
            {item.price}
          </div>
        </div>

        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center md:h-40 md:w-40">
          <div className="absolute inset-0 rounded-full bg-[#F7C62F]" />
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#FF2E2E] text-2xl font-extrabold text-white md:h-28 md:w-28">
            ★
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="relative min-h-screen overflow-hidden bg-[#FBF1EB] py-20 flex items-center"
    >
      {/* background ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-80px] top-10 h-[280px] w-[280px] rounded-full border-[16px] border-[#EEDDD5] opacity-70" />
        <div className="absolute right-[-30px] top-24 h-[180px] w-[180px] rounded-full border-[12px] border-[#F3E3DB] opacity-80" />
        <div className="absolute left-10 bottom-10 h-20 w-20 rounded-full bg-[#F8E0D5] blur-2xl opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-5 md:px-10">
        {/* top cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {topCards.map((item, i) => (
            <SmallCard key={i} item={item} />
          ))}
        </div>

        {/* bottom cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {bottomCards.map((item, i) => (
            <LargeCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
