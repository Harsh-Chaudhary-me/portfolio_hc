import { Github, ExternalLink, Folder, Car, TrendingUp, Network } from 'lucide-react';
import tftImg from '../assets/theFinalTransfer.png';
import parkImg from '../assets/park-kar.png';
import vansaVrishk from '../assets/vansaVrishk.png';
// 1. Add your new image imports here
import civicImg from '../assets/civic_snap.png'; 
import portfolioImg  from '../assets/portfolio.png'; 

const featuredProjects = [
  {
    title: "The Final Transfer",
    tag: "Zero-Knowledge Cryptography",
    description: "The Final Transfer is a secure digital legacy management platform designed to ensure that critical digital assets are never lost.",
    tech: ["React.js", "ZKP Cryptography", "Node.js", "Express.js", "Firebase"],
    github: "https://github.com/Harsh-Chaudhary-me/TheFinalTransfer",
    live: "https://github.com/Harsh-Chaudhary-me/TheFinalTransfer",
    image: tftImg
  },
  {
    title: "Park-Kar",
    tag: "Smart Parking Solution",
    description: "An online Parking  management system with real time sync, firebase auth, and responsive design using MERN stack.",
    tech: ["Firebase", "Express.js", "React.js", "Node.js", "Socket.io", "Geospatial Indexing"],
    github: "https://github.com/Harsh-Chaudhary-me/Park-Kar",
    live: "https://park-karr.netlify.app/",
    image: parkImg
  }
];

const otherProjects = [
  {
    title: "CIVIC-SNAP — Civic Issue Reporting Solution",
    description: "Smart EV parking navigation & reservation system. Streamlines slot detection and simplifies spot payments with automated occupancy mapping.",
    github: "https://github.com/Harsh-Chaudhary-me",
    live: "https://civic-snap-pink.vercel.app/",
    // 2. Swapped JSX mockup for the image import
    image: civicImg 
  },
  {
    title: "VansaVriksha",
    description: "VansaVriksh digitizes centuries-old genealogist records, helping you map your lineage, Gotra, and Clan.",
    github: "https://github.com/Harsh-Chaudhary-me/VansaVriksh.git",
    live: "https://github.com/Harsh-Chaudhary-me/VansaVriksh.git",
    // Cleaned this up to match the others
    image: vansaVrishk 
  },
  {
    title: "Portfolio",
    description: "A responsive portfolio engineered with React and modern CSS frameworks, serving as a centralized hub for my technical projects and achievements.",
    github: "#",
    live: "#",
    // Swapped JSX mockup for the image import
    image: portfolioImg 
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-24 px-6 sm:px-12 md:px-24 bg-app-bg border-y border-border-main transition-colors duration-300 reveal-element"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-2 tracking-widest"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main pb-4 border-b border-border-main flex items-center gap-3">
            <span>Featured Projects</span>
            <span className="h-[1px] flex-1 bg-border-main"></span>
          </h2>
        </div>

        {/* Part 1: Featured Zigzag Projects */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.title}
                className="flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden border border-border-main bg-app-surface/60 shadow-2xl relative lg:h-[300px]"
              >
                {/* Image Container */}
                <div 
                  className={`w-full lg:w-[50%] h-56 lg:h-full relative overflow-hidden group select-none shrink-0
                    ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                {/* Content Container */}
                <div 
                  className={`w-full lg:w-[65%] p-6 sm:p-8 flex flex-col justify-center text-left gap-3 bg-app-surface h-full
                    ${isEven 
                      ? 'lg:order-2 border-t lg:border-t-0 lg:border-l border-border-main' 
                      : 'lg:order-1 border-t lg:border-t-0 lg:border-r border-border-main'}`}
                >
                  <div>
                    <span className="font-mono text-[11px] text-primary font-bold tracking-wider uppercase bg-primary/5 px-2 py-0.5 rounded border border-primary/20">
                      {project.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-main mt-2 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans max-w-3xl">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 py-1">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="font-mono text-[10px] bg-app-bg border border-border-main text-primary px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Icons */}
                  <div className="flex items-center gap-3 mt-1">
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border-main bg-app-bg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 hover:text-black text-text-main transition-all duration-300 cursor-none"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border-main bg-app-bg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 hover:text-black text-text-main transition-all duration-300 cursor-none"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: More Projects Header */}
        <div className="mt-24 mb-12 text-left">
          <h3 className="text-2xl font-bold text-text-main tracking-tight flex items-center gap-3">
            <span>More Creative Works</span>
            <span className="h-[1.5px] w-24 bg-gradient-to-r from-emerald-500 to-transparent"></span>
          </h3>
          <p className="text-sm text-text-muted mt-1 font-sans">A collection of academic projects, tools, and technical prototypes.</p>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div 
              key={project.title}
              className="rounded-2xl border border-border-main bg-app-surface shadow-md overflow-hidden hover:border-primary/45 hover:shadow-[0_4px_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col group"
            >
              {/* 3. Render the image instead of JSX mockup */}
              <div className="border-b border-border-main aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Card Body (Middle) */}
              <div className="p-6 flex flex-col flex-1 text-left gap-3 bg-app-surface">
                <div className="flex items-center gap-2 text-primary">
                  <Folder className="w-5 h-5 text-emerald-400 fill-emerald-400/10 group-hover:scale-105 transition-transform duration-300" />
                  <h4 className="font-sans font-bold text-lg text-text-main tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                </div>
                
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans flex-1">
                  {project.description}
                </p>
              </div>

              {/* Action Row (Bottom) */}
              <div className="p-4 bg-app-bg/50 border-t border-border-main flex items-center gap-3">
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-border-main bg-app-surface hover:border-primary/40 text-text-main text-xs font-semibold cursor-none transition-all duration-300"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a 
                  href={project.live}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-border-main bg-app-surface hover:border-primary/40 text-text-main text-xs font-semibold cursor-none transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}