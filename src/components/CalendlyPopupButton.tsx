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
  const loadCalendlyScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if ((window as any).Calendly) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Calendly script'));
      document.head.appendChild(script);
    });
  };

  const handleCalendlyClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      await loadCalendlyScript();
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/aiwriterpros/15min'
      });
    } catch (error) {
      // Fallback to direct link if script loading fails
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