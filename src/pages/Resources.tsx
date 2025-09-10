import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Download, FileText, CheckCircle, AlertTriangle, Brain, MonitorSpeaker, ShieldCheck } from "lucide-react";

const Resources = () => {
  const toolCards = [
    {
      icon: Calculator,
      title: "Office IT Cost Calculator",
      description: "Calculate your current IT spending and identify potential savings",
      link: "/tools/it-cost"
    },
    {
      icon: Shield,
      title: "Phishing Quick Test",
      description: "Test your ability to spot phishing emails and improve security awareness",
      link: "/tools/phishing-test"
    },
    {
      icon: Brain,
      title: "AI Tool Finder for SMBs",
      description: "Discover AI tools that fit your business goals and budget",
      link: "/tools/ai-finder",
      badge: "Tool of the Month"
    },
    {
      icon: Shield,
      title: "Cybersecurity Risk Score Calculator",
      description: "Get a quick snapshot of your business's security posture",
      link: "/tools/security-score"
    },
    {
      icon: MonitorSpeaker,
      title: "Remote Work Security Assessment",
      description: "Evaluate the security readiness of your remote or hybrid workforce",
      link: "/tools/remote-work-assessment"
    },
    {
      icon: ShieldCheck,
      title: "Compliance Gap Analyzer",
      description: "Identify gaps in your business's compliance with key regulations like HIPAA or GDPR",
      link: "/tools/compliance-gap-analyzer"
    }
  ];

  const downloadables = [
    {
      title: "IT Security Checklist for Small Businesses",
      description: "A comprehensive 25-point checklist to secure your business technology.",
      type: "PDF Guide",
      pages: "8 pages"
    },
    {
      title: "Remote Work Security Best Practices",
      description: "Essential security guidelines for employees working from home.",
      type: "PDF Guide", 
      pages: "12 pages"
    },
    {
      title: "HIPAA Compliance IT Requirements",
      description: "Complete guide to HIPAA-compliant technology for healthcare practices.",
      type: "PDF Guide",
      pages: "16 pages"
    },
    {
      title: "Business Continuity Planning Template",
      description: "Ready-to-use template for creating your business continuity plan.",
      type: "Word Template",
      pages: "6 pages"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Free IT Resources for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Access our free tools, calculators, and guides to improve your business technology 
              and security posture. No registration required.
            </p>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Free Tools for Baltimore Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Use our free tools to assess your current IT situation and identify areas for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCards.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className="service-card relative">
                  {tool.badge && (
                    <Badge className="absolute -top-2 -right-2 bg-[#FFD700] text-black text-xs font-semibold px-2 py-1 rounded">
                      {tool.badge}
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="service" className="w-full" asChild>
                      <Link to={tool.link}>Try Tool</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Free Downloadable Guides</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional IT guides and templates to help secure and optimize your business technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadables.map((resource, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{resource.type}</Badge>
                        <span className="text-sm text-muted-foreground">{resource.pages}</span>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="service" className="w-full" asChild>
                    <Link to="/contact">
                      <Download className="h-4 w-4 mr-2" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Quick Security Tips</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="service-card border-primary/20 bg-primary/5">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg text-primary">Do This</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Use unique passwords for each account</li>
                    <li>• Enable two-factor authentication</li>
                    <li>• Keep software updated automatically</li>
                    <li>• Backup data regularly to the cloud</li>
                    <li>• Train staff on phishing awareness</li>
                    <li>• Use a business-grade antivirus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle className="text-lg text-destructive">Avoid This</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Using personal email for business</li>
                    <li>• Sharing passwords between employees</li>
                    <li>• Clicking links in unexpected emails</li>
                    <li>• Using public WiFi for sensitive work</li>
                    <li>• Delaying security updates</li>
                    <li>• Storing data only on local devices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need Professional IT Help?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            These resources are just the beginning. Get comprehensive IT support 
            tailored to your Baltimore business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Support Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;