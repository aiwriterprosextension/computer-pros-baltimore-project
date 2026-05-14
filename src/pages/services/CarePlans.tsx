import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, RefreshCw, Shield, LifeBuoy, BarChart3, HardDriveDownload, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const CarePlans = () => {
  const features = [
    { icon: Server, title: "Fast, Secure Hosting", description: "Your site lives on managed hosting tuned for speed and uptime." },
    { icon: RefreshCw, title: "Updates & Patches", description: "WordPress, plugins, and themes kept current so nothing breaks." },
    { icon: HardDriveDownload, title: "Daily Backups", description: "Off-site daily backups so your site can always be restored." },
    { icon: Shield, title: "Security Monitoring", description: "Malware scanning, firewall, and SSL — all included." },
    { icon: LifeBuoy, title: "Friendly Support", description: "Email or call us for content tweaks and quick fixes — no ticket runaround." },
    { icon: BarChart3, title: "Monthly Reports", description: "See traffic, leads, and rankings in a simple monthly recap." },
  ];

  const included = [
    "Managed WordPress hosting & SSL",
    "Daily automated backups",
    "Plugin & theme updates",
    "Uptime monitoring",
    "Malware scanning & firewall",
    "Up to 1 hour/mo of content edits",
    "Local Baltimore-based support",
    "Month-to-month — cancel anytime",
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Monthly Website Care Plans for Baltimore Home Service Businesses | Computer Pros"
        description="Hosting, updates, backups, security, and friendly support — all in one predictable monthly plan for HVAC, plumbing, landscaping, and cleaning companies."
        canonicalUrl="https://computerpros-baltimore.com/services/care-plans"
      />

      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Monthly Care Plans That Keep Your Site Running
          </h1>
          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Hosting, updates, backups, security, and friendly support — rolled into one simple monthly bill.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/services/pricing">See Plan Pricing</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">What's Covered Every Month</h2>
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

      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-header text-center mb-10">Every Care Plan Includes</h2>
          <ul className="space-y-3 bg-background p-8 rounded-lg shadow-sm">
            {included.map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Talk to Us About a Care Plan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarePlans;
