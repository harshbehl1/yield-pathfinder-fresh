import { Button } from "@/components/ui/button";
import { Sprout, Menu, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">CropPathfinder</h1>
            <p className="text-xs text-muted-foreground">AI Crop Prediction</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
            <Globe className="h-4 w-4" />
            EN
          </Button>
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-foreground hover:text-primary transition-colors py-2">
              Features
            </a>
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors py-2">
              Dashboard
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
              Contact
            </a>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;