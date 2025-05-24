
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Dermascale
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-300">
              Services
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors duration-300">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors duration-300">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
