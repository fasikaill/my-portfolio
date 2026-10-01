import { GraduationCap, BookOpen } from "lucide-react";

export function AboutSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Data Communication",
    "Computer Networks",
    "Digital Logic Design",
    "Object-Oriented Programming",
    "Database Systems",
    "Software Engineering",
    "Computer Architecture",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E7E6E0]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: First-Person Background Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono text-[#1E3A2F] uppercase tracking-wider mb-2">
                About
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] leading-tight">
                A computer engineering student who likes understanding how systems work.
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#3F3F46] leading-relaxed">
              <p>
                I am a 5th-year Electrical and Computer Engineering student in the Computer Stream at Addis Ababa University. My focus is on software engineering, particularly full-stack web systems, backend service architecture, relational databases, REST APIs, and computer networking.
              </p>
              <p>
                Throughout my university coursework, I found that I learn best by designing and building practical software rather than stopping at abstract syntax or short exercises. When working on projects, I care about how components connect: how database relations are modeled, how permissions and authentication are guarded, how data moves across asynchronous boundaries, and how errors are handled cleanly.
              </p>
              <p>
                I enjoy engineering problems that involve tangible workflows—such as event ticket verification, moderation audit trails, or multi-department case records. My goal is to join an engineering team where I can contribute to reliable systems, write clean code, and continue expanding my engineering foundation.
              </p>
            </div>
          </div>

          {/* Right Column: Education & Coursework */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D6D3CD] rounded-lg p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-3.5 mb-5 pb-5 border-b border-[#F0EFEA]">
                <div className="p-2.5 bg-[#1E3A2F]/10 rounded-md text-[#1E3A2F] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                    Education
                  </span>
                  <h3 className="text-lg font-bold text-[#1C1917] mt-0.5">
                    Addis Ababa University
                  </h3>
                  <p className="text-xs text-[#52525B]">
                    College of Technology and Built Environment
                  </p>
                  <p className="text-xs font-medium text-[#1E3A2F] mt-1">
                    B.Sc. in Electrical and Computer Engineering (Computer Stream) · 5th Year
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-[#1E3A2F]" />
                  <span>Relevant Coursework</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#27272A]">
                  {coursework.map((course) => (
                    <div
                      key={course}
                      className="p-2 bg-[#F9F9F6] border border-[#E7E6E0] rounded-md font-medium text-[#1C1917]"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
