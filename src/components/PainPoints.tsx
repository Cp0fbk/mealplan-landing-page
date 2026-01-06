import { Clock, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const painPoints = [
  {
    icon: Clock,
    title: 'The Struggle',
    description: 'Busy people waste valuable time daily deciding what to eat, while forgotten groceries spoil. Decision fatigue draining energy.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Briefcase,
    title: 'Built for Busy Lifestyles',
    description: 'Designed for professionals needing quick, nutritious solutions without complex planning.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Sparkles,
    title: 'Smart & Sustainable',
    description: 'Get personalized recipes in seconds based on goals and pantry to maximize health and minimize waste.',
    color: 'from-green-500 to-emerald-500'
  }
];

function PainPointCard({ point, index }: { point: typeof painPoints[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-6 shadow-lg`}>
        <point.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
      </div>
      <h3 className="text-2xl font-black text-[#363636] mb-4">{point.title}</h3>
      <p className="text-gray-600 leading-relaxed">{point.description}</p>
    </motion.div>
  );
}

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="benefits" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-[#363636] mb-4">
            Why You Need <span className="text-[#E56810]">MealPal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your relationship with food and take control of your nutrition journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard key={index} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
