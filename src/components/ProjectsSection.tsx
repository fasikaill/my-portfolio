import { Project, PROJECTS } from "../data/projects.ts";
import { Github, ArrowUpRight, ShieldCheck, Binary, Terminal, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const featuredProject = PROJECTS[0]; // Dinkenesh Event Management System
  const secondaryProjects = PROJECTS.slice(1); // Event Management System & CCMS

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#E7E6E0]">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#1E3A2F] uppercase tracking-wider mb-2">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            Projects I’ve actually built
          </h2>
          <p className="text-base text-[#52525B] max-w-2xl leading-relaxed">
            These systems represent practical experience designing frontend applications, backend services, relational database schemas, authentication layers, business workflows, APIs, automated test suites, and software architecture.
          </p>
        </div>

        {/* Featured Case Study: Project 01 (Dinkenesh) */}
        <div className="mb-10 bg-white border border-[#D6D3CD] rounded-lg p-6 sm:p-9 shadow-xs hover:border-[#1E3A2F] transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0EFEA] pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#1E3A2F] tracking-wider uppercase">
                Featured Case Study 01
              </span>
              <span className="text-xs text-[#71717A]" aria-hidden="true">
                ·
              </span>
              <span className="text-xs text-[#71717A]">Full-Stack Platform</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectProject(featuredProject)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1E3A2F] bg-[#1E3A2F]/8 hover:bg-[#1E3A2F]/15 rounded-md transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Explore Architecture & Deep Dive</span>
              </button>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-white border border-[#D6D3CD] hover:border-[#1E3A2F] rounded-md transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-medium text-[#1E3A2F]">
                  {featuredProject.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {featuredProject.summary}
              </p>

              {/* Personal Contribution Box */}
              <div className="p-4 bg-[#F9F9F6] border border-[#E7E6E0] rounded-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1E3A2F]" />
                  <span>Contribution: Super Admin + Organizer Moderation / Ban Flow</span>
                </div>
                <p className="text-xs text-[#3F3F46] leading-relaxed mb-2">
                  Engineered the frontend and backend workflow for handling event reports and banning organizers. Built the administrative queue, status transitions, appeals pipeline, and authored dedicated ban-flow unit and integration tests.
                </p>
                <div className="text-[11px] text-[#71717A]">
                  Repository includes dedicated ban-flow automated test suites across backend routes and client state.
                </div>
              </div>

              {/* Technologies (Clean Unboxed Separator List) */}
              <div>
                <div className="text-xs text-[#71717A] uppercase tracking-wider mb-2">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#3F3F46]">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-2">
                      <span className="font-medium text-[#1C1917]">{tech}</span>
                      {idx < featuredProject.technologies.length - 1 && (
                        <span className="text-[#D6D3CD]" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Preview Box */}
            <div className="lg:col-span-5 bg-[#F9F9F6] border border-[#E7E6E0] rounded-lg p-5">
              <div className="flex items-center justify-between text-xs text-[#71717A] mb-3">
                <span className="font-mono uppercase tracking-wider">
                  Topology Preview
                </span>
                <span className="text-[11px]">PostgreSQL · Express · Redis</span>
              </div>

              <pre className="p-3.5 bg-[#1C1917] text-[#E4E4E7] rounded text-[11px] leading-relaxed overflow-x-auto font-mono mb-4 border border-[#3F3F46]">
{`[Client Layers]
 ├── Attendee & Organizer App
 └── Super Admin Moderation Console
       │
[Express.js Gateway + Socket.IO]
 ├── Role Guards & Ban Middleware
 ├── QR Scan & Atomic Check-in
 └── Reports & Appeals Engine
       │
[Prisma / PostgreSQL] + [Redis]`}
              </pre>

              <div className="space-y-2 text-xs text-[#52525B]">
                <div className="font-medium text-[#1C1917] mb-1">
                  Key Implemented Capabilities:
                </div>
                <ul className="space-y-1 text-[11px]">
                  <li>• QR check-in with atomic duplicate scan prevention</li>
                  <li>• Payment initialization, confirmation & verification</li>
                  <li>• Organization ban enforcement & appeal submissions</li>
                  <li>• Admin metrics dashboard with CSV data export</li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E7E6E0]">
                <button
                  type="button"
                  onClick={() => onSelectProject(featuredProject)}
                  className="w-full text-center py-2 text-xs font-medium text-[#1E3A2F] bg-white border border-[#D6D3CD] hover:border-[#1E3A2F] rounded transition-colors"
                >
                  View Full Architecture Diagram →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Case Studies Grid: Project 02 & 03 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white border border-[#D6D3CD] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-[#1E3A2F] transition-all shadow-xs"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 border-b border-[#F0EFEA] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-[#1E3A2F] tracking-wider uppercase">
                      Case Study 0{idx + 2}
                    </span>
                    <span className="text-xs text-[#71717A]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-xs text-[#71717A]">
                      {project.id === "event-management-system"
                        ? "Modular Next.js Platform"
                        : "Next.js + FastAPI System"}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#1C1917] mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#1E3A2F] mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-[#52525B] leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Domain Modules Preview */}
                <div className="mb-5 p-3.5 bg-[#F9F9F6] border border-[#E7E6E0] rounded-md">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] mb-1.5 flex items-center gap-1.5">
                    {project.id === "event-management-system" ? (
                      <Terminal className="w-3.5 h-3.5 text-[#1E3A2F]" />
                    ) : (
                      <Binary className="w-3.5 h-3.5 text-[#1E3A2F]" />
                    )}
                    <span>Architecture & Modules</span>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#27272A]">
                    {project.domainModules.map((module, mIdx) => (
                      <span key={module} className="inline-flex items-center gap-2">
                        <span>{module}</span>
                        {mIdx < project.domainModules.length - 1 && (
                          <span className="text-[#D6D3CD]" aria-hidden="true">
                            /
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="mb-6">
                  <div className="text-xs text-[#71717A] uppercase tracking-wider mb-1.5">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#52525B]">
                    {project.technologies.slice(0, 8).map((tech, tIdx) => (
                      <span key={tech} className="inline-flex items-center gap-1.5">
                        <span className="font-medium text-[#1C1917]">{tech}</span>
                        {tIdx < 7 && (
                          <span className="text-[#D6D3CD]" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                    {project.technologies.length > 8 && (
                      <span className="text-[#71717A] text-[11px]">
                        +{project.technologies.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-medium text-[#1E3A2F] hover:text-[#14261F] underline underline-offset-4 cursor-pointer"
                >
                  Explore Architecture →
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-[#F9F9F6] border border-[#D6D3CD] hover:border-[#1E3A2F] rounded-md transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
