import { useState } from 'react';
import { Award, Briefcase, GraduationCap, Calendar, ChevronRight, ExternalLink, BookmarkCheck } from 'lucide-react';
import { allCertifications } from '../data/certifications';

const experiences = [
  {
    role: "Event Manager & Web Coordinator",
    organization: "Google Student Group KIET",
    duration: "Jul 2024 - Present",
    bullets: [
      "Mentored junior developers in full-stack engineering while guiding technical workshops to enhance community expertise in modern frameworks.",
      "Spearheaded national-level hackathons including IEEE-SSH 2024 and SprintHacks 3.0 for 1000+ participants; delegated tasks to 20+ members and coordinated judge logistics.",
      "Conceptualized and administered ICAC 2026, a Data Structure and Algorithm contest; facilitated engagement for 150+ teams and mediated communication between experts and participants."
    ]
  },
  {
    role: "UI/UX Lead",
    organization: "Apple IOS Development Lab[KIET]",
    duration: "Jan 2026 - Present",
    bullets: [
      "Managed and mentored a team of student designers, delegating tasks, establishing a unified design system, and streamlining the handoff process between the UI/UX team and iOS developers.",
      "Organized an inter-institute Swift Developer Night, fostering cross-campus collaboration and knowledge-sharing among aspiring iOS engineers."
    ]
  },
  
  

  {
    role: "Member & Learner",
    organization: "Wipro CyberSecurity",
    duration: "Oct 2023 - Jul 2025",
    bullets: [
      "Researched network security and cryptographic protocols; executed hands-on practicals in secure system architecture and peer-to-peer learning.",
      "Competed in CTFs and Null Chapter workshops to identify vulnerabilities and enhance technical proficiency in defensive security.",
      
    ]
  }
];

const courses = [
  "Operating Systems",
  "Data Structures (DSA)",
  "Database Management",
  "Software Engineering",
  "Computer Networks",
  "Information Security"
];

export default function EducationExperience({ onShowCertificates }) {
  const [expandedIdx, setExpandedIdx] = useState(null); // Default closed

  return (
    <section 
      id="education" 
      className="py-24 px-6 sm:px-12 md:px-24 bg-app-bg transition-colors duration-300 reveal-element"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-2 tracking-widest"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main pb-4 border-b border-border-main flex items-center gap-3">
            <span>Experience & Education</span>
            <span className="h-[1px] flex-1 bg-border-main"></span>
          </h2>
        </div>

        {/* Horizontal Desktop Split Layout (60% Experience, 40% Education) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-start">
          
          {/* Left Column: 60% Experience Hover Accordion */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left w-full">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="font-sans font-bold text-xl text-text-main tracking-tight">
                Professional Experience
              </h3>
            </div>

            {/* Vertical Accordion - HOVER-ACTIVATED */}
            <div className="flex flex-col w-full gap-4 select-none">
              {experiences.map((exp, idx) => {
                const isExpanded = expandedIdx === idx;
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setExpandedIdx(idx)}
                    className={`rounded-xl border border-border-main bg-app-surface shadow-sm overflow-hidden cursor-none transition-all duration-300 ease-in-out
                      ${isExpanded 
                        ? 'border-primary/45 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.04] shadow-emerald-500/5' 
                        : 'hover:border-primary/20 hover:bg-emerald-500/[0.01] dark:hover:bg-emerald-500/[0.02]'}`}
                  >
                    {/* Accordion Header */}
                    <div className="p-5 flex items-center justify-between gap-4 pointer-events-none">
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Number Indicator */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0
                          ${isExpanded ? 'bg-primary text-black' : 'bg-primary/10 text-primary'}`}>
                          0{idx + 1}
                        </div>
                        {/* Role & Org */}
                        <div className="truncate">
                          <h4 className="text-sm sm:text-base font-extrabold text-text-main truncate">
                            {exp.role}
                          </h4>
                          <p className="text-xs text-text-muted truncate">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      {/* Right side: Duration + Chevron */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline font-mono text-[11px] text-text-muted">
                          {exp.duration}
                        </span>
                        <ChevronRight className={`w-4 h-4 text-text-muted transition-transform duration-300 
                          ${isExpanded ? 'rotate-90 text-primary' : ''}`} />
                      </div>
                    </div>

                    {/* Accordion Body */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden
                        ${isExpanded ? 'max-h-[300px] border-t border-border-main/50' : 'max-h-0'}`}
                    >
                      <div className="p-5 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] text-left pointer-events-none">
                        {/* Mobile duration indicator */}
                        <div className="sm:hidden flex items-center gap-1.5 font-mono text-[10px] text-primary mb-3">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.duration}</span>
                        </div>
                        {/* Accomplishments Bullets */}
                        <ul className="space-y-2.5 font-sans">
                          {exp.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex gap-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                              <span className="text-primary font-bold font-mono shrink-0">&gt;</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 40% Education dense coursework grid */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-sans font-bold text-xl text-text-main tracking-tight">
                Academic Background
              </h3>
            </div>

            {/* University Block */}
            <div className="p-6 rounded-2xl border border-border-main bg-app-surface shadow-md">
              <span className="font-mono text-xs text-secondary font-bold uppercase tracking-wider">
                Bachelor of Technology (B.Tech)
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold text-text-main tracking-tight mt-1.5">
                KIET Group of Institutions
              </h4>
              <p className="text-sm text-text-muted font-medium mt-0.5">
                Computer Science & Engineering (CSE)
              </p>
              
              <div className="flex items-center justify-between border-t border-border-main/50 pt-4 mt-4 text-xs font-mono text-text-muted">
                <span>YEAR: 2023 - 2027</span>
                <span className="text-emerald-400 font-bold">3rd Year</span>
              </div>
            </div>

            {/* Relevant Coursework catalog */}
            <div className="flex flex-col gap-3">
              <span className="font-sans font-bold text-sm text-text-main uppercase tracking-wider pl-1">
                Core Catalog Coursework
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                {courses.map((course) => (
                  <div 
                    key={course}
                    className="p-3 rounded-lg border border-border-main bg-app-surface/50 hover:border-secondary hover:shadow-[0_0_12px_rgba(52,211,153,0.1)] transition-all duration-300 text-center select-none flex items-center justify-center min-h-[50px] cursor-none"
                  >
                    <span className="font-mono text-[10px] sm:text-[11px] text-secondary font-bold tracking-tight">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements/Accolades box */}
            <div className="p-4 rounded-xl border border-border-main bg-primary/5 flex items-start gap-3">
              <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h5 className="font-sans font-bold text-xs text-text-main uppercase tracking-wider">
                  Academic Milestones
                </h5>
                <p className="text-xs text-text-muted font-sans mt-0.5 leading-relaxed">
                  Consistently maintained 8.5+ CGPA, qualified college internal hackathons, and active mentor in campus coding activities.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================== */}
        {/* Subsection: Certifications & Credentials  */}
        {/* ========================================== */}
        <div className="mt-20 border-t border-border-main/50 pt-16 text-left">
          
          {/* SubHeader */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-primary" />
              <h3 className="font-sans font-bold text-xl text-text-main tracking-tight">
                Verified Credentials & Certifications
              </h3>
            </div>
            
            {/* View More Button */}
            <button
              onClick={onShowCertificates}
              className="text-xs sm:text-sm font-semibold text-primary font-mono tracking-tight hover:underline flex items-center gap-1 cursor-none hover:text-secondary duration-300"
            >
              <span>[ More Credentials ]</span>
            </button>
          </div>

          {/* 3 Main Certificates Grid - Premium Hover Transitions & Light Theme Adaptive Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allCertifications.filter(c => c.isMain).map((cert, index) => (
              <div 
                key={index}
                className="rounded-xl border border-border-main bg-app-surface/50 p-5 hover:border-primary/45 hover:shadow-[0_4px_25px_rgba(16,185,129,0.04)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[120px]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-sans font-bold text-sm text-text-main tracking-tight leading-snug">
                      {cert.name}
                    </h4>
                    {/* Link Icon - Uses Light Theme Responsive Background */}
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-app-bg border border-border-main hover:border-primary hover:text-primary transition-colors cursor-none shrink-0"
                      title="Verify Credential"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="font-mono text-xs text-primary font-semibold mt-2">
                    {cert.platform}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
