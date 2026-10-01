export function EngineeringApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Start from users, workflows, requirements, and constraints.",
    },
    {
      number: "02",
      title: "Build",
      description: "Keep frontend, backend, APIs, and data responsibilities clear.",
    },
    {
      number: "03",
      title: "Verify",
      description: "Test important paths and handle failure states deliberately.",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs text-[#6FA58B] tracking-wide mb-2">
            Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-3">
            Engineering Approach
          </h2>
          <p className="text-sm sm:text-base text-[#92999B] max-w-xl leading-relaxed">
            A practical three-step process for building maintainable software.
          </p>
        </div>

        {/* 3 Horizontal Editorial Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#1C2124]">
          {steps.map((step) => (
            <div key={step.number} className="space-y-2">
              <div className="text-xs font-mono text-[#6FA58B]">
                {step.number} — {step.title}
              </div>
              <p className="text-sm text-[#E4E4E7] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
