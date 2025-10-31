import { GraduationCap, School, Sparkles, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useState, useRef } from 'react';

const About = () => {
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

  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      institution: 'VIT Chennai',
      degree: 'B.Tech in Electrical and Electronics Engineering',
      period: '3rd Year | Expected 2026',
      current: true,
      color: 'primary',
    },
    {
      icon: <School className="w-6 h-6" />,
      institution: 'Chaitanya Secondary School',
      degree: 'High School Graduate',
      period: 'Completed',
      current: false,
      color: 'secondary',
    },
  ];

  return (
    <section id="about" className="py-32 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Get To Know Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
          </div>

          {/* Bio Card */}
          <Card className={`p-10 mb-16 bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/20 relative overflow-hidden group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">My Journey</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm an Electrical and Electronics Engineering student at <span className="text-primary font-semibold">VIT Chennai</span>, 
                passionate about power systems, embedded technologies, and renewable energy innovations. 
                My goal is to contribute to <span className="text-secondary font-semibold">sustainable energy solutions</span> and drive technological 
                advancements in the field of electrical engineering. With hands-on experience through internships 
                and research, I'm dedicated to creating innovative solutions that make a real-world impact.
              </p>
            </div>
          </Card>

          {/* Education Timeline */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <h3 className="text-3xl font-bold text-foreground">Education Journey</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`relative p-8 bg-card/80 backdrop-blur-sm border-2 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl ${
                    edu.current 
                      ? 'border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                      : 'border-primary/20 hover:border-secondary/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    edu.current ? 'from-primary/10' : 'from-secondary/10'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>

                  <div className="relative z-10">
                    {/* Icon with animated background */}
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                      edu.current ? 'bg-primary/10' : 'bg-secondary/10'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <div className={edu.current ? 'text-primary' : 'text-secondary'}>
                        {edu.icon}
                      </div>
                    </div>

                    {/* Current badge */}
                    {edu.current && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-semibold text-primary">Current</span>
                      </div>
                    )}

                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h4>
                    <p className={`font-semibold mb-2 ${edu.current ? 'text-primary' : 'text-secondary'}`}>
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <p>{edu.period}</p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-lg group-hover:border-primary/50 transition-colors"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
