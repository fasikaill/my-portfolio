export function AboutSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Database Systems",
    "Software Engineering",
    "Computer Architecture",
    "Operating Systems",
    "Data Communication",
    "Digital Logic Design",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="text-xs text-[#6FA58B] tracking-wide mb-2">
              About
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] leading-tight">
              A computer engineering student who enjoys building practical software.
            </h2>
          </div>

          {/* Right Column: First-Person Narrative & Compact Education Sheet */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-[#92999B] leading-relaxed">
              <p>
                I am a 5th-year Computer Engineering student at Addis Ababa University. I enjoy building software systems that solve real problems—from interactive user interfaces to reliable backend APIs and databases.
              </p>
              <p>
                During my studies, I found that the best way to understand systems is to build them. I spend my time working on projects that require thoughtful design: structuring relational models, managing authentication flows, handling real-time communications, and testing critical paths.
              </p>
              <p>
                I’m especially interested in full-stack web applications, backend services, networking, and system-oriented engineering where reliability and clean structure matter.
              </p>
            </div>

            {/* Compact Education Sheet */}
            <div className="pt-6 border-t border-[#1C2124]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-1">
                    Education
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                    Addis Ababa University
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-1">
                    Program
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                    Electrical & Computer
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-1">
                    Stream
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                    Computer
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-1">
                    Year
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#6FA58B]">
                    5th Year
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div className="pt-4 border-t border-[#1C2124]">
                <div className="text-[11px] uppercase tracking-wider text-[#626A6D] mb-2">
                  Coursework
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#92999B]">
                  {coursework.map((course, idx) => (
                    <span key={course} className="inline-flex items-center gap-3">
                      <span>{course}</span>
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
