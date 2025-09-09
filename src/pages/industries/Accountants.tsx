import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Cloud, Shield, Bot, Calculator, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import FAQSection from "@/components/FAQSection";

const Accountants = () => {
  const benefits = [
    "AI-powered fraud detection and audit alerts",
    "Secure file sharing and encrypted backups",
    "Remote access for tax season and client portals",
    "Automated document processing and categorization",
    "Real-time compliance monitoring",
    "Secure multi-client data segregation"
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Secure, scalable cloud infrastructure for accounting practices",
      href: "/services/microsoft-365"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security for financial data and client information",
      href: "/services/cybersecurity"
    },
    {
      icon: Bot,
      title: "AI Enablement",
      description: "Intelligent automation for accounting workflows and fraud detection",
      href: "/services/ai-enablement"
    }
  ];

  const taxSeasonFeatures = [
    {
      title: "Secure Remote Access",
      description: "Work from anywhere with secure, encrypted connections to your accounting software",
      benefit: "50% faster client file access"
    },
    {
      title: "Automated Document Processing",
      description: "AI-powered categorization and processing of client documents",
      benefit: "3 hours saved per client"
    },
    {
      title: "Client Portal Management",
      description: "Secure, branded client portals for document exchange and communication",
      benefit: "90% reduction in email back-and-forth"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cloud IT for Baltimore Accounting Firms | Computer Pros"
        description="Secure financial data, streamline collaboration, and detect fraud with AI-enhanced IT support for accounting firms in Baltimore."
        keywords="Baltimore accounting IT, CPA technology support, accounting firm cybersecurity, tax season IT support, QuickBooks cloud hosting"
        canonicalUrl="https://computerpros-baltimore.com/industries/accountants"
      />

      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium bg-primary text-primary-foreground">
            Accounting Technology Experts
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cloud IT for Baltimore Accounting Firms
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Secure financial data, streamline collaboration, and detect fraud with AI-enhanced IT support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/tools/it-cost">Try the Office IT Cost Calculator</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
              <Link to="/booking">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tax Season Ready */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="section-header">Tax Season Ready Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scale your technology infrastructure to handle peak workloads without missing a beat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taxSeasonFeatures.map((feature, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold text-primary">{feature.benefit}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Why Baltimore CPAs Trust Computer Pros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized IT solutions designed for the unique needs of accounting practices.
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
              Explore AI tools for fraud detection and reporting → <Link to="/tools/ai-finder" className="text-primary hover:underline">AI Tool Finder</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Services for Accounting Firms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete technology solutions that scale with your practice.
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

      {/* Fraud Detection */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="section-header">AI-Powered Fraud Detection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your clients and your practice with intelligent monitoring and alerts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Real-Time Monitoring</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unusual transaction pattern detection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Anomaly alerts for client accounts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Automated compliance violation flagging</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Client risk scoring and profiling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Suspicious activity reporting automation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Regulatory compliance tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="section-header">Calculate Your IT Investment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how much you could save with optimized IT systems and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <p className="text-muted-foreground">Reduction in IT costs</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">25 hrs</div>
                    <p className="text-muted-foreground">Monthly time savings</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <p className="text-muted-foreground">Data availability guarantee</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/tools/it-cost">Try the Cost Calculator</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Score CTA */}
      <InlineCTABlock 
        headline="Get your Cybersecurity Score before tax season"
        subheadline="Protect your practice and client data with our free security assessment tool."
        buttonText="Get My Security Score"
        buttonLink="/tools/security-score"
      />

      {/* FAQ Section */}
      <FAQSection faqs={[
        {
          question: "Do you support accounting platforms like QuickBooks or Xero?",
          answer: "Yes, we secure and optimize cloud accounting platforms for Baltimore firms."
        },
        {
          question: "Can you help with SOC 2 or financial compliance?",
          answer: "We offer audit support, data encryption, and access logging for compliance readiness."
        },
        {
          question: "Do you offer fraud detection tools?",
          answer: "Yes. We deploy AI tools that flag anomalies and generate audit alerts."
        }
      ]} />
    </div>
  );
};

export default Accountants;