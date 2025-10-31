import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'Advanced power electronics system for renewable energy applications with real-time monitoring capabilities',
      tags: ['Power Electronics', 'IoT', 'MATLAB'],
      link: '#',
    },
    {
      title: 'Project Beta',
      description: 'Embedded system for smart grid management with automated load balancing and fault detection',
      tags: ['Embedded Systems', 'Smart Grid', 'Python'],
      link: '#',
    },
    {
      title: 'Project Gamma',
      description: 'Bidirectional DC-DC converter design for vehicle-to-grid charging infrastructure',
      tags: ['V2G', 'Power Conversion', 'Circuit Design'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured <span className="text-primary glow-text">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 group animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} className="flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      View
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} className="flex items-center justify-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
