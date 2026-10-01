import { SITE_CONFIG } from "../config.ts";
import { ArrowDown, Github, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#6FA58B] uppercase mb-4">
              <span>Computer Engineering</span>
              <span aria-hidden="true" className="text-[#626A6D]">·</span>
              <span>Addis Ababa University</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F3F2] leading-[1.08] mb-6">
              {SITE_CONFIG.name}
            </h1>

            {/* Sharper Core Statement */}
            <p className="text-xl sm:text-2xl text-[#E4E4E7] font-medium leading-snug mb-6 text-balance">
              I build software systems from the interface to the backend.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#92999B] leading-relaxed mb-8 max-w-xl">
              I’m a 5th-year Computer Engineering student at Addis Ababa University focused on full-stack development, backend systems, databases, and practical software engineering.
            </p>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors shadow-xs"
              >
                <span>View Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#0B0D0E]" />
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 hover:bg-[#1A1F22] rounded transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#92999B]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#626A6D]" />
              </a>
            </div>
          </div>

          {/* Right Column: Sophisticated Engineering Specification Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#101315] border border-[#252A2D] rounded p-6 sm:p-7 relative overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="flex items-center justify-between border-b border-[#1C2124] pb-4 mb-5">
                <div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#626A6D]">
                    Candidate Profile
                  </div>
                  <div className="text-sm font-semibold tracking-tight text-[#F2F3F2] mt-0.5">
                    Fasika Solomon
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-mono uppercase text-[#6FA58B] bg-[#6FA58B]/10 px-2 py-0.5 rounded border border-[#6FA58B]/20">
                    5th Year
                  </span>
                </div>
              </div>

              {/* Engineering Profile Data Grid */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="font-mono text-[10px] text-[#626A6D] uppercase tracking-wider mb-1">
                    Institution & Stream
                  </div>
                  <div className="text-[#F2F3F2] font-medium">
                    Addis Ababa University
                  </div>
                  <div className="text-[#92999B] text-[11px] mt-0.5">
                    Electrical & Computer Engineering · Computer Stream
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1C2124]">
                  <div className="font-mono text-[10px] text-[#626A6D] uppercase tracking-wider mb-1.5">
                    Focus Areas
                  </div>
                  <div className="text-[#E4E4E7] leading-relaxed">
                    Full-Stack Systems · Backend Architecture · Databases & Caching · Computer Networks
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1C2124]">
                  <div className="font-mono text-[10px] text-[#626A6D] uppercase tracking-wider mb-2">
                    Primary Stack
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#92999B]">
                    <span className="text-[#F2F3F2]">React</span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-[#F2F3F2]">Next.js</span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-[#F2F3F2]">Node.js</span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-[#F2F3F2]">FastAPI</span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-[#F2F3F2]">PostgreSQL</span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-[#F2F3F2]">Redis</span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-[#F2F3F2]">Docker</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1C2124] flex items-center justify-between text-[11px] text-[#626A6D] font-mono">
                  <span>Architecture: Modular & Test-Backed</span>
                  <span className="text-[#6FA58B]">Active AAU 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
