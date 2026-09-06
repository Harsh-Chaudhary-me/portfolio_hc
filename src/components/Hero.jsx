import { useEffect, useState } from 'react';
import { Circle, ArrowDown, Download, Terminal, Github, Linkedin, Twitter, Award, Instagram } from 'lucide-react';

const titles = ["Full-Stack Developer", "Zero-Knowledge Enthusiast", "Problem Solver","UI UX Designer","Web Developer"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullWord = titles[wordIndex];

    if (!isDeleting && currentText === fullWord) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % titles.length);
    } else {
      // Typing or Deleting
      const nextText = isDeleting 
        ? fullWord.substring(0, currentText.length - 1) 
        : fullWord.substring(0, currentText.length + 1);

      timer = setTimeout(() => {
        setCurrentText(nextText);
        setTypingSpeed(isDeleting ? 40 : 100);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-20 px-6 sm:px-12 md:px-24 grid-bg bg-app-bg"
    >
      {/* Dynamic blurred glow static in top-right */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 opacity-[0.18] dark:opacity-[0.25] blur-[100px] sm:blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-4xl z-10 flex flex-col items-start text-left gap-6 reveal-element animate-[fadeIn_1s_ease-out]">
        
        {/* Available for Opportunities Badge */}
        <div className="flex items-center gap-2 border border-border-main bg-app-surface/60 px-4 py-2 rounded-full font-mono text-[13px] text-secondary font-medium tracking-tight shadow-sm select-none animate-[slideRight_0.8s_ease-out]">
          <span className="text-primary font-bold">&gt;</span> 
          <span>Available for Opportunities</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        {/* Big Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-main">
          Hi, I  am <br />
          <span className="gradient-text">Harsh Chaudhary</span>
        </h1>

        {/* Rotating Highlight Title Sequence */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-medium text-text-main min-h-[48px]">
          <span>I am a</span>
          <div className="relative inline-block border border-primary bg-primary/5 shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded px-3.5 py-1 text-primary font-mono font-semibold tracking-tight typing-cursor">
            {currentText || '\u00A0'}
          </div>
        </div>

        {/* Bio Paragraph */}
        <p className="text-[16px] sm:text-lg text-text-muted max-w-2xl leading-relaxed mt-2">
          Final year Computer Science student at KIET Group of Institutions. Passionate about digital security, competitive programming, and building highly scalable, secure web architectures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
          {/* View My Work */}
          <a 
            href="#projects" 
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-extrabold px-6 py-3 rounded-lg shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-none select-none text-sm uppercase tracking-wider"
          >
            <Circle className="w-2.5 h-2.5 fill-current shrink-0" />
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 shrink-0" />
          </a>

          {/* Download Resume */}
          <a 
            href="/Harsh_Chaudhary_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-[1.5px] rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 select-none group inline-block cursor-none hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            <div className="px-6 py-2.5 rounded-[7px] bg-app-bg text-primary font-extrabold transition-all duration-300 group-hover:bg-transparent group-hover:text-black flex items-center gap-3 text-sm uppercase tracking-wider">
              <Download className="w-4 h-4 text-primary group-hover:text-black transition-colors shrink-0" />
              <span>Download Resume</span>
            </div>
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center gap-3 mt-4 w-full justify-start select-none flex-wrap">
          {[
           { icon: <Github className="w-4 h-4 shrink-0" />, url: "https://github.com/Harsh-Chaudhary-me", name: "GitHub" },
            { icon: <Linkedin className="w-4 h-4 shrink-0" />, url: "https://www.linkedin.com/in/harsh-chaudhary-5bb7882a4/", name: "LinkedIn" },
            { icon: <Twitter className="w-4 h-4 shrink-0" />, url: "https://twitter.com/harshchaud26155", name: "Twitter" },
            { icon: <Award className="w-4 h-4 shrink-0" />, url: "https://www.credly.com/users/harsh-chaudhary.2d8da138", name: "Credly" },
            { icon: <Instagram className="w-4 h-4 shrink-0" />, url: "https://instagram.com/chaudhary.harsh0", name: "Instagram" }
          ].map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border-main bg-app-surface/50 text-text-muted hover:text-primary hover:border-primary hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-none flex items-center justify-center"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical command line prompt in bottom-left */}
      {/* <div className="absolute bottom-8 left-6 sm:left-12 md:left-24 hidden lg:flex items-center gap-2 text-text-muted/20 font-mono text-xs select-none">
        <Terminal className="w-4 h-4" />
        <span>harsh_chaudhary:~/portfolio$ _</span>
      </div> */}
    </section>
  );
}
