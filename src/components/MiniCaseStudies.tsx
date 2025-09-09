import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const MiniCaseStudies = () => {
  const caseStudies = [
    {
      title: "Law Firm",
      before: "Outdated backups and slow support",
      after: "Secure cloud migration and 30% cost savings"
    },
    {
      title: "Dental Office", 
      before: "Phishing incident and HIPAA gaps",
      after: "Firewall + training = zero incidents"
    },
    {
      title: "Property Manager",
      before: "Manual ticket routing",
      after: "AI automation reduced resolution time by 40%"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header">Real Results for Baltimore Businesses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped local firms overcome IT challenges and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="service-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Before:</p>
                  <p className="text-sm">{study.before}</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">After:</p>
                  <p className="text-sm font-semibold text-primary">{study.after}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCaseStudies;