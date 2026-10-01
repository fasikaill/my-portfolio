import { SITE_CONFIG } from "../config.ts";
import { Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#F9F9F6] text-sm text-[#71717A]">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-[#1C1917]">
            {SITE_CONFIG.name}
          </div>
          <p className="text-xs text-[#52525B] mt-0.5">
            {SITE_CONFIG.stream} · {SITE_CONFIG.institution}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#1C1917] hover:text-[#1E3A2F] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{SITE_CONFIG.githubUsername}</span>
            <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
          </a>

          <span className="text-[#D6D3CD]" aria-hidden="true">
            ·
          </span>

          <span>{SITE_CONFIG.year}</span>
        </div>
      </div>
    </footer>
  );
}
