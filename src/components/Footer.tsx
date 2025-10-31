const Footer = () => {
  return (
    <footer className="relative py-12 bg-card/50 border-t border-primary/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="inline-flex flex-col items-center">
            <div className="text-4xl font-bold text-gradient mb-2">TP</div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          {/* Quote */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto italic">
            "Building the future, one circuit at a time"
          </p>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-medium">
              © {new Date().getFullYear()} <span className="text-primary">Tarun Prabhakar</span>. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-red-500">♥</span> for innovation and sustainability
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-secondary"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
