import { SITE_CONFIG } from "../config.ts";
import { Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#0B0D0E] text-xs text-[#626A6D]">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-[#F2F3F2]">
            {SITE_CONFIG.name}
          </div>
          <p className="text-[11px] text-[#92999B] mt-0.5">
            {SITE_CONFIG.stream} · {SITE_CONFIG.institution}
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#92999B] hover:text-[#F2F3F2] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{SITE_CONFIG.githubUsername}</span>
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
