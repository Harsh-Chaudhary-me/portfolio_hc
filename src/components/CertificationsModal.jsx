import { useEffect } from 'react';
import { X, ExternalLink, BookmarkCheck } from 'lucide-react';
import { allCertifications } from '../data/certifications';

export default function CertificationsModal({ onClose }) {
  // Lock background scrolling on mount and restore on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-emerald-500/[0.02] dark:bg-black/10 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[80vh] rounded-2xl border border-border-main bg-app-surface overflow-hidden flex flex-col shadow-2xl relative select-none animate-[zoomIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Title Header */}
        <div className="p-5 border-b border-border-main flex items-center justify-between bg-app-bg/50">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-primary" />
            <h3 className="font-sans font-bold text-base sm:text-lg text-text-main tracking-tight">
              Academic Credentials & Certifications
            </h3>
          </div>
          
          {/* Elegant Top Right Close Button */}
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg border border-border-main hover:border-primary text-text-muted hover:text-primary transition-colors cursor-none flex items-center justify-center"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable list of Certifications */}
        <div className="overflow-y-auto p-6 space-y-4 bg-app-surface max-h-[calc(80vh-70px)]">
          {allCertifications.map((cert, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl border border-border-main bg-app-bg/30 hover:bg-app-bg/70 hover:border-primary/20 transition-all duration-300 flex items-center justify-between gap-4 text-left"
            >
              <div className="min-w-0">
                <h4 className="font-sans font-bold text-sm text-text-main leading-snug truncate">
                  {cert.name}
                </h4>
                <p className="font-mono text-xs text-primary font-semibold mt-1">
                  {cert.platform}
                </p>
              </div>

              {/* Right: Link without MAIN/EXTRA tags */}
              <div className="flex items-center gap-3 shrink-0">
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border-main bg-app-surface hover:border-primary hover:text-primary transition-colors cursor-none flex items-center justify-center"
                  title="Verify Credential"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
