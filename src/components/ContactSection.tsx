import { useState } from "react";
import { CONTACT_EMAIL, SITE_CONFIG } from "../config.ts";
import { Github, Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

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
          <div className="text-xs font-mono text-[#6FA58B] uppercase tracking-wider mb-2">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3F2] mb-4">
            Let’s build something useful.
          </h2>
          <p className="text-sm sm:text-base text-[#92999B] leading-relaxed mb-8">
            I am currently completing my 5th year of Computer Engineering at Addis Ababa University and exploring software engineering internships, junior developer roles, and practical project collaborations.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* GitHub Primary */}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#0B0D0E] bg-[#6FA58B] hover:bg-[#82B69D] rounded transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#0B0D0E]" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Direct Mailto */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F2F3F2] bg-[#14181A] border border-[#252A2D] hover:border-[#6FA58B]/50 hover:bg-[#1A1F22] rounded transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#6FA58B]" />
              <span>Email</span>
            </a>

            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#92999B] hover:text-[#F2F3F2] hover:bg-[#14181A] border border-transparent hover:border-[#252A2D] rounded transition-all cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#6FA58B]" />
                  <span className="text-[#6FA58B]">Email copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#626A6D]" />
                  <span>Copy address</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-xs text-[#626A6D] flex items-center gap-2 font-mono">
            <span>Configured:</span>
            <code className="text-[#92999B] bg-[#101315] px-2 py-0.5 border border-[#1C2124] rounded">
              {CONTACT_EMAIL}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
