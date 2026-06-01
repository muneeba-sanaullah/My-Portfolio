import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const links = ["Home", "Services", "Projects", "About", "Contact"];

  // 🔥 Scroll spy (stable + clean)
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let current = "home";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        current = section.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  handleScroll(); // 👈 important: set correct section on load

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // 🔥 Sliding underline logic
  useEffect(() => {
    const activeLink = document.querySelector(
      `a[data-active="true"]`
    );

    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement.getBoundingClientRect();

      setUnderline({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white text-lg font-semibold tracking-wide">
          Muneeba S
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative">

          {links.map((item) => {
            const sectionId = item.toLowerCase();

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={handleClick}
                data-active={activeSection === sectionId ? "true" : "false"}
                className={`transition-colors duration-300 ${
                  activeSection === sectionId
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </a>
            );
          })}

          {/* 🔥 Sliding underline */}
          <span
            className="absolute bottom-[-6px] h-[2px] bg-white rounded-full transition-all duration-300 ease-out"
            style={{
              left: underline.left,
              width: underline.width,
              opacity: underline.opacity,
            }}
          />
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pb-5 pt-2 space-y-3 bg-black/90 backdrop-blur-md">

          {links.map((item) => {
            const sectionId = item.toLowerCase();

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={() => setOpen(false)}
                className={`block transition ${
                  activeSection === sectionId
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </a>
            );
          })}

        </div>
      </div>
    </header>
  );
}

export default Navbar;