import { useEffect, useRef } from "react";
import { X, Printer, ArrowUpRight, Mail, MapPin, Github, FileText, Download } from "lucide-react";
import { SITE_CONFIG } from "../config.ts";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export function ResumeModal({ isOpen, onClose, triggerElement }: ResumeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    if (triggerElement) {
      setTimeout(() => triggerElement.focus(), 0);
    }
  };

  const handlePrintPdf = () => {
    // Create an invisible iframe pointing directly to the official CV PDF
    const existingIframe = document.getElementById("pdf-print-frame") as HTMLIFrameElement | null;
    if (existingIframe) {
      existingIframe.remove();
    }

    const iframe = document.createElement("iframe");
    iframe.id = "pdf-print-frame";
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.src = SITE_CONFIG.cvPdfUrl;

    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
        } catch {
          window.print();
        }
      }, 250);
    };

    document.body.appendChild(iframe);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#101315] border border-[#252A2D] rounded shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-[#F2F3F2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden during print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#252A2D] bg-[#14181A] print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6FA58B]">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Download Official PDF */}
            <a
              href={SITE_CONFIG.cvPdfUrl}
              download="Fasika_Solomon_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F2F3F2] bg-[#101315] hover:bg-[#1A1F22] border border-[#252A2D] rounded transition-colors"
              title="Download official PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#6FA58B]" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </a>

            {/* Print Official PDF */}
            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors cursor-pointer"
              title="Print official PDF document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            {/* Close Modal */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={handleClose}
              className="p-1.5 text-[#92999B] hover:text-[#F2F3F2] hover:bg-[#1A1F22] rounded transition-colors ml-1"
              aria-label="Close CV Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Container */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#0B0D0E]">
          {/* Printable Resume Sheet */}
          <div className="max-w-[780px] mx-auto bg-[#101315] print:bg-white border border-[#252A2D] print:border-none rounded p-7 sm:p-10 shadow-xs print:shadow-none text-[#F2F3F2] print:text-black">
            {/* Header */}
            <div className="text-center pb-6 border-b border-[#252A2D] print:border-gray-300">
              <h1
                id="resume-modal-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F3F2] print:text-black"
              >
                Fasika Solomon
              </h1>
              <p className="text-xs sm:text-sm text-[#92999B] print:text-gray-700 mt-1">
                Software Engineering Student | Backend & Full-Stack Development
              </p>

              {/* Contact Row */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-3 text-xs text-[#92999B] print:text-gray-600">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#6FA58B] print:text-gray-800" />
                  <span>Addis Ababa, Ethiopia</span>
                </span>
                <span className="text-[#252A2D] print:text-gray-300" aria-hidden="true">|</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-1 text-[#6FA58B] print:text-black hover:underline"
                >
                  <Mail className="w-3 h-3" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <span className="text-[#252A2D] print:text-gray-300" aria-hidden="true">|</span>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#F2F3F2] print:text-black hover:underline"
                >
                  <Github className="w-3 h-3" />
                  <span>github.com/fasikaill</span>
                  <ArrowUpRight className="w-2.5 h-2.5 print:hidden" />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="py-5 border-b border-[#252A2D] print:border-gray-300">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#6FA58B] print:text-gray-900 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-[13px] text-[#D4D4D8] print:text-gray-800 leading-relaxed">
                5th-year Electrical and Computer Engineering student at Addis Ababa University with hands-on experience building full-stack web systems and backend services. Strong foundation in TypeScript, Python, Java, PostgreSQL, REST APIs, authentication, real-time communication, and testing. Experienced in working across frontend, backend, and data layers to implement structured business workflows.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="py-5 border-b border-[#252A2D] print:border-gray-300">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#6FA58B] print:text-gray-900 mb-3">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs sm:text-[13px]">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                    Languages
                  </span>
                  <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                    TypeScript, JavaScript, Python, Java, SQL, HTML, CSS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                    Backend
                  </span>
                  <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                    Node.js, Express, FastAPI, REST APIs, JWT, WebSockets
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                    Frontend
                  </span>
                  <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                    React, Next.js, Vite, Tailwind CSS, React Query, Zustand
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                    Data
                  </span>
                  <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                    PostgreSQL, MySQL, Prisma, SQLAlchemy, Redis, Alembic
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                    Testing / Tools
                  </span>
                  <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                    Jest, Vitest, Playwright, Supertest, Storybook, Git, GitHub, Docker, Linux
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Projects */}
            <div className="py-5 border-b border-[#252A2D] print:border-gray-300 space-y-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#6FA58B] print:text-gray-900 mb-2">
                Selected Projects
              </h2>

              {/* Dinkenesh */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#F2F3F2] print:text-black">
                    Dinkenesh Event Management System
                  </h3>
                  <span className="text-[11px] text-[#92999B] print:text-gray-600 font-mono">
                    Full-Stack
                  </span>
                </div>
                <div className="text-[11px] italic text-[#6FA58B] print:text-gray-700">
                  React, Vite, Node.js, Express, PostgreSQL, Prisma, Redis, JWT, Socket.IO
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-[#D4D4D8] print:text-gray-800 space-y-1">
                  <li>
                    Contributed to event discovery, organizer operations, ticketing, payments, QR check-in, moderation, analytics, and notifications.
                  </li>
                  <li>
                    Implemented the <strong className="text-[#F2F3F2] print:text-black font-semibold">Super Admin / Organization Moderation and Banning workflow</strong> across frontend and backend, with dedicated unit and integration tests.
                  </li>
                </ul>
                <div className="text-[11px] text-[#92999B] print:text-gray-600 font-mono pt-0.5">
                  github.com/fasikaill/Dinkenesh-Event-Management-System
                </div>
              </div>

              {/* Event Management System */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#F2F3F2] print:text-black">
                    Event Management System
                  </h3>
                  <span className="text-[11px] text-[#92999B] print:text-gray-600 font-mono">
                    Full-Stack
                  </span>
                </div>
                <div className="text-[11px] italic text-[#6FA58B] print:text-gray-700">
                  Next.js, React, TypeScript, Prisma, PostgreSQL, Redis, WebSockets, Better Auth, Chapa
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-[#D4D4D8] print:text-gray-800 space-y-1">
                  <li>
                    Built a modular platform covering events, tickets, reservations, payments, check-in, notifications, moderation, and integrations.
                  </li>
                  <li>
                    Worked with relational domain models, authentication, QR ticket flows, Redis-backed workflows, background workers, and WebSocket services.
                  </li>
                </ul>
                <div className="text-[11px] text-[#92999B] print:text-gray-600 font-mono pt-0.5">
                  github.com/fasikaill/Event_Management_System
                </div>
              </div>

              {/* Crime Management System */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#F2F3F2] print:text-black">
                    Centralized Crime Management System (CCMS)
                  </h3>
                  <span className="text-[11px] text-[#92999B] print:text-gray-600 font-mono">
                    Full-Stack
                  </span>
                </div>
                <div className="text-[11px] italic text-[#6FA58B] print:text-gray-700">
                  Next.js, TypeScript, FastAPI, Python, PostgreSQL, SQLAlchemy, Redis, Docker
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-[#D4D4D8] print:text-gray-800 space-y-1">
                  <li>
                    Developed application workflows for cases, evidence, personnel, departments, court cases, reports, and administration.
                  </li>
                  <li>
                    Worked with modular frontend architecture, permission guards, reusable components, and verification using Vitest, Playwright, and Storybook.
                  </li>
                </ul>
                <div className="text-[11px] text-[#92999B] print:text-gray-600 font-mono pt-0.5">
                  github.com/fasikaill/Crime_managment_system
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="py-5 border-b border-[#252A2D] print:border-gray-300">
              <div className="flex items-baseline justify-between flex-wrap gap-1 mb-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#6FA58B] print:text-gray-900">
                  Education
                </h2>
                <span className="text-xs font-mono text-[#92999B] print:text-gray-600">
                  2022 – Present
                </span>
              </div>
              <div className="text-xs sm:text-[13px] font-bold text-[#F2F3F2] print:text-black">
                Addis Ababa University
              </div>
              <div className="text-xs text-[#92999B] print:text-gray-700">
                B.Sc. Electrical and Computer Engineering — Computer Stream
              </div>
              <div className="text-xs text-[#626A6D] print:text-gray-600 mt-1 leading-relaxed">
                <strong className="text-[#92999B] print:text-gray-800">Relevant coursework: </strong>
                Data Structures, Data Communication, Database Systems, Digital Logic Design, Object-Oriented Programming, Computer Architecture, Software Engineering
              </div>
            </div>

            {/* Additional */}
            <div className="pt-5 space-y-2 text-xs sm:text-[13px]">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                  Focus
                </span>
                <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                  Backend engineering, system architecture, databases, real-time systems, authentication, testing
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-[#F2F3F2] print:text-black">
                  Seeking
                </span>
                <span className="sm:col-span-9 text-[#92999B] print:text-gray-800">
                  Software engineering internships and junior software engineering opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
