import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Database, Cloud, Network, CheckCircle, Clock, TrendingUp } from "lucide-react";

const ProjectsMigrations = () => {
  const projectTypes = [
    {
      icon: Cloud,
      title: "Cloud Migrations",
      description: "Move your data and applications to the cloud with zero downtime and complete data integrity.",
      examples: ["Office 365 migration", "Google Workspace setup", "File server to cloud", "Email migration"]
    },
    {
      icon: Network,
      title: "Network Upgrades", 
      description: "Modernize your network infrastructure for better performance, security, and reliability.",
      examples: ["WiFi network upgrades", "Firewall replacement", "Switch and router updates", "Network security enhancement"]
    },
    {
      icon: Database,
      title: "Server Migrations",
      description: "Upgrade or replace your server infrastructure with minimal business disruption.",
      examples: ["Physical to virtual migration", "Server hardware replacement", "Operating system upgrades", "Data center relocation"]
    },
    {
      icon: Settings,
      title: "System Integrations",
      description: "Connect your business applications and systems for improved workflow and data sharing.",
      examples: ["CRM integration", "Accounting system connection", "Document management setup", "Workflow automation"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Comprehensive assessment of your current systems and detailed migration planning.",
      timeline: "1-2 weeks"
    },
    {
      step: "2", 
      title: "Design & Testing",
      description: "Create detailed technical designs and test migration procedures in a lab environment.",
      timeline: "1-2 weeks"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute the migration or upgrade with continuous monitoring and support.",
      timeline: "1-4 weeks"
    },
    {
      step: "4",
      title: "Validation & Training",
      description: "Verify all systems work correctly and train your team on any new processes.",
      timeline: "1 week"
    }
  ];

  const benefits = [
    "99.9% project success rate with zero data loss",
    "Minimal downtime during transitions",
    "Comprehensive testing before go-live",
    "Detailed project documentation",
    "Post-migration support and optimization",
    "Fixed-price project quotes with no surprises",
    "Experienced project managers handle every detail"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Expert Project Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              IT Projects & Migrations for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              From cloud migrations to network upgrades, our experienced project managers ensure 
              your IT initiatives are completed on time, on budget, and with minimal disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Plan Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resources">Project Checklist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">IT Projects We Handle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're upgrading aging systems or moving to the cloud, 
              we have the expertise to manage your IT projects successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <IconComponent className="h-12 w-12 text-primary flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-primary">Common Projects:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Proven Project Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is delivered successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="service-card text-center">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {phase.timeline}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Guarantees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-8">Why Choose Computer Pros for Your IT Projects?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced project managers have successfully completed hundreds of IT projects 
                for Baltimore businesses. We guarantee your project will be completed on time and on budget.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="service-card">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">On-Time Delivery</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">98%</p>
                  <p className="text-muted-foreground">of projects completed on or ahead of schedule</p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Budget Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">100%</p>
                  <p className="text-muted-foreground">fixed-price projects with no cost overruns</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Recent Project Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped Baltimore businesses transform their IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-lg">Law Firm Cloud Migration</CardTitle>
                <Badge variant="secondary">50 Users</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Migrated 50-person law firm from on-premise Exchange to Microsoft 365 
                  with zero downtime and improved security.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Timeline:</span>
                    <span className="font-medium">3 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Data migrated:</span>
                    <span className="font-medium">2TB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Downtime:</span>
                    <span className="font-medium text-primary">0 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-lg">Medical Practice Network Upgrade</CardTitle>
                <Badge variant="secondary">3 Locations</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Upgraded network infrastructure across 3 medical offices with new 
                  WiFi, firewall, and HIPAA-compliant security.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Timeline:</span>
                    <span className="font-medium">4 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Speed improvement:</span>
                    <span className="font-medium">500%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Security score:</span>
                    <span className="font-medium text-primary">A+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-lg">Accounting Firm Server Migration</CardTitle>
                <Badge variant="secondary">Virtual Infrastructure</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Migrated aging physical servers to modern virtual infrastructure 
                  with improved performance and backup capabilities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Timeline:</span>
                    <span className="font-medium">2 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Performance gain:</span>
                    <span className="font-medium">300%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Backup time:</span>
                    <span className="font-medium text-primary">90% faster</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your IT Project?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't let outdated technology hold your business back. Contact us today for a free 
            project consultation and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Project Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Project Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsMigrations;