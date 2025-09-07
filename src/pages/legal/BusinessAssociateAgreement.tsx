const BusinessAssociateAgreement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Business Associate Agreement
            </h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              HIPAA compliance for healthcare organizations and their technology partners
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="section-header text-2xl">1. Purpose</h2>
            <p className="mb-6">
              This Business Associate Agreement (BAA) establishes the permitted and required uses and 
              disclosures of Protected Health Information (PHI) by Computer Pros when providing IT 
              services to covered entities under the Health Insurance Portability and Accountability 
              Act (HIPAA).
            </p>

            <h2 className="section-header text-2xl">2. Definitions</h2>
            <ul className="mb-8 space-y-2">
              <li><strong>Covered Entity:</strong> Healthcare provider, health plan, or healthcare clearinghouse</li>
              <li><strong>Business Associate:</strong> Computer Pros, providing IT services to Covered Entity</li>
              <li><strong>Protected Health Information (PHI):</strong> Individually identifiable health information</li>
              <li><strong>Breach:</strong> Unauthorized acquisition, access, use, or disclosure of PHI</li>
            </ul>

            <h2 className="section-header text-2xl">3. Permitted Uses and Disclosures</h2>
            <p className="mb-6">Computer Pros may use or disclose PHI only as permitted by this agreement:</p>
            <ul className="mb-8 space-y-2">
              <li>To provide IT services as specified in the underlying service agreement</li>
              <li>For proper management and administration of Business Associate</li>
              <li>To provide data aggregation services relating to healthcare operations</li>
              <li>As required by law</li>
            </ul>

            <h2 className="section-header text-2xl">4. Safeguards</h2>
            <p className="mb-6">
              Computer Pros will implement appropriate administrative, physical, and technical safeguards 
              to prevent use or disclosure of PHI other than as provided for by this agreement:
            </p>
            <ul className="mb-8 space-y-2">
              <li>Access controls limiting PHI access to authorized personnel only</li>
              <li>Encryption of PHI in transit and at rest</li>
              <li>Regular security risk assessments and monitoring</li>
              <li>Employee training on HIPAA requirements</li>
              <li>Secure backup and disaster recovery procedures</li>
            </ul>

            <h2 className="section-header text-2xl">5. Breach Notification</h2>
            <p className="mb-6">
              Computer Pros will notify the Covered Entity within 24 hours of discovery of any breach 
              of unsecured PHI, providing all available information necessary for the Covered Entity 
              to assess and report the breach.
            </p>

            <h2 className="section-header text-2xl">6. Individual Rights</h2>
            <p className="mb-6">
              Computer Pros will provide access to PHI in Computer Pros' possession as necessary for 
              the Covered Entity to respond to individual requests for access, amendment, or accounting 
              of disclosures.
            </p>

            <h2 className="section-header text-2xl">7. Termination</h2>
            <p className="mb-6">
              Upon termination of this agreement, Computer Pros will return or destroy all PHI received 
              from or created on behalf of the Covered Entity, if feasible. If return or destruction 
              is not feasible, Computer Pros will extend protections to the information.
            </p>

            <h2 className="section-header text-2xl">8. Compliance and Certification</h2>
            <div className="bg-accent p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Computer Pros HIPAA Compliance</h3>
              <ul className="space-y-2">
                <li>✓ SOC 2 Type II Certified</li>
                <li>✓ HIPAA Security Rule Compliant</li>
                <li>✓ HIPAA Privacy Rule Compliant</li>
                <li>✓ Regular compliance audits and assessments</li>
                <li>✓ Dedicated HIPAA compliance officer</li>
              </ul>
            </div>

            <h2 className="section-header text-2xl">9. Contact Information</h2>
            <div className="bg-accent p-6 rounded-lg">
              <p><strong>HIPAA Compliance Officer</strong></p>
              <p>Computer Pros</p>
              <p>Email: hipaa@computerpros-baltimore.com</p>
              <p>Phone: (410) 555-TECH</p>
              <p>Address: Baltimore, MD Metro Area</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAssociateAgreement;