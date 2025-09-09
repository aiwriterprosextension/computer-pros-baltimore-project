
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const serviceLinks = [
    { title: "Managed Services", href: "/services/managed-services" },
    { title: "Cybersecurity", href: "/services/cybersecurity" },
    { title: "Microsoft 365 & Google Workspace", href: "/services/microsoft-365" },
    { title: "AI Enablement", href: "/services/ai-enablement" },
    { title: "Projects & Migrations", href: "/services/projects-migrations" },
    { title: "Support Plans & Pricing", href: "/services/pricing" },
  ];

  const industryLinks = [
    { title: "Law Firms", href: "/industries/law-firms" },
    { title: "Dentists", href: "/industries/dental-practices" },
    { title: "Property Managers", href: "/industries/property-managers" },
    { title: "Medical Offices", href: "/industries/medical-offices" },
    { title: "Accountants", href: "/industries/accountants" },
    { title: "Professional Services", href: "/industries/professional-services" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/50f6da69-9572-4f7d-b745-a2e986b41576.png" 
              alt="Computer Pros - We Make IT Work" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                      {serviceLinks.map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                      {industryLinks.map((industry) => (
                        <NavigationMenuLink key={industry.href} asChild>
                          <Link
                            to={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{industry.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/resources" 
              className={`nav-link ${isActive('/resources') ? 'text-primary font-semibold' : ''}`}
            >
              Resources
            </Link>
            
            <Link 
              to="/blog" 
              className={`nav-link ${isActive('/blog') ? 'text-primary font-semibold' : ''}`}
            >
              Blog
            </Link>
            
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-primary font-semibold' : ''}`}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'text-primary font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" className="px-4 py-2 text-sm" asChild>
              <Link to="/free-checklist">Free Checklist</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link py-2">Home</Link>
              
              <div className="space-y-2">
                <div className="font-semibold text-primary">Services</div>
                {serviceLinks.map((service) => (
                  <Link 
                    key={service.href}
                    to={service.href} 
                    className="nav-link py-1 pl-4 block text-sm"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="font-semibold text-primary">Industries</div>
                {industryLinks.map((industry) => (
                  <Link 
                    key={industry.href}
                    to={industry.href} 
                    className="nav-link py-1 pl-4 block text-sm"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
              
              <Link to="/resources" className="nav-link py-2">Resources</Link>
              <Link to="/blog" className="nav-link py-2">Blog</Link>
              <Link to="/about" className="nav-link py-2">About Us</Link>
              <Link to="/contact" className="nav-link py-2">Contact</Link>
              
              <Button variant="hero" size="default" className="w-full mt-4 px-4 py-2 text-sm" asChild>
                <Link to="/free-checklist">Free Checklist</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
