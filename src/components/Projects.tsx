import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'Project Alpha',
      description: 'Advanced power electronics system for renewable energy applications with real-time monitoring capabilities and intelligent load management',
      tags: ['Power Electronics', 'IoT', 'MATLAB'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '#',
    },
    {
      title: 'Project Beta',
      description: 'Embedded system for smart grid management with automated load balancing and fault detection using machine learning algorithms',
      tags: ['Embedded Systems', 'Smart Grid', 'Python'],
      gradient: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      title: 'Project Gamma',
      description: 'Bidirectional DC-DC converter design for vehicle-to-grid charging infrastructure enabling efficient energy transfer',
      tags: ['V2G', 'Power Conversion', 'Circuit Design'],
      gradient: 'from-green-500 to-teal-500',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">My Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Innovative solutions combining electrical engineering expertise with modern technology
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`relative p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Top decorative bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Project Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Folder className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href={project.link}
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all group-hover:translate-y-[-2px]"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary/50 text-primary hover:bg-primary hover:text-white group/btn"
                    asChild
                  >
                    <a href={project.link} className="flex items-center justify-center gap-2">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1px] transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-primary/10 rounded-br-2xl group-hover:border-primary/30 transition-colors"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
