import sepadu from "../assets/certificates/Sertifikat HKI Sepadu.webp";
import simba from "../assets/certificates/Sertifikat HKI SIMBA.webp";
import bgChicken from "../assets/fried-chicken.jpg";
import gofood from "../assets/logo.png";
import grabfood from "../assets/logo.png";
import shopeefood from "../assets/logo.png";

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
            {/* phone belakang */}
            <div className="absolute left-[210px] top-1/2 z-10 h-[390px] w-[195px] -translate-y-1/2 rounded-[30px] border-[7px] border-[#222] bg-[#1A1A1A] p-2 shadow-2xl">
              <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
              <div className="h-full w-full overflow-hidden rounded-[22px] bg-white">
                <img
                  src={simba}
                  alt="App Preview 2"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* phone depan */}
            <div className="absolute left-[60px] top-1/2 z-20 h-[480px] w-[240px] -translate-y-1/2 rounded-[36px] border-[8px] border-[#222] bg-[#1A1A1A] p-2 shadow-2xl">
              <div className="absolute left-1/2 top-3 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
              <div className="h-full w-full overflow-hidden rounded-[28px] bg-white">
                <img
                  src={sepadu}
                  alt="App Preview 1"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* MOBILE PHONE MOCKUP */}
          <div className="relative flex h-full items-center justify-center lg:hidden">
            <div className="absolute h-[390px] w-[200px] rounded-[34px] border-[7px] border-[#222] bg-[#1A1A1A] p-2 shadow-2xl">
              <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
              <div className="h-full w-full overflow-hidden rounded-[24px] bg-white">
                <img
                  src={sepadu}
                  alt="App Preview 1"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div className="relative z-30 text-center text-white lg:text-left">
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
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
