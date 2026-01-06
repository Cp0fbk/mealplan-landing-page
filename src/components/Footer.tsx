import { Github, Flag, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <ChefHat className="w-7 h-7 text-[#E56810]" strokeWidth={2.5} />
            <span className="text-2xl font-black">MealPal</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#"
              className="flex items-center gap-2 text-gray-300 hover:text-[#E56810] transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-300 hover:text-[#E56810] transition-colors"
            >
              <Flag className="w-5 h-5" />
              <span className="font-semibold">Report</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">© 2026 MealPal. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
