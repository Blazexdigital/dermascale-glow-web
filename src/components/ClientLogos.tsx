
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const ClientLogos = () => {
  const clients = [
    { name: "SkinFirst Clinic", logo: "🏥" },
    { name: "HairCare Solutions", logo: "💇" },
    { name: "Beauty Plus", logo: "✨" },
    { name: "Derma Excellence", logo: "🌟" },
    { name: "Aesthetic Center", logo: "💎" },
    { name: "Glow Clinic", logo: "🌈" },
    { name: "Perfect Skin", logo: "🔆" },
    { name: "Hair Restore", logo: "🎯" },
  ];

  return (
    <section className="py-16 px-4 bg-slate-800/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Leading
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Aesthetic Practices
            </span>
          </h3>
          <p className="text-slate-400">Join hundreds of successful practices across India</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="text-3xl mb-3 animate-pulse">{client.logo}</div>
                  <h4 className="text-white font-medium text-sm">{client.name}</h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
          <CarouselNext className="hidden md:flex bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
        </Carousel>
      </div>
    </section>
  );
};
