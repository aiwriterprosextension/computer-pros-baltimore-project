import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, FileText, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";

const LawFirms = () => {
  const benefits = [
    "AI-powered document automation and compliance tracking",
    "Secure remote access for attorneys and staff",
    "24/7 monitoring to prevent data breaches",
    "HIPAA and legal industry compliance support",
    "Encrypted communication and file sharing",
    "Disaster recovery for critical case files"
  ];

  const services = [
    {
      icon: Shield,
      title: "Managed IT Services",
      description: "Complete IT infrastructure management tailored for legal practices",
      href: "/services/managed-services"
    },
    {
      icon: FileText,
      title: "Cybersecurity",
      description: "Advanced threat protection for confidential client data",
      href: "/services/cybersecurity"
    },
    {
      icon: Clock,
      title: "AI Enablement",
      description: "Document automation and case management efficiency",
      href: "/services/ai-enablement"
    }
  ];

  const caseStudy = {
    challenge: "A 15-attorney Baltimore law firm was spending $8,000/month on IT with frequent downtime affecting billable hours.",
    solution: "Computer Pros implemented secure cloud infrastructure, automated backups, and AI-powered document processing.",
    result: "30% cost reduction, 99.9% uptime, and 10+ hours saved weekly on document management."
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="IT Support for Baltimore Law Firms | Computer Pros"
        description="Secure, reliable IT services for law firms in Baltimore. AI-powered tools, compliance support, and 24/7 monitoring to protect client data and boost productivity."
        keywords="Baltimore law firm IT, legal IT support, attorney cybersecurity, law firm technology, Baltimore legal services IT"
        canonicalUrl="https://computerpros-baltimore.com/industries/law-firms"
      />

      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium bg-primary text-primary-foreground">
            Legal Industry Specialists
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            IT Support for Baltimore Law Firms
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Protect client data, stay compliant, and eliminate downtime with expert IT services tailored for legal practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-checklist">Take the Free IT Checklist</Link>
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
            <h2 className="section-header">Why Baltimore Law Firms Choose Computer Pros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique IT challenges facing legal practices in Baltimore.
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
            <h2 className="section-header">Our Services for Law Firms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions designed specifically for legal practices.
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

      {/* Case Study Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Success Story: Baltimore Law Firm</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we helped a local firm reduce costs and improve efficiency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.result}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Related Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore other IT solutions that complement your legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle>Pricing & Support Plans</CardTitle>
                <CardDescription>
                  Transparent, predictable IT costs designed for legal practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/services/pricing">View Plans</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle>Microsoft 365 for Law Firms</CardTitle>
                <CardDescription>
                  Secure collaboration tools with legal industry compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/services/microsoft-365">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <InlineCTABlock 
        headline="Ready to Secure Your Legal Practice?"
        subheadline="Take our free IT checklist to identify security gaps and efficiency opportunities."
        buttonText="Get the Free Checklist"
        buttonLink="/free-checklist"
      />
    </div>
  );
};

export default LawFirms;