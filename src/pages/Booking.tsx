import { CheckCircle, Shield, BarChart3, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import CalendlySection from "@/components/CalendlySection";

const Booking = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Risk Score Summary",
      description: "Complete assessment of your IT security and operational risks"
    },
    {
      icon: Shield,
      title: "Security Gaps Identified", 
      description: "Detailed analysis of vulnerabilities in your current setup"
    },
    {
      icon: Search,
      title: "Tailored IT Recommendations",
      description: "Customized action plan to improve your technology infrastructure"
    }
  ];

  const testimonials = [
    {
      quote: "Computer Pros helped us cut IT costs by 30%—without compromising security. Their assessment was eye-opening.",
      author: "Sarah M., Managing Partner",
      company: "Law Firm"
    },
    {
      quote: "We didn't realize how exposed we were until the checklist flagged our backup gaps. The free consult was a no-brainer.",
      author: "Dr. Patel, DDS", 
      company: "Dental Practice"
    },
    {
      quote: "Fast, local, and honest. Computer Pros gave us clarity and fixed issues our old provider missed.",
      author: "James R., Operations Director",
      company: "Property Management"
    }
  ];

  const faqs = [
    {
      question: "What happens in an assessment?",
      answer: "We'll review your IT setup, uncover risks, and show you how Computer Pros can help—no pressure, no pitch."
    },
    {
      question: "Is this really free?",
      answer: "Yes. We provide this to build trust with local SMBs."
    },
    {
      question: "How long does the assessment take?",
      answer: "Typically 15-30 minutes for the initial consultation, with a detailed follow-up report within 24-48 hours."
    },
    {
      question: "Can this be done remotely?",
      answer: "Yes, we offer both on-site and virtual assessments depending on your preference and needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Book Your Free IT Assessment - Computer Pros Baltimore"
        description="Schedule your complimentary IT security and infrastructure assessment. No pressure, no sales pitch—just clarity about your IT setup from Baltimore's trusted IT experts."
        keywords="free IT assessment Baltimore, computer security audit, IT consultation Maryland, business technology review"
        canonicalUrl="https://computerpros-baltimore.com/booking"
      />

      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Trusted by 100+ Baltimore Businesses
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Book Your Free IT Assessment
          </h1>
          
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            On-site or virtual — no pressure, no sales pitch, just clarity about your IT setup.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="mb-12"
            onClick={() => {
              document.getElementById('calendly-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Book Now
          </Button>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-secondary text-center mb-12">
            What You'll Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center service-card">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <div id="calendly-section">
        <CalendlySection />
      </div>

      {/* Trust Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/50f6da69-9572-4f7d-b745-a2e986b41576.png" 
              alt="Computer Pros - We Make IT Work" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <Badge variant="secondary" className="text-sm font-medium">
              Trusted by Baltimore SMBs
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-secondary">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-secondary text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;