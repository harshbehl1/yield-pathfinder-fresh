import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Thermometer, Droplet, Beaker } from "lucide-react";
import { useState } from "react";

const DataForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    soilPh: '',
    temperature: '',
    rainfall: '',
    humidity: '',
    previousCrop: '',
    farmSize: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send data to your AI prediction service
  };

  return (
    <section id="data-input" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Enter Your Farm Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Provide details about your location, soil conditions, and environmental factors 
            to get accurate crop predictions and recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="h-5 w-5 text-primary" />
                Farm Information
              </CardTitle>
              <CardDescription>
                Fill in the details about your farm and environmental conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="Enter your city or coordinates"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                {/* Soil Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select value={formData.soilType} onValueChange={(value) => setFormData({...formData, soilType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="silty">Silty</SelectItem>
                        <SelectItem value="rocky">Rocky</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="soilPh">Soil pH</Label>
                    <Input
                      id="soilPh"
                      type="number"
                      min="0"
                      max="14"
                      step="0.1"
                      placeholder="e.g., 6.5"
                      value={formData.soilPh}
                      onChange={(e) => setFormData({...formData, soilPh: e.target.value})}
                    />
                  </div>
                </div>

                {/* Climate Information */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-warning" />
                      Avg Temperature (°C)
                    </Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="25"
                      value={formData.temperature}
                      onChange={(e) => setFormData({...formData, temperature: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="rainfall" className="flex items-center gap-2">
                      <Droplet className="h-4 w-4 text-accent-foreground" />
                      Rainfall (mm)
                    </Label>
                    <Input
                      id="rainfall"
                      type="number"
                      placeholder="800"
                      value={formData.rainfall}
                      onChange={(e) => setFormData({...formData, rainfall: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="humidity">Humidity (%)</Label>
                    <Input
                      id="humidity"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="70"
                      value={formData.humidity}
                      onChange={(e) => setFormData({...formData, humidity: e.target.value})}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="previousCrop">Previous Crop</Label>
                    <Select value={formData.previousCrop} onValueChange={(value) => setFormData({...formData, previousCrop: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select previous crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="corn">Corn</SelectItem>
                        <SelectItem value="soybeans">Soybeans</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="none">None/New Field</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size (hectares)</Label>
                    <Input
                      id="farmSize"
                      type="number"
                      placeholder="10"
                      value={formData.farmSize}
                      onChange={(e) => setFormData({...formData, farmSize: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional information about your farm or specific requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Generate Predictions
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Preview/Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card shadow-medium">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                What You'll Get
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2" />
                  <div>
                    <p className="font-medium text-card-foreground">Crop Recommendations</p>
                    <p className="text-sm text-muted-foreground">Best crops for your specific conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-card-foreground">Yield Predictions</p>
                    <p className="text-sm text-muted-foreground">Expected harvest quantities and timeline</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                  <div>
                    <p className="font-medium text-card-foreground">Risk Analysis</p>
                    <p className="text-sm text-muted-foreground">Potential threats and mitigation strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-foreground mt-2" />
                  <div>
                    <p className="font-medium text-card-foreground">Profit Estimates</p>
                    <p className="text-sm text-muted-foreground">Expected revenue and cost analysis</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">🌾 Pro Tip</h4>
              <p className="text-sm text-muted-foreground">
                More accurate data leads to better predictions. If you have soil test results 
                or historical weather data, include them in the additional notes section.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataForm;