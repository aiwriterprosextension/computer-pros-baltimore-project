import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  businessType: z.string().min(1, "Please select your business type"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", businessType: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = contactSchema.safeParse(data);
    if (!r.success) {
      toast({ title: "Please check the form", description: r.error.issues[0]?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll be in touch within 1 business day." });
    setData({ name: "", email: "", phone: "", businessType: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Computer Pros
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Tell us about your home service business — we'll get back to you within 1 business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="c-name">Name *</Label>
                    <input id="c-name" type="text" maxLength={100} value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="w-full p-3 border border-input rounded-md" required />
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email *</Label>
                    <input id="c-email" type="email" maxLength={255} value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      className="w-full p-3 border border-input rounded-md" required />
                  </div>
                  <div>
                    <Label htmlFor="c-phone">Phone</Label>
                    <input id="c-phone" type="tel" maxLength={20} value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      className="w-full p-3 border border-input rounded-md" />
                  </div>
                  <div>
                    <Label>Business type *</Label>
                    <Select value={data.businessType} onValueChange={(v) => setData({ ...data, businessType: v })}>
                      <SelectTrigger><SelectValue placeholder="Select your trade" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HVAC">HVAC</SelectItem>
                        <SelectItem value="Plumbing">Plumbing</SelectItem>
                        <SelectItem value="Landscaping">Landscaping</SelectItem>
                        <SelectItem value="Cleaning">House Cleaning</SelectItem>
                        <SelectItem value="Other">Other home service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="c-msg">Message *</Label>
                    <textarea id="c-msg" maxLength={1000} value={data.message}
                      onChange={(e) => setData({ ...data, message: e.target.value })}
                      className="w-full p-3 border border-input rounded-md h-32" required />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Baltimore, MD Metro Area</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(443) 599-6441</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@computerprosllc.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
