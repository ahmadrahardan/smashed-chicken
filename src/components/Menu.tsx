import ornament from "../assets/ornament.png";
import sosis from "../assets/sosis.png";
import ayam from "../assets/ayam.png";
import nugget from "../assets/nugget.png";

type Item = {
  type: string;
  menu: string;
  price?: string;
  highlight?: boolean;
  image: string;
  imageBg?: "white" | "yellow";
};

const topCards: Item[] = [
  {
    type: "Penawaran Hari ini",
    menu: "Sosis Geprek",
    price: "10.000",
    image: sosis,
    imageBg: "yellow",
  },
  {
    type: "Penawaran Spesial",
    menu: "Ayam Geprek Abang + nasi",
    price: "10.000",
    highlight: true,
    image: ayam,
  },
  {
    type: "Penawaran Hari ini",
    menu: "Nugget Geprek",
    price: "10.000",
    image: nugget,
    imageBg: "yellow",
  },
];

const bottomCards: Item[] = [
  {
    type: "Paket Combo Hemat 1",
    menu: "Ayam Geprek Abang + nasi + sambal bawang + es teh jumbo",
    price: "12.000",
    image: ayam,
  },
  {
    type: "Paket Combo Hemat 2",
    menu: "Ayam Geprek Abang + nasi + sambal bawang + es teh jumbo + nugget/sosis geprek",
    price: "20.000",
    image: ayam,
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
        <div className="max-w-[62%]">
          <h3
            className={`mt-1 text-xl font-extrabold leading-tight ${
              item.highlight ? "text-white" : "text-[#111]"
            }`}
          >
            {item.type}
          </h3>

          <p
            className={`mt-1 text-sm leading-5 ${
              item.highlight ? "text-white/85" : "text-gray-500"
            }`}
          >
            {item.menu}
          </p>

          <div className="mt-4 inline-block rounded-full bg-[#F7C62F] px-5 py-2 text-sm font-extrabold text-[#111] shadow">
            Rp {item.price}
          </div>
        </div>

        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full ${
              item.imageBg === "yellow" ? "bg-[#F7C62F]" : "bg-white"
            }`}
          />

          <img
            src={item.image}
            alt={item.menu}
            className="relative z-10 h-24 w-24 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

const LargeCard = ({ item }: { item: Item }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
        <div className="max-w-[60%] sm:max-w-[65%]">
          <h3 className="mt-1 text-xl font-extrabold leading-tight text-[#111] sm:text-2xl">
            {item.type}
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            {item.menu}
          </p>

          <div className="mt-4 inline-block rounded-full bg-[#F7C62F] px-4 py-1.5 text-sm font-extrabold text-[#111] shadow sm:px-6 sm:py-2 sm:text-lg">
            Rp {item.price}
          </div>
        </div>

        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center sm:h-36 sm:w-36 md:h-44 md:w-44">
          <div className="absolute inset-0 rounded-full bg-[#F7C62F]" />
          <div className="absolute inset-2 rounded-full bg-white sm:inset-3" />

          <img
            src={item.image}
            alt={item.menu}
            className="relative z-10 h-24 w-24 object-contain drop-shadow-xl sm:h-32 sm:w-32 md:h-40 md:w-40"
          />
        </div>
      </div>
    </div>
  );
};

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FBF1EB] py-20"
    >
      {/* background ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={ornament}
          alt=""
          className="absolute right-[-80px] top-24 h-[500px] w-[500px] scale-x-[-1] object-contain opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {topCards.map((item, i) => (
            <SmallCard key={i} item={item} />
          ))}
        </div>

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
