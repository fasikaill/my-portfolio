import { useEffect } from "react";
import { Project } from "../data/projects.ts";
import { X, Github, ArrowUpRight, Check, Layers, Cpu, Database, Server, ShieldCheck } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1C1917]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#F9F9F6] border border-[#D6D3CD] rounded-lg shadow-xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between px-6 py-5 bg-[#F9F9F6] border-b border-[#E7E6E0]">
          <div>
            <div className="text-xs font-mono text-[#1E3A2F] uppercase tracking-wider mb-1">
              Case Study & System Architecture
            </div>
            <h2
              id="project-modal-title"
              className="text-2xl font-bold tracking-tight text-[#1C1917]"
            >
              {project.title}
            </h2>
            <p className="text-sm text-[#52525B] mt-0.5">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-white border border-[#D6D3CD] hover:border-[#1E3A2F] rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#71717A] hover:text-[#1C1917] hover:bg-[#EAE8E2] rounded-md transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2">
              System Overview
            </h3>
            <p className="text-base text-[#27272A] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Personal Engineering Contribution Highlight */}
          {project.personalContribution && (
            <div className="p-5 bg-white border border-[#1E3A2F]/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#1E3A2F]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1E3A2F]">
                  Specific Engineering Contribution
                </span>
                <span className="text-xs font-medium text-[#52525B] ml-auto">
                  {project.personalContribution.roleLabel}
                </span>
              </div>
              <p className="text-[#27272A] leading-relaxed mb-3">
                {project.personalContribution.details}
              </p>
              <div className="pt-3 border-t border-[#F0EFEA] text-xs text-[#52525B]">
                <strong className="text-[#1C1917]">Automated Verification: </strong>
                {project.personalContribution.testingDetails}
              </div>
            </div>
          )}

          {/* Architecture Diagram */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                System Architecture & Data Flow
              </h3>
              <span className="text-xs text-[#71717A]">
                Component & Layer Topology
              </span>
            </div>
            <pre className="p-4 bg-[#1C1917] text-[#E4E4E7] rounded-lg text-xs leading-relaxed overflow-x-auto font-mono border border-[#3F3F46]">
              {project.architecture.asciiDiagram}
            </pre>
          </div>

          {/* Layer Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-[#E7E6E0] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-medium text-[#71717A] mb-1">
                <Layers className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span>Frontend Layer</span>
              </div>
              <div className="text-sm font-medium text-[#1C1917]">
                {project.architecture.frontend}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E7E6E0] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-medium text-[#71717A] mb-1">
                <Server className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span>Backend Services</span>
              </div>
              <div className="text-sm font-medium text-[#1C1917]">
                {project.architecture.backend}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E7E6E0] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-medium text-[#71717A] mb-1">
                <Database className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span>Data Storage & Cache</span>
              </div>
              <div className="text-sm font-medium text-[#1C1917]">
                {project.architecture.dataStorage}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E7E6E0] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-medium text-[#71717A] mb-1">
                <Cpu className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span>Integrations & Environment</span>
              </div>
              <div className="text-sm font-medium text-[#1C1917]">
                {project.architecture.services}
              </div>
            </div>
          </div>

          {/* Verified Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
              Verified Implemented Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyCapabilities.map((capability, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#3F3F46] bg-white border border-[#E7E6E0] p-3 rounded-md"
                >
                  <Check className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span className="leading-snug">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Manifest */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
              Technology Manifest
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#52525B]">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-1.5">
                  <span className="text-[#1C1917] font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-[#D6D3CD]" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F4F4EE] border-t border-[#E7E6E0] flex items-center justify-between">
          <span className="text-xs text-[#71717A]">
            Verified source repository on GitHub
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#52525B] hover:text-[#1C1917] transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#1E3A2F] hover:bg-[#14261F] rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Code on GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#A3E635]/80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
