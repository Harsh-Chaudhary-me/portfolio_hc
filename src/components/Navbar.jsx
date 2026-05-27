import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [isRotating, setIsRotating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    // Always default to dark theme when the portfolio opens
    setTheme('dark');
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 300);

    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Experience', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 border-b border-border-main bg-app-surface/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-400 text-black font-extrabold rounded-lg px-2.5 py-1.5 text-lg font-mono tracking-tight shadow-md select-none group-hover:scale-105 transition-transform duration-300">
            HC
          </div>
          <span className="hidden sm:inline font-sans font-semibold text-text-main group-hover:text-primary transition-colors duration-300">
            Harsh Chaudhary
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls (Theme + Mobile Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border border-border-main bg-app-surface/50 hover:bg-border-main text-text-main transition-all duration-300 cursor-none flex items-center justify-center
              ${isRotating ? 'rotate-[360deg] scale-110' : ''} 
              active:scale-95`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            id="theme-toggle"
          >
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
            ) : (
              <Sun className="w-5 h-5 text-emerald-600 fill-emerald-600/10" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-border-main bg-app-surface/50 text-text-main hover:bg-border-main transition-colors duration-300 cursor-none flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Slide-out menu) */}
      <div 
        className={`fixed inset-0 top-16 z-40 bg-black/40 md:hidden backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-[calc(100vh-64px)] w-72 bg-app-surface border-l border-border-main px-6 py-8 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-text-muted hover:text-primary transition-colors duration-300 py-2 border-b border-border-main/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-auto pt-6 border-t border-border-main">
            <p className="text-xs text-text-muted text-center font-mono">
              Harsh Chaudhary // Portfolio
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
