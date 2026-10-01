export function CurrentlySection() {
  return (
    <section className="py-16 md:py-20 border-b border-[#E7E6E0] bg-[#F4F4EE]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] font-semibold">
              Currently
            </span>
            <h3 className="text-xl font-bold text-[#1C1917] mt-1">
              5th Year Focus
            </h3>
          </div>

          <div className="md:col-span-9">
            <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed">
              I am completing my 5th year of Electrical and Computer Engineering (Computer Stream) at Addis Ababa University. I am continuing to deepen my skills in full-stack web architecture, asynchronous backend engines, relational database indexing, and computer networking—building projects that challenge my understanding of scale, concurrency, and software design patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
