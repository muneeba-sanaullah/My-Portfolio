import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  const links = ["Home", "Services", "Projects", "About", "Contact"];

  // 1. Force Home if user scrolls to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );

    links.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [links]);

  // 3. Sliding Underline
  useEffect(() => {
    const activeLink = document.querySelector(`a[data-active="true"]`);
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

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={() => handleLinkClick("home")} className="block outline-none">
          <h1 className="text-white text-lg font-semibold tracking-wide hover:opacity-80 transition-opacity">
            Muneeba S
          </h1>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm relative">
          {links.map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={() => handleLinkClick(sectionId)}
                data-active={activeSection === sectionId ? "true" : "false"}
                className={`transition-colors duration-300 ${
                  activeSection === sectionId ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </a>
            );
          })}
          <span
            className="absolute bottom-[-9px] h-[2px] bg-white rounded-full transition-all duration-300 ease-out"
            style={{ left: underline.left, width: underline.width, opacity: underline.opacity }}
          />
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-2 space-y-4 bg-black/90 backdrop-blur-md">
          {links.map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={() => handleLinkClick(sectionId)}
                className={`block ${activeSection === sectionId ? "text-white" : "text-gray-400"}`}
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