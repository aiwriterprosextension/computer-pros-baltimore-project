import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface InlineCTABlockProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const InlineCTABlock = ({ 
  headline = "Ready to Fix Your IT Headaches?",
  subheadline = "Book a free IT assessment and get clear answers about your systems.",
  buttonText = "Book My Free Assessment",
  buttonLink = "/booking",
  className = ""
}: InlineCTABlockProps) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#E0E0E0] rounded-lg py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            {headline}
          </h2>
          
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subheadline}
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            asChild
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InlineCTABlock;