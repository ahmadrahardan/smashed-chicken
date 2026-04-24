import sepadu from "../assets/certificates/Sertifikat HKI Sepadu.webp";
import simba from "../assets/certificates/Sertifikat HKI SIMBA.webp";

const FindUsSection = () => {
  return (
    <section
      id="findus"
      className="relative flex min-h-[50vh] items-center overflow-hidden bg-[#FBF1EB] py-20"
    >
      {/* KOTAK MERAH DI TENGAH */}
      <div className="relative mx-auto h-[270px] w-full bg-[#E51F1F] md:h-[300px] lg:h-[320px]">
        {/* texture/background soft */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.14), transparent 28%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.10), transparent 30%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12), transparent 26%)",
          }}
        />

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
              Download our app for exclusive deals and hassle-free ordering.
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 12.94c.02 2.17 1.91 2.89 1.93 2.9-.02.05-.3 1.02-.98 2.02-.59.86-1.2 1.72-2.16 1.74-.95.02-1.26-.56-2.35-.56-1.1 0-1.44.54-2.33.58-.92.03-1.62-.92-2.22-1.77-1.22-1.76-2.15-4.97-.9-7.14.62-1.08 1.73-1.77 2.93-1.79.91-.02 1.77.61 2.35.61.57 0 1.65-.75 2.78-.64.47.02 1.79.19 2.63 1.42-.07.05-1.57.91-1.55 2.63ZM14.36 5.6c.49-.6.82-1.43.73-2.26-.7.03-1.54.47-2.04 1.06-.45.52-.84 1.36-.73 2.16.78.06 1.56-.4 2.04-.96Z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Download on the
                  </p>
                  <p className="text-sm font-semibold sm:text-base">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 2.5v19l10.5-9.5L3 2.5Zm12.1 10.1 2.9-2.6-11.8-6.7 8.9 9.3Zm2.9 1.4-2.9-2.6-8.9 9.3 11.8-6.7ZM20 11.3l-2.6-1.5-1.6 1.5 1.6 1.5 2.6-1.5Z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-white/70">
                    Get it on
                  </p>
                  <p className="text-sm font-semibold sm:text-base">
                    Google Play
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