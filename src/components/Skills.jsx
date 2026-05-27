import { Terminal, Cpu, Database, Layout, Shield, Code, Layers, Server, Wrench, Lock } from 'lucide-react';

const categories = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    description: "Foundational syntaxes and query dialects",
    gridSpan: "md:col-span-6 lg:col-span-4",
    skills: [
      { name: "JavaScript", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Java", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "C", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "HTML", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "CSS", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Python", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "SQL", icon: <Code className="w-3.5 h-3.5 text-emerald-400" /> }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout className="w-5 h-5 text-emerald-400" />,
    description: "Modern app structures and modular builders",
    gridSpan: "md:col-span-6 lg:col-span-5",
    skills: [
      { name: "ReactJS", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "TypeScript", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "NextJS", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Node.js", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Express", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Tailwind", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    description: "Data architectures and service endpoints",
    gridSpan: "md:col-span-12 lg:col-span-3",
    skills: [
      { name: "MongoDB", icon: <Server className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Firebase", icon: <Server className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "AWS", icon: <Server className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "REST API", icon: <Server className="w-3.5 h-3.5 text-emerald-400" /> }
    ]
  },
  {
    title: "Cybersecurity Suite",
    icon: <Shield className="w-5 h-5 text-emerald-400" />,
    description: "Defenses, packet scanning, and pen-tests",
    gridSpan: "md:col-span-6 lg:col-span-6",
    skills: [
      { name: "Linux", icon: <Lock className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Nmap", icon: <Lock className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Wireshark", icon: <Lock className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "SEToolkit", icon: <Lock className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Ethical Hacking Tools", icon: <Lock className="w-3.5 h-3.5 text-emerald-400" /> }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    description: "Workspace editors and git controls",
    gridSpan: "md:col-span-6 lg:col-span-6",
    skills: [
      { name: "GitHub", icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Git", icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "VS Code", icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "IntelliJ", icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Eclipse", icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> },
      { name: "Colab", icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 px-6 sm:px-12 md:px-24 bg-app-bg transition-colors duration-300 reveal-element"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-2 tracking-widest"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main pb-4 border-b border-border-main flex items-center gap-3">
            <span>Technical Stack</span>
            <span className="h-[1px] flex-1 bg-border-main"></span>
          </h2>
        </div>

        {/* Bento Grid Container - Adapts background to bg-app-surface dynamically */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 rounded-2xl border border-border-main bg-app-surface p-6 sm:p-8 shadow-2xl relative select-none">
          
          {/* Subtle background decoration inside the Bento box */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl pointer-events-none"></div>

          {categories.map((cat, catIdx) => (
            <div 
              key={catIdx} 
              className={`flex flex-col gap-4 p-5 rounded-xl border border-border-main bg-app-bg/40 text-left ${cat.gridSpan}`}
            >
              {/* Category Title & Info */}
              <div className="flex items-center gap-2 pb-3 border-b border-border-main/50">
                {cat.icon}
                <div>
                  <h3 className="font-sans font-bold text-base text-text-main tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-text-muted font-sans font-normal mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Flexbox container for high-density horizontal pills */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                {cat.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-main bg-app-surface cursor-none select-none smooth-transition hover:-translate-y-0.5 gradient-border-hover relative"
                  >
                    {skill.icon}
                    <span className="font-sans text-xs text-text-muted font-medium tracking-tight whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
