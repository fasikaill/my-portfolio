import { SKILL_CATEGORIES } from "../data/skills.ts";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E7E6E0]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs font-mono text-[#1E3A2F] uppercase tracking-wider mb-2">
            Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            Technologies and disciplines
          </h2>
          <p className="text-base text-[#52525B] max-w-2xl leading-relaxed">
            The programming languages, frameworks, databases, and testing tools I use across academic coursework and software implementations. Grouped by engineering domain without arbitrary percentage ratings.
          </p>
        </div>

        {/* 6 Categorized Skill Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white border border-[#D6D3CD] rounded-lg p-6 flex flex-col justify-between hover:border-[#1E3A2F] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#F0EFEA] pb-3 mb-3">
                  <h3 className="text-base font-bold text-[#1C1917]">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-mono text-[#71717A]">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#52525B] leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Unboxed Typographic Skills Display */}
                <div className="pt-2 border-t border-[#F0EFEA]">
                  <ul className="space-y-1.5 text-xs">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between py-0.5 text-[#27272A]"
                      >
                        <span className="font-medium text-[#1C1917]">{item}</span>
                        {item === "Java" && (
                          <span className="text-[11px] text-[#71717A] italic">
                            Academic & Systems
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
