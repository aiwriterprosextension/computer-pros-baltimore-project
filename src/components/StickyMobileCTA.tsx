import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <Link 
        to="/booking" 
        className="block w-full py-4 text-center font-semibold text-lg hover:bg-primary/90 transition-colors"
      >
        Book Free Assessment
      </Link>
    </div>
  );
};

export default StickyMobileCTA;