import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EmergencySupportButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button 
        variant="destructive" 
        size="lg" 
        className="shadow-2xl animate-pulse hover:animate-none rounded-full px-6 py-3"
        asChild
      >
        <Link to="/booking" className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Emergency Support</span>
          <span className="sm:hidden">Emergency</span>
        </Link>
      </Button>
    </div>
  );
};

export default EmergencySupportButton;