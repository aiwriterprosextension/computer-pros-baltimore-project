const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              Terms and conditions for Computer Pros IT services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="section-header text-2xl">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using Computer Pros services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using our services.
            </p>

            <h2 className="section-header text-2xl">2. Description of Services</h2>
            <p className="mb-6">
              Computer Pros provides managed IT services, cybersecurity solutions, cloud services, and related 
              technology support to businesses in the Baltimore area. Our services include but are not limited to:
            </p>
            <ul className="mb-8 space-y-2">
              <li>24/7 network monitoring and maintenance</li>
              <li>Cybersecurity protection and incident response</li>
              <li>Cloud services and Microsoft 365 support</li>
              <li>Help desk and technical support</li>
              <li>IT consulting and project management</li>
            </ul>

            <h2 className="section-header text-2xl">3. Service Level Agreement</h2>
            <p className="mb-6">
              Service levels, response times, and performance standards are detailed in your specific Service 
              Level Agreement (SLA), which forms part of these terms when you engage our services.
            </p>

            <h2 className="section-header text-2xl">4. Payment Terms</h2>
            <p className="mb-6">
              Payment terms are specified in your service agreement. Generally, monthly services are billed in advance, 
              and project work may require partial payment upfront. Late payments may result in service suspension.
            </p>

            <h2 className="section-header text-2xl">5. Data and Confidentiality</h2>
            <p className="mb-6">
              Computer Pros maintains strict confidentiality regarding client data and systems. We implement 
              appropriate security measures and will not access or disclose your data except as necessary to 
              provide services or as required by law.
            </p>

            <h2 className="section-header text-2xl">6. Limitation of Liability</h2>
            <p className="mb-6">
              While we strive to provide excellent service, Computer Pros' liability is limited to the amount 
              paid for services in the preceding twelve months. We are not liable for indirect, consequential, 
              or punitive damages.
            </p>

            <h2 className="section-header text-2xl">7. Termination</h2>
            <p className="mb-6">
              Either party may terminate services with 30 days written notice. Computer Pros reserves the right 
              to immediately terminate services for non-payment or violation of these terms.
            </p>

            <h2 className="section-header text-2xl">8. Contact Information</h2>
            <div className="bg-accent p-6 rounded-lg">
              <p><strong>Computer Pros</strong></p>
              <p>Email: info@computerpros-baltimore.com</p>
              <p>Phone: (410) 555-TECH</p>
              <p>Address: Baltimore, MD Metro Area</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;