// import avatarImg from '../assets/harsh_avatar.png';
import avatarImg from '../assets/image.png';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 px-6 sm:px-12 md:px-24 bg-app-bg transition-colors duration-300 reveal-element"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-2 tracking-widest"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main pb-4 border-b border-border-main flex items-center gap-3">
            <span>About Me</span>
            <span className="h-[1px] flex-1 bg-border-main"></span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Profile Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[420px] rounded-xl overflow-hidden border border-border-main bg-app-surface shadow-xl">
              
              {/* Profile Card Header */}
              <div className="bg-app-surface border-b border-border-main px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="font-sans font-bold text-xs text-text-main">Harsh Chaudhary</span>
                </div>
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Active Profile</span>
              </div>

              {/* Profile Card Body */}
              <div className="p-6 flex flex-col gap-6 text-sm text-left">
                
                {/* Profile Photo */}
                <div className="relative group w-full flex justify-center">
                  <div className="relative overflow-hidden rounded-2xl w-65 h-70 border border-border-main shadow-inner">
                    <img 
                      src={avatarImg} 
                      alt="Harsh Chaudhary Professional Photo" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-xs text-emerald-400 font-bold bg-black/80 px-3 py-1 rounded-full border border-emerald-400/30">
                        harsh.profile
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Career Info */}
                <div className="space-y-3 font-sans mt-2">
                  <h4 className="font-sans font-extrabold text-base text-text-main tracking-tight leading-none mb-1">
                    Candidate Specifications
                  </h4>
                  
                  <div className="border-t border-border-main/50 pt-3 space-y-2 text-xs sm:text-sm text-text-muted">
                    <p><span className="text-primary font-mono font-bold">&gt; Role:</span> Full-Stack Software Developer</p>
                    <p><span className="text-primary font-mono font-bold">&gt; College:</span> KIET Group of Institutions</p>
                    <p><span className="text-primary font-mono font-bold">&gt; Major:</span> Computer Science & Engineering</p>
                    <p><span className="text-primary font-mono font-bold">&gt; Location:</span> Ghaziabad, India</p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase select-none">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Open to Internships & Jobs
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Info */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Core Pillars (Bulleted List) */}
            <div className="space-y-3 font-mono text-base tracking-tight">
              {[
                { label: 'Precision Engineering', desc: 'Crafting reliable systems with attention to detail.' },
                { label: 'Algorithmic Problem Solving ', desc: 'Optimizing code time complexity and preparing core theory.' },
                { label: 'Secure Architecture Design', desc: 'Ensuring absolute safety of digital assets through modern security methods.' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg border border-border-main bg-app-surface/40 hover:bg-app-surface hover:border-primary/30 transition-all duration-300 cursor-none"
                >
                  <div className="text-primary font-bold flex items-center gap-2 mb-1">
                    <span>&gt;</span>
                    <span>{item.label}</span>
                  </div>
                  <p className="text-sm text-text-muted pl-4 font-sans font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Narrative Paragraph */}
            <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed font-sans mt-4">
              <p>
                I am a dedicated Computer Science student with a strong command over modern tech stacks, specializing in the <strong className="text-text-main font-semibold">MERN (MongoDB, Express.js, React, Node.js) stack</strong>. My coursework and self-directed learning focuses heavily on building robust backend systems, distributed architectures, and web apps optimized for scale and security.
              </p>
              <p>
                As a natural <strong className="text-text-main font-semibold">team leader and technical mentor</strong>, I enjoy helping others unpack complex logic, mentoring juniors in web development, and driving collaborative hackathon solutions to completion. I aim to merge theoretical precision with creative implementation in every codebase I touch.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
