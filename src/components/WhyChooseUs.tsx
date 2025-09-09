import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Same-day response from local techs",
    "No long-term contracts or hidden fees", 
    "Baltimore-based team that understands your industry"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-header text-left mb-8">
              Why Baltimore Businesses Choose Computer Pros
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent/50 rounded-lg p-8">
            <blockquote className="text-xl italic text-center">
              "Computer Pros understands Baltimore businesses. Their local expertise and 
              rapid response times have been game-changing for our operations."
            </blockquote>
            <p className="text-center text-muted-foreground mt-4">
              — Local Business Owner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;