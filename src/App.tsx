import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { ProjectsSection } from "./components/ProjectsSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { SkillsSection } from "./components/SkillsSection.tsx";
import { EngineeringApproach } from "./components/EngineeringApproach.tsx";
import { CurrentlySection } from "./components/CurrentlySection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { Footer } from "./components/Footer.tsx";
import { ProjectModal } from "./components/ProjectModal.tsx";
import { Project } from "./data/projects.ts";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const sections = ["work", "about", "skills", "approach", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#F2F3F2] selection:bg-[#6FA58B]/25 selection:text-[#F2F3F2]">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <AboutSection />
        <SkillsSection />
        <EngineeringApproach />
        <CurrentlySection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Architecture Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
