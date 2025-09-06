import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Server, Zap, Cloud, Cog, Users, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-it-services.jpg";

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

  return (
    <div className="min-h-screen">
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
              <Link to="/contact">Book a 15-minute Consult</Link>
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

      {/* Resources Highlights */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Free IT Resources for Baltimore Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our free tools and guides to improve your business technology and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card">
              <CardHeader>
                <CardTitle>Office IT Cost Calculator</CardTitle>
                <CardDescription>
                  Calculate your current IT spending and identify potential savings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/resources">Try Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle>Phishing Quick Test</CardTitle>
                <CardDescription>
                  Test your ability to identify phishing emails and improve your security awareness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/resources">Take Test</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle>IT Security Checklist</CardTitle>
                <CardDescription>
                  Download our comprehensive security checklist for small businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="service" className="w-full" asChild>
                  <Link to="/resources">Download Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Home;