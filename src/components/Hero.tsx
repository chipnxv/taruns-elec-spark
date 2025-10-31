import { ChevronDown, Zap, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileHero from '@/assets/profile-hero.jpg';
import AnimatedParticles from './AnimatedParticles';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Zap className="w-5 h-5" />, value: '3+', label: 'Projects' },
    { icon: <Award className="w-5 h-5" />, value: '2', label: 'Internships' },
    { icon: <Target className="w-5 h-5" />, value: '100%', label: 'Dedication' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 animated-gradient"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      <AnimatedParticles />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting with staggered animation */}
            <div className={`space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-primary text-sm font-medium">Available for opportunities</span>
              </div>
              
              <p className="text-secondary text-xl font-medium">Hello, I'm</p>
            </div>

            {/* Name with dramatic entrance */}
            <div className={`space-y-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="block text-foreground">Tarun</span>
                <span className="block text-gradient glow-text">Prabhakar</span>
              </h1>
            </div>

            {/* Title with animated underline */}
            <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground/90 relative inline-block">
                  Electrical & Electronics Engineer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite]"></div>
                </h2>
                <p className="text-2xl text-muted-foreground font-light">
                  Innovator • Product Developer • Tech Enthusiast
                </p>
              </div>

              <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
                Building efficient power systems and advancing renewable energy technology 
                for a sustainable future. Passionate about creating innovative solutions 
                that make a real-world impact.
              </p>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                <a href="#projects" className="relative z-10">
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_3s_ease_infinite]"></div>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Let's Connect
                  <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Multiple glowing layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl blur-3xl opacity-40 animate-glow-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary via-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Main image container with 3D effect */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/40 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
                
                <img
                  src={profileHero}
                  alt="Tarun Prabhakar"
                  className="w-full h-auto object-cover relative z-0"
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary rounded-br-3xl"></div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-card/90 backdrop-blur-md border border-primary/50 rounded-full shadow-glow">
                <p className="text-sm font-semibold text-primary">⚡ Powered by Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Scroll Down</span>
        <div className="relative">
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-glow-pulse"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
