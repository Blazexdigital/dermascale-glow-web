
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <TrendingUp className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm text-slate-300">Performance Marketing Specialists</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Scale Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
              Aesthetic Practice
            </span>
            to New Heights
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in performance marketing exclusively for dermatologists, hair transplant surgeons, and cosmetologists. 
            Drive qualified leads, increase patient bookings, and grow your practice with our proven strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Start Growing Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-full text-lg">
              View Case Studies
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-slate-400">Practices Scaled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-slate-400">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-slate-400">Campaign Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};
