import { Briefcase, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Internship Trainee',
      company: 'NLC India',
      period: 'May 2025 – June 2025',
      description: 'Gained hands-on experience in power systems and thermal power plant operations',
      type: 'internship',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Electronics Intern',
      company: 'Amphenol',
      period: 'June 2025 – July 2025',
      description: 'Worked on electronic components and connector systems',
      type: 'internship',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Research Paper',
      company: 'Bidirectional DC-DC Converter for V2G and G2V Charging',
      period: '2024 – Present',
      description: 'Researching vehicle-to-grid and grid-to-vehicle charging systems',
      type: 'research',
    },
  ];

  return (
    <section id="experience" className="py-20 circuit-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Work <span className="text-primary glow-text">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background shadow-glow"></div>

                  <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        exp.type === 'research' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                      }`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-foreground/70">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
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
