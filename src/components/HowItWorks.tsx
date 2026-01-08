import { Download, Calendar, ShoppingBag } from 'lucide-react';

interface HowItWorksProps {
  isVisible: { [key: string]: boolean };
}

const HowItWorks = ({ isVisible }: HowItWorksProps) => {
  const steps = [
    {
      icon: Download,
      title: 'Download App & Set Preferences',
      description: 'Download MealPal and set your dietary preferences in minutes',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Calendar,
      title: 'Get Suggested Meal Plans',
      description: 'The system generates weekly menus based on goals and pantry items',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: ShoppingBag,
      title: 'Shop with List & Cook!',
      description: 'Shop with an automated list and start cooking delicious meals',
      color: 'from-orange-600 to-orange-800',
    },
  ];

  return (
    <section
      id="how-it-works"
      data-animate
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#363636] mb-2 sm:mb-4 transform transition-all duration-1000 ${
            isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Simplify Cooking in 3 Steps
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg text-center text-[#363636]/70 mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 delay-100 ${
            isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Just 3 simple steps to change the way you cook
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E56810]/20 via-[#E56810] to-[#E56810]/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-xl border-2 border-[#E56810]/20 hover:border-[#E56810] hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300 hover:scale-105 group relative">
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 lg:-top-6 lg:-right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#E56810] to-[#d15e0e] rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-xl shadow-lg group-hover:scale-125 transition-transform">
                    {index + 1}
                  </div>

                  <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 relative">
                    <div
                      className={`w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${step.color} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <step.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-[#363636] mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-center group-hover:text-[#E56810] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-[#363636]/70 text-center leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 flex justify-center">
                    <div className="w-8 sm:w-12 md:w-16 h-1 bg-gradient-to-r from-transparent via-[#E56810] to-transparent group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-12 md:mt-16 text-center transform transition-all duration-1000 delay-500 ${
            isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block bg-orange-50 rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-[#E56810]/30">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#363636]">
              Takes only{' '}
              <span className="text-[#E56810] text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">5 minutes</span> to get started!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
