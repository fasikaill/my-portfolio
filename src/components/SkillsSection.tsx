import { SKILL_CATEGORIES } from "../data/skills.ts";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-4">
            <div className="text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-2">
              Technical Toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-4">
              Technologies & System Matrix
            </h2>
            <p className="text-sm text-[#92999B] leading-relaxed mb-6">
              A structured index of languages, frontend and backend frameworks, data stores, testing frameworks, and integrations applied across university coursework and software implementations.
            </p>
            <div className="hidden lg:block text-xs font-mono text-[#626A6D] pt-4 border-t border-[#1C2124]">
              No arbitrary percentage meters. All technologies reflected in real projects or coursework.
            </div>
          </div>

          {/* Right Column: Horizontal Technology System / Skill Matrix */}
          <div className="lg:col-span-8">
            <div className="border border-[#252A2D] bg-[#101315] rounded divide-y divide-[#252A2D]">
              {SKILL_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className="p-5 sm:p-6 transition-colors hover:bg-[#14181A]/50"
                >
                  {/* Category Monospace Label */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6FA58B]">
                      {category.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#626A6D]">
                      {category.items.length} items
                    </span>
                  </div>

                  {/* Horizontal Flowing Technology Tokens */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] rounded hover:border-[#6FA58B]/50 transition-colors"
                      >
                        <span className="font-medium">{tech}</span>
                        {tech === "Java" && (
                          <span className="text-[10px] text-[#626A6D] font-mono">
                            (academic)
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
