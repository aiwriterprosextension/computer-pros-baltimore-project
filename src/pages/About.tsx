import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, MapPin, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Computer Pros
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Your trusted IT partner serving Baltimore businesses since 2010.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="service-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>15+ certified IT professionals serving Baltimore businesses with expertise and dedication.</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Over 10 years of experience providing managed IT services to 200+ Baltimore area businesses.</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Local Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Based in Baltimore, we understand local business needs and provide personalized service.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Partner with Us?</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;