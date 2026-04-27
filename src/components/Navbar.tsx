import { useEffect, useState } from "react";
import logoText from "../assets/logo-text.webp";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "aboutme", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "feedbacks", label: "Feedback" },
  { id: "maps", label: "Maps" },
];

const NAVBAR_HEIGHT = 72;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setIsOpen((s) => !s);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    setActiveLink(link);
    setIsOpen(false);

    if (history.pushState) {
      history.pushState(null, "", link === "home" ? "#" : `#${link}`);
    }

    if (link === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(link);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveLink(e.target.id);
        });
      },
      {
        root: null,
        rootMargin: `-${NAVBAR_HEIGHT}px 0px -55% 0px`,
        threshold: 0,
      },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] w-full bg-white py-1 text-gray-800 shadow-md backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-1 lg:px-1">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-4"
            onClick={(e) => handleLinkClick(e, "home")}
          >
            <img
              src={logoText}
              alt="Logo"
              className="hidden h-10 w-auto lg:block"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeLink === item.id;
                const textClass = isActive
                  ? "text-[#E51F1F]"
                  : "text-gray-600 hover:text-[#E51F1F]";

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-block px-2 py-2 text-md font-medium transition-colors duration-200 ${textClass}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile burger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`h-6 w-6 transform transition ${
                  isOpen ? "rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 w-full shadow-lg lg:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 rounded-b-lg bg-white/95 px-2 pb-3 pt-2 shadow-md sm:px-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeLink === item.id;
              const textClass = isActive
                ? "text-[#E51F1F]"
                : "text-gray-600 hover:text-[#E51F1F]";

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block px-3 py-3 text-base font-medium transition-colors ${textClass}`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
