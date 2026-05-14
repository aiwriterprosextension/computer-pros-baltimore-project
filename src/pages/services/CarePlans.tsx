import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, HardDriveDownload, Shield, RefreshCw, BarChart3, MessageCircle, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const CarePlans = () => {
  const features = [
    { icon: Server, title: "Managed Hosting & SSL", description: "Fast, secure hosting tuned for home service business sites — SSL included." },
    { icon: HardDriveDownload, title: "Monthly Backups", description: "Off-site backups so your site is always recoverable, no matter what." },
    { icon: Shield, title: "Security Monitoring", description: "Malware scanning and firewall protection running 24/7." },
    { icon: RefreshCw, title: "Plugin & Software Updates", description: "WordPress core, plugins, and themes kept current so nothing breaks." },
    { icon: BarChart3, title: "Monthly Performance Report", description: "See your traffic, leads, page speed, and rankings in plain English." },
    { icon: MessageCircle, title: "Helpdesk Support via Text/Email", description: "Quick fixes and content edits — no support tickets, just text us." },
  ];

  const tiers = [
    { name: "Starter", price: "$149/mo", description: "Hosting, backups, updates, and support for your Starter site." },
    { name: "Pro", price: "$299/mo", description: "Everything in Starter, plus AI automation and 3 hrs/mo of content updates.", featured: true },
    { name: "Growth", price: "$499/mo", description: "Pro plus monthly blog content, social posts, and a quarterly strategy call." },
  ];

  const painPoints = [
    { stat: "$3,000+", label: "Average cost to fix a hacked WordPress site." },
    { stat: "53%", label: "of mobile visitors leave a site that takes more than 3 seconds to load." },
    { stat: "#1", label: "Outdated plugins are the leading entry point for site malware." },
  ];

  const faqs = [
    { question: "Can I host the site myself?", answer: "You can — but you'll be responsible for hosting, SSL, backups, security, and updates. Most home service business owners would rather be on a job than troubleshooting WordPress at midnight. That's exactly what care plans solve." },
    { question: "What if I already have hosting?", answer: "We can either migrate your site onto our managed hosting (recommended) or work with your existing host on a custom plan. Either way you get the same updates, monitoring, and support." },
    { question: "Do I need a care plan if I have a brand-new site?", answer: "Yes. A new site is the most important time to start — it's when search rankings are forming, plugins start needing updates, and one missed security patch can undo everything." },
    { question: "Can I cancel anytime?", answer: "Yes. All care plans are month-to-month. We earn your business every month." },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Monthly Website Care Plans for Baltimore Home Service Businesses | Computer Pros"
        description="Hosting, backups, security, updates, and friendly support — all in one flat monthly fee. Built for HVAC, plumbing, landscaping, and cleaning companies in Baltimore."
        canonicalUrl="https://computerpros-baltimore.com/services/care-plans"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Monthly Website Care Plans for Baltimore Home Service Businesses
          </h1>
          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Your website needs a home. We host it, secure it, update it, and keep it running — for one flat monthly fee.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start Your Care Plan Today</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">What's Included in Every Care Plan</h2>
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

      {/* Tiers */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-header">Care Plan Tiers</h2>
            <p className="text-lg text-muted-foreground">Pricing matches our website plans — pick the tier that fits your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((t, i) => (
              <Card key={i} className={`service-card ${t.featured ? 'border-primary shadow-[var(--shadow-medium)]' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{t.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-3">{t.price}</div>
                  <CardDescription className="text-base mt-3">{t.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Full Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why you need a care plan */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-header">Why You Need a Care Plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {painPoints.map((p, i) => (
              <Card key={i} className="border-l-4 border-l-[#E01010]">
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="h-10 w-10 text-[#E01010] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-[#E01010] mb-2">{p.stat}</div>
                  <p className="text-muted-foreground">{p.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Stop Worrying About Your Website?
          </h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start Your Care Plan Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CarePlans;
