import { Badge } from "@/components/ui/badge";

const TrustMetricsBar = () => {
  const metrics = [
    "99.9% Uptime",
    "24/7 Response", 
    "600+ Clients",
    "15+ Years Experience"
  ];

  const certifications = [
    "Microsoft Partner",
    "CompTIA Security+",
    "HIPAA Compliant",
    "CompTIA Network+",
    "Microsoft MCP"
  ];

  return (
    <section className="py-12 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{metric}</div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2">
              {cert}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetricsBar;