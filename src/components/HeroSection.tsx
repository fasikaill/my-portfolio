import { SITE_CONFIG } from "../config.ts";
import { ArrowDown, Github, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#E7E6E0]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E3A2F] uppercase mb-4">
              <span>Computer Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Addis Ababa University</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.08] mb-6">
              {SITE_CONFIG.name}
            </h1>

            {/* Core Statement */}
            <p className="text-xl sm:text-2xl text-[#27272A] font-medium leading-snug mb-6 text-balance">
              I build practical software systems across the frontend, backend, and database layers.
            </p>

            {/* Supporting Copy */}
            <p className="text-base text-[#52525B] leading-relaxed mb-8 max-w-xl">
              I am a 5th-year Computer Engineering student at Addis Ababa University. I focus on building reliable, full-stack systems using React, Next.js, Node.js, Express, Python/FastAPI, PostgreSQL, Prisma, Redis, TypeScript, and related tools—emphasizing modular architecture, real-world business workflows, and rigorous verification.
            </p>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1E3A2F] hover:bg-[#14261F] rounded-md transition-colors shadow-xs"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#A3E635]/80" />
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1C1917] bg-white border border-[#D6D3CD] hover:bg-[#F4F4EE] hover:border-[#1E3A2F] rounded-md transition-all"
              >
                <Github className="w-4 h-4 text-[#1C1917]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
              </a>
            </div>
          </div>

          {/* Right Column: Refined Technical Context Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E7E6E0] rounded-lg p-6 sm:p-7 shadow-xs">
              {/* Header */}
              <div className="border-b border-[#F0EFEA] pb-4 mb-5">
                <span className="text-xs font-mono tracking-wider uppercase text-[#71717A]">
                  Academic & Engineering Profile
                </span>
                <h3 className="text-lg font-semibold text-[#1C1917] mt-1">
                  Addis Ababa University
                </h3>
                <p className="text-xs text-[#52525B]">
                  College of Technology and Built Environment
                </p>
              </div>

              {/* Technical Facts */}
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-[#71717A] uppercase tracking-wider mb-1">
                    Standing & Stream
                  </div>
                  <div className="font-medium text-[#1C1917]">
                    5th Year · Electrical & Computer Engineering (Computer Stream)
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#71717A] uppercase tracking-wider mb-1">
                    Engineering Focus
                  </div>
                  <div className="text-[#27272A] leading-snug">
                    Full-Stack Development · Backend Systems · Relational Databases · Networking
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#71717A] uppercase tracking-wider mb-1">
                    Verified Repository Stack
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#52525B]">
                    <span>Next.js</span>
                    <span aria-hidden="true">·</span>
                    <span>React</span>
                    <span aria-hidden="true">·</span>
                    <span>Node.js</span>
                    <span aria-hidden="true">·</span>
                    <span>FastAPI</span>
                    <span aria-hidden="true">·</span>
                    <span>PostgreSQL</span>
                    <span aria-hidden="true">·</span>
                    <span>Prisma</span>
                    <span aria-hidden="true">·</span>
                    <span>Redis</span>
                    <span aria-hidden="true">·</span>
                    <span>Docker</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F0EFEA]">
                  <div className="text-xs text-[#71717A] uppercase tracking-wider mb-2">
                    System Design Principles
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#3F3F46]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0" />
                      <span>Modular domain architecture over monolithic entanglement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0" />
                      <span>Role-based access control & permission enforcement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0" />
                      <span>Integration & unit test verification on critical paths</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
