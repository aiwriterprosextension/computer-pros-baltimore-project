import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Server, Bot, Shield, Users, CheckCircle, ArrowRight, Building } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import FAQSection from "@/components/FAQSection";

const PropertyManagers = () => {
  const benefits = [
    "AI ticket routing and automated alerts",
    "Secure access for remote teams and vendors",
    "Phishing detection and compliance support",
    "Automated maintenance request processing",
    "Secure tenant portal management",
    "24/7 monitoring for critical systems"
  ];

  const services = [
    {
      icon: Server,
      title: "Managed IT",
      description: "Reliable infrastructure management for property operations",
      href: "/services/managed-services"
    },
    {
      icon: Bot,
      title: "AI Enablement",
      description: "Smart automation for tenant services and maintenance",
      href: "/services/ai-enablement"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect tenant data and financial information",
      href: "/services/cybersecurity"
    }
  ];

  const automationExamples = [
    {
      process: "Maintenance Requests",
      before: "Manual phone calls and paperwork",
      after: "AI-powered routing and priority assignment"
    },
    {
      process: "Tenant Communications",
      before: "Email chains and missed messages",
      after: "Automated notifications and updates"
    },
    {
      process: "Vendor Coordination",
      before: "Multiple calls and scheduling conflicts",
      after: "Smart scheduling and automated confirmations"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="IT Services for Baltimore Property Managers | Computer Pros"
        description="Prevent downtime, protect tenant data, and streamline operations with smart IT and automation tools for property management firms in Baltimore."
        keywords="Baltimore property management IT, real estate IT support, property manager technology, Baltimore facilities management IT"
        canonicalUrl="https://computerpros-baltimore.com/industries/property-managers"
      />

      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium bg-primary text-primary-foreground">
            Property Management Specialists
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            IT Services for Baltimore Property Managers
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Prevent downtime, protect tenant data, and streamline operations with smart IT and automation tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/tools/phishing-test">Try the Phishing Quick Test</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
              <Link to="/booking">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Building className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="section-header">Why Baltimore Property Managers Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of managing multiple properties and diverse teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Discover AI tools for tenant ticket routing → <Link to="/tools/ai-finder" className="text-primary hover:underline">AI Tool Finder</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Services for Property Management</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technology solutions that scale with your portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-12 w-12 text-primary" />
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="service" className="w-full" asChild>
                      <Link to={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Automation That Actually Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how AI can transform your property management operations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {automationExamples.map((example, index) => (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{example.process}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-sm font-medium text-destructive mb-2">Before</div>
                      <p className="text-sm text-muted-foreground">{example.before}</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-600 mb-2">After</div>
                      <p className="text-sm text-muted-foreground">{example.after}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Property Manager ROI Calculator</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how much time and money you could save with better IT systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15 hours</div>
                    <p className="text-muted-foreground">Weekly time savings with automation</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                    <p className="text-muted-foreground">Reduction in IT support costs</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <p className="text-muted-foreground">System uptime guaranteed</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="hero" asChild>
                    <Link to="/tools/it-cost">Calculate Your Savings</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Related Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete IT solutions for property management firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle>Microsoft 365 Setup</CardTitle>
                <CardDescription>
                  Secure collaboration tools for distributed property management teams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/services/microsoft-365">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle>Emergency Support</CardTitle>
                <CardDescription>
                  24/7 emergency IT support for critical property management systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/services/pricing">View Support Plans</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Score CTA */}
      <InlineCTABlock 
        headline="Assess your cybersecurity risks"
        subheadline="Get a quick assessment of your property management systems' security posture."
        buttonText="Get My Security Score"
        buttonLink="/tools/security-score"
      />

      {/* FAQ Section */}
      <FAQSection faqs={[
        {
          question: "Do you support property management platforms like AppFolio or Buildium?",
          answer: "Yes, we secure and optimize cloud platforms used by property managers for tenant operations."
        },
        {
          question: "Can you automate ticket routing?",
          answer: "We implement AI tools that categorize and route tenant requests automatically."
        },
        {
          question: "How do you protect tenant data?",
          answer: "We use encryption, access controls, and secure cloud backups to protect sensitive information."
        },
        {
          question: "Can you integrate with smart building systems?",
          answer: "Yes, we connect IoT devices, security systems, and building automation platforms securely to your management software."
        },
        {
          question: "How do you handle multi-property IT management?",
          answer: "We provide centralized monitoring and management across all your properties with role-based access for different locations."
        }
      ]} />
    </div>
  );
};

export default PropertyManagers;