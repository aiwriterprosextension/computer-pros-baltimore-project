import { CheckCircle, Mail, Eye, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const ChecklistThankYou = () => {
  const steps = [
    { icon: Mail, title: "Check your email", description: "Your custom AI Readiness Report will hit your inbox within 24 hours." },
    { icon: Eye, title: "Review your 3 quick wins", description: "We'll highlight three specific things you can implement this week." },
    { icon: Phone, title: "Book a free call to implement them", description: "20 minutes with our team to walk through the report and your next steps." },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Your AI Readiness Report Is On Its Way | Computer Pros Baltimore"
        description="Thanks for requesting your free AI audit. Your custom report is on its way — book a free strategy call to walk through it together."
        canonicalUrl="https://computerpros-baltimore.com/audit-thank-you"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <CheckCircle className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Your AI Readiness Report Is On Its Way!
          </h1>
          <p className="text-xl text-secondary-foreground/90 leading-relaxed">
            We'll email your custom report within 24 hours. In the meantime, book a free 20-minute call to walk through it together.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-header text-center mb-12">What happens next</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Skip the wait — book your free strategy call now</CardTitle>
              <CardDescription className="text-base">
                We'll preview your audit on the call and walk you through the top 3 wins for your trade.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/booking">Book My Free Strategy Call</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ChecklistThankYou;
