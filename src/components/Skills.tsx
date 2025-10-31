import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: 'Power Systems', level: 90, color: 'from-primary to-secondary' },
    { name: 'Power Electronics', level: 85, color: 'from-primary to-secondary' },
    { name: 'Circuit Design', level: 88, color: 'from-primary to-secondary' },
    { name: 'MATLAB', level: 80, color: 'from-primary to-secondary' },
    { name: 'Embedded Systems', level: 75, color: 'from-primary to-secondary' },
    { name: 'Python', level: 82, color: 'from-primary to-secondary' },
    { name: 'Renewable Energy Systems', level: 78, color: 'from-primary to-secondary' },
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Technical <span className="text-primary glow-text">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-glow`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
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

export default Skills;
