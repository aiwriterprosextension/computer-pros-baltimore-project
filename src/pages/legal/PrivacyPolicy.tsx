const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              How Computer Pros protects and handles your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="section-header text-2xl">1. Information We Collect</h2>
            <p className="mb-6">
              Computer Pros collects information you provide directly to us when you use our services, 
              contact us, or engage with our website. This may include:
            </p>
            <ul className="mb-8 space-y-2">
              <li>Contact information (name, email, phone number, business address)</li>
              <li>Business information (company name, industry, IT infrastructure details)</li>
              <li>Technical information about your systems for support purposes</li>
              <li>Communication records for customer service and support</li>
            </ul>

            <h2 className="section-header text-2xl">2. How We Use Your Information</h2>
            <p className="mb-6">We use the information we collect to:</p>
            <ul className="mb-8 space-y-2">
              <li>Provide, maintain, and improve our IT services</li>
              <li>Communicate with you about our services and support</li>
              <li>Process payments and manage accounts</li>
              <li>Comply with legal obligations and industry regulations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2 className="section-header text-2xl">3. Information Sharing</h2>
            <p className="mb-6">
              Computer Pros does not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>

            <h2 className="section-header text-2xl">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. Our security measures include 
              encryption, access controls, and regular security assessments.
            </p>

            <h2 className="section-header text-2xl">5. Data Retention</h2>
            <p className="mb-6">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this 
              policy, unless a longer retention period is required by law or regulation.
            </p>

            <h2 className="section-header text-2xl">6. Your Rights</h2>
            <p className="mb-6">
              Depending on your location, you may have certain rights regarding your personal information, including 
              the right to access, update, or delete your information. To exercise these rights, please contact us 
              using the information below.
            </p>

            <h2 className="section-header text-2xl">7. Contact Information</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
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

export default PrivacyPolicy;