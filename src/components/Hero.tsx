import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileHero from '@/assets/profile-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-glow-pulse"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-secondary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Tarun <span className="text-primary glow-text">Prabhakar</span>
              </h1>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Electrical & Electronics Engineer
              </h2>
              <p className="text-xl text-muted-foreground">
                Innovator | Product Developer
              </p>
            </div>

            <p className="text-lg text-foreground/70 max-w-xl">
              Building efficient power systems and advancing renewable energy technology
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30 animate-glow-pulse"></div>
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30">
                <img
                  src={profileHero}
                  alt="Tarun Prabhakar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
