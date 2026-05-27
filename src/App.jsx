import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationExperience from './components/EducationExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CertificationsModal from './components/CertificationsModal';

function App() {
  const [showCertModal, setShowCertModal] = useState(false);
  useEffect(() => {
    // Scroll Reveal Intersection Observer Setup
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12 // Trigger when 12% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Stop observing once animation triggers to optimize render cycles
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    // Force Light/Dark default theme classes
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Desktop Custom Cursor */}
      <CustomCursor />
      
      {/* Top Fixed Navbar */}
      <Navbar />
      
      {/* Content sections */}
      <main className="w-full flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationExperience onShowCertificates={() => setShowCertModal(true)} />
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />

      {/* Root-Level Certifications Modal to prevent transform-clipping layout issue */}
      {showCertModal && <CertificationsModal onClose={() => setShowCertModal(false)} />}
    </>
  );
}

export default App;
