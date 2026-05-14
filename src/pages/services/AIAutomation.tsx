import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Star, Mail, BellRing, FileText, Bot } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const AIAutomation = () => {
  const services = [
    { icon: MessageSquare, title: "AI Chat Widget", description: "Answers FAQs and captures leads on your website 24/7 — even when you're under a sink." },
    { icon: Star, title: "Automated Review Requests", description: "Texts customers after jobs asking for a Google review. More reviews, more calls." },
    { icon: Mail, title: "Lead Follow-Up Sequences", description: "Automatically follows up with quote requests via email and text so no lead goes cold." },
    { icon: BellRing, title: "Appointment Reminders", description: "Reduces no-shows with automated reminder texts before every appointment." },
    { icon: FileText, title: "AI Content Generator", description: "Creates social posts and blog content for your business — without the writer's block." },
    { icon: Bot, title: "Custom Business GPT", description: "An AI trained on your services, pricing, and FAQs — ready to answer customers like you would." },
  ];

  const stats = [
    { value: "47", label: "new Google reviews in 2 months" },
    { value: "3x", label: "more overnight bookings" },
    { value: "0", label: "missed follow-ups" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Automation for Home Service Businesses | Computer Pros Baltimore"
        description="Put your lead follow-ups, booking confirmations, and review requests on autopilot. AI automation built for HVAC, plumbing, landscaping, and cleaning companies in Baltimore."
        canonicalUrl="https://computerpros-baltimore.com/services/ai-automation"
      />

      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            AI Automation for Home Service Businesses
          </h1>
          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Put your lead follow-ups, booking confirmations, and review requests on autopilot — so you can stay on the job.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/free-audit">Get My Free AI Audit</Link>
          </Button>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">What We Automate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="service-card">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                    <CardDescription className="text-base">{s.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real results */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-header">Real Results for Baltimore Trades</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center bg-background rounded-lg p-8 shadow-sm">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a free AI audit. We'll show you exactly where leads are slipping through and what to automate first.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/free-audit">Get My Free AI Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
