
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Practice?
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Get a free consultation and discover how we can transform your patient acquisition strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Strategy Session</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2">First Name</label>
                      <Input className="bg-slate-700 border-slate-600 text-white" placeholder="Dr. John" />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Last Name</label>
                      <Input className="bg-slate-700 border-slate-600 text-white" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Email</label>
                    <Input className="bg-slate-700 border-slate-600 text-white" placeholder="doctor@clinic.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Phone</label>
                    <Input className="bg-slate-700 border-slate-600 text-white" placeholder="(555) 123-4567" type="tel" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Practice Type</label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select your specialty" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="hair-transplant">Hair Transplant Surgery</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic/Aesthetic Medicine</SelectItem>
                        <SelectItem value="multiple">Multiple Specialties</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Practice Name</label>
                    <Input className="bg-slate-700 border-slate-600 text-white" placeholder="Your Clinic Name" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Tell us about your goals</label>
                    <Textarea className="bg-slate-700 border-slate-600 text-white" placeholder="What are your main marketing challenges and goals?" rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Email Us</h4>
                    <p className="text-slate-400">hello@dermascale.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Call Us</h4>
                    <p className="text-slate-400">(555) 123-DERM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Office</h4>
                    <p className="text-slate-400">Los Angeles, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-500/30">
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-slate-300">We typically respond within 2 hours during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
