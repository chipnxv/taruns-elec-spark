import { Cpu, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Product Development',
      description: 'End-to-end design and prototyping of electronic systems, from concept to implementation with cutting-edge technology',
      features: ['Circuit Design', 'PCB Layout', 'Prototype Testing', 'System Integration'],
      gradient: 'from-primary to-blue-500',
      bgGradient: 'from-primary/20 to-blue-500/20',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Expert consultation in power electronics and embedded systems to optimize your projects and achieve excellence',
      features: ['Power Systems Analysis', 'Embedded Solutions', 'Energy Optimization', 'Technical Documentation'],
      gradient: 'from-secondary to-cyan-500',
      bgGradient: 'from-secondary/20 to-cyan-500/20',
    },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">What I Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Delivering innovative solutions with expertise in electrical engineering and cutting-edge technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative p-10 bg-card/80 backdrop-blur-sm border-2 border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-foreground/80 group-hover:translate-x-1 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <CheckCircle className={`w-5 h-5 text-primary flex-shrink-0`} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className={`w-full border-2 border-primary/50 text-primary hover:bg-primary hover:text-white group/btn`}
                    asChild
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Animated border effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l ${service.gradient}`}></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
