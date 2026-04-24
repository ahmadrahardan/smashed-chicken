const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* TOP BAR */}
      <div className="bg-[#E12626] text-white">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-6 py-6 md:grid-cols-3 md:px-10 lg:px-12">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold leading-tight">Opening Time</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold leading-tight">Monday to Friday</p>
              <p className="text-lg leading-tight text-white/90">8:00am to 10:00pm</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:justify-start lg:justify-end">
            <div>
              <p className="text-lg font-semibold leading-tight">Call Us</p>
            </div>
            <div className="space-y-1 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z" />
                </svg>
                <span>(021) 889 - 0011</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.787-1.48-1.759-1.653-2.056-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01a1.09 1.09 0 0 0-.793.372c-.272.298-1.04 1.017-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.097 3.2 5.077 4.487.709.306 1.262.489 1.693.626.711.226 1.359.194 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                </svg>
                <span>(021) 889 - 0011</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative bg-black text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(circle at center bottom, rgba(225,38,38,0.35), transparent 45%)",
          }}
        />

        <div className="relative mx-auto max-w-screen-xl px-6 py-14 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* BRAND */}
            <div className="lg:col-span-2">
              <div className="mb-5 inline-flex items-center gap-3 rounded-md bg-[#E12626] px-4 py-2 shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c2.2 0 4 1.8 4 4 0 1.3-.6 2.4-1.6 3.1.7.4 1.3 1 1.8 1.7.8 1.1 1.3 2.4 1.3 3.7 0 3.3-2.7 6-6 6-1.7 0-3.3-.7-4.4-1.9 2.1.4 4.4-.1 6.1-1.5 1.4-1.1 2.2-2.7 2.4-4.4-.9 1-2.1 1.8-3.5 2.1-1.6.4-3.2.1-4.6-.7-.3-.2-.4-.5-.4-.8.1-.3.3-.5.6-.6 1.7-.2 3.3-1 4.4-2.3.9-1.1 1.5-2.4 1.6-3.8-1 .9-2.3 1.5-3.6 1.7-.4.1-.7-.1-.9-.4-.2-.3-.1-.7.1-1 1.1-1.3 1.7-2.8 1.7-4.4 0-.6-.1-1.2-.2-1.8C11.2 2 11.6 2 12 2Z" />
                  </svg>
                </div>
                <span className="text-3xl font-extrabold tracking-wide">
                  ZENTUCKY
                </span>
              </div>

              <p className="max-w-md text-sm leading-8 text-white/80 sm:text-base">
                Dive into the flavor-packed world of Zentucky Fried Chicken.
                Made with the finest ingredients, our crispy delights will keep
                you coming back for more. Order now and savor the goodness!
              </p>
            </div>

            {/* ADDRESS */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Address</h3>
              <ul className="space-y-3 text-sm leading-7 text-white/80">
                <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
                <li>3517 W. Gray St. Utica, Pennsylvania 57867</li>
                <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Company</h3>
              <ul className="space-y-3 text-sm leading-7 text-white/80">
                <li>
                  <a href="#aboutme" className="transition hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#projects" className="transition hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#projects" className="transition hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#skills" className="transition hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* SUPPORT + SUBSCRIBE */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">Support</h3>
              <ul className="space-y-3 text-sm leading-7 text-white/80">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Status
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Stay up to date</h3>

                <div className="flex overflow-hidden rounded-md bg-white/10 ring-1 ring-white/10">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white/10 px-4 text-white transition hover:bg-white/20"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.4 20.4 22 12 3.4 3.6 3.3 10l13.3 2-13.3 2 .1 6.4Z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition hover:bg-[#E12626] hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.5v8h3Z" />
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition hover:bg-[#E12626] hover:text-white"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.8-3.2-.2-6.1-1.7-8-4.1-1 1.8-.5 4 1.1 5.1-.6 0-1.2-.2-1.7-.5 0 0 0 .1 0 .1 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.8 3.9 2.9-1.5 1.2-3.3 1.8-5.2 1.8H3c1.9 1.2 4.2 1.9 6.6 1.9 7.9 0 12.3-6.7 12.3-12.4v-.6c.8-.6 1.5-1.3 2.1-2.1Z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition hover:bg-[#E12626] hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.2 1.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p>© 2024 Zentucky Fried Chicken. All rights reserved</p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="transition hover:text-white">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="transition hover:text-white">
                Sitemap
              </a>
              <span>|</span>
              <a href="#" className="transition hover:text-white">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;