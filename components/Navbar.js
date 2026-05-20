import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NAV_LINKS = [
  { label: "about", to: "home" },
  { label: "work", to: "work" },
  { label: "projects", to: "Projects" },
  { label: "contact", to: "contact" },
];

const RESUME_URL = "/Software_Jaideep_Singh.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openResume = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#1f1f1f]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <ScrollLink
          to="mainhome"
          smooth={true}
          duration={600}
          className="font-mono text-sm text-[#ededed] tracking-wider hover:text-[#00d4aa] transition-colors cursor-pointer select-none"
        >
          js<span className="text-[#00d4aa]">.</span>dev
        </ScrollLink>

        <ul className="flex items-center gap-6 md:gap-8 list-none">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label} className="hidden sm:block">
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-64}
                className="font-mono text-xs text-[#888] hover:text-[#ededed] cursor-pointer transition-colors tracking-wider"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
          <li>
            <button
              onClick={openResume}
              className="font-mono text-xs border border-[#00d4aa] text-[#00d4aa] px-4 py-2 rounded hover:bg-[#00d4aa]/10 transition-colors tracking-wider"
            >
              resume ↗
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
