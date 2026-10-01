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
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E7E6E0]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono text-[#1E3A2F] uppercase tracking-wider mb-2">
            Get in touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-4">
            Let’s build something useful.
          </h2>
          <p className="text-base text-[#52525B] leading-relaxed mb-8">
            I am currently in my 5th year of Computer Engineering at Addis Ababa University and interested in software engineering internships, technical opportunities, and engineering collaborations. You can reach out directly via email or explore my code on GitHub.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Action: GitHub */}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#1E3A2F] hover:bg-[#14261F] rounded-md transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Connect on GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-[#A3E635]/80" />
            </a>

            {/* Direct Mailto */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1C1917] bg-white border border-[#D6D3CD] hover:border-[#1E3A2F] hover:bg-[#F4F4EE] rounded-md transition-all"
            >
              <Mail className="w-4 h-4 text-[#1E3A2F]" />
              <span>Send an Email</span>
            </a>

            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#52525B] hover:text-[#1C1917] hover:bg-[#EAE8E2] rounded-md transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#1E3A2F]" />
                  <span className="text-[#1E3A2F] font-semibold">Email copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#71717A]" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-xs text-[#71717A] flex items-center gap-2">
            <span>Configured address:</span>
            <code className="font-mono text-[#1C1917] bg-white px-2 py-0.5 border border-[#E7E6E0] rounded">
              {CONTACT_EMAIL}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
