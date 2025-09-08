import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Brain, Zap, Users, BarChart, FileText, MessageSquare } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";

const AIImplementation = () => {
  const benefits = [
    "Automate repetitive tasks and save hours of manual work",
    "Improve decision-making with AI-powered insights",
    "Enhance customer service with intelligent chatbots",
    "Streamline document processing and data entry",
    "Increase productivity while reducing operational costs",
    "Custom AI solutions tailored to your industry",
    "Comprehensive staff training and ongoing support"
  ];

  const aiSolutions = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent customer service and internal support automation"
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Automated document analysis, extraction, and classification"
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "AI-powered insights for business forecasting and planning"
    },
    {
      icon: Users,
      title: "CRM Automation",
      description: "Intelligent lead scoring and customer relationship management"
    },
    {
      icon: Brain,
      title: "Process Automation",
      description: "Workflow automation using AI to handle complex decision-making"
    },
    {
      icon: Zap,
      title: "Productivity Tools",
      description: "AI-enhanced tools for writing, scheduling, and task management"
    }
  ];

  const process = [
    {
      step: "1",
      title: "AI Readiness Assessment",
      description: "Evaluate your current processes and identify AI automation opportunities"
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create a custom AI implementation roadmap aligned with business goals"
    },
    {
      step: "3",
      title: "Solution Design",
      description: "Design and configure AI tools specific to your industry and workflows"
    },
    {
      step: "4",
      title: "Pilot Implementation",
      description: "Deploy AI solutions in a controlled environment for testing and refinement"
    },
    {
      step: "5",
      title: "Full Deployment",
      description: "Roll out AI tools across your organization with comprehensive training"
    },
    {
      step: "6",
      title: "Optimization",
      description: "Monitor performance and continuously optimize AI solutions for maximum ROI"
    }
  ];

  const industries = [
    {
      name: "Legal Firms",
      description: "Document review, contract analysis, and client communication automation",
      roi: "Save 15-20 hours per week on document processing"
    },
    {
      name: "Medical Practices",
      description: "Patient scheduling, insurance verification, and medical record management",
      roi: "Reduce administrative overhead by 30-40%"
    },
    {
      name: "Accounting Firms",
      description: "Invoice processing, expense categorization, and client reporting automation",
      roi: "Increase processing speed by 50-60%"
    },
    {
      name: "Professional Services",
      description: "Proposal generation, project management, and client communication",
      roi: "Improve response times by 40-50%"
    }
  ];

  const faqs = [
    {
      question: "What types of AI solutions do you implement?",
      answer: "We implement a wide range of AI solutions including chatbots, document processing automation, predictive analytics, CRM automation, and workflow optimization tools tailored to your specific industry."
    },
    {
      question: "How long does an AI implementation project take?",
      answer: "Most projects are completed within 4-8 weeks, depending on complexity. We start with a pilot implementation to demonstrate value before full deployment."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes, comprehensive staff training is included. We ensure your team is comfortable using the new AI tools and can maximize their potential for your business."
    },
    {
      question: "What kind of ROI can we expect from AI implementation?",
      answer: "Most clients see significant time savings within the first month, with typical ROI ranging from 200-400% within the first year through automation and efficiency gains."
    },
    {
      question: "How do you ensure data security with AI tools?",
      answer: "We only work with enterprise-grade AI platforms that meet strict security standards. All implementations include proper data encryption, access controls, and compliance safeguards."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AI Implementation Project Services in Baltimore | Computer Pros"
        description="Custom AI implementation projects for Baltimore businesses. Automate workflows, improve efficiency, and reduce costs with expert AI solutions and training."
        keywords="AI implementation Baltimore, business automation, AI chatbots, process automation Baltimore, artificial intelligence consulting"
        canonicalUrl="https://computerpros-baltimore.com/services/ai-implementation"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              AI Business Automation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              AI Implementation Project for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Transform your business operations with custom AI solutions. Automate workflows, 
              improve efficiency, and reduce costs with expert AI implementation and training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton 
                text="Schedule AI Consultation" 
                variant="hero" 
                size="lg"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/ai-enablement">View AI Enablement Services</Link>
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
                  Custom AI Implementation Projects
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Artificial Intelligence isn't just for tech companies anymore. Our AI implementation 
                  projects help Baltimore businesses automate routine tasks, improve decision-making, 
                  and dramatically increase productivity across all departments.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  From intelligent chatbots to document processing automation, we design and implement 
                  AI solutions that deliver measurable results. Our approach focuses on practical 
                  applications that provide immediate value and long-term competitive advantages.
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
                {aiSolutions.slice(0, 4).map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <Card key={index} className="service-card">
                      <CardHeader className="text-center pb-4">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {solution.description}
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

      {/* AI Solutions Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">AI Solutions We Implement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in practical AI implementations that deliver immediate business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{solution.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">AI Solutions by Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how AI implementation delivers measurable results across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">{industry.roi}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our AI Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation with measurable results.
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">AI Implementation Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom AI solutions with transparent project-based pricing.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Custom AI Implementation</CardTitle>
                <div className="text-4xl font-bold text-primary">Starting at $7,500</div>
                <div className="text-sm text-muted-foreground">per project</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comprehensive AI readiness assessment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom AI solution design and development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Pilot implementation and testing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Full deployment and integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comprehensive staff training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">60 days post-implementation support</span>
                  </li>
                </ul>
                <CalendlyPopupButton 
                  text="Start AI Project" 
                  variant="default" 
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/30">
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our AI experts design and implement custom automation solutions that deliver 
            measurable results for your Baltimore business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton 
              text="Schedule AI Consultation" 
              variant="hero" 
              size="lg"
            />
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/ai-enablement">Learn About AI Strategy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIImplementation;