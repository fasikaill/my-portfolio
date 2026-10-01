export function EngineeringApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand the problem",
      summary: "Start with the workflow, users, and system requirements.",
      details:
        "Before writing models or endpoints, I trace the actual operational flow—who uses the feature, what data mutations happen, what constraints exist, and where failure cases can occur.",
    },
    {
      number: "02",
      title: "Build the system",
      summary:
        "Break the application into sensible frontend, backend, API, database, and domain responsibilities.",
      details:
        "I favor modular boundaries: strong database schemas with relational integrity, explicit API contracts, isolated business logic, and UI components that cleanly reflect server state.",
    },
    {
      number: "03",
      title: "Verify the important flows",
      summary:
        "Use validation, testing, error handling, authentication, and careful UI states.",
      details:
        "Critical paths—like ticket check-ins, payment webhooks, or administrative ban enforcement—require runtime schema validation (Zod/Pydantic), role authorization guards, and automated test coverage.",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 border-b border-[#E7E6E0]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs font-mono text-[#1E3A2F] uppercase tracking-wider mb-2">
            Engineering Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            How I approach building software
          </h2>
          <p className="text-base text-[#52525B] max-w-2xl leading-relaxed">
            Practical software engineering is about making deliberate trade-offs, structuring clear domain boundaries, and building systems that remain maintainable when requirements expand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#D6D3CD] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-[#1E3A2F] transition-all shadow-xs"
            >
              <div>
                <div className="text-2xl font-bold font-mono text-[#1E3A2F] mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#1C1917] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-[#27272A] mb-3">
                  {step.summary}
                </p>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
