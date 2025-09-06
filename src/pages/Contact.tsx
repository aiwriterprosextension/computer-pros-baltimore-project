import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Computer Pros
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Ready to transform your IT? Get in touch for a free consultation.
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
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full p-3 border border-input rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-input rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full p-3 border border-input rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea className="w-full p-3 border border-input rounded-md h-32"></textarea>
                </div>
                <Button variant="hero" className="w-full">Send Message</Button>
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
                      <p className="text-muted-foreground">(410) 555-TECH</p>
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
                      <p className="text-muted-foreground">info@computerpros-baltimore.com</p>
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