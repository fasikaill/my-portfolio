export function EngineeringApproach() {
  const stages = [
    {
      step: "01",
      name: "Understand",
      label: "Workflow & Invariants",
      summary: "Start with the operational workflow, actor permissions, and data constraints.",
      details:
        "Before creating tables or writing handlers, I trace who initiates actions, where authorization is required, and what state invariants must hold under concurrent conditions.",
    },
    {
      step: "02",
      name: "Build",
      label: "Modular Architecture",
      summary: "Decompose into typed API contracts, normalized database models, and isolated domain logic.",
      details:
        "I favor clean layer boundaries: explicit schema validations (Zod/Pydantic), relational foreign keys, atomic transactions, and UI components linked directly to server state.",
    },
    {
      step: "03",
      name: "Verify",
      label: "Automated Verification",
      summary: "Validate critical paths with integration test suites, error boundaries, and defensive checks.",
      details:
        "High-stakes paths—like QR check-in locks, payment verification, and moderation ban enforcement—are backed by dedicated unit/integration tests and transparent error feedback.",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-2">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-3">
            Engineering Approach
          </h2>
          <p className="text-sm sm:text-base text-[#92999B] max-w-2xl leading-relaxed">
            A three-stage process for designing reliable software systems that remain maintainable when domain requirements grow.
          </p>
        </div>

        {/* 3 Horizontal Stages with Thin Dividers and Strong Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#252A2D] bg-[#101315] rounded divide-y md:divide-y-0 md:divide-x divide-[#252A2D]">
          {stages.map((stage) => (
            <div key={stage.step} className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-[#6FA58B]">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#626A6D] uppercase tracking-wider">
                    {stage.label}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F2F3F2] mb-2">
                  {stage.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#E4E4E7] mb-3 leading-snug">
                  {stage.summary}
                </p>
                <p className="text-xs text-[#92999B] leading-relaxed">
                  {stage.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
