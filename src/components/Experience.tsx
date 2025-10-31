import { Briefcase, FileText, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useState, useRef } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Internship Trainee',
      company: 'NLC India',
      period: 'May 2025 – June 2025',
      description: 'Gained hands-on experience in power systems and thermal power plant operations',
      type: 'internship',
      skills: ['Power Systems', 'Plant Operations', 'Safety Protocols'],
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Electronics Intern',
      company: 'Amphenol',
      period: 'June 2025 – July 2025',
      description: 'Worked on electronic components and connector systems',
      type: 'internship',
      skills: ['Electronics', 'Component Design', 'Quality Control'],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Research Paper',
      company: 'Bidirectional DC-DC Converter for V2G and G2V Charging',
      period: '2024 – Present',
      description: 'Researching vehicle-to-grid and grid-to-vehicle charging systems',
      type: 'research',
      skills: ['Power Electronics', 'V2G Technology', 'Research'],
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 circuit-pattern opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Career Path</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary blur-md"></div>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transitionDelay: `${index * 0.2}s`
                  }}
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Left/Right spacing */}
                    <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                      <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          exp.type === 'research' 
                            ? 'from-secondary/10 to-transparent' 
                            : 'from-primary/10 to-transparent'
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        <div className="relative z-10">
                          {/* Header */}
                          <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={`p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
                              exp.type === 'research' 
                                ? 'bg-secondary/10 text-secondary' 
                                : 'bg-primary/10 text-primary'
                            }`}>
                              {exp.icon}
                            </div>
                            <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {exp.title}
                              </h3>
                              <p className={`font-semibold mb-3 ${
                                exp.type === 'research' ? 'text-secondary' : 'text-primary'
                              }`}>
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className={`text-foreground/70 mb-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                            {exp.description}
                          </p>

                          {/* Skills */}
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute ${index % 2 === 0 ? 'top-0 left-0' : 'bottom-0 right-0'} w-16 h-16 border-2 ${
                          exp.type === 'research' ? 'border-secondary' : 'border-primary'
                        } opacity-20 group-hover:opacity-50 transition-opacity ${index % 2 === 0 ? 'border-t border-l rounded-tl-lg' : 'border-b border-r rounded-br-lg'}`}></div>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 top-12 -translate-x-1/2">
                      <div className={`relative w-6 h-6 rounded-full border-4 border-background ${
                        exp.type === 'research' ? 'bg-secondary' : 'bg-primary'
                      } shadow-lg`}>
                        <div className={`absolute inset-0 rounded-full ${
                          exp.type === 'research' ? 'bg-secondary' : 'bg-primary'
                        } animate-ping opacity-75`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
