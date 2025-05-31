
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scissors, Stethoscope } from "lucide-react";
import { SectionLogos } from "@/components/SectionLogos";

export const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Dermatology Marketing",
      description: "Targeted campaigns for skin treatments, acne solutions, and cosmetic dermatology procedures. Drive quality leads for your dermatology practice.",
      features: ["Google Ads Management", "Social Media Marketing", "Content Creation", "Local SEO Optimization"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=face"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Transplant Marketing",
      description: "Specialized marketing for hair restoration clinics. Connect with patients seeking hair transplant solutions and FUE procedures.",
      features: ["Before/After Campaigns", "Video Marketing", "Consultation Booking Funnels", "Reputation Management"],
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop&crop=face"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cosmetic Marketing",
      description: "Performance marketing for cosmetic procedures, aesthetic treatments, and beauty enhancement services.",
      features: ["Instagram Ads", "Influencer Partnerships", "Email Marketing", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <SectionLogos section="services" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Specialized Marketing for
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Medical Aesthetics
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We understand the unique challenges and opportunities in aesthetic medicine. 
            Our targeted approach delivers results that matter to your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-8">
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
