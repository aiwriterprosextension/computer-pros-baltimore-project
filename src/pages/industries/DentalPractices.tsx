import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Heart, AlertTriangle, Users, CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";

const DentalPractices = () => {
  const benefits = [
    "AI alerts for HIPAA violations and backup failures",
    "Encrypted email and secure file sharing",
    "Phishing prevention and staff training",
    "Automated compliance monitoring",
    "Secure patient data management",
    "24/7 cybersecurity monitoring"
  ];

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "HIPAA-compliant security solutions for patient data protection",
      href: "/services/cybersecurity"
    },
    {
      icon: Heart,
      title: "AI Enablement",
      description: "Smart automation for appointment scheduling and patient care",
      href: "/services/ai-enablement"
    },
    {
      icon: Users,
      title: "Support Plans",
      description: "Reliable IT support designed for healthcare practices",
      href: "/services/pricing"
    }
  ];

  const threats = [
    {
      threat: "Healthcare Data Breaches",
      stat: "88% increase in 2023",
      impact: "Average cost: $10.93M per breach"
    },
    {
      threat: "Ransomware Attacks",
      stat: "1 in 42 healthcare organizations targeted",
      impact: "Average downtime: 6 days"
    },
    {
      threat: "HIPAA Violations",
      stat: "$13.3M in fines in 2023",
      impact: "Reputation damage lasting years"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cybersecurity for Baltimore Dentists | Computer Pros"
        description="Keep patient records safe and meet HIPAA requirements with proactive IT and AI-powered protection for dental practices in Baltimore."
        keywords="Baltimore dental IT, dentist cybersecurity, HIPAA compliance, dental practice IT support, Baltimore healthcare IT"
        canonicalUrl="https://computerpros-baltimore.com/industries/dental-practices"
      />

      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium bg-primary text-primary-foreground">
            HIPAA Compliance Experts
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cybersecurity for Baltimore Dentists
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Keep patient records safe and meet HIPAA requirements with proactive IT and AI-powered protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-checklist">Download the IT Security Checklist</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
              <Link to="/booking">Schedule Security Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-destructive/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="section-header text-destructive">Healthcare Under Attack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dental practices are prime targets for cybercriminals. Don't become a statistic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {threats.map((item, index) => (
              <Card key={index} className="service-card border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">{item.threat}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-destructive">{item.stat}</div>
                    <p className="text-sm text-muted-foreground">{item.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">How We Protect Baltimore Dental Practices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed specifically for dental offices.
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Services for Dental Practices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized IT solutions that keep your practice secure and compliant.
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

      {/* HIPAA Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">HIPAA Compliance Made Simple</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We handle the technical requirements so you can focus on patient care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-xl">Technical Safeguards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Access controls and user authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Audit logs and monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Data encryption at rest and in transit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Automatic logoff and session management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-xl">Administrative Safeguards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Security officer designation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Workforce training and access management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Incident response procedures</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Business associate agreements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <InlineCTABlock 
        headline="Protect Your Patients and Your Practice"
        subheadline="Download our free IT security checklist to identify vulnerabilities in your dental practice."
        buttonText="Get the Security Checklist"
        buttonLink="/free-checklist"
      />
    </div>
  );
};

export default DentalPractices;