const DataProcessingAgreement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Data Processing Agreement
            </h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              GDPR and privacy compliance for data processing activities
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="section-header text-2xl">1. Purpose and Scope</h2>
            <p className="mb-6">
              This Data Processing Agreement (DPA) governs the processing of personal data by Computer Pros 
              on behalf of our clients in accordance with applicable data protection laws, including GDPR, 
              CCPA, and other relevant privacy regulations.
            </p>

            <h2 className="section-header text-2xl">2. Definitions</h2>
            <ul className="mb-8 space-y-2">
              <li><strong>Controller:</strong> The client organization that determines the purposes and means of processing personal data</li>
              <li><strong>Processor:</strong> Computer Pros, acting on behalf of the Controller</li>
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person</li>
              <li><strong>Processing:</strong> Any operation performed on personal data</li>
            </ul>

            <h2 className="section-header text-2xl">3. Data Processing Activities</h2>
            <p className="mb-6">Computer Pros may process personal data for the following purposes:</p>
            <ul className="mb-8 space-y-2">
              <li>IT system monitoring and maintenance</li>
              <li>Security incident response and investigation</li>
              <li>Technical support and troubleshooting</li>
              <li>Backup and disaster recovery operations</li>
              <li>Performance optimization and reporting</li>
            </ul>

            <h2 className="section-header text-2xl">4. Security Measures</h2>
            <p className="mb-6">
              Computer Pros implements appropriate technical and organizational measures to ensure the security 
              of personal data, including:
            </p>
            <ul className="mb-8 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security assessments and monitoring</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 className="section-header text-2xl">5. Data Subject Rights</h2>
            <p className="mb-6">
              Computer Pros will assist the Controller in responding to data subject requests, including 
              rights to access, rectification, erasure, data portability, and objection to processing.
            </p>

            <h2 className="section-header text-2xl">6. Data Transfers</h2>
            <p className="mb-6">
              Any transfer of personal data to third countries will be conducted in accordance with applicable 
              data protection laws and with appropriate safeguards in place.
            </p>

            <h2 className="section-header text-2xl">7. Data Breach Notification</h2>
            <p className="mb-6">
              Computer Pros will notify the Controller without undue delay after becoming aware of a personal 
              data breach, providing all relevant information for the Controller to assess and report the breach.
            </p>

            <h2 className="section-header text-2xl">8. Contact Information</h2>
            <div className="bg-accent p-6 rounded-lg">
              <p><strong>Data Protection Officer</strong></p>
              <p>Computer Pros</p>
              <p>Email: dpo@computerpros-baltimore.com</p>
              <p>Phone: (410) 555-TECH</p>
              <p>Address: Baltimore, MD Metro Area</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProcessingAgreement;