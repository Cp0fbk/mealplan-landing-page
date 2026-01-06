import { DownloadCloud, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E56810]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-orange-100 text-[#E56810] px-4 py-2 rounded-full font-bold text-sm mb-6"
          >
            Android App • Now Available
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#363636] leading-tight mb-6">
            Cook better with 
            <span className="block text-[#E56810]">MealPal.</span>
            {/* <span className="block">Smart Nutrition Assistant</span> */}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
            className="inline-flex items-center gap-3 bg-[#E56810] text-white px-8 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
          >
            <DownloadCloud className="w-6 h-6" />
            Download Android APK
          </motion.a>

          <p className="text-sm text-gray-500 mt-4">No Google Play required • Direct APK download</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="bg-[#E56810] h-16 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                  <span className="ml-2 text-white font-bold text-lg">MealPal</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-4 shadow-md">
                    <div className="w-12 h-12 bg-[#E56810] rounded-full mb-2"></div>
                    <div className="h-3 bg-orange-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-orange-200 rounded w-1/2"></div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-md">
                    <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-md">
                    <div className="h-2 bg-gray-200 rounded w-4/5 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
