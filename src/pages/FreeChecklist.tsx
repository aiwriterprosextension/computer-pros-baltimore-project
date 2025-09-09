import { useState } from "react";
import { CheckCircle, Shield, Cloud, Cog, BarChart3, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

const FreeChecklist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wantAssessment: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const checklistSections = [
    {
      icon: Shield,
      title: "Security",
      items: [
        "MFA enabled for email and remote access",
        "Antivirus centrally managed",
        "Firewall updated and configured",
        "Devices encrypted and password-protected",
        "Phishing simulations conducted quarterly",
        "Admin access restricted and logged"
      ]
    },
    {
      icon: Cloud,
      title: "Backup & Recovery",
      items: [
        "Daily automated backups",
        "Offsite/cloud storage in place",
        "Backup restores tested quarterly",
        "Disaster recovery plan documented",
        "Business continuity plan includes IT",
        "Critical data backed up separately"
      ]
    },
    {
      icon: Cog,
      title: "Systems & Support",
      items: [
        "Devices patched regularly",
        "Help desk response under 4 hours",
        "Remote access tools secured",
        "Hardware lifecycle tracked",
        "Printers/Wi-Fi audited annually"
      ]
    },
    {
      icon: BarChart3,
      title: "Cost & Efficiency",
      items: [
        "Paying only for used licenses",
        "Internet speed optimized",
        "Cloud services reviewed",
        "Manual tasks automated",
        "IT budget aligned with goals",
        "Vendor contracts reviewed"
      ]
    },
    {
      icon: Brain,
      title: "AI & Automation",
      items: [
        "AI tools used for scheduling/support",
        "Chatbots or automation workflows in place",
        "Staff trained on AI tools",
        "AI usage documented for compliance",
        "ROI tracked for automation"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Spot hidden security risks",
      description: "Identify vulnerabilities before they become costly breaches"
    },
    {
      icon: Cloud,
      title: "Review backup & recovery gaps",
      description: "Ensure your data is protected and recoverable"
    },
    {
      icon: Cog,
      title: "Identify outdated or costly systems",
      description: "Find opportunities to reduce costs and improve efficiency"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual MailerLite integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to thank you page
      window.location.href = '/checklist-thank-you';
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Free IT Assessment Checklist - Computer Pros Baltimore"
        description="Download your free IT assessment checklist to identify security risks, backup gaps, and cost-saving opportunities. See how your IT systems stack up."
        keywords="IT assessment checklist, business security audit, IT risk assessment, Baltimore IT checklist"
        canonicalUrl="https://computerpros-baltimore.com/free-checklist"
      />

      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6 leading-tight">
            Download Your Free IT Assessment Checklist
          </h1>
          
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how your IT systems stack up — and find out if your business is at risk.
          </p>
        </div>
      </section>

      {/* Embedded Checklist Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/50f6da69-9572-4f7d-b745-a2e986b41576.png" 
              alt="Computer Pros - We Make IT Work" 
              className="h-16 w-auto mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Your Free IT Assessment Checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {checklistSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl text-secondary">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-4 h-4 border-2 border-primary rounded-sm mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Lead Capture Form */}
          <Card className="max-w-xl mx-auto border-muted">
            <CardHeader>
              <CardTitle className="text-center text-secondary">Get Your Checklist</CardTitle>
              <CardDescription className="text-center">
                Enter your details below to download the complete checklist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="assessment"
                    checked={formData.wantAssessment}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, wantAssessment: checked as boolean})
                    }
                  />
                  <Label htmlFor="assessment" className="text-sm">
                    Yes, I'd like a free IT assessment too
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Download My Checklist"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center bg-background">
                  <CardContent className="pt-6">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-secondary mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeChecklist;