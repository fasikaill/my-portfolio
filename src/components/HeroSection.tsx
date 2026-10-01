import { SITE_CONFIG } from "../config.ts";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7">
            {/* Small Eyebrow */}
            <div className="text-xs text-[#6FA58B] tracking-wide mb-4">
              Computer Engineering · Addis Ababa University
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F3F2] leading-[1.08] mb-6">
              {SITE_CONFIG.name}
            </h1>

            {/* Main Statement */}
            <p className="text-xl sm:text-2xl text-[#E4E4E7] font-medium leading-snug mb-6 text-balance">
              Computer Engineering student building full-stack software systems.
            </p>

            {/* Concise Supporting Copy */}
            <p className="text-sm sm:text-base text-[#92999B] leading-relaxed mb-8 max-w-xl">
              I’m a 5th-year Computer Engineering student at Addis Ababa University. I focus on full-stack development, backend services, databases, and practical software engineering—building systems with clear architectures and reliable workflows.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors"
              >
                <span>View Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#0B0D0E]" />
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 hover:bg-[#1A1F22] rounded transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#92999B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Simplified Elegant Profile Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#101315] border border-[#252A2D] rounded p-6 sm:p-7 space-y-6">
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-[#F2F3F2] mb-1">
                  Fasika Solomon
                </div>
                <div className="text-xs text-[#92999B]">
                  5th Year · Computer Engineering
                </div>
                <div className="text-xs text-[#626A6D]">
                  Addis Ababa University
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C2124]">
                <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-2">
                  Focus
                </div>
                <div className="space-y-1 text-xs text-[#E4E4E7]">
                  <div>Full-Stack Development</div>
                  <div>Backend Systems</div>
                  <div>Databases</div>
                  <div>Networking</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C2124]">
                <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-2">
                  Stack
                </div>
                <div className="text-xs text-[#92999B] leading-relaxed">
                  <div>React · Next.js · Node.js</div>
                  <div className="mt-0.5">FastAPI · PostgreSQL · Redis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
