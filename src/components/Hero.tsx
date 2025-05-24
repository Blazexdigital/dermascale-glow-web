
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Hero Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=face" 
          alt="Dermatologist consultation" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900"></div>
      </div>

      <div className="container mx-auto text-center max-w-6xl relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm text-slate-300">Performance Marketing Specialists</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Scale Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
              Aesthetic Practice
            </span>
            to New Heights
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We specialize in performance marketing exclusively for dermatologists, hair transplant surgeons, and cosmetologists. 
            Drive qualified leads, increase patient bookings, and grow your practice with our proven strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 animate-pulse"
            >
              Start Growing Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-cyan-400 mb-2 animate-pulse">500+</div>
            <div className="text-slate-400">Practices Scaled</div>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in animation-delay-200">
            <div className="text-3xl font-bold text-purple-400 mb-2 animate-pulse">300%</div>
            <div className="text-slate-400">Average ROI Increase</div>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in animation-delay-400">
            <div className="text-3xl font-bold text-pink-400 mb-2 animate-pulse">24/7</div>
            <div className="text-slate-400">Campaign Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};
