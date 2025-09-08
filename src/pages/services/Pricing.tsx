import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Star, Users, Building, Briefcase } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      icon: Users,
      description: "Perfect for small practices and startups",
      price: "$149",
      period: "per user/month",
      badge: null,
      features: [
        "24/7 monitoring and alerting",
        "Help desk support (business hours)",
        "Basic security management",
        "Monthly maintenance and updates",
        "Email and phone support",
        "Remote troubleshooting"
      ],
      notIncluded: [
        "After-hours emergency support",
        "Advanced cybersecurity features",
        "On-site support visits",
        "Compliance reporting"
      ],
      userRange: "1-10 users",
      ideal: "Small professional practices"
    },
    {
      name: "Professional", 
      icon: Building,
      description: "Comprehensive IT management for growing businesses",
      price: "$199",
      period: "per user/month",
      badge: "Most Popular",
      features: [
        "Everything in Essential, plus:",
        "24/7 emergency support",
        "Advanced threat protection",
        "Monthly on-site visits",
        "Compliance assistance",
        "Priority help desk support",
        "Security awareness training",
        "Backup and disaster recovery",
        "Performance optimization"
      ],
      notIncluded: [
        "Dedicated account manager",
        "Custom reporting",
        "Advanced compliance features"
      ],
      userRange: "11-50 users",
      ideal: "Established professional firms"
    },
    {
      name: "Enterprise",
      icon: Briefcase,
      description: "Complete IT solutions for larger organizations",
      price: "Custom",
      period: "pricing",
      badge: "Premium",
      features: [
        "Everything in Professional, plus:",
        "Dedicated account manager",
        "Custom SLA agreements",
        "Advanced compliance reporting",
        "Strategic IT planning",
        "Unlimited on-site support",
        "Executive-level reporting",
        "Budget planning assistance",
        "Technology roadmap development"
      ],
      notIncluded: [],
      userRange: "50+ users",
      ideal: "Large enterprises and multi-location firms"
    }
  ];

  const addOnServices = [
    {
      name: "Microsoft 365 Setup & Migration",
      price: "$150 per user",
      description: "Complete setup and migration to Microsoft 365"
    },
    {
      name: "Cybersecurity Assessment",
      price: "$2,500",
      description: "Comprehensive security evaluation and recommendations"
    },
    {
      name: "Network Infrastructure Upgrade",
      price: "Starting at $5,000",
      description: "WiFi, firewall, and network equipment upgrades"
    },
    {
      name: "AI Implementation Project",
      price: "Starting at $7,500",
      description: "Custom AI tool deployment and training"
    },
    {
      name: "Emergency On-Site Support",
      price: "$175 per hour",
      description: "Same-day on-site support for critical issues"
    },
    {
      name: "Data Backup & Recovery Setup",
      price: "$500 setup + $50/month",
      description: "Automated backup solution with monthly monitoring"
    }
  ];

  const faqs = [
    {
      question: "What's included in the monthly per-user fee?",
      answer: "The per-user fee covers all software licensing, monitoring, support, and maintenance for that user's devices and accounts. This includes their computer, mobile device access, email, and cloud storage."
    },
    {
      question: "Are there any setup fees?",
      answer: "Setup fees vary depending on your current IT infrastructure and requirements. We provide a detailed quote after our free assessment that includes any one-time setup costs."
    },
    {
      question: "Can I change plans as my business grows?",
      answer: "Absolutely! Our plans are designed to scale with your business. You can upgrade or adjust your plan at any time with 30 days' notice."
    },
    {
      question: "What happens if I need support outside business hours?",
      answer: "Professional and Enterprise plans include 24/7 emergency support. Essential plan customers can upgrade to after-hours support for an additional fee."
    },
    {
      question: "Do you work with businesses outside Baltimore?",
      answer: "While we specialize in the Baltimore metro area, we can provide remote support services to businesses throughout Maryland and the Mid-Atlantic region."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transparent IT Support Pricing for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              No hidden fees, no surprises. Choose the plan that fits your business needs and budget. 
              All plans include our local Baltimore support and expertise.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Choose Your Support Plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All plans include proactive monitoring, regular maintenance, and local Baltimore support. 
              Scale up or down as your business needs change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className={`service-card relative ${plan.badge === 'Most Popular' ? 'border-primary shadow-[var(--shadow-medium)]' : ''}`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="default" className="px-4 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.period}</div>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <div className="font-medium">{plan.userRange}</div>
                      <div className="text-muted-foreground">{plan.ideal}</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 opacity-50">
                          <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant={plan.badge === 'Most Popular' ? 'default' : 'service'} 
                      className="w-full" 
                      asChild
                    >
                      <Link to="/contact">
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? We work with businesses of all sizes.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Additional Services & Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One-time projects and additional services to enhance your IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="service" size="sm" asChild>
                    <Link to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>Learn More</Link>
                  </Button>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your IT needs and get a custom quote 
            tailored to your Baltimore business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/resources">Calculate Your IT Costs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;