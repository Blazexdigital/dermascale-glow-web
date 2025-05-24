
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Zap } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Targeting",
      description: "We focus exclusively on medical aesthetics, ensuring every campaign reaches the right audience."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "5+ years of experience scaling aesthetic practices with measurable ROI and growth."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Deep understanding of medical marketing regulations and patient acquisition strategies."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Scaling",
      description: "Fast-track your practice growth with our proven systems and optimization techniques."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                Dermascale?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We're not just another marketing agency. We're specialists who understand the unique challenges 
              of marketing medical aesthetic services. From compliance to conversion, we've got you covered.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">HIPAA Compliant Marketing</h4>
                  <p className="text-slate-400">All campaigns follow medical privacy regulations</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Medical Ad Expertise</h4>
                  <p className="text-slate-400">Navigate complex advertising policies with ease</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
