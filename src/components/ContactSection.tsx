import { useState } from "react";
import { CONTACT_EMAIL, SITE_CONFIG } from "../config.ts";
import { ArrowUpRight, FileText } from "lucide-react";

interface ContactSectionProps {
  onOpenResume?: (trigger?: HTMLElement) => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  // Check if email has been customized by the user
  const isCustomEmail =
    CONTACT_EMAIL &&
    !CONTACT_EMAIL.includes("replace-with-your-email") &&
    CONTACT_EMAIL.includes("@");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#252A2D]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs text-[#6FA58B] tracking-wide mb-2">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-4">
            Let’s build something useful.
          </h2>
          <p className="text-sm sm:text-base text-[#92999B] leading-relaxed mb-8">
            I am currently in my final year of Computer Engineering at Addis Ababa University. I am interested in software engineering internships, junior developer roles, and practical project collaborations.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* GitHub Primary */}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Direct Mailto */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 hover:bg-[#1A1F22] rounded transition-all"
            >
              <span>Email</span>
            </a>

            {/* View CV Button */}
            {onOpenResume && (
              <button
                type="button"
                onClick={(e) => onOpenResume(e.currentTarget)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 hover:bg-[#1A1F22] rounded transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#6FA58B]" />
                <span>View CV</span>
              </button>
            )}

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3 py-2 text-xs font-medium text-[#92999B] hover:text-[#F2F3F2] transition-colors cursor-pointer"
            >
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          {/* Only display the address if it has been replaced with a real email */}
          {isCustomEmail && (
            <div className="mt-5 text-xs text-[#92999B] font-mono">
              {CONTACT_EMAIL}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
