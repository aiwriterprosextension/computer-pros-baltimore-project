import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Data Processing Agreement", href: "/data-processing-agreement" },
    { title: "Cookie Policy", href: "/cookie-policy" },
    { title: "Business Associate Agreement", href: "/business-associate-agreement" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Calendly Booking Section */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-4 py-12">
          <div className="calendly-container max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Ready to Secure Your Business Technology?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free 15-minute consultation to discuss your IT needs and learn how Computer Pros 
              can help protect and optimize your business technology in Baltimore.
            </p>
            
            {/* Calendly Embed Placeholder */}
            <div className="bg-background rounded-lg p-8 shadow-[var(--shadow-soft)]">
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-4">Schedule Your Free IT Consultation</h4>
                <p className="text-muted-foreground mb-6">
                  Select a convenient time for your 15-minute consultation
                </p>
                
                {/* Calendly iframe would go here */}
                <div className="bg-accent rounded-lg p-8 border-2 border-dashed border-primary/30">
                  <p className="text-sm text-muted-foreground mb-4">
                    Calendly booking widget will be embedded here
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    https://calendly.com/YOUR-ACCOUNT/15min
                  </code>
                </div>
                
                <Button variant="hero" size="lg" className="mt-6" asChild>
                  <a 
                    href="https://calendly.com/YOUR-ACCOUNT/15min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book Now on Calendly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold text-primary-foreground">Computer Pros</div>
            </Link>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Professional managed IT services, cybersecurity, and AI enablement for small 
              businesses in Baltimore. Reliable technology support you can trust.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Baltimore, MD Metro Area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">(410) 555-TECH</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@computerpros-baltimore.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/managed-services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Managed Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/ai-enablement" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">AI Enablement</Link></li>
              <li><Link to="/services/pricing" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Computer Pros. All rights reserved. Professional IT services for Baltimore businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;