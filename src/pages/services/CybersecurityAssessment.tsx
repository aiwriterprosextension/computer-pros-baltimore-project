import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Search, FileText, AlertTriangle, Users, Zap } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";

const CybersecurityAssessment = () => {
  const benefits = [
    "Comprehensive security evaluation by certified experts",
    "Identify vulnerabilities before they're exploited",
    "Compliance assessment for HIPAA, SOX, and other regulations",
    "Detailed remediation roadmap with priorities",
    "Risk scoring and business impact analysis",
    "Executive summary for leadership presentations",
    "Follow-up support and implementation guidance"
  ];

  const assessmentAreas = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Firewall configuration, intrusion detection, and network segmentation analysis"
    },
    {
      icon: Users,
      title: "Access Controls",
      description: "User permissions, multi-factor authentication, and identity management review"
    },
    {
      icon: FileText,
      title: "Data Protection",
      description: "Encryption, backup security, and data loss prevention evaluation"
    },
    {
      icon: Search,
      title: "Vulnerability Scanning",
      description: "Automated and manual testing to identify security weaknesses"
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "Monitoring capabilities and incident response preparedness"
    },
    {
      icon: Zap,
      title: "Security Policies",
      description: "Documentation review and employee security awareness assessment"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Discuss your business, compliance requirements, and security concerns"
    },
    {
      step: "2",
      title: "Asset Discovery",
      description: "Comprehensive inventory of all IT systems, devices, and data repositories"
    },
    {
      step: "3",
      title: "Technical Assessment",
      description: "Network scanning, penetration testing, and vulnerability analysis"
    },
    {
      step: "4",
      title: "Policy Review",
      description: "Evaluate existing security policies and procedures"
    },
    {
      step: "5",
      title: "Report Delivery",
      description: "Detailed findings report with prioritized recommendations"
    },
    {
      step: "6",
      title: "Implementation Planning",
      description: "Roadmap for addressing identified vulnerabilities and gaps"
    }
  ];

  const faqs = [
    {
      question: "How long does a cybersecurity assessment take?",
      answer: "Most assessments are completed within 1-2 weeks, depending on your organization's size and complexity. We work to minimize disruption to your daily operations."
    },
    {
      question: "Will the assessment disrupt our business operations?",
      answer: "No. Our assessment methods are designed to be non-disruptive. We coordinate with your team to ensure minimal impact on productivity."
    },
    {
      question: "What happens if you find critical vulnerabilities?",
      answer: "We immediately alert you to any critical security issues and provide emergency remediation guidance. Our team can assist with immediate mitigation steps."
    },
    {
      question: "Do you help implement the recommended security improvements?",
      answer: "Yes, we provide detailed implementation guidance and can handle the technical work through our managed services or project-based offerings."
    },
    {
      question: "How often should we have security assessments?",
      answer: "We recommend annual comprehensive assessments, with quarterly reviews for high-risk environments or after significant infrastructure changes."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cybersecurity Assessment Services in Baltimore | Computer Pros"
        description="Professional cybersecurity assessments for Baltimore businesses. Identify vulnerabilities, ensure compliance, and protect your data with expert security evaluations."
        keywords="cybersecurity assessment Baltimore, security audit Maryland, vulnerability assessment, compliance review Baltimore, penetration testing"
        canonicalUrl="https://computerpros-baltimore.com/services/cybersecurity-assessment"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Comprehensive Security Evaluation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Cybersecurity Assessment for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Identify security vulnerabilities and compliance gaps with our comprehensive cybersecurity assessment. 
              Protect your business with expert analysis and actionable recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton 
                text="Schedule Security Assessment" 
                variant="hero" 
                size="lg"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/cybersecurity">View Ongoing Security Services</Link>
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
                  Expert Cybersecurity Assessment Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In today's threat landscape, knowing your security posture is critical. Our comprehensive 
                  cybersecurity assessment identifies vulnerabilities, evaluates compliance status, and provides 
                  a clear roadmap for improving your organization's security.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Our certified security professionals use industry-standard tools and methodologies to evaluate 
                  every aspect of your IT infrastructure. From network security to employee awareness, we provide 
                  the insights you need to protect your Baltimore business.
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
                {assessmentAreas.slice(0, 4).map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <Card key={index} className="service-card">
                      <CardHeader className="text-center pb-4">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {area.description}
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

      {/* Assessment Areas Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">What We Assess</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive assessment covers all critical areas of your cybersecurity infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{area.description}</p>
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
            <h2 className="section-header">Our Assessment Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure comprehensive coverage and actionable results.
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
            <h2 className="section-header">Cybersecurity Assessment Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security evaluation at a fixed price with no hidden fees.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Complete Security Assessment</CardTitle>
                <div className="text-4xl font-bold text-primary">$2,500</div>
                <div className="text-sm text-muted-foreground">fixed price</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comprehensive security evaluation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Vulnerability scanning and penetration testing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Compliance gap analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Detailed findings report with remediation roadmap</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Executive summary and presentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">30 days of follow-up support</span>
                  </li>
                </ul>
                <CalendlyPopupButton 
                  text="Schedule Assessment" 
                  variant="default" 
                  className="w-full"
                />
              </CardContent>
            </Card>
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
            Protect Your Business Today
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Get a comprehensive assessment of your cybersecurity posture 
            and protect your Baltimore business with expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton 
              text="Schedule Security Assessment" 
              variant="hero" 
              size="lg"
            />
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/cybersecurity">Learn About Ongoing Security</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityAssessment;