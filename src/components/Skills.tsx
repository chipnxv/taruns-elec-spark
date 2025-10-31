import { Card } from '@/components/ui/card';
import { Zap, Code } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Power Systems', level: 90, color: 'from-primary to-blue-400', icon: '⚡' },
    { name: 'Power Electronics', level: 85, color: 'from-primary to-secondary', icon: '🔌' },
    { name: 'Circuit Design', level: 88, color: 'from-blue-500 to-primary', icon: '🔧' },
    { name: 'MATLAB', level: 80, color: 'from-primary to-purple-500', icon: '📊' },
    { name: 'Embedded Systems', level: 75, color: 'from-secondary to-primary', icon: '💻' },
    { name: 'Python', level: 82, color: 'from-primary to-cyan-500', icon: '🐍' },
    { name: 'Renewable Energy Systems', level: 78, color: 'from-green-500 to-primary', icon: '🌱' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[index] = skills[index].level;
                return newValues;
              });
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">What I Know</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`p-8 bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Animated glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Code className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Proficiency</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                        {animatedValues[index] || 0}%
                      </span>
                      <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mt-1"></div>
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="relative">
                    <div className="h-4 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20">
                      {/* Animated Progress Bar */}
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${animatedValues[index] || 0}%`,
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[gradient-shift_2s_ease_infinite]"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Milestone markers */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0.5">
                      {[25, 50, 75].map((marker) => (
                        <div
                          key={marker}
                          className={`w-0.5 h-6 rounded-full transition-colors duration-500 ${
                            (animatedValues[index] || 0) >= marker ? 'bg-primary/50' : 'bg-muted-foreground/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Label */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
