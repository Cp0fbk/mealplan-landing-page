import { DownloadCloud } from 'lucide-react';
import { motion } from 'framer-motion';
import homeImage from '../assets/home.png';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-[#E56810]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 md:w-80 md:h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-orange-100 text-[#E56810] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full font-bold text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-4 md:mb-6"
          >
            <span className="hidden sm:inline">Android App • Now Available</span>
            <span className="sm:hidden">Android App</span>
          </motion.div>

          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#363636] leading-tight mb-2 sm:mb-4 md:mb-6">
            Cook better with 
            <span className="block text-[#E56810]">MealPal.</span>
            {/* <span className="block">Smart Nutrition Assistant</span> */}
          </h1>

          <p className="text-[10px] sm:text-sm md:text-base lg:text-xl text-gray-600 mb-3 sm:mb-6 md:mb-8 leading-relaxed">
            Smart meal planning for busy people. Stop worrying about “What to eat today?”. Eat smart, plan better, and live healthier.
          </p>

          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(229, 104, 16, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="inline-flex items-center gap-1 sm:gap-2 md:gap-3 bg-[#E56810] text-white px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-5 rounded-full font-bold text-[10px] sm:text-sm md:text-base lg:text-lg shadow-2xl hover:shadow-3xl transition-all"
          >
            <DownloadCloud className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline">Download Android APK</span>
            <span className="sm:hidden">Download</span>
          </motion.a>

          <p className="text-[8px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2 md:mt-4">
            <span className="hidden sm:inline">No Google Play required • Direct APK download</span>
            <span className="sm:hidden">No Google Play</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[140px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[380px]"
          >
            <img 
              src={homeImage} 
              alt="MealPal App" 
              className="w-full rounded-[15px] sm:rounded-[25px] md:rounded-[35px] lg:rounded-[40px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
