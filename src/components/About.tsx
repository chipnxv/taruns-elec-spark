import { GraduationCap, School } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      institution: 'VIT Chennai',
      degree: 'B.Tech in Electrical and Electronics Engineering',
      period: '3rd Year | Expected 2026',
      current: true,
    },
    {
      icon: <School className="w-6 h-6" />,
      institution: 'Chaitanya Secondary School',
      degree: 'High School Graduate',
      period: 'Completed',
      current: false,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About <span className="text-primary glow-text">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <Card className="p-8 mb-12 bg-card border-primary/20 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              I'm an Electrical and Electronics Engineering student at VIT Chennai, 
              passionate about power systems, embedded technologies, and renewable energy innovations. 
              My goal is to contribute to sustainable energy solutions and drive technological 
              advancements in the field of electrical engineering.
            </p>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Education</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in ${
                  edu.current ? 'glow-border' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-primary font-medium mb-1">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
