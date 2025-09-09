import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Computer Pros helped us cut IT costs by 30%—without compromising security. Their assessment was eye-opening.",
      author: "Sarah M., Law Firm Partner"
    },
    {
      quote: "We didn't realize how exposed we were until the checklist flagged our backup gaps. The free consult was a no-brainer.",
      author: "Dr. Patel, DDS"
    },
    {
      quote: "Fast, local, and honest. Computer Pros gave us clarity and fixed issues our old provider missed.",
      author: "James R., Property Manager"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header">What Baltimore Businesses Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients across Baltimore.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-secondary leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <cite className="text-base text-muted-foreground font-medium">
                — {testimonials[currentIndex].author}
              </cite>
            </CardContent>
          </Card>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background border border-border rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background border border-border rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;