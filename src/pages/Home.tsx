import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Server, Zap, Cloud, Cog, Users, ArrowRight, CheckCircle, Calculator, ShieldCheck, ClipboardCheck, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-it-services.jpg";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Home = () => {
  const services = [
    {
      icon: Server,
      title: "Managed IT Services",
      description: "Complete IT infrastructure management and 24/7 monitoring for Baltimore businesses.",
      href: "/services/managed-services",
      features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat protection and compliance solutions to keep your business secure.",
      href: "/services/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Compliance Support"]
    },
    {
      icon: Cloud,
      title: "Microsoft 365 & Google Workspace",
      description: "Cloud productivity solutions optimized for professional service firms.",
      href: "/services/microsoft-365",
      features: ["Setup & Migration", "User Training", "Integration Support"]
    },
    {
      icon: Zap,
      title: "AI Enablement",
      description: "Implement AI tools to automate workflows and boost productivity.",
      href: "/services/ai-enablement",
      features: ["AI Strategy", "Tool Implementation", "Staff Training"]
    },
    {
      icon: Cog,
      title: "Projects & Migrations",
      description: "Expert project management for IT upgrades and system migrations.",
      href: "/services/projects-migrations",
      features: ["System Upgrades", "Data Migration", "Project Management"]
    },
    {
      icon: Users,
      title: "Support Plans & Pricing",
      description: "Flexible support plans designed for small professional firms in Baltimore.",
      href: "/services/pricing",
      features: ["Flexible Plans", "Transparent Pricing", "Local Support"]
    },
  ];

  const blogPosts = [
    {
      title: "Cybersecurity Tips for Small Law Firms in Baltimore",
      excerpt: "Essential security practices to protect sensitive client data and maintain compliance.",
      category: "Cybersecurity",
      readTime: "5 min read",
      href: "/blog/cybersecurity-tips-law-firms-baltimore"
    },
    {
      title: "AI Tools for Medical Practices in Baltimore",
      excerpt: "How AI automation can streamline patient care and reduce administrative overhead.",
      category: "AI in Business",
      readTime: "7 min read",
      href: "/blog/ai-tools-medical-practices-baltimore"
    }
  ];

  const benefits = [
    "Local Baltimore IT experts who understand your business",
    "24/7 monitoring and rapid response times",
    "Compliance expertise for regulated industries",
    "Predictable monthly IT costs with no surprises",
    "Scalable solutions that grow with your business"
  ];

  const industries = [
    {
      icon: Briefcase,
      title: "Law Firms",
      description: "Secure IT and compliance support for legal practices",
      href: "/industries/law-firms"
    },
    {
      icon: Shield,
      title: "Dentists",
      description: "HIPAA-grade cybersecurity for dental offices",
      href: "/industries/dental-practices"
    },
    {
      icon: Server,
      title: "Property Managers",
      description: "Smart IT and automation for tenant operations",
      href: "/industries/property-managers"
    },
    {
      icon: Cog,
      title: "Medical Offices",
      description: "AI-powered scheduling and EMR support",
      href: "/industries/medical-offices"
    },
    {
      icon: Calculator,
      title: "Accountants",
      description: "Cloud IT and fraud detection for financial firms",
      href: "/industries/accountants"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Computer Pros - Baltimore Managed IT, Cybersecurity & AI Services"
        description="Professional managed IT services, cybersecurity, and AI enablement for small businesses in Baltimore. 24/7 monitoring, expert support, and transparent pricing."
        keywords="Baltimore IT services, managed IT Baltimore, cybersecurity Baltimore, AI business automation, Microsoft 365 Baltimore, IT support Maryland"
        canonicalUrl="https://computerpros-baltimore.com"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Trusted by 100+ Baltimore Businesses
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Baltimore Managed IT, Cybersecurity, and AI Services
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Reliable technology support for small professional firms in Baltimore. 
            We handle your IT so you can focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-checklist">Take the Free IT Checklist</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Our Plans</Link>
            </Button>
          </div>

          {/* Benefits List */}
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Comprehensive IT Solutions for Baltimore Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From cybersecurity to AI enablement, we provide the technology expertise 
              your professional firm needs to thrive in the digital age.
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
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* AI Enablement Feature */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-header">AI-Powered Productivity</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Implement AI tools to automate workflows and boost productivity.
          </p>
          <div className="bg-accent/50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-primary" />
            </div>
            <p className="text-2xl font-semibold text-secondary mb-4">
              Save 10+ hours/month with smart automation tools
            </p>
            <Button variant="hero" asChild>
              <Link to="/services/ai-enablement">Learn About AI Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized IT solutions for Baltimore's professional service firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="service-card text-center">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                    <CardDescription className="text-base">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="service" className="w-full" asChild>
                      <Link to={industry.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Free Tools for Baltimore Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our free tools and guides to improve your business technology and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card">
              <CardHeader>
                <Calculator className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Office IT Cost Calculator</CardTitle>
                <CardDescription>
                  Calculate your current IT spending and identify potential savings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/tools/it-cost">Try Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Phishing Quick Test</CardTitle>
                <CardDescription>
                  Test your ability to identify phishing emails and improve your security awareness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/tools/phishing-test">Take Test</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <ClipboardCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle>IT Security Checklist</CardTitle>
                <CardDescription>
                  See if your business is at risk with our comprehensive checklist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/free-checklist">Get Checklist</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <InlineCTABlock />

      {/* Blog Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Latest IT Insights for Baltimore Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest cybersecurity tips, AI trends, and IT best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="blog-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="service" asChild>
                    <Link to={post.href}>Read Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
};

export default Home;