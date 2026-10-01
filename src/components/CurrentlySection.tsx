export function CurrentlySection() {
  return (
    <section className="py-12 md:py-16 border-b border-[#252A2D] bg-[#101315]/50">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6FA58B] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#6FA58B] font-semibold">
              Currently
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#92999B] leading-relaxed max-w-3xl">
            5th-year Computer Engineering student at Addis Ababa University, continuing to work across full-stack development, backend systems, databases, networking, and practical software engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
