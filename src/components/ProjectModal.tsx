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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#101315] border border-[#252A2D] rounded shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-[#F2F3F2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between px-6 py-5 bg-[#101315] border-b border-[#252A2D]">
          <div>
            <div className="text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-1">
              Architecture & System Specification
            </div>
            <h2
              id="project-modal-title"
              className="text-2xl font-bold tracking-tight text-[#F2F3F2]"
            >
              {project.title}
            </h2>
            <p className="text-sm text-[#92999B] mt-0.5">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 rounded transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#92999B]" />
              <span>Repository</span>
              <ArrowUpRight className="w-3 h-3 text-[#626A6D]" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#92999B] hover:text-[#F2F3F2] hover:bg-[#1A1F22] rounded transition-colors"
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
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#626A6D] mb-2">
              System Overview
            </h3>
            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Personal Engineering Contribution Highlight */}
          {project.personalContribution && (
            <div className="p-5 bg-[#14181A] border border-[#6FA58B]/30 rounded">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#6FA58B]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6FA58B]">
                  Engineering Contribution
                </span>
                <span className="text-xs text-[#92999B] ml-auto font-mono">
                  {project.personalContribution.roleLabel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed mb-3">
                {project.personalContribution.details}
              </p>
              <div className="pt-3 border-t border-[#1C2124] text-xs text-[#92999B]">
                <strong className="text-[#F2F3F2]">Test Suite: </strong>
                {project.personalContribution.testingDetails}
              </div>
            </div>
          )}

          {/* Architecture Diagram */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#626A6D]">
                System Architecture & Data Flow
              </h3>
              <span className="text-xs font-mono text-[#626A6D]">
                Layer Topology
              </span>
            </div>
            <pre className="p-4 bg-[#0B0D0E] text-[#92999B] rounded text-xs leading-relaxed overflow-x-auto font-mono border border-[#252A2D]">
              {project.architecture.asciiDiagram}
            </pre>
          </div>

          {/* Layer Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="flex items-center gap-2 text-xs font-mono text-[#626A6D] mb-1">
                <Layers className="w-3.5 h-3.5 text-[#6FA58B]" />
                <span>Frontend Layer</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                {project.architecture.frontend}
              </div>
            </div>

            <div className="p-4 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="flex items-center gap-2 text-xs font-mono text-[#626A6D] mb-1">
                <Server className="w-3.5 h-3.5 text-[#6FA58B]" />
                <span>Backend Services</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                {project.architecture.backend}
              </div>
            </div>

            <div className="p-4 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="flex items-center gap-2 text-xs font-mono text-[#626A6D] mb-1">
                <Database className="w-3.5 h-3.5 text-[#6FA58B]" />
                <span>Data Storage & Cache</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                {project.architecture.dataStorage}
              </div>
            </div>

            <div className="p-4 bg-[#14181A] border border-[#252A2D] rounded">
              <div className="flex items-center gap-2 text-xs font-mono text-[#626A6D] mb-1">
                <Cpu className="w-3.5 h-3.5 text-[#6FA58B]" />
                <span>Integrations & Environment</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F2F3F2]">
                {project.architecture.services}
              </div>
            </div>
          </div>

          {/* Verified Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#626A6D] mb-3">
              Verified Implemented Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyCapabilities.map((capability, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#D4D4D8] bg-[#14181A] border border-[#252A2D] p-3 rounded"
                >
                  <Check className="w-3.5 h-3.5 text-[#6FA58B] shrink-0 mt-0.5" />
                  <span className="leading-snug">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Manifest */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#626A6D] mb-3">
              Technology Manifest
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#92999B]">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-1.5">
                  <span className="text-[#F2F3F2] font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-[#252A2D]" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0D0E] border-t border-[#252A2D] flex items-center justify-between">
          <span className="text-xs font-mono text-[#626A6D]">
            Source repository on GitHub
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#92999B] hover:text-[#F2F3F2] transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Code on GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
