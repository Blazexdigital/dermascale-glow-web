
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Dermascale
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Performance marketing specialists exclusively for dermatologists, hair transplant surgeons, and cosmetologists. 
              Scale your aesthetic practice with proven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Dermatology Marketing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Hair Transplant Marketing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Cosmetic Marketing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Dermascale. All rights reserved. Specialized performance marketing for medical aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
};
