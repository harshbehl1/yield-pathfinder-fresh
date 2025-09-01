import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, 
  Download, Share, Calendar, MapPin 
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  // Mock data for charts
  const yieldData = [
    { crop: 'Wheat', predicted: 4200, historical: 3800 },
    { crop: 'Corn', predicted: 8500, historical: 7900 },
    { crop: 'Rice', predicted: 6800, historical: 6200 },
    { crop: 'Soybeans', predicted: 3200, historical: 2900 },
  ];

  const profitData = [
    { month: 'Jan', profit: 2400, cost: 1800 },
    { month: 'Feb', profit: 1398, cost: 1200 },
    { month: 'Mar', profit: 9800, cost: 6000 },
    { month: 'Apr', profit: 3908, cost: 2800 },
    { month: 'May', profit: 4800, cost: 3200 },
    { month: 'Jun', profit: 3800, cost: 2800 },
  ];

  const riskData = [
    { name: 'Low Risk', value: 60, color: '#22c55e' },
    { name: 'Medium Risk', value: 30, color: '#f59e0b' },
    { name: 'High Risk', value: 10, color: '#ef4444' },
  ];

  const recommendations = [
    {
      crop: 'Winter Wheat',
      confidence: 95,
      yield: '4.2 tons/hectare',
      profit: '$1,200/hectare',
      risk: 'low',
      season: 'Winter 2024'
    },
    {
      crop: 'Sweet Corn',
      confidence: 88,
      yield: '8.5 tons/hectare',
      profit: '$2,800/hectare',
      risk: 'medium',
      season: 'Spring 2024'
    },
    {
      crop: 'Soybeans',
      confidence: 82,
      yield: '3.2 tons/hectare',
      profit: '$900/hectare',
      risk: 'low',
      season: 'Summer 2024'
    }
  ];

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case 'low': return 'default';
      case 'medium': return 'secondary';
      case 'high': return 'destructive';
      default: return 'secondary';
    }
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            AI-Powered Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive insights and predictions to guide your farming decisions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card shadow-medium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Prediction Accuracy</p>
                <p className="text-2xl font-bold text-foreground">95.2%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">+2.3%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-medium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Expected Yield</p>
                <p className="text-2xl font-bold text-foreground">6.8t/ha</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">+15%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-medium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Profit Estimate</p>
                <p className="text-2xl font-bold text-foreground">$1,450</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">+8.2%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-medium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Risk Level</p>
                <p className="text-2xl font-bold text-success">Low</p>
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">Optimal</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Yield Comparison Chart */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Yield Predictions vs Historical Data</CardTitle>
                <CardDescription>
                  Comparison of predicted yields with historical averages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="crop" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="historical" fill="hsl(var(--muted))" name="Historical" />
                    <Bar dataKey="predicted" fill="hsl(var(--primary))" name="Predicted" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Profit Analysis */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Profit Analysis</CardTitle>
                <CardDescription>
                  Monthly profit and cost projections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={profitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="profit" stroke="hsl(var(--success))" strokeWidth={3} />
                    <Line type="monotone" dataKey="cost" stroke="hsl(var(--warning))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recommendations & Risk */}
          <div className="space-y-8">
            {/* Crop Recommendations */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Top Recommendations
                </CardTitle>
                <CardDescription>
                  Best crops for your conditions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-gradient-card">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{rec.crop}</h4>
                      <Badge 
                        variant={getRiskBadgeVariant(rec.risk)} 
                        className="text-xs"
                      >
                        {rec.risk} risk
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Confidence:</span>
                        <span className="font-medium">{rec.confidence}%</span>
                      </div>
                      <Progress value={rec.confidence} className="h-2" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expected Yield:</span>
                        <span className="font-medium text-success">{rec.yield}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Profit/ha:</span>
                        <span className="font-medium text-primary">{rec.profit}</span>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{rec.season}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Risk Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Export & Share</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share className="mr-2 h-4 w-4" />
                  Share Dashboard
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;