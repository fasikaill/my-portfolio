import { useState, useEffect } from "react";
import { SITE_CONFIG } from "../config.ts";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#F9F9F6]/95 backdrop-blur-md border-b border-[#E7E6E0] shadow-xs"
          : "bg-[#F9F9F6] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-[#1C1917] hover:text-[#1E3A2F] transition-colors flex items-center gap-2"
        >
          <span>{SITE_CONFIG.name}</span>
          <span className="hidden sm:inline text-xs font-normal text-[#71717A]">
            · AAU
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#52525B]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-[#1C1917] font-semibold"
                    : "hover:text-[#1C1917]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E3A2F] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action / GitHub */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1C1917] bg-white border border-[#D6D3CD] rounded-md hover:bg-[#F4F4EE] hover:border-[#1E3A2F] transition-all"
            aria-label="Fasika Solomon on GitHub"
          >
            <Github className="w-3.5 h-3.5 text-[#1C1917]" />
            <span className="hidden sm:inline">GitHub</span>
            <span className="sm:hidden">GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#52525B] hover:text-[#1C1917] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A2F]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E7E6E0] bg-[#F9F9F6] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#52525B] hover:text-[#1C1917] py-1.5"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
