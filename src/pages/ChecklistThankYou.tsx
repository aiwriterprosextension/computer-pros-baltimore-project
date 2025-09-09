import { CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const ChecklistThankYou = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Thank You - Checklist Download | Computer Pros Baltimore"
        description="Your IT assessment checklist is on its way! Check your email for the download link and consider booking your free IT assessment."
        keywords="IT checklist download, thank you page, free IT assessment"
        canonicalUrl="https://computerpros-baltimore.com/checklist-thank-you"
      />

      {/* Confirmation Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Checklist is on its way!
            </h1>
            
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Check your email for the download link.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-secondary-foreground/80 mb-12">
              <Mail className="h-5 w-5" />
              <span>We've sent it to your email address</span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-secondary mb-4">
                Want help filling it out?
              </CardTitle>
              <CardDescription className="text-lg">
                Book your free IT assessment and we'll walk through the checklist with you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">No pressure, no sales pitch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Clear answers about your systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tailored recommendations</span>
                  </li>
                </ul>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <Link to="/booking">Book My Free Assessment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-secondary text-center mb-8">
            While You're Here...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-secondary mb-2">Explore Our Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our managed IT, cybersecurity, and AI enablement services.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services/managed-services">View Services</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-secondary mb-2">Read Our Blog</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest IT tips and insights for Baltimore businesses.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/blog">Read Articles</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-secondary mb-2">Learn About Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover why Baltimore businesses trust Computer Pros.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">About Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChecklistThankYou;