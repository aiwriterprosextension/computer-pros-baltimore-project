import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ShieldCheck, Cpu } from "lucide-react";

const HeroCards = () => {
  const heroCards = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support"
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Advanced threat protection and compliance"
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Cutting-edge AI solutions for efficiency"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
      {heroCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <Card key={index} className="bg-background/10 backdrop-blur-sm border-background/20 text-center">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-2">
                <div className="p-3 rounded-full bg-primary/20">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-lg text-primary-foreground">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-secondary-foreground/80">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HeroCards;