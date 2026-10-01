import { SKILL_CATEGORIES } from "../data/skills.ts";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <div className="text-xs text-[#6FA58B] tracking-wide mb-2">
              Technical Toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-3">
              Technologies & disciplines
            </h2>
            <p className="text-sm text-[#92999B] leading-relaxed">
              Programming languages, frameworks, data stores, and engineering tools applied across academic coursework and software implementations.
            </p>
          </div>

          {/* Right Column: Typographic Flowing Layout */}
          <div className="lg:col-span-8 divide-y divide-[#1C2124]">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="py-5 first:pt-0 last:pb-0">
                <div className="text-[11px] font-medium tracking-wider uppercase text-[#626A6D] mb-2.5">
                  {category.title === "Databases & Data"
                    ? "Data"
                    : category.title === "Tools & Engineering"
                    ? "Engineering"
                    : category.title}
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-[#E4E4E7] hover:text-[#6FA58B] transition-colors"
                    >
                      {tech}
                      {tech === "Java" && (
                        <span className="text-xs text-[#626A6D] ml-1">
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
    </section>
  );
}
