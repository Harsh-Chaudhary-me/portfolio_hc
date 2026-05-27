import { ArrowUp, Github, Linkedin, Twitter, Award, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-6 bg-app-bg border-t border-border-main transition-colors duration-300 relative select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright info */}
        <div className="text-center sm:text-left font-sans text-xs sm:text-sm text-text-muted">
          <p>© 2026 Harsh Chaudhary. Crafted with ❤️</p>
        </div>

        {/* Center: Social Icons Row */}
        <div className="flex items-center gap-3 justify-center">
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
              className="p-2 rounded-lg border border-border-main bg-app-surface/50 text-text-muted hover:text-primary hover:border-primary hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-none flex items-center justify-center"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right Side: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-black flex items-center justify-center shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none select-none shrink-0"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 text-black font-extrabold stroke-[2.5px]" />
        </button>

      </div>
    </footer>
  );
}
