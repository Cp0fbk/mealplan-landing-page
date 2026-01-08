import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  isVisible: { [key: string]: boolean };
}

const FAQ = ({ isVisible }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I install the APK file on Android?',
      answer:
        'It\'s easy! Download the file, open it, and grant permission to install from unknown sources when prompted. Then follow the on-screen instructions to complete the installation.',
    },
    {
      question: 'Is MealPal free?',
      answer:
        'Yes! MealPal is completely free to download and use. We provide all basic features at no charge.',
    },
    {
      question: 'Can I customize my meal plan?',
      answer:
        'Absolutely! MealPal lets you set your dietary preferences, diet type (vegetarian, low-carb, etc.), and budget. AI will generate a personalized menu just for you.',
    },
    {
      question: 'Can I share recipes with friends?',
      answer:
        'Yes! MealPal lets you share your favorite recipes and meal plans with friends via messaging or social media.',
    },
  ];

  return (
    <section
      id="faq"
      data-animate
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#363636] mb-2 sm:mb-4 transform transition-all duration-1000 ${
            isVisible['faq'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Frequently Asked Questions
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg text-center text-[#363636]/70 mb-8 sm:mb-12 transform transition-all duration-1000 delay-100 ${
            isVisible['faq'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Everything you need to know about MealPal
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 ${
                openIndex === index ? 'border-[#E56810] shadow-lg shadow-orange-100' : 'border-gray-200'
              } overflow-hidden transition-all duration-300 transform ${
                isVisible['faq'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between text-left hover:bg-orange-50/50 transition-colors"
              >
                <span
                  className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold pr-3 sm:pr-4 ${
                    openIndex === index ? 'text-[#E56810]' : 'text-[#363636]'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'transform rotate-180 text-[#E56810]'
                      : 'text-[#363636]'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-5 pt-2">
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#363636]/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 sm:mt-12 text-center transform transition-all duration-1000 delay-700 ${
            isVisible['faq'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#363636]/70 mb-2 sm:mb-4">Still have questions?</p>
          <a
            href="mailto:support@mealpal.com"
            className="inline-block text-[#E56810] font-semibold hover:text-[#d15e0e] transition-colors"
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
