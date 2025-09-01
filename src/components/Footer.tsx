import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sprout, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <Sprout className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CropPathfinder</h3>
                <p className="text-sm text-primary-foreground/70">AI Crop Prediction</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering farmers worldwide with AI-driven crop predictions, 
              yield optimization, and risk assessment for sustainable agriculture.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <div className="space-y-3">
              <a href="#features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#dashboard" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Dashboard
              </a>
              <a href="#pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
              <a href="#api" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                API Access
              </a>
              <a href="#mobile" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Mobile App
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <div className="space-y-3">
              <a href="#docs" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Documentation
              </a>
              <a href="#blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Blog
              </a>
              <a href="#guides" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Farming Guides
              </a>
              <a href="#webinars" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Webinars
              </a>
              <a href="#support" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Support Center
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Get the latest farming insights and product updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary-foreground/70" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-primary-foreground/80">hello@croppathfinder.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary-foreground/70" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-primary-foreground/80">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary-foreground/70" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-primary-foreground/80">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
            <a href="#privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
            <a href="#accessibility" className="hover:text-primary-foreground transition-colors">
              Accessibility
            </a>
          </div>
          <p className="text-sm text-primary-foreground/80">
            © 2024 CropPathfinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;