import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";

const ProfessionalServices = () => {
  return (
    <>
      <SEOHead 
        title="IT Services for Professional Firms in Baltimore | Computer Pros"
        description="Secure, scalable IT support for consultants, agencies, and service-based businesses. Book a free assessment and explore AI-powered solutions."
        canonicalUrl="https://computerpros-baltimore.com/industries/professional-services"
      />
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-[#E0E0E0] py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#E01010] mb-6">
              IT Solutions for Professional Service Firms
            </h1>
            <p className="text-lg text-[#505050] max-w-3xl mx-auto">
              Reliable, secure, and scalable IT for consultants, agencies, and service-based businesses in Baltimore.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">
              Why Professional Firms Choose Computer Pros
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#E01010] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Secure Client Data</h3>
                <p className="text-gray-600">Protect sensitive client files and communications with enterprise-grade cybersecurity.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#E01010] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Minimize Downtime</h3>
                <p className="text-gray-600">24/7 monitoring and rapid response to keep your team productive.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#E01010] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Cloud Collaboration</h3>
                <p className="text-gray-600">Enable remote work and file sharing with Microsoft 365 or Google Workspace.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#E01010] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">AI-Powered Efficiency</h3>
                <p className="text-gray-600">Use AI tools to automate scheduling, reporting, and client onboarding.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Use our AI Tool Finder to streamline reporting and scheduling → <Link to="/tools/ai-finder" className="text-[#E01010] hover:underline">AI Tool Finder</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Services We Provide */}
        <section className="py-16 bg-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">
              Services We Provide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Managed IT Services</h3>
                <p className="text-gray-600">Proactive monitoring, maintenance, and support for all your technology.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Cybersecurity</h3>
                <p className="text-gray-600">Protect your business from threats with comprehensive security solutions.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">AI Enablement</h3>
                <p className="text-gray-600">Implement AI tools to automate tasks and improve productivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Score CTA */}
        <InlineCTABlock 
          headline="Get a quick snapshot of your security posture"
          subheadline="Ensure your professional services firm is protected with our free cybersecurity assessment."
          buttonText="Get My Security Score"
          buttonLink="/tools/security-score"
        />

        {/* FAQ Section */}
        <FAQSection faqs={[
          {
            question: "What types of professional firms do you support?",
            answer: "We serve consultants, agencies, architects, engineers, and other service-based SMBs."
          },
          {
            question: "Can you help with secure client portals?",
            answer: "Yes. We implement encrypted file sharing, secure login systems, and access controls."
          },
          {
            question: "Do you offer AI tools for reporting and scheduling?",
            answer: "Absolutely. We deploy AI assistants for task automation, reporting, and calendar management."
          },
          {
            question: "How do you protect intellectual property for consulting firms?",
            answer: "We implement document security, access controls, and encrypted communication to safeguard your proprietary methodologies and client work."
          },
          {
            question: "Can you help with project collaboration tools?",
            answer: "Yes. We set up secure project management platforms, team collaboration tools, and client communication systems tailored to professional services."
          }
        ]} />
      </div>
    </>
  );
};

export default ProfessionalServices;