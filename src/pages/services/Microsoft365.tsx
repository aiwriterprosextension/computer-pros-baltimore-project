import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Mail, FileText, Users, Shield, Smartphone, CheckCircle } from "lucide-react";

const Microsoft365 = () => {
  const services = [
    {
      icon: Cloud,
      title: "Microsoft 365 Setup & Migration",
      description: "Complete setup and seamless migration from your current email and productivity systems."
    },
    {
      icon: Mail,
      title: "Email & Exchange Online",
      description: "Professional email with advanced security, large mailboxes, and mobile access."
    },
    {
      icon: FileText,
      title: "SharePoint & OneDrive",
      description: "Secure document storage, sharing, and collaboration tools for your team."
    },
    {
      icon: Users,
      title: "Teams & Collaboration",
      description: "Video conferencing, chat, and collaboration tools to keep your team connected."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Advanced security features and compliance tools to protect your business data."
    },
    {
      icon: Smartphone,
      title: "Mobile Device Management",
      description: "Secure access to business data on personal and company-owned mobile devices."
    }
  ];

  const microsoftApps = [
    "Outlook (Email & Calendar)",
    "Word (Document Creation)",
    "Excel (Spreadsheets & Analytics)",
    "PowerPoint (Presentations)",
    "Teams (Video Conferencing)",
    "SharePoint (Document Management)",
    "OneDrive (Cloud Storage)",
    "Power BI (Business Intelligence)"
  ];

  const googleApps = [
    "Gmail (Email & Calendar)",
    "Google Docs (Document Creation)",
    "Google Sheets (Spreadsheets)",
    "Google Slides (Presentations)",
    "Google Meet (Video Conferencing)",
    "Google Drive (Cloud Storage)",
    "Google Sites (Simple Websites)",
    "Google Admin (User Management)"
  ];

  const benefits = [
    "99.9% uptime guarantee with enterprise-grade reliability",
    "Advanced security features including multi-factor authentication",
    "Automatic updates and patches with no downtime",
    "Scalable licensing that grows with your business",
    "24/7 support from Microsoft and Computer Pros",
    "Integration with hundreds of business applications",
    "Mobile access to all your business data and applications"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Cloud Productivity Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Microsoft 365 & Google Workspace Solutions
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Transform your business with cloud-based productivity tools. We handle the setup, migration, 
              and ongoing support so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Migration</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resources">Migration Checklist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Choose Your Cloud Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Both Microsoft 365 and Google Workspace offer powerful productivity tools. 
              We'll help you choose the best fit for your Baltimore business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Microsoft 365 */}
            <Card className="service-card">
              <CardHeader className="text-center">
                <div className="bg-blue-600 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                  <Cloud className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Microsoft 365</CardTitle>
                <CardDescription className="text-base">
                  Best for businesses that need advanced features and integration with existing Microsoft tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {microsoftApps.map((app, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/contact">Choose Microsoft 365</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Google Workspace */}
            <Card className="service-card">
              <CardHeader className="text-center">
                <div className="bg-green-600 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                  <Cloud className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Google Workspace</CardTitle>
                <CardDescription className="text-base">
                  Perfect for businesses that prioritize simplicity, collaboration, and cost-effectiveness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {googleApps.map((app, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/contact">Choose Google Workspace</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Complete Cloud Migration Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle every aspect of your cloud migration, from planning to training.
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

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-8">Why Move to the Cloud?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cloud productivity platforms offer significant advantages over traditional on-premise solutions, 
                especially for small and medium businesses in Baltimore.
              </p>
              
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
                <CardTitle className="text-2xl text-center">Migration Process</CardTitle>
                <CardDescription className="text-center text-base">
                  Our proven 5-step migration process ensures a smooth transition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Assessment & Planning</h4>
                      <p className="text-sm text-muted-foreground">Analyze your current setup and create migration plan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Setup & Configuration</h4>
                      <p className="text-sm text-muted-foreground">Configure your new cloud environment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Data Migration</h4>
                      <p className="text-sm text-muted-foreground">Securely transfer all your business data</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Testing & Training</h4>
                      <p className="text-sm text-muted-foreground">Test everything works and train your team</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">Go-Live & Support</h4>
                      <p className="text-sm text-muted-foreground">Launch your new system with ongoing support</p>
                    </div>
                  </div>
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us handle your cloud migration so you can enjoy the benefits of modern productivity tools 
            without the technical hassles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Migration</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Cloud Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Microsoft365;