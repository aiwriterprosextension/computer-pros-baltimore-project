import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, MapPin, CheckCircle, Shield, Target, Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import TrustMetricsBar from "@/components/TrustMetricsBar";
import InlineCTABlock from "@/components/InlineCTABlock";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Computer Pros - Baltimore's Premier IT Partner Since 2010"
        description="Trusted Baltimore IT partner since 2010. Expert managed IT, cybersecurity, and AI solutions for professional firms. Contact us for a free consultation!"
        keywords="Baltimore IT support, managed IT services Baltimore, trusted IT partner, professional IT services, cybersecurity Baltimore"
        canonicalUrl="https://computerpros-baltimore.com/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Baltimore's Premier IT Partner Since 2010
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              For over 15 years, Computer Pros has been the go-to <strong>managed IT services provider</strong> for Baltimore's professional service firms, delivering secure, scalable, and innovative solutions that help you focus on what you do best.
            </p>
            <Button variant="hero" size="lg" asChild className="mr-4">
              <Link to="/booking">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/managed-services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustMetricsBar />

      {/* Why Choose Computer Pros */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Baltimore Professional Firms Choose Computer Pros
            </h2>
            <p className="text-lg text-muted-foreground">
              We're more than an IT provider—we're your partner in success. Our mission is to empower Baltimore businesses with reliable <Link to="/services/managed-services" className="text-primary hover:underline">managed IT services</Link>, cutting-edge <Link to="/services/cybersecurity" className="text-primary hover:underline">cybersecurity solutions</Link>, and AI-driven tools that drive efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="service-card text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Local Baltimore Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Based in Baltimore, we understand the unique needs of local businesses, from compliance requirements to industry challenges facing consulting, legal, and financial firms.</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p>With over 600 clients served, we've reduced IT downtime by an average of 95% and helped Baltimore firms improve productivity while staying secure.</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We tailor solutions to your specific needs, ensuring seamless operations, regulatory compliance, and complete peace of mind for your business operations.</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Testimonial */}
          <div className="bg-accent/30 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic mb-4">
              "Computer Pros transformed our IT infrastructure completely. They reduced our downtime to nearly zero and implemented security measures that give us confidence in handling sensitive client data. Their Baltimore-based team truly understands our business needs."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              — Sarah M., Managing Partner, Baltimore Law Firm
            </p>
          </div>
        </div>
      </section>

      {/* Our Expert Team */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Expert IT Team
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of 15+ certified IT professionals brings decades of combined experience supporting Baltimore businesses. From cybersecurity specialists to cloud integration experts, we're dedicated to keeping your firm running smoothly. Ready to assess your IT needs? Try our <Link to="/tools/security-score" className="text-primary hover:underline">free Security Score assessment</Link> to see how we can help.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Microsoft Certified Partners with Advanced Specializations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>CompTIA Security+ and Network+ Certified Technicians</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>HIPAA Compliance and Cybersecurity Specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>AI Integration and Business Automation Experts</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-8">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Certified IT Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Baltimore Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Our Baltimore IT Services Experience
            </h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Since 2010, Computer Pros has supported over 600 Baltimore businesses with comprehensive <Link to="/services/managed-services" className="text-primary hover:underline">managed IT services</Link>, advanced <Link to="/services/cybersecurity" className="text-primary hover:underline">cybersecurity protection</Link>, and cutting-edge <Link to="/services/ai-enablement" className="text-primary hover:underline">AI enablement</Link>. We've helped firms across industries—consulting, legal, financial, medical, and more—stay secure, compliant, and productive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-accent/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">600+</div>
                <div className="text-sm text-muted-foreground">Baltimore Businesses Served</div>
              </div>
              <div className="bg-accent/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime Achieved</div>
              </div>
              <div className="bg-accent/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Local Experience</div>
              </div>
              <div className="bg-accent/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency IT Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Mission: Empowering Baltimore Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Computer Pros, our mission is to empower Baltimore's professional service firms with technology that drives growth and protects their future. We combine innovative tools like <Link to="/services/ai-enablement" className="text-primary hover:underline">AI automation</Link> and <Link to="/services/microsoft-365" className="text-primary hover:underline">cloud collaboration</Link> with reliable, proactive support to help your firm thrive in an increasingly digital world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Security First</h3>
                <p className="text-sm text-muted-foreground">Protecting your data and ensuring compliance with industry regulations.</p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Growth Focused</h3>
                <p className="text-sm text-muted-foreground">Technology solutions that scale with your business and support expansion.</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Locally Committed</h3>
                <p className="text-sm text-muted-foreground">Deep understanding of Baltimore's business community and local challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <InlineCTABlock 
        headline="Ready to Partner with Baltimore's Leading IT Experts?"
        subheadline="Join hundreds of Baltimore businesses that trust Computer Pros for their IT needs. From securing client data to boosting productivity with AI, we're here to help your firm succeed."
        buttonText="Schedule Your Free Consultation"
        buttonLink="/booking"
      />
    </div>
  );
};

export default About;