import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from './GradientText';

const links = ["Home", "Services", "Projects", "About", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);



  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  

  const handleLinkClick = (id) => {
  setOpen(false);

  document.body.style.overflow = "";

  setTimeout(() => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 300); // wait for the menu to close
};

  return (
    <header
  className="
    fixed z-50
    top-0 left-0 w-full rounded-none
    md:top-6 md:left-1/2 md:w-[92%] md:max-w-5xl md:-translate-x-1/2 md:rounded-2xl
    backdrop-blur-md bg-black/40 border border-white/10 shadow-lg
  "
>
      <div className="relative px-4 sm:px-6 py-3.5 flex items-center">
        
        {/* Left Side: Logo - Now centered on mobile */}
        {/* Desktop Logo */}
{/* <div className="hidden md:block shrink-0">
  <a href="#home" onClick={() => handleLinkClick("home")} className="block outline-none">
    <h1 className="text-white text-lg font-semibold tracking-wide hover:opacity-80 transition-opacity">
      <GradientText
        colors={["#4B0082", "#1D4ED8", "#E63946"]}
        animationSpeed={8}
        showBorder={false}
      >
        Muneeba S
      </GradientText>
    </h1>
  </a>
</div> */}

{/* Mobile Logo */}
<div className="absolute left-1/2 -translate-x-1/2 md:hidden">
  <a href="#home" onClick={() => handleLinkClick("home")} className="block outline-none">
    <h1 className="text-white text-lg font-semibold tracking-wide">
      <GradientText
        colors={["#4B0082", "#1D4ED8", "#E63946"]}
        animationSpeed={8}
        showBorder={false}
      >
        Muneeba S
      </GradientText>
    </h1>
  </a>
</div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex w-full items-center justify-center gap-8 text-sm">
          {links.map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(sectionId);
                }}
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Hamburger Button - Now symmetric with logo */}
        <div className="flex-1 flex justify-end md:hidden">
  <button
  onClick={() => setOpen(!open)}
  className="ml-auto mr-2 md:hidden w-10 h-10 flex items-center justify-center text-2xl text-white"
>
  {open ? "✕" : "☰"}
</button>
</div>
        {/* Empty spacer for desktop to maintain symmetry */}
        {/* <div className="hidden md:block flex-1"></div> */}
      </div>

      {/* Mobile Drawer Accordion Container */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-black/90 backdrop-blur-md border-t border-white/10 rounded-b-2xl">
          {links.map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(sectionId);
                }}
                className="block rounded-lg px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
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