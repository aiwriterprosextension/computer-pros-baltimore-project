import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Smartphone, Search, Calendar, MapPin, Image as ImageIcon, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const WebsiteDesign = () => {
  const features = [
    { icon: Rocket, title: "Fast 5–7 Day Launch", description: "Your new site goes live in under a week — not months." },
    { icon: Smartphone, title: "Mobile-First Design", description: "Built for the way your customers actually browse — on their phones." },
    { icon: Search, title: "Built-in SEO", description: "Local SEO baked in so Baltimore homeowners find you on Google." },
    { icon: Calendar, title: "Online Booking & Forms", description: "Quote requests and bookings sent straight to your inbox or phone." },
    { icon: MapPin, title: "Google Maps Integration", description: "Service area maps and Google Business Profile connection." },
    { icon: ImageIcon, title: "Before/After Project Galleries", description: "Show off your best work with built-in galleries that build trust." },
  ];

  const process = [
    { step: 1, title: "Discovery Call", description: "30-minute call to learn about your business, services, and customers." },
    { step: 2, title: "We Build It", description: "Our team designs and builds your site in 5–7 business days." },
    { step: 3, title: "You Review", description: "We walk you through everything and make any final tweaks." },
    { step: 4, title: "Launch Day", description: "We flip the switch and start sending customers your way." },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional Websites for Baltimore Home Service Businesses | Computer Pros"
        description="Mobile-first, SEO-ready websites for HVAC, plumbing, landscaping, and cleaning companies in Baltimore. Launched in 5–7 days. Starting at $697 setup + $149/mo."
        canonicalUrl="https://computerpros-baltimore.com/services/websites"
      />

      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Professional Websites for Baltimore Home Service Businesses
          </h1>
          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Mobile-first, SEO-ready websites built to turn visitors into booked jobs — launched in 5–7 days.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Your Free Website Quote</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">What's Built In</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Card key={i} className="service-card">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{f.title}</CardTitle>
                    <CardDescription className="text-base">{f.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="section-header mb-6">Simple, Honest Pricing</h2>
          <p className="text-2xl font-semibold text-primary mb-4">
            Starting at $697 setup + $149/mo care plan
          </p>
          <p className="text-muted-foreground mb-8">
            Setup fee covers your full website build. The monthly care plan keeps it hosted, updated, backed up, and supported.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Your Free Website Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">See All Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;
