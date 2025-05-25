import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { submitToGoogleSheets, FormData } from "@/utils/googleSheets";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceType: '',
    practiceName: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets(formData);
      toast({
        title: "Success!",
        description: "Your form has been submitted successfully. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practiceType: '',
        practiceName: '',
        goals: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919625306525";
    const message = "Hi! I'm interested in learning more about Dermascale's marketing services for my practice.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Get a free consultation and discover how we can transform your patient acquisition strategy.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Quick Chat on WhatsApp
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Strategy Session</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2">First Name *</label>
                      <Input 
                        className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" 
                        placeholder="Dr. John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Last Name *</label>
                      <Input 
                        className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" 
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Email *</label>
                    <Input 
                      className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" 
                      placeholder="doctor@clinic.com" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Phone *</label>
                    <Input 
                      className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" 
                      placeholder="+91 96253 06525" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Practice Type</label>
                    <Select value={formData.practiceType} onValueChange={(value) => handleInputChange('practiceType', value)}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20">
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
                    <Input 
                      className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" 
                      placeholder="Your Clinic Name"
                      value={formData.practiceName}
                      onChange={(e) => handleInputChange('practiceName', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Tell us about your goals</label>
                    <Textarea 
                      className="bg-slate-700 border-slate-600 text-white transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" 
                      placeholder="What are your main marketing challenges and goals?" 
                      rows={4}
                      value={formData.goals}
                      onChange={(e) => handleInputChange('goals', e.target.value)}
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Email Us</h4>
                    <p className="text-slate-400">hello@dermascale.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Call Us</h4>
                    <p className="text-slate-400">+91 96253 06525</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Office</h4>
                    <p className="text-slate-400">New Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-500/30 transform transition-all duration-300 hover:scale-105">
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-slate-300">We typically respond within 2 hours during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
