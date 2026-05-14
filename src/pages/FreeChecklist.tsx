import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { FileText, Lightbulb, Trophy, CheckCircle } from "lucide-react";
import { z } from "zod";

const auditSchema = z.object({
  businessType: z.string().min(1, "Please select your business type"),
  jobsPerWeek: z.string().min(1, "Please select your job volume"),
  hasWebsite: z.string().min(1, "Please answer this question"),
  leadSource: z.string().min(1, "Please answer this question"),
  followUp: z.string().min(1, "Please answer this question"),
  reviewsAsk: z.string().min(1, "Please answer this question"),
  scheduling: z.string().min(1, "Please answer this question"),
  name: z.string().trim().min(1, "Name is required").max(100),
  businessName: z.string().trim().min(1, "Business name is required").max(150),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
});

const initialState = {
  businessType: "", jobsPerWeek: "", hasWebsite: "", leadSource: "",
  followUp: "", reviewsAsk: "", scheduling: "",
  name: "", businessName: "", phone: "", email: "",
};

const FreeAudit = () => {
  const [data, setData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const set = (key: keyof typeof initialState, value: string) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = auditSchema.safeParse(data);
    if (!result.success) {
      toast({
        title: "Please complete all questions",
        description: result.error.issues[0]?.message ?? "Some fields are missing.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      window.location.href = "/audit-thank-you";
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const Q = ({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) => (
    <div>
      <Label className="mb-2 block">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger><SelectValue placeholder="Select an answer" /></SelectTrigger>
        <SelectContent>
          {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Free AI Readiness Audit for Baltimore Home Service Businesses | Computer Pros"
        description="Answer 8 quick questions and get a custom AI Readiness Report showing exactly where AI can save you time and bring you more booked jobs."
        canonicalUrl="https://computerpros-baltimore.com/free-audit"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get Your Free AI Readiness Report
          </h1>
          <p className="text-xl text-secondary-foreground/90 leading-relaxed">
            Answer 8 quick questions about your business — we'll send you a custom report showing exactly where AI can save you time and get you more leads.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Tell us about your business</CardTitle>
              <CardDescription>Takes about 2 minutes. We'll email your custom report within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Q label="1. What type of home service business do you run?"
                   options={["HVAC", "Plumbing", "Landscaping", "Cleaning", "Other"]}
                   value={data.businessType} onChange={(v) => set("businessType", v)} />
                <Q label="2. How many jobs do you complete per week?"
                   options={["1–5", "6–15", "16–30", "30+"]}
                   value={data.jobsPerWeek} onChange={(v) => set("jobsPerWeek", v)} />
                <Q label="3. Do you have a website?"
                   options={["Yes", "No", "Yes but it's outdated"]}
                   value={data.hasWebsite} onChange={(v) => set("hasWebsite", v)} />
                <Q label="4. How do most new customers find you?"
                   options={["Referrals", "Google", "Social", "Other"]}
                   value={data.leadSource} onChange={(v) => set("leadSource", v)} />
                <Q label="5. Do you follow up with leads automatically?"
                   options={["Yes", "No", "Sometimes"]}
                   value={data.followUp} onChange={(v) => set("followUp", v)} />
                <Q label="6. Do you ask customers for Google reviews?"
                   options={["Yes, every time", "Sometimes", "Never"]}
                   value={data.reviewsAsk} onChange={(v) => set("reviewsAsk", v)} />
                <Q label="7. How do you currently schedule jobs?"
                   options={["Phone call", "Text", "Online booking", "Paper"]}
                   value={data.scheduling} onChange={(v) => set("scheduling", v)} />

                <div className="border-t pt-5 space-y-4">
                  <p className="font-semibold">8. Where should we send your report?</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your name *</Label>
                      <Input id="name" value={data.name} onChange={(e) => set("name", e.target.value)} maxLength={100} required />
                    </div>
                    <div>
                      <Label htmlFor="businessName">Business name *</Label>
                      <Input id="businessName" value={data.businessName} onChange={(e) => set("businessName", e.target.value)} maxLength={150} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} maxLength={20} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} maxLength={255} required />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Get My Free AI Audit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-accent/30 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">What you'll get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Custom PDF Report</div>
                    <p className="text-sm text-muted-foreground">A personalized AI readiness scorecard for your trade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">AI Tool Recommendations</div>
                    <p className="text-sm text-muted-foreground">The exact tools we'd use for a business like yours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">3 Quick Wins for Your Trade</div>
                    <p className="text-sm text-muted-foreground">Things you can implement this week to get more booked jobs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> 100% free, no credit card</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Built for home service trades</li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Delivered within 24 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeAudit;
