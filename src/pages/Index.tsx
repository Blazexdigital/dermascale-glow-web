
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ClientLogos } from "@/components/ClientLogos";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingLogos } from "@/components/FloatingLogos";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <div className="relative">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <FloatingLogos />
        <Header />
        <Hero />
        <Services />
        <About />
        <ClientLogos />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
