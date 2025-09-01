import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Brain, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern agriculture with advanced farming technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Brain className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Agriculture</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Crop
                <span className="text-primary-glow block">Predictions</span>
                for Better Harvests
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Maximize your yield and minimize risks with AI-driven crop recommendations, 
                yield predictions, and profit optimization based on soil, weather, and location data.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg h-12">
                Start Predicting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-12">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Yield Increase</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-gradient-card border-primary/20 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-success/10 border border-success/20">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Yield Optimization
                  </h3>
                  <p className="text-muted-foreground">
                    Get precise yield predictions and recommendations to maximize your harvest potential.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-warning/10 border border-warning/20">
                  <Shield className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Risk Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    Identify potential risks early and get actionable insights to protect your crops.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    Location-Based Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Leverage local weather patterns and soil conditions for optimal crop selection.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;