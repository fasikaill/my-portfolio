import { Project, PROJECTS } from "../data/projects.ts";
import { ArrowUpRight } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project, triggerEl?: HTMLElement) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [featuredProject, ...otherProjects] = PROJECTS;

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs text-[#6FA58B] tracking-wide mb-2">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-3">
            Projects I’ve built
          </h2>
          <p className="text-sm sm:text-base text-[#92999B] max-w-xl leading-relaxed">
            Practical systems across frontend applications, backend services, databases, authentication, and testing.
          </p>
        </div>

        {/* Featured Project 01: Dinkenesh Event Management System */}
        <div className="mb-8 p-7 sm:p-9 bg-[#101315] border border-[#252A2D] rounded hover:border-[#6FA58B]/40 transition-colors">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-sm font-mono text-[#6FA58B]">01</span>
            <div className="flex items-center gap-4 text-xs">
              <button
                type="button"
                onClick={(e) => onSelectProject(featuredProject, e.currentTarget)}
                className="text-[#6FA58B] hover:text-[#82B69D] transition-colors cursor-pointer"
              >
                View Architecture →
              </button>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#92999B] hover:text-[#F2F3F2] transition-colors"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F3F2]">
              {featuredProject.title}
            </h3>

            <p className="text-sm sm:text-base text-[#92999B] leading-relaxed">
              Full-stack event platform for event discovery, ticket sales, staff QR check-in, organizer workflows, moderation reports, and appeals.
            </p>

            <div className="text-xs text-[#626A6D]">
              React · Node.js · Express · PostgreSQL · Prisma · Redis · Socket.IO · Leaflet
            </div>

            {/* Contribution block */}
            <div className="pt-4 border-t border-[#1C2124]">
              <div className="text-[11px] uppercase tracking-wider text-[#6FA58B] mb-1">
                My contribution
              </div>
              <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed">
                Super Admin moderation + organizer ban flow. Implemented the report intake queue, organization suspension state machine, and dedicated backend/frontend test suites.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Projects: 02 & 03 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 bg-[#101315] border border-[#252A2D] rounded flex flex-col justify-between hover:border-[#6FA58B]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-[#6FA58B]">
                    0{idx + 2}
                  </span>
                  <div className="flex items-center gap-4 text-xs">
                    <button
                      type="button"
                      onClick={(e) => onSelectProject(project, e.currentTarget)}
                      className="text-[#6FA58B] hover:text-[#82B69D] transition-colors cursor-pointer"
                    >
                      View Architecture →
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#92999B] hover:text-[#F2F3F2] transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#F2F3F2] mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[#92999B] leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="text-xs text-[#626A6D] mb-5">
                  {project.id === "event-management-system"
                    ? "Next.js · TypeScript · Prisma · Redis · WebSockets · Better Auth · Chapa"
                    : "Next.js · Python · FastAPI · PostgreSQL · SQLAlchemy · Redis · Docker · Playwright"}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C2124]">
                <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-1.5">
                  Key areas
                </div>
                <div className="text-xs text-[#E4E4E7]">
                  {project.domainModules.slice(0, 5).join(" · ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
