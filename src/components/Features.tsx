import { Calendar, ShoppingCart, Refrigerator, PieChart} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import mealplanImage from '../assets/mealplan-2.png';
import shoppinglistImage from '../assets/shoppinglist.png';
import pantryyImage from '../assets/pantryy.png';
import nutritionImage from '../assets/nutrition.png';

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
    <div ref={ref} className={`grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={isEven ? 'md:order-1' : 'md:order-2'}
      >
        <div className={`inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-2 sm:mb-3 md:mb-6 shadow-lg`}>
          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-[#363636] mb-1 sm:mb-2 md:mb-4">{feature.title}</h3>
        <p className="text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className={`${isEven ? 'md:order-2' : 'md:order-1'} relative`}
      >
        <div className={`relative w-full mx-auto ${index === 0 ? 'max-w-[160px] sm:max-w-xs md:max-w-md lg:max-w-lg' : 'max-w-[120px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-xs'}`}>
          <img 
            src={
              index === 0 ? mealplanImage :
              index === 1 ? shoppinglistImage :
              index === 2 ? pantryyImage :
              nutritionImage
            }
            alt={feature.title}
            className="w-full rounded-[15px] sm:rounded-[25px] md:rounded-[35px] lg:rounded-[40px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#363636] mb-2 sm:mb-3 md:mb-4">
            Powerful <span className="text-[#E56810]">Features</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to take control of your nutrition and meal planning
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
