import { useState, useEffect } from "react";
import { SITE_CONFIG } from "../config.ts";
import { Github, Menu, X, ArrowUpRight, FileText } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onOpenResume: (trigger?: HTMLElement) => void;
}

export function Navbar({ activeSection, onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-[#0B0D0E]/85 backdrop-blur-md border-b border-[#252A2D]"
          : "bg-transparent border-b border-[#1A1E21]"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Author Wordmark */}
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-[#F2F3F2] hover:text-[#6FA58B] transition-colors"
        >
          {SITE_CONFIG.name}
        </a>

        {/* Center: Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-xs font-medium text-[#92999B]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`py-1 transition-colors ${
                  isActive
                    ? "text-[#F2F3F2] font-semibold"
                    : "hover:text-[#F2F3F2]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CV and GitHub Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => onOpenResume(e.currentTarget)}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors cursor-pointer"
            aria-label="View Curriculum Vitae"
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </button>

          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#92999B] hover:text-[#F2F3F2] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#626A6D]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#92999B] hover:text-[#F2F3F2] focus:outline-hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#252A2D] bg-[#101315] px-6 py-4 space-y-3">
          <button
            type="button"
            onClick={(e) => {
              setMobileMenuOpen(false);
              onOpenResume(e.currentTarget);
            }}
            className="w-full text-left inline-flex items-center gap-2 text-sm font-medium text-[#6FA58B] py-1.5"
          >
            <FileText className="w-4 h-4" />
            <span>View CV / Resume</span>
          </button>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#92999B] hover:text-[#F2F3F2] py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
