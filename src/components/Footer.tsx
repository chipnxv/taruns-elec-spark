const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Tarun Prabhakar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for innovation and sustainability
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
