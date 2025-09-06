import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Clock, TrendingUp, Users, Cog, CheckCircle, ArrowRight } from "lucide-react";
import aiImage from "@/assets/ai-enablement-service.jpg";

const AIEnablement = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Create a comprehensive AI roadmap tailored to your business goals and industry requirements."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Identify and automate repetitive tasks to free up your team for higher-value work."
    },
    {
      icon: Users,
      title: "AI Tool Implementation",
      description: "Deploy and configure AI tools that integrate seamlessly with your existing workflows."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track ROI and measure the impact of AI implementation on your business operations."
    },
    {
      icon: Clock,
      title: "Staff Training & Support",
      description: "Comprehensive training programs to help your team leverage AI tools effectively."
    },
    {
      icon: Cog,
      title: "Ongoing Optimization",
      description: "Continuous monitoring and optimization of your AI systems for maximum efficiency."
    }
  ];

  const aiTools = [
    {
      category: "Legal Firms",
      tools: [
        "Document review and analysis automation",
        "Contract generation and management",
        "Legal research assistance",
        "Case management optimization"
      ]
    },
    {
      category: "Medical Practices",
      tools: [
        "Patient scheduling and reminders",
        "Medical record transcription",
        "Insurance claim processing",
        "Diagnostic assistance tools"
      ]
    },
    {
      category: "Accounting Firms",
      tools: [
        "Automated bookkeeping and data entry",
        "Tax preparation assistance",
        "Financial analysis and reporting",
        "Client communication automation"
      ]
    }
  ];

  const benefits = [
    "Reduce manual tasks by up to 70%",
    "Improve accuracy and consistency",
    "Increase team productivity by 40%",
    "Lower operational costs",
    "Enhance client service quality",
    "Stay competitive in your industry",
    "Scale operations without adding staff"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Transform Your Business
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                AI Enablement for Baltimore Businesses
              </h1>
              <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to automate workflows, reduce costs, 
                and boost productivity. We make AI accessible for small professional firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start AI Transformation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/resources">AI Readiness Assessment</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiImage} 
                alt="AI automation in business" 
                className="rounded-lg shadow-[var(--shadow-strong)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific AI Tools */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">AI Solutions by Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in implementing AI tools that are specifically designed for professional service firms in Baltimore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiTools.map((industry, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">{industry.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {industry.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-start space-x-3">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="service" className="w-full mt-6" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
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
            <h2 className="section-header">Comprehensive AI Implementation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we guide you through every step of your AI transformation journey.
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

      {/* Benefits & ROI Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-8">The Business Impact of AI</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Baltimore businesses that implement AI solutions see significant improvements in efficiency, 
                accuracy, and profitability. Here's what you can expect:
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
                <CardTitle className="text-2xl text-center">AI Implementation Timeline</CardTitle>
                <CardDescription className="text-center text-base">
                  Our proven approach gets you results in weeks, not months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Discovery & Assessment</h4>
                      <p className="text-sm text-muted-foreground">Analyze your workflows and identify AI opportunities</p>
                      <span className="text-xs text-primary font-medium">Week 1</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Tool Selection & Setup</h4>
                      <p className="text-sm text-muted-foreground">Choose and configure the right AI tools for your needs</p>
                      <span className="text-xs text-primary font-medium">Weeks 2-3</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Training & Integration</h4>
                      <p className="text-sm text-muted-foreground">Train your team and integrate AI into workflows</p>
                      <span className="text-xs text-primary font-medium">Weeks 4-5</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Go-Live & Optimization</h4>
                      <p className="text-sm text-muted-foreground">Launch and continuously improve your AI systems</p>
                      <span className="text-xs text-primary font-medium">Week 6+</span>
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
            Ready to Embrace the Future of Business?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't let your competition get ahead. Start your AI transformation today and see immediate 
            improvements in efficiency and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Begin AI Journey</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">Read AI Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEnablement;