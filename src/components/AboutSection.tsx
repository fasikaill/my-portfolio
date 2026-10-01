export function AboutSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Database Systems",
    "Operating & Computer Systems",
    "Software Engineering",
    "Data Communication",
    "Digital Logic Design",
    "Computer Architecture",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-2">
              About
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] leading-tight mb-6">
              A computer engineering student who likes understanding how systems work.
            </h2>
            <div className="text-xs font-mono text-[#626A6D] hidden lg:block">
              Addis Ababa University · College of Technology and Built Environment
            </div>
          </div>

          {/* Right Column: First-person narrative + Education Metadata Sheet */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-[#92999B] leading-relaxed">
              <p>
                I am a 5th-year Electrical and Computer Engineering student in the Computer Stream at Addis Ababa University. My interest is focused on practical software systems—designing backend services, managing relational databases, building structured web applications, and writing APIs that connect cleanly to user workflows.
              </p>
              <p>
                Throughout my university studies, I have found that I learn best by engineering concrete systems rather than relying purely on tutorials. When building projects, I care about the architectural boundaries: relational integrity in PostgreSQL, asynchronous routing in FastAPI, transactional consistency in Express, and automated test coverage across critical user paths.
              </p>
              <p>
                I enjoy engineering problems that involve real business constraints—such as event ticket verification, moderation audit trails, or multi-department case records.
              </p>
            </div>

            {/* Profile Specification Sheet (Open Editorial Layout, Not a Heavy Card) */}
            <div className="pt-6 border-t border-[#1C2124]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="text-[10px] font-mono text-[#626A6D] uppercase tracking-wider mb-1">
                    Education
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F2F3F2]">
                    Addis Ababa University
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-[#626A6D] uppercase tracking-wider mb-1">
                    Program
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F2F3F2]">
                    Electrical & Computer
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-[#626A6D] uppercase tracking-wider mb-1">
                    Stream
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F2F3F2]">
                    Computer Stream
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-[#626A6D] uppercase tracking-wider mb-1">
                    Standing
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#6FA58B] font-mono">
                    5th Year (2026)
                  </div>
                </div>
              </div>

              {/* Coursework List */}
              <div className="pt-4 border-t border-[#1C2124]">
                <div className="text-[10px] font-mono text-[#626A6D] uppercase tracking-wider mb-2.5">
                  Academic Coursework
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#92999B]">
                  {coursework.map((course, idx) => (
                    <span key={course} className="inline-flex items-center gap-2">
                      <span className="text-[#D4D4D8]">{course}</span>
                      {idx < coursework.length - 1 && (
                        <span className="text-[#252A2D]" aria-hidden="true">·</span>
                      )}
                    </span>
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
