
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Dermatologist & Aesthetic Medicine",
      content: "Dermascale transformed our patient acquisition. We went from 20 consultations per month to 80+ in just 6 months. Their understanding of medical marketing is unmatched.",
      rating: 5,
      practice: "Elite Dermatology Clinic"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Hair Transplant Surgeon",
      content: "The ROI on our campaigns has been incredible. Their targeted approach to hair restoration marketing brought us quality leads that convert to actual procedures.",
      rating: 5,
      practice: "Advanced Hair Solutions"
    },
    {
      name: "Dr. Emily Watson",
      title: "Cosmetic Surgery & Aesthetics",
      content: "Professional, compliant, and results-driven. Dermascale understands the aesthetic industry like no other agency. Our practice has doubled in size since partnering with them.",
      rating: 5,
      practice: "Radiant Aesthetics Center"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what leading aesthetic professionals say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.title}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.practice}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
