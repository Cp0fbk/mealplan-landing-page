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
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#363636] mb-4 transform transition-all duration-1000 ${
            isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Simplify Cooking in 3 Steps
        </h2>
        <p
          className={`text-lg text-center text-[#363636]/70 mb-12 sm:mb-16 transform transition-all duration-1000 delay-100 ${
            isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Just 3 simple steps to change the way you cook
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E56810]/20 via-[#E56810] to-[#E56810]/20 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#E56810]/20 hover:border-[#E56810] hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300 hover:scale-105 group relative">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#E56810] to-[#d15e0e] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-125 transition-transform">
                    {index + 1}
                  </div>

                  <div className="mb-6 relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#363636] mb-4 text-center group-hover:text-[#E56810] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#363636]/70 text-center leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#E56810] to-transparent group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
            isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block bg-orange-50 rounded-2xl px-8 py-4 border-2 border-[#E56810]/30">
            <p className="text-lg font-semibold text-[#363636]">
              Takes only{' '}
              <span className="text-[#E56810] text-2xl font-bold">5 minutes</span> to get started!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
