import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Phone, Zap, AlertTriangle, MapPin } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";

const EmergencySupport = () => {
  const benefits = [
    "Same-day on-site support for critical business issues",
    "Certified technicians arrive within 2-4 hours",
    "Immediate problem diagnosis and resolution",
    "Backup solutions to minimize downtime",
    "Transparent hourly rates with no hidden fees",
    "Available for all IT systems and equipment",
    "Emergency support even for non-managed clients"
  ];

  const emergencyTypes = [
    {
      icon: AlertTriangle,
      title: "Server Failures",
      description: "Critical server crashes, database corruption, and hardware failures"
    },
    {
      icon: Zap,
      title: "Network Outages",
      description: "Complete network failures, internet connectivity issues, and firewall problems"
    },
    {
      icon: Phone,
      title: "Communication Issues",
      description: "Email system failures, phone system outages, and video conferencing problems"
    },
    {
      icon: Clock,
      title: "Security Breaches",
      description: "Malware infections, ransomware attacks, and unauthorized access incidents"
    },
    {
      icon: MapPin,
      title: "Equipment Failures",
      description: "Computer crashes, printer failures, and other critical equipment issues"
    }
  ];

  const responseProcess = [
    {
      step: "1",
      title: "Emergency Call Received",
      description: "Contact us via phone or emergency hotline - we answer within minutes"
    },
    {
      step: "2",
      title: "Initial Troubleshooting",
      description: "Remote diagnosis and immediate steps to minimize impact"
    },
    {
      step: "3",
      title: "Technician Dispatch",
      description: "Certified technician en route within 2-4 hours in Baltimore area"
    },
    {
      step: "4",
      title: "On-Site Resolution",
      description: "Comprehensive problem diagnosis and solution implementation"
    },
    {
      step: "5",
      title: "System Restoration",
      description: "Full system testing and verification of normal operations"
    },
    {
      step: "6",
      title: "Prevention Planning",
      description: "Recommendations to prevent similar issues in the future"
    }
  ];

  const serviceAreas = [
    "Baltimore City",
    "Towson",
    "Columbia", 
    "Ellicott City",
    "Annapolis",
    "Glen Burnie",
    "Catonsville",
    "Lutherville",
    "Hunt Valley",
    "Cockeysville"
  ];

  const faqs = [
    {
      question: "How quickly can you respond to emergencies?",
      answer: "We guarantee on-site response within 2-4 hours for the Baltimore metro area during business hours. After-hours and weekend response is typically within 4-6 hours."
    },
    {
      question: "What qualifies as an IT emergency?",
      answer: "Any issue that completely stops business operations or poses an immediate security threat qualifies as an emergency. This includes server crashes, network outages, security breaches, and critical equipment failures."
    },
    {
      question: "Do you provide emergency support for businesses you don't normally manage?",
      answer: "Yes, we provide emergency support for any business in the Baltimore area, even if you're not a managed services client. Emergency rates apply."
    },
    {
      question: "What if you can't resolve the issue on-site?",
      answer: "In rare cases where on-site resolution isn't possible, we'll implement temporary workarounds to restore operations while we arrange for replacement equipment or additional resources."
    },
    {
      question: "Is emergency support available 24/7?",
      answer: "Yes, our emergency hotline is available 24/7. Response times may be longer during nights and weekends, but we're always available for true emergencies."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Emergency On-Site IT Support in Baltimore | Computer Pros"
        description="Same-day emergency IT support for Baltimore businesses. Critical issue resolution within 2-4 hours. Expert technicians available 24/7 for IT emergencies."
        keywords="emergency IT support Baltimore, same day computer repair, urgent IT services Baltimore, emergency technician Maryland, critical IT support"
        canonicalUrl="https://computerpros-baltimore.com/services/emergency-support"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              24/7 Emergency Response
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Emergency On-Site IT Support for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              When IT disasters strike, every minute counts. Our emergency support team responds 
              within 2-4 hours to get your Baltimore business back online fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line: (410) 555-TECH
              </Button>
              <CalendlyPopupButton 
                text="Schedule Non-Emergency Support" 
                variant="outline" 
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-header text-left mb-6">
                  Rapid Emergency IT Response
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  IT emergencies don't wait for convenient times. When your business-critical systems 
                  fail, our certified technicians spring into action with same-day on-site support 
                  throughout the Baltimore metro area.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  From server crashes to security breaches, our emergency response team has the 
                  expertise and tools to diagnose problems quickly and implement effective solutions. 
                  We minimize downtime and get your operations back to normal as fast as possible.
                </p>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <Card className="service-card bg-red-50 border-red-200">
                  <CardHeader className="text-center">
                    <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <CardTitle className="text-xl text-red-800">Emergency Hotline</CardTitle>
                    <div className="text-2xl font-bold text-red-600">(410) 555-TECH</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 text-center text-sm">
                      Available 24/7 for true IT emergencies that halt business operations
                    </p>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="service-card">
                    <CardHeader className="text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">2-4 Hour Response</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="service-card">
                    <CardHeader className="text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">Baltimore Metro</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Emergency IT Issues We Handle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our emergency response team is equipped to handle any critical IT issue that 
              threatens your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyTypes.slice(0, 5).map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Emergency Response Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When you call our emergency line, we immediately spring into action with a proven 
              response process designed to minimize downtime.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {responseProcess.map((item, index) => (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Emergency Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide same-day emergency support throughout the greater Baltimore area.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Baltimore Metro Area Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="text-center py-2 px-3 bg-secondary rounded-lg">
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground">
                    Don't see your area? Call us anyway - we may be able to provide emergency support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Emergency Support Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent hourly rates for emergency support with no hidden fees.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Emergency On-Site Support</CardTitle>
                <div className="text-4xl font-bold text-primary">$175</div>
                <div className="text-sm text-muted-foreground">per hour</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Same-day on-site response (2-4 hours)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Certified technician with full toolkit</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Problem diagnosis and resolution</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">System testing and verification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Prevention recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">No hidden fees or minimum charges</span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Emergency Line
                  </Button>
                  <CalendlyPopupButton 
                    text="Schedule Non-Emergency Service" 
                    variant="outline" 
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Don't Let IT Disasters Stop Your Business
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Save our emergency number now. When disaster strikes, our Baltimore IT experts 
            will be there within hours to get you back online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (410) 555-TECH
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/managed-services">Prevent Emergencies with Managed IT</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencySupport;