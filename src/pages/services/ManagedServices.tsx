import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Monitor, HeadphonesIcon, Clock, Shield, Zap, CheckCircle } from "lucide-react";

const ManagedServices = () => {
  const features = [
    {
      icon: Monitor,
      title: "24/7 Network Monitoring",
      description: "Continuous monitoring of your IT infrastructure to prevent issues before they impact your business."
    },
    {
      icon: HeadphonesIcon,
      title: "Help Desk Support",
      description: "Professional IT support when you need it, with fast response times for critical issues."
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Complete server maintenance, updates, and optimization for maximum performance."
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Proactive security monitoring, patch management, and threat detection."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Regular system optimization to ensure your technology runs at peak efficiency."
    },
    {
      icon: Clock,
      title: "Proactive Maintenance",
      description: "Scheduled maintenance to prevent downtime and extend equipment life."
    }
  ];

  const benefits = [
    "Reduce IT costs by up to 40% compared to in-house IT staff",
    "24/7 monitoring prevents 95% of potential IT issues",
    "Average 4-hour response time for critical issues",
    "Predictable monthly costs with no surprise bills",
    "Access to enterprise-level technology and expertise",
    "Scalable solutions that grow with your business",
    "Local Baltimore support team that understands your industry"
  ];

  const industries = [
    "Law Firms & Legal Services",
    "Medical & Healthcare Practices", 
    "Accounting & Financial Services",
    "Real Estate Agencies",
    "Insurance Brokerages",
    "Consulting Firms",
    "Non-Profit Organizations"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Most Popular Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Managed IT Services for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Complete IT infrastructure management that keeps your business running smoothly. 
              Our proactive approach prevents problems before they happen, saving you time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free IT Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Comprehensive IT Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our managed services cover every aspect of your IT infrastructure, from hardware to security to support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-8">Why Choose Our Managed Services?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Perfect for Baltimore Businesses</CardTitle>
                <CardDescription className="text-center text-base">
                  We specialize in serving professional service firms throughout the Baltimore metro area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to learn how our managed services can improve your business operations 
            and reduce IT costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">Compare Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;