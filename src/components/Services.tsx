import { Cpu, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Product Development',
      description: 'End-to-end design and prototyping of electronic systems, from concept to implementation',
      features: ['Circuit Design', 'PCB Layout', 'Prototype Testing', 'System Integration'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Expert consultation in power electronics and embedded systems for your projects',
      features: ['Power Systems Analysis', 'Embedded Solutions', 'Energy Optimization', 'Technical Documentation'],
    },
  ];

  return (
    <section id="services" className="py-20 circuit-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            My <span className="text-primary glow-text">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
