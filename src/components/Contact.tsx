import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send, MessageSquare, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'tarun@gmail.com',
      href: 'mailto:tarun@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 999999999',
      href: 'tel:+91999999999',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Chennai, India',
      href: '#',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Let's Talk</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Contact Information</h3>
                  <p className="text-muted-foreground mb-8">Feel free to reach out through any channel</p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-muted/30 hover:bg-muted/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${info.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className={`p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground mb-8">Fill out the form and I'll respond within 24 hours</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-muted/30 border-2 border-primary/20 focus:border-primary hover:border-primary/40 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 bg-muted/30 border-2 border-primary/20 focus:border-primary hover:border-primary/40 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Your Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-muted/30 border-2 border-primary/20 focus:border-primary hover:border-primary/40 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
