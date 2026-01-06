import { Calendar, ShoppingCart, Refrigerator, PieChart} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Planning, Zero Stress',
    description: 'Automatically suggests recipes based on your nutritional goals, taste, and current pantry stock. Easily customize your weekly menu and control your overall calorie & macro intake.',
    gradient: 'from-orange-400 to-pink-500'
  },
  {
    icon: ShoppingCart,
    title: 'Efficient Shopping, Zero Waste',
    description: 'Automatically aggregates ingredients from your meal plan. The app intelligently filters out items you already have in stock, saving you both money and shopping time',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Refrigerator,
    title: 'Maximize Usage, Minimize Waste',
    description: 'Tracks inventory quantities and expiration dates. MealPal prioritizes recipes that use up ingredients about to expire to effectively minimize food waste.',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: PieChart,
    title: 'Master Your Macros',
    description: 'Automatically calculates energy intake based on actual consumption. Receive visual charts and adjustment suggestions to consistently hit your health goals',
    gradient: 'from-purple-400 to-pink-500'
  }
];

function FeatureRow({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={isEven ? 'lg:order-1' : 'lg:order-2'}
      >
        <div className={`inline-block w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
          <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-4xl font-black text-[#363636] mb-4">{feature.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
      >
        <div className="relative w-full max-w-sm mx-auto">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl opacity-20`}></div>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className={`h-12 bg-gradient-to-r ${feature.gradient} flex items-center px-4`}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className={`bg-gradient-to-r ${feature.gradient} opacity-20 rounded-xl h-32`}></div>
                <div className="bg-gray-100 rounded-xl p-4 space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/5"></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-4 space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-[#363636] mb-4">
            Powerful <span className="text-[#E56810]">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your nutrition and meal planning
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
