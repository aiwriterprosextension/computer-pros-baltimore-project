import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wifi, Shield, Zap, Server, Network, Settings } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";

const NetworkInfrastructureUpgrade = () => {
  const benefits = [
    "Dramatically improved network speed and reliability",
    "Enhanced security with enterprise-grade firewalls",
    "Seamless WiFi coverage throughout your facility",
    "Scalable infrastructure that grows with your business",
    "Reduced downtime and improved productivity",
    "Professional installation with minimal disruption",
    "Ongoing monitoring and maintenance support"
  ];

  const upgradeComponents = [
    {
      icon: Wifi,
      title: "WiFi 6 Wireless",
      description: "Latest wireless technology for maximum speed and device capacity"
    },
    {
      icon: Shield,
      title: "Enterprise Firewall",
      description: "Advanced threat protection and network security controls"
    },
    {
      icon: Network,
      title: "Managed Switches",
      description: "Intelligent network switching with VLAN support and monitoring"
    },
    {
      icon: Server,
      title: "Network Storage",
      description: "Centralized file storage with backup and collaboration features"
    },
    {
      icon: Zap,
      title: "Power over Ethernet",
      description: "Simplified device deployment with single-cable power and data"
    },
    {
      icon: Settings,
      title: "Network Management",
      description: "Centralized monitoring and configuration management"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Site Assessment",
      description: "Comprehensive evaluation of your current network and requirements"
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "Custom network design with detailed implementation timeline"
    },
    {
      step: "3",
      title: "Equipment Procurement",
      description: "Source and configure enterprise-grade networking equipment"
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional installation with minimal business disruption"
    },
    {
      step: "5",
      title: "Testing & Optimization",
      description: "Comprehensive testing and performance optimization"
    },
    {
      step: "6",
      title: "Training & Handover",
      description: "Staff training and complete documentation delivery"
    }
  ];

  const faqs = [
    {
      question: "How long does a network infrastructure upgrade take?",
      answer: "Most upgrades are completed within 3-5 business days, depending on the scope and size of your facility. We work evenings and weekends to minimize disruption."
    },
    {
      question: "Will our business operations be interrupted?",
      answer: "We carefully plan the upgrade to minimize downtime. Most work is done after hours, and we maintain temporary connectivity during critical business hours."
    },
    {
      question: "What kind of warranty comes with the new equipment?",
      answer: "All equipment comes with manufacturer warranties (typically 1-3 years) plus our service guarantee. We also offer extended warranty options."
    },
    {
      question: "Can you upgrade our network in phases?",
      answer: "Yes, we can design a phased approach to spread costs over time while ensuring each phase delivers immediate benefits to your operations."
    },
    {
      question: "Do you provide ongoing support after the upgrade?",
      answer: "Absolutely. We offer ongoing monitoring and maintenance through our managed services plans, ensuring your network continues to perform optimally."
    }
  ];

  const pricingTiers = [
    {
      name: "Small Office",
      price: "$5,000",
      description: "Basic upgrade for 5-15 users",
      features: [
        "WiFi 6 access points (2-3 units)",
        "Business-grade firewall",
        "8-port managed switch",
        "Basic network setup",
        "1-year warranty"
      ]
    },
    {
      name: "Medium Business",
      price: "$12,000",
      description: "Comprehensive upgrade for 15-50 users",
      features: [
        "WiFi 6 access points (4-8 units)",
        "Enterprise firewall with advanced features",
        "24-48 port managed switches",
        "Network attached storage",
        "2-year warranty and support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full enterprise solution for 50+ users",
      features: [
        "Scalable WiFi 6 deployment",
        "Redundant firewall configuration",
        "Stackable switch infrastructure",
        "High-availability design",
        "3-year warranty and support"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Network Infrastructure Upgrade Services in Baltimore | Computer Pros"
        description="Professional network infrastructure upgrades for Baltimore businesses. WiFi 6, enterprise firewalls, and managed switches with expert installation and support."
        keywords="network upgrade Baltimore, WiFi 6 installation, firewall upgrade Baltimore, network infrastructure Maryland, business network setup"
        canonicalUrl="https://computerpros-baltimore.com/services/network-infrastructure-upgrade"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Enterprise-Grade Networking
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Network Infrastructure Upgrade for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Modernize your network infrastructure with WiFi 6, enterprise security, and scalable solutions. 
              Our expert team delivers reliable, high-performance networks that support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton 
                text="Schedule Network Assessment" 
                variant="hero" 
                size="lg"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/managed-services">View Ongoing Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-header text-left mb-6">
                  Professional Network Infrastructure Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your network infrastructure is the backbone of your business operations. Our comprehensive 
                  upgrade services deliver enterprise-grade performance, security, and reliability that 
                  scales with your Baltimore business.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  From WiFi 6 wireless systems to advanced firewalls and managed switches, we design and 
                  implement network solutions that improve productivity, enhance security, and reduce 
                  IT headaches for your team.
                </p>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {upgradeComponents.slice(0, 4).map((component, index) => {
                  const IconComponent = component.icon;
                  return (
                    <Card key={index} className="service-card">
                      <CardHeader className="text-center pb-4">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">{component.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {component.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Upgrade Components</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use enterprise-grade components to build networks that deliver exceptional 
              performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upgradeComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{component.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Upgrade Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your network upgrade is completed 
              on time, on budget, and with minimal business disruption.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Network Upgrade Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options to fit your business size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="service-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <CalendlyPopupButton 
                    text="Get Quote" 
                    variant="service" 
                    className="w-full"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our Baltimore network experts design and implement a modern, secure, and scalable 
            network infrastructure for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton 
              text="Schedule Network Assessment" 
              variant="hero" 
              size="lg"
            />
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/managed-services">View Support Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInfrastructureUpgrade;