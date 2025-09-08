import React, { useEffect } from 'react';

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[#E01010] font-bold text-3xl md:text-4xl text-center mb-6">
          Book Your Free 15‑Minute Consultation
        </h2>
        <div className="flex justify-center">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/aiwriterpros/30min" 
            style={{ minWidth: '640px', height: '1260px' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
