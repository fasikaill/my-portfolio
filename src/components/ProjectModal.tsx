import { useEffect, useRef } from "react";
import { Project } from "../data/projects.ts";
import { X, ArrowUpRight, Check } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  triggerElement?: HTMLElement | null;
  onClose: () => void;
}

export function ProjectModal({ project, triggerElement, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    // Focus the close button when opened
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }

      // Simple focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  const handleClose = () => {
    onClose();
    // Return focus to opening trigger
    if (triggerElement) {
      setTimeout(() => triggerElement.focus(), 0);
    }
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-[#101315] border border-[#252A2D] rounded shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-[#F2F3F2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#252A2D] bg-[#101315]">
          <div>
            <div className="text-xs text-[#6FA58B] tracking-wide mb-1">
              Project Architecture
            </div>
            <h2
              id="project-modal-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#F2F3F2]"
            >
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#92999B] mt-0.5">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 rounded transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#92999B]" />
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className="p-1.5 text-[#92999B] hover:text-[#F2F3F2] hover:bg-[#1A1F22] rounded transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-6 text-sm">
          {/* Overview */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#626A6D] mb-1.5">
              Overview
            </div>
            <p className="text-sm text-[#D4D4D8] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Personal Engineering Contribution */}
          {project.personalContribution && (
            <div className="p-4 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="text-xs font-medium text-[#6FA58B] uppercase tracking-wider mb-1.5">
                My contribution
              </div>
              <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed mb-2">
                {project.personalContribution.details}
              </p>
              <div className="text-xs text-[#92999B]">
                {project.personalContribution.testingDetails}
              </div>
            </div>
          )}

          {/* Architecture Diagram */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#626A6D] mb-2">
              Architecture & Data Flow
            </div>
            <pre className="p-4 bg-[#0B0D0E] text-[#92999B] rounded text-xs leading-relaxed overflow-x-auto font-mono border border-[#252A2D]">
              {project.architecture.asciiDiagram}
            </pre>
          </div>

          {/* Layer Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="text-[11px] text-[#626A6D] uppercase tracking-wider mb-1">
                Frontend
              </div>
              <div className="text-[#F2F3F2]">
                {project.architecture.frontend}
              </div>
            </div>

            <div className="p-3.5 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="text-[11px] text-[#626A6D] uppercase tracking-wider mb-1">
                Backend
              </div>
              <div className="text-[#F2F3F2]">
                {project.architecture.backend}
              </div>
            </div>

            <div className="p-3.5 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="text-[11px] text-[#626A6D] uppercase tracking-wider mb-1">
                Data Storage
              </div>
              <div className="text-[#F2F3F2]">
                {project.architecture.dataStorage}
              </div>
            </div>

            <div className="p-3.5 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="text-[11px] text-[#626A6D] uppercase tracking-wider mb-1">
                Services & Integrations
              </div>
              <div className="text-[#F2F3F2]">
                {project.architecture.services}
              </div>
            </div>
          </div>

          {/* What it does */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#626A6D] mb-2.5">
              What it does
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.keyCapabilities.map((capability, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[#D4D4D8] p-2 bg-[#14181A] border border-[#1C2124] rounded"
                >
                  <Check className="w-3.5 h-3.5 text-[#6FA58B] shrink-0 mt-0.5" />
                  <span className="leading-snug">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#626A6D] mb-2">
              Stack
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#92999B]">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  <span className="text-[#F2F3F2]">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-[#252A2D]" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0D0E] border-t border-[#252A2D] flex items-center justify-between">
          <span className="text-xs text-[#626A6D]">
            Source repository on GitHub
          </span>
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-1.5 text-xs font-medium text-[#92999B] hover:text-[#F2F3F2] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
