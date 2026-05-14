import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Data Processing Agreement", href: "/data-processing-agreement" },
    { title: "Cookie Policy", href: "/cookie-policy" },
    { title: "Business Associate Agreement", href: "/business-associate-agreement" },
  ];

  const serviceLinks = [
    { title: "Professional Websites", href: "/services/websites" },
    { title: "AI Automation", href: "/services/ai-automation" },
    { title: "Monthly Care Plans", href: "/services/care-plans" },
    { title: "Pricing", href: "/services/pricing" },
  ];

  const industryLinks = [
    { title: "HVAC Companies", href: "/industries/hvac" },
    { title: "Plumbing & Drain", href: "/industries/plumbing" },
    { title: "Landscaping & Lawn", href: "/industries/landscaping" },
    { title: "House Cleaning", href: "/industries/cleaning" },
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Free AI Audit", href: "/free-audit" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold text-primary-foreground">Computer Pros</div>
            </Link>
            <p className="text-secondary-foreground/80 mb-6 text-sm">
              Websites, AI automation, and care plans for Baltimore home service businesses.
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

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#E01010] mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-[#E01010] mb-4">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#E01010] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#E01010] mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Computer Pros. All rights reserved. Baltimore home service business websites & automation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
