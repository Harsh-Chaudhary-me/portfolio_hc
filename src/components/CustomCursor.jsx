import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position of mouse
  const mouseCoords = useRef({ x: 0, y: 0 });
  // Interpolated position of ring
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports fine pointer (desktop / mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const checkFinePointer = () => {
      setIsVisible(mediaQuery.matches);
    };

    checkFinePointer();
    mediaQuery.addEventListener('change', checkFinePointer);

    const onMouseMove = (e) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      
      // Update dot position immediately
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target or parent of target is interactive
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('.interactive-cursor');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // Smooth Lerp loop for the ring
    let animationFrameId;
    const renderRing = () => {
      const ease = 0.15; // Interpolation factor (0.15 = smooth lag)
      const dx = mouseCoords.current.x - ringCoords.current.x;
      const dy = mouseCoords.current.y - ringCoords.current.y;
      
      ringCoords.current.x += dx * ease;
      ringCoords.current.y += dy * ease;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`;
        ringRef.current.style.top = `${ringCoords.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(renderRing);
    };

    renderRing();

    // Hide default cursor on body if fine pointer is active
    if (mediaQuery.matches) {
      document.body.style.cursor = 'none';
      
      // Ensure default cursor style is restored for input fields or if unmounted
      const style = document.createElement('style');
      style.id = 'cursor-reset';
      style.innerHTML = `
        a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      mediaQuery.removeEventListener('change', checkFinePointer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'auto';
      
      const styleEl = document.getElementById('cursor-reset');
      if (styleEl) styleEl.remove();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="custom-cursor-dot" 
      />
      <div 
        ref={ringRef} 
        className={`custom-cursor-ring ${isHovered ? 'custom-cursor-hovering' : ''}`}
      />
    </>
  );
}
