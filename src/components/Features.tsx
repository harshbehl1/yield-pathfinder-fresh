import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, TrendingUp, Shield, MapPin, FileText, Globe, 
  BarChart3, Cloud, Leaf, DollarSign, AlertCircle, Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms analyze multiple data points to provide accurate crop recommendations and yield predictions.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Maximize your harvest potential with data-driven insights on planting schedules, crop selection, and farming practices.",
      color: "success"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential threats from weather, pests, and diseases before they impact your crops with our comprehensive risk analysis.",
      color: "warning"
    },
    {
      icon: MapPin,
      title: "Location-Based Analysis",
      description: "Leverage hyperlocal weather data, soil conditions, and geographical factors for precise recommendations tailored to your area.",
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboard",
      description: "Visualize your farm data with beautiful charts, graphs, and real-time analytics to make informed decisions quickly.",
      color: "primary"
    },
    {
      icon: DollarSign,
      title: "Profit Estimation",
      description: "Calculate expected revenue, costs, and profit margins for different crops to optimize your farming business strategy.",
      color: "success"
    },
    {
      icon: FileText,
      title: "PDF Reports",
      description: "Generate comprehensive reports with predictions, recommendations, and analysis that you can download and share.",
      color: "muted"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Access the platform in multiple languages to serve farmers worldwide with localized content and recommendations.",
      color: "accent"
    },
    {
      icon: Cloud,
      title: "Weather Integration",
      description: "Real-time weather data and long-term climate forecasts are incorporated into all predictions and recommendations.",
      color: "accent"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Recommendations include sustainable farming practices to protect the environment while maintaining profitability.",
      color: "success"
    },
    {
      icon: AlertCircle,
      title: "Early Warning System",
      description: "Get alerts about potential issues before they become problems, allowing you to take preventive action.",
      color: "warning"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track farming goals, monitor progress, and adjust strategies based on real-time performance data.",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 border-primary/20 text-primary';
      case 'success':
        return 'bg-success/10 border-success/20 text-success';
      case 'warning':
        return 'bg-warning/10 border-warning/20 text-warning';
      case 'accent':
        return 'bg-accent/10 border-accent/20 text-accent-foreground';
      default:
        return 'bg-muted/50 border-border text-muted-foreground';
    }
  };

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Farming
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with agricultural expertise 
            to provide farmers with the tools they need to succeed in today's challenging environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClasses(feature.color)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Ready to transform your farming?</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Join thousands of farmers who are already using AI to optimize their crops and increase profits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;