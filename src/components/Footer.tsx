import { Download, Mail, Facebook, Instagram, Twitter, ChefHat } from 'lucide-react';

interface FooterProps {
  isVisible: { [key: string]: boolean };
}

const Footer = ({ isVisible }: FooterProps) => {
  return (
    <footer className="bg-[#363636] text-white">
      <section
        id="footer"
        data-animate
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible['footer'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              Ready to eat smarter?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Join us who have changed the way we cook with MealPal
            </p>
            <a
              href="https://drive.google.com/file/d/1XjDnJSF9b4ShYvpt9IQK2mmVZapq_h7C/view?usp=sharing"
              className="inline-flex items-center space-x-2 md:space-x-3 bg-[#E56810] hover:bg-[#d15e0e] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 group"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
              <span className="hidden sm:inline">Download MealPal Now (Android)</span>
              <span className="sm:hidden">Download Now</span>
            </a>
          </div>

          <div
            className={`border-t border-white/10 pt-12 transform transition-all duration-1000 delay-200 ${
              isVisible['footer'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="sm:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <ChefHat className="w-6 h-6 md:w-7 md:h-7 text-[#E56810]" strokeWidth={2.5} />
            <span className="text-xl md:text-2xl font-black">MealPal</span>
                </div>
                <p className="text-sm md:text-base text-white/70 mb-4 max-w-md">
                  Smart meal planning and kitchen management app, helping you save time and love 
                  cooking more every day.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#E56810] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#E56810] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#E56810] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-base md:text-lg mb-4">Product</h4>
                <ul className="space-y-2 text-sm md:text-base text-white/70">
                  <li>
                    <a href="#features" className="hover:text-[#E56810] transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="hover:text-[#E56810] transition-colors">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-[#E56810] transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base md:text-lg mb-4">Company</h4>
                <ul className="space-y-2 text-sm md:text-base text-white/70">
                  <li>
                    <a href="#" className="hover:text-[#E56810] transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#E56810] transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:phuc.nguyenngchauphuc@hcmut.edu.vn"
                      className="hover:text-[#E56810] transition-colors flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-white/60">
              <p>&copy; 2026 MealPal. All rights reserved. Made with love for food lovers.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
