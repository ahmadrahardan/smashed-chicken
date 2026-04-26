import bgChicken from "../assets/fried-chicken.jpg";
import gofood from "../assets/gofood.png";
import grabfood from "../assets/grabfood.png";
import shopeefood from "../assets/shopeefood.png";
import phone from "../assets/iphone.png";

const FindUsSection = () => {
  return (
    <section
      id="findus"
      className="relative flex min-h-[50vh] items-center overflow-hidden bg-[#FBF1EB] py-20"
    >
      {/* KOTAK MERAH DI TENGAH */}
      <div className="relative mx-auto h-[270px] w-full md:h-[300px] lg:h-[320px]">
        {/* Layer 1: Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: `url(${bgChicken})`,
          }}
        />

        {/* Layer 2: Overlay merah */}
        <div className="absolute inset-0 bg-[#E51F1F]/65" />

        <div className="relative mx-auto grid h-full max-w-screen-xl grid-cols-1 items-center gap-8 px-6 md:px-10 lg:grid-cols-2 lg:px-14">
          {/* LEFT - PHONE MOCKUP KELUAR ATAS BAWAH */}
          <div className="relative hidden h-full items-center lg:flex">
            <img
              src={phone}
              alt="Instagram Mockup"
              className="absolute left-[30px] top-1/2 z-20 h-[500px] w-auto -translate-y-1/2 object-contain"
            />
          </div>

          {/* MOBILE PHONE MOCKUP */}
          <div className="relative flex h-full items-center justify-center lg:hidden">
            <img
              src={phone}
              alt="Instagram Mockup"
              className="absolute top-1/2 h-[430px] w-auto -translate-y-1/2 object-contain"
            />
          </div>

          {/* RIGHT - TEXT */}
          <div className="relative z-30 text-center text-white lg:text-left">
            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Temukan Kami di
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {/* GOFOOD */}
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <img
                  src={gofood}
                  alt="GoFood"
                  className="h-7 w-7 object-contain"
                />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Order via
                  </p>
                  <p className="text-sm font-semibold sm:text-base">GoFood</p>
                </div>
              </a>

              {/* GRABFOOD */}
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <img
                  src={grabfood}
                  alt="GrabFood"
                  className="h-7 w-7 object-contain"
                />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Order via
                  </p>
                  <p className="text-sm font-semibold sm:text-base">GrabFood</p>
                </div>
              </a>

              {/* SHOPEEFOOD */}
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <img
                  src={shopeefood}
                  alt="ShopeeFood"
                  className="h-7 w-7 object-contain"
                />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Order via
                  </p>
                  <p className="text-sm font-semibold sm:text-base">
                    ShopeeFood
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
