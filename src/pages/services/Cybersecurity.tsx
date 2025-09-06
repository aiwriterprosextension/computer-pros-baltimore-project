import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, FileCheck, UserCheck, CheckCircle } from "lucide-react";
import cyberImage from "@/assets/cybersecurity-service.jpg";

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security defenses to protect against malware, ransomware, and sophisticated cyber attacks."
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of your network for suspicious activity with immediate response to threats."
    },
    {
      icon: Lock,
      title: "Endpoint Security",
      description: "Comprehensive protection for all devices accessing your network, including laptops, phones, and tablets."
    },
    {
      icon: FileCheck,
      title: "Security Audits & Assessments",
      description: "Regular security evaluations to identify vulnerabilities and ensure compliance with industry standards."
    },
    {
      icon: UserCheck,
      title: "Employee Security Training",
      description: "Regular training programs to educate your staff about phishing, social engineering, and best practices."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and recovery services in the event of a security breach or cyber attack."
    }
  ];

  const compliance = [
    "HIPAA (Healthcare)",
    "SOX (Financial Services)", 
    "GDPR (Data Protection)",
    "PCI DSS (Payment Processing)",
    "FERPA (Education)",
    "CJIS (Law Enforcement)",
    "State Data Breach Laws"
  ];

  const threats = [
    "Ransomware attacks have increased 350% in Baltimore area",
    "95% of successful cyber attacks target small businesses",
    "Average cost of a data breach is $4.45 million",
    "60% of small businesses close within 6 months of a cyber attack",
    "Phishing attacks account for 80% of security incidents"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Critical Business Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Cybersecurity Solutions for Baltimore Businesses
              </h1>
              <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
                Protect your business from cyber threats with enterprise-grade security solutions. 
                Our comprehensive cybersecurity services keep your data safe and your business compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Security Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/resources">Take Phishing Test</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={cyberImage} 
                alt="Cybersecurity protection" 
                className="rounded-lg shadow-[var(--shadow-strong)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header text-destructive">The Cyber Threat Landscape</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cyber threats are increasing in frequency and sophistication. Baltimore businesses need robust protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium">{threat}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Comprehensive Cybersecurity Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security solutions designed to protect your business from every angle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-8">Compliance & Regulatory Support</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Many Baltimore businesses operate in regulated industries. Our cybersecurity solutions 
                help you meet compliance requirements while protecting your data.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {compliance.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Security Assessment</CardTitle>
                <CardDescription className="text-center text-base">
                  Get a comprehensive evaluation of your current security posture.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Network vulnerability scan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Policy and procedure review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Employee security awareness evaluation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Compliance gap analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Detailed report with recommendations</span>
                  </div>
                </div>
                
                <Button variant="service" className="w-full" asChild>
                  <Link to="/contact">Schedule Assessment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Cyber attacks happen every 39 seconds. Protect your Baltimore business with 
            enterprise-grade cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Protected Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/resources">Free Security Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;