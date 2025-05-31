
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const ClientLogos = () => {
  const clients = [
    { 
      name: "Dermalyn Aesthetics", 
      logo: "/lovable-uploads/42e1fa39-ec13-46f0-9e05-69678b2b2776.png" 
    },
    { 
      name: "Nurture Aesthetics", 
      logo: "/lovable-uploads/925f408f-3b76-4645-900e-11bbe980fb21.png" 
    },
    { 
      name: "Approach Aesthetics", 
      logo: "/lovable-uploads/ddf9bf7d-ef67-419c-8abd-a85cc765f9d4.png" 
    },
    { 
      name: "Premium Aesthetics", 
      logo: "/lovable-uploads/0146044c-4093-4e1a-bf59-30c50acc79a0.png" 
    },
    { 
      name: "New Clinic", 
      logo: "/lovable-uploads/62020fab-9d0a-4c68-b2be-e6aeafedd07c.png" 
    },
    { 
      name: "+12 More", 
      logo: null,
      isText: true 
    },
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
          <CarouselContent className="-ml-2 md:-ml-4 animate-[slide_20s_linear_infinite]">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-32 flex flex-col items-center justify-center">
                  {client.isText ? (
                    <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      +12 More
                    </div>
                  ) : (
                    <div className="h-20 w-20 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
            {/* Duplicate items for smooth infinite scroll */}
            {clients.map((client, index) => (
              <CarouselItem key={`duplicate-${index}`} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-32 flex flex-col items-center justify-center">
                  {client.isText ? (
                    <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      +12 More
                    </div>
                  ) : (
                    <div className="h-20 w-20 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
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
