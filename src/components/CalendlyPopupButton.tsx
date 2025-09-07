import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CalendlyPopupButtonProps {
  text?: string;
  variant?: "default" | "hero" | "service" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
}

const CalendlyPopupButton = ({ 
  text = "Schedule a Consultation", 
  variant = "hero", 
  size = "default",
  className = "",
  showIcon = false 
}: CalendlyPopupButtonProps) => {
  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Check if Calendly is loaded
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/aiwriterpros/15min'
      });
    } else {
      // Fallback to direct link if Calendly script isn't loaded
      window.open('https://calendly.com/aiwriterpros/15min', '_blank');
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleCalendlyClick}
      className={className}
    >
      {showIcon && <Calendar className="mr-2 h-4 w-4" />}
      {text}
    </Button>
  );
};

export default CalendlyPopupButton;