import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, FileCheck, UserCheck, CheckCircle } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";

const Cybersecurity = () => {
  const introPoints = [
    "Real-time threat detection and response",
    "Compliance-ready security measures",
    "Employee security awareness training",
    "Local experts who understand your industry"
  ];

  const styles = {
    title: { color: '#505050', fontWeight: 'bold' },
    text: { color: '#333333' },
    button: { backgroundColor: '#E01010', color: '#FFFFFF', '&:hover': { backgroundColor: '#B00D0D' } },
    section: { backgroundColor: '#E0E0E0' }
  };

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
      <SEOHead 
        title="Cybersecurity Solutions for Baltimore Businesses | Computer Pros"
        description="Enterprise-grade cybersecurity protection for Baltimore businesses. Advanced threat detection, compliance solutions, and 24/7 monitoring. Free security assessment available."
        keywords="cybersecurity Baltimore, IT security Baltimore, threat protection, HIPAA compliance, ransomware protection, security monitoring Baltimore"
        canonicalUrl="https://computerpros-baltimore.com/services/cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Cybersecurity Solutions for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Enterprise-grade protection for your digital assets
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6" style={styles.text}>
                Protect your business from evolving cyber threats with enterprise-grade security solutions 
                tailored for Baltimore's small and mid-sized businesses.
              </p>
              <ul className="space-y-3 mb-8">
                {introPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" style={{ color: '#E01010' }} />
                    <span style={styles.text}>{point}</span>
                  </li>
                ))}
              </ul>
              <CalendlyPopupButton 
                text="Get Your Free Assessment" 
                className="w-full md:w-auto"
                showIcon={true}
              />
            </div>
            <div>
              <img 
                src="/images/cybersecurity-hero.png" 
                alt="Security operations center with analyst"
                className="rounded-lg shadow-lg"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Comprehensive Cybersecurity Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your business with enterprise-grade security solutions designed for Baltimore's 
              professional firms and healthcare organizations.
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

      {/* Cyber Threat Statistics */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Why Cybersecurity Matters for Baltimore Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The cybersecurity landscape is more dangerous than ever for small and medium businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {threats.map((threat, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{threat}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CalendlyPopupButton 
              text="Protect Your Business Today" 
              variant="hero" 
              size="lg"
              showIcon={true}
            />
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Industry Compliance Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help Baltimore businesses meet regulatory requirements and maintain compliance 
              with industry standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {compliance.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent p-4 rounded-lg mb-3">
                  <FileCheck className="h-8 w-8 text-primary mx-auto" />
                </div>
                <p className="font-medium">{standard}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Need help with regulatory compliance? Our cybersecurity experts can help you 
              meet industry requirements and protect sensitive data.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Compliance Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
