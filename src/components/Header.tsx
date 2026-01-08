import { useState, useEffect } from 'react';
import { ChefHat, DownloadCloud } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-[#E56810]" strokeWidth={2.5} />
          <span className="text-xl md:text-2xl font-black text-[#363636]">MealPal</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-[#363636] font-semibold hover:text-[#E56810] transition-colors"
          >
            Why MealPal
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-[#363636] font-semibold hover:text-[#E56810] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-[#363636] font-semibold hover:text-[#E56810] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-[#363636] font-semibold hover:text-[#E56810] transition-colors"
          >
            FAQ
          </button>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E56810] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <DownloadCloud className="w-5 h-5" />
            Download APK
          </motion.a>
        </nav>

        <motion.a
          href="#download"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden bg-[#E56810] text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg text-sm"
        >
          <DownloadCloud className="w-4 h-4" />
          Download
        </motion.a>
      </div>
    </motion.header>
  );
}
