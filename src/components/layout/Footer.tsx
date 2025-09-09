import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Company Info */}
          <div>
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
                <span className="text-sm">(443) 599-6441</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@computerprosllc.com</span>
              </div>
            </div>
          </div>

          {/* Free Resources */}
          <div className="lg:ml-4">
            <h3 className="font-semibold text-[#E01010] mb-4">Free Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/free-checklist" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">IT Checklist</Link></li>
              <li><Link to="/tools/it-cost" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Cost Calculator</Link></li>
              <li><Link to="/tools/phishing-test" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Phishing Test</Link></li>
              <li><Link to="/booking" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Book Assessment</Link></li>
              <li><Link to="/blog" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#E01010] mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/managed-services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Managed Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/ai-enablement" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">AI Enablement</Link></li>
              <li><Link to="/services/pricing" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-[#E01010] mb-4">Legal</h3>
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