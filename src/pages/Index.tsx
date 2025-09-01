import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DataForm from "@/components/DataForm";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DataForm />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
