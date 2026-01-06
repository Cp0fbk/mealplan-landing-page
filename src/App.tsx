import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks isVisible={isVisible}/>
      <FAQ isVisible={isVisible}/>
      <Footer isVisible={isVisible} />
    </div>
  );
}

export default App;
