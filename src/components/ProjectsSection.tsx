import { Project, PROJECTS } from "../data/projects.ts";
import { Github, ArrowUpRight, ShieldCheck, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const featuredProject = PROJECTS[0]; // Dinkenesh
  const secondaryProjects = PROJECTS.slice(1); // Event Management System & CCMS

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-2">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-3">
            Projects I’ve actually built
          </h2>
          <p className="text-sm sm:text-base text-[#92999B] max-w-2xl leading-relaxed">
            Full-stack systems representing practical experience with frontend architecture, backend services, relational databases, authentication, real-world workflows, and automated testing.
          </p>
        </div>

        {/* Featured Project 01: Dinkenesh Event Management System */}
        <div className="mb-12 bg-[#101315] border border-[#252A2D] rounded p-6 sm:p-9 hover:border-[#6FA58B]/40 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1C2124] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#6FA58B] tracking-wider uppercase">
                01 · Featured Case Study
              </span>
              <span className="text-[#252A2D]" aria-hidden="true">·</span>
              <span className="text-xs text-[#626A6D]">Full-Stack Platform</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectProject(featuredProject)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#6FA58B] bg-[#6FA58B]/10 hover:bg-[#6FA58B]/20 rounded border border-[#6FA58B]/25 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture →</span>
              </button>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 rounded transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#92999B]" />
                <span>View GitHub →</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F3F2] mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-[#92999B]">
                  {featuredProject.tagline}
                </p>
              </div>

              <p className="text-sm text-[#92999B] leading-relaxed">
                {featuredProject.summary}
              </p>

              {/* Personal Contribution */}
              <div className="p-4 bg-[#14181A] border border-[#252A2D] rounded">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6FA58B]" />
                  <span>My Contribution: Super Admin + Organizer Moderation / Ban Flow</span>
                </div>
                <p className="text-xs text-[#E4E4E7] leading-relaxed mb-2">
                  Engineered the complete moderation workflow across frontend and backend services for handling event policy reports and banning organizers. Author of dedicated unit and integration test suites validating ban state transitions, access revocation, and client moderation UI.
                </p>
                <div className="text-[11px] font-mono text-[#626A6D]">
                  Repository includes dedicated ban-flow backend and frontend test suites.
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-[11px] font-mono text-[#626A6D] uppercase tracking-wider mb-2">
                  Stack
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#92999B]">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-2">
                      <span className="text-[#F2F3F2]">{tech}</span>
                      {idx < featuredProject.technologies.length - 1 && (
                        <span className="text-[#252A2D]" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Preview Visual */}
            <div className="lg:col-span-5 bg-[#0B0D0E] border border-[#252A2D] rounded p-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#626A6D] mb-3">
                <span className="uppercase tracking-wider">Topology Preview</span>
                <span>Node · PostgreSQL · Redis</span>
              </div>

              <pre className="p-3 bg-[#101315] text-[#92999B] rounded text-[11px] leading-relaxed overflow-x-auto font-mono mb-4 border border-[#1C2124]">
{`[Client Apps]
 ├── Attendee & Organizer Portal
 └── Super Admin Moderation Console
       │
[Express REST API + Socket.IO]
 ├── Role Guards & Ban Middleware
 ├── QR Scan & Atomic Duplicate Lock
 └── Reports & Appeals Workflow
       │
[Prisma / PostgreSQL] + [Redis Cache]`}
              </pre>

              <div className="space-y-1.5 text-xs text-[#92999B]">
                <div className="text-[#F2F3F2] font-medium text-[11px] font-mono uppercase tracking-wider mb-1">
                  Key Capabilities:
                </div>
                <div className="text-[11px] text-[#92999B] space-y-1">
                  <div>· QR check-in with atomic duplicate scan prevention</div>
                  <div>· Payment initialization and Chapa confirmation</div>
                  <div>· Organization ban enforcement and appeal queues</div>
                  <div>· Admin metrics dashboard with CSV analytics export</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1C2124]">
                <button
                  type="button"
                  onClick={() => onSelectProject(featuredProject)}
                  className="w-full text-center py-1.5 text-xs font-medium text-[#6FA58B] hover:text-[#F2F3F2] transition-colors cursor-pointer"
                >
                  View Full Architecture Diagram →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects: 02 & 03 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#101315] border border-[#252A2D] rounded p-6 sm:p-7 flex flex-col justify-between hover:border-[#6FA58B]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#1C2124] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-[#6FA58B] tracking-wider uppercase">
                      0{idx + 2}
                    </span>
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                    <span className="text-xs text-[#626A6D]">
                      {project.id === "event-management-system"
                        ? "Next.js Domain Architecture"
                        : "Next.js + FastAPI System"}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#F2F3F2] mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#6FA58B] mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-[#92999B] leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Modules */}
                <div className="mb-5 p-3 bg-[#14181A] border border-[#1C2124] rounded text-xs">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#626A6D] mb-1.5">
                    Domains & Modules
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#E4E4E7]">
                    {project.domainModules.map((mod, mIdx) => (
                      <span key={mod} className="inline-flex items-center gap-2">
                        <span>{mod}</span>
                        {mIdx < project.domainModules.length - 1 && (
                          <span className="text-[#252A2D]" aria-hidden="true">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#626A6D] mb-1.5">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#92999B]">
                    {project.technologies.slice(0, 8).map((tech, tIdx) => (
                      <span key={tech} className="inline-flex items-center gap-1.5">
                        <span className="text-[#F2F3F2]">{tech}</span>
                        {tIdx < 7 && (
                          <span className="text-[#252A2D]" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                    {project.technologies.length > 8 && (
                      <span className="text-[#626A6D] text-[11px]">
                        +{project.technologies.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#1C2124] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-medium text-[#6FA58B] hover:text-[#F2F3F2] transition-colors cursor-pointer"
                >
                  Architecture →
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 rounded transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#92999B]" />
                  <span>View GitHub →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
