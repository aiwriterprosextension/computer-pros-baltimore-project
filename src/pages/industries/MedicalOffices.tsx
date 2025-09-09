import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Bot, Shield, Cloud, Calendar, CheckCircle, ArrowRight, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import FAQSection from "@/components/FAQSection";

const MedicalOffices = () => {
  const benefits = [
    "AI scheduling and patient intake automation",
    "HIPAA-grade security and monitoring",
    "Cloud access for EMR systems",
    "Automated appointment reminders",
    "Secure patient portal management",
    "Compliance monitoring and reporting"
  ];

  const services = [
    {
      icon: Bot,
      title: "AI Enablement",
      description: "Smart automation for patient scheduling and administrative tasks",
      href: "/services/ai-enablement"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "HIPAA-compliant security for patient data protection",
      href: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Secure cloud infrastructure for EMR and practice management",
      href: "/services/microsoft-365"
    }
  ];

  const aiSolutions = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered appointment optimization that reduces no-shows by 40%",
      features: ["Automated reminders", "Optimal time slot suggestions", "Wait list management"]
    },
    {
      icon: Bot,
      title: "Patient Intake",
      description: "Streamlined digital intake process that saves 20 minutes per patient",
      features: ["Digital forms", "Insurance verification", "Symptom pre-screening"]
    },
    {
      icon: Heart,
      title: "Care Coordination",
      description: "AI-assisted care management that improves patient outcomes",
      features: ["Follow-up automation", "Care plan reminders", "Provider notifications"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AI Tools for Baltimore Medical Offices | Computer Pros"
        description="Automate admin tasks, improve patient care, and stay compliant with AI-powered IT solutions for medical offices in Baltimore."
        keywords="Baltimore medical office IT, healthcare AI tools, medical practice automation, EMR support Baltimore, healthcare IT services"
        canonicalUrl="https://computerpros-baltimore.com/industries/medical-offices"
      />

      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium bg-primary text-primary-foreground">
            Healthcare AI Specialists
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Tools for Baltimore Medical Offices
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Automate admin tasks, improve patient care, and stay compliant with AI-powered IT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Book a Free Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
              <Link to="/services/ai-enablement">Explore AI Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">AI Solutions That Transform Patient Care</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reduce administrative burden and focus more time on what matters most—your patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Why Baltimore Medical Offices Choose Computer Pros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Healthcare-specific IT expertise with a focus on compliance and patient care.
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
              Find AI tools for patient intake and EMR automation → <Link to="/tools/ai-finder" className="text-primary hover:underline">AI Tool Finder</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Services for Medical Offices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions designed for healthcare practices.
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

      {/* ROI Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Measurable Impact on Your Practice</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the real benefits other Baltimore medical offices have experienced.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <p className="text-muted-foreground">Reduction in no-shows</p>
                </CardContent>
              </Card>
              
              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">20 min</div>
                  <p className="text-muted-foreground">Saved per patient intake</p>
                </CardContent>
              </Card>
              
              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <p className="text-muted-foreground">Increase in patient satisfaction</p>
                </CardContent>
              </Card>
              
              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15 hrs</div>
                  <p className="text-muted-foreground">Weekly admin time saved</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="section-header">HIPAA Compliance Built-In</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All our AI solutions are designed with healthcare compliance in mind.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Data Security</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>End-to-end encryption</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Secure data transmission</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Access controls and audit logs</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Compliance Monitoring</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Automated compliance reporting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Risk assessment alerts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Staff training tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Score CTA */}
      <InlineCTABlock 
        headline="Run a quick security check on your systems"
        subheadline="Ensure your medical practice is protected with our free cybersecurity assessment tool."
        buttonText="Get My Security Score"
        buttonLink="/tools/security-score"
      />

      {/* FAQ Section */}
      <FAQSection faqs={[
        {
          question: "Do you support EMR systems like eClinicalWorks or Kareo?",
          answer: "Yes, we provide secure cloud access, backup, and compliance support for leading EMR platforms."
        },
        {
          question: "Can you help with HIPAA risk assessments?",
          answer: "We conduct full HIPAA audits, provide remediation plans, and monitor ongoing compliance."
        },
        {
          question: "Do you offer AI tools for patient scheduling?",
          answer: "Yes. We implement AI-driven scheduling assistants and intake automation tools."
        },
        {
          question: "How do you secure telemedicine platforms?",
          answer: "We implement end-to-end encryption, secure video conferencing, and HIPAA-compliant telehealth solutions."
        },
        {
          question: "Can you help with medical device integration?",
          answer: "Absolutely. We securely connect medical devices to EMR systems while maintaining HIPAA compliance and data integrity."
        }
      ]} />
    </div>
  );
};

export default MedicalOffices;