import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Rocket, Bot, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Site",
      icon: Rocket,
      description: "Get online fast with a clean, professional site.",
      setup: "$697",
      monthly: "$149",
      badge: null,
      features: [
        "5-page WordPress site",
        "Mobile-first design",
        "Hosting & SSL",
        "Monthly backups & updates",
        "Contact / quote form",
        "Google Business Profile setup",
      ],
    },
    {
      name: "AI-Powered Pro",
      icon: Bot,
      description: "Everything in Starter, plus AI to capture and follow up with every lead.",
      setup: "$1,297",
      monthly: "$299",
      badge: "Most Popular",
      features: [
        "Everything in Starter, plus:",
        "10-page custom site",
        "AI chat widget (24/7 lead capture)",
        "Automated review request texts",
        "Lead follow-up email sequence",
        "Monthly SEO & traffic report",
        "3 hrs/mo content updates",
        "Online booking integration",
      ],
    },
    {
      name: "Growth Suite",
      icon: TrendingUp,
      description: "Full marketing engine — content, social, and strategy on autopilot.",
      setup: "$2,497",
      monthly: "$499",
      badge: "Premium",
      features: [
        "Everything in Pro, plus:",
        "Monthly AI-written blog post",
        "4 social posts/week",
        "Email newsletter automation",
        "Competitor ranking tracking",
        "Quarterly strategy call",
        "Priority support",
      ],
    },
  ];

  const comparisonRows = [
    { feature: "Custom WordPress site", starter: "5 pages", pro: "10 pages", growth: "10+ pages" },
    { feature: "Mobile-first design", starter: true, pro: true, growth: true },
    { feature: "Hosting, SSL & backups", starter: true, pro: true, growth: true },
    { feature: "Quote / contact forms", starter: true, pro: true, growth: true },
    { feature: "Google Business Profile setup", starter: true, pro: true, growth: true },
    { feature: "AI chat widget (24/7)", starter: false, pro: true, growth: true },
    { feature: "Automated review request texts", starter: false, pro: true, growth: true },
    { feature: "Lead follow-up email sequence", starter: false, pro: true, growth: true },
    { feature: "Online booking integration", starter: false, pro: true, growth: true },
    { feature: "Monthly content updates", starter: "—", pro: "3 hrs", growth: "Unlimited (fair use)" },
    { feature: "Monthly AI-written blog post", starter: false, pro: false, growth: true },
    { feature: "4 social posts / week", starter: false, pro: false, growth: true },
    { feature: "Email newsletter automation", starter: false, pro: false, growth: true },
    { feature: "Competitor ranking tracking", starter: false, pro: false, growth: true },
    { feature: "Quarterly strategy call", starter: false, pro: false, growth: true },
    { feature: "Priority support", starter: false, pro: false, growth: true },
  ];

  const renderCell = (val: boolean | string) => {
    if (val === true) return <CheckCircle className="h-5 w-5 text-primary mx-auto" />;
    if (val === false) return <span className="text-muted-foreground">—</span>;
    return <span className="text-sm">{val}</span>;
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website & AI Pricing for Baltimore Home Service Businesses | Computer Pros"
        description="Simple, honest pricing for websites and AI automation. Starter Site from $697 setup + $149/mo. Built for HVAC, plumbing, landscaping, and cleaning companies."
        canonicalUrl="https://computerpros-baltimore.com/services/pricing"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Simple Pricing for Websites & AI Automation
          </h1>
          <p className="text-xl text-secondary-foreground/90 mb-4 leading-relaxed">
            One setup fee, one predictable monthly bill. Built for Baltimore home service businesses.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isPopular = plan.badge === "Most Popular";
              return (
                <Card key={index} className={`service-card relative ${isPopular ? 'border-primary shadow-[var(--shadow-medium)]' : ''}`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="default" className="px-4 py-1">{plan.badge}</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base mb-4">{plan.description}</CardDescription>

                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{plan.setup}</div>
                      <div className="text-sm text-muted-foreground">setup</div>
                      <div className="text-2xl font-bold text-primary mt-3">+ {plan.monthly}</div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      Setup fee covers your full website build.
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant={isPopular ? 'default' : 'service'} className="w-full" asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="section-header text-center mb-12">Compare All Plans</h2>
          <div className="overflow-x-auto max-w-5xl mx-auto bg-background rounded-lg shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold text-primary">Pro</th>
                  <th className="text-center p-4 font-semibold">Growth</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="p-4 text-sm">{row.feature}</td>
                    <td className="p-4 text-center">{renderCell(row.starter)}</td>
                    <td className="p-4 text-center">{renderCell(row.pro)}</td>
                    <td className="p-4 text-center">{renderCell(row.growth)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Not Sure Which Plan Is Right?</h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a quick call. We'll figure out what fits your business — no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Talk to Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/free-audit">Free AI Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
