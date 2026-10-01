import { SITE_CONFIG } from "../config.ts";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#0B0D0E] text-xs text-[#626A6D]">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-medium text-[#F2F3F2]">
            {SITE_CONFIG.name}
          </div>
          <div className="text-[11px] text-[#92999B] mt-0.5">
            Computer Engineering · Addis Ababa University
          </div>
        </div>

        <div className="flex items-center gap-5 text-[11px]">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[#92999B] hover:text-[#F2F3F2] transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#626A6D]" />
          </a>

          <span className="text-[#252A2D]" aria-hidden="true">
            ·
          </span>

          <span>{SITE_CONFIG.year}</span>
        </div>
      </div>
    </footer>
  );
}
