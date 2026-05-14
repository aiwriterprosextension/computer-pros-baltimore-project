import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import FAQSection from "@/components/FAQSection";
import { CheckCircle, LucideIcon } from "lucide-react";

interface IndustryPageProps {
  slug: string;
  name: string;
  shortName: string;
  Icon: LucideIcon;
  heroTitle: string;
  heroSubtitle: string;
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const IndustryPage = ({ slug, name, shortName, Icon, heroTitle, heroSubtitle, benefits, faqs }: IndustryPageProps) => {
  return (
    <>
      <SEOHead
        title={`${name} Websites & AI in Baltimore | Computer Pros`}
        description={`Websites, AI automation, and care plans for ${name.toLowerCase()} in Baltimore. Get more booked jobs and Google reviews on autopilot.`}
        canonicalUrl={`https://computerpros-baltimore.com/industries/${slug}`}
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-[#E0E0E0] py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Icon className="h-16 w-16 text-[#E01010] mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-[#E01010] mb-6">{heroTitle}</h1>
            <p className="text-lg text-[#505050] max-w-3xl mx-auto mb-8">{heroSubtitle}</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-audit">Get My Free AI Audit</Link>
            </Button>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">
              Why {shortName} Pros in Baltimore Choose Computer Pros
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                  <CheckCircle className="h-8 w-8 text-[#E01010] mb-4" />
                  <h3 className="text-xl font-semibold text-[#333333] mb-3">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services snapshot */}
        <section className="py-16 bg-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">What We Build for {shortName}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Professional Website</h3>
                <p className="text-gray-600">Mobile-first site that turns Google searches into booked jobs.</p>
                <Link to="/services/websites" className="text-[#E01010] hover:underline text-sm mt-3 inline-block">Learn more</Link>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">AI Automation</h3>
                <p className="text-gray-600">Chat widget, review requests, and lead follow-ups on autopilot.</p>
                <Link to="/services/ai-automation" className="text-[#E01010] hover:underline text-sm mt-3 inline-block">Learn more</Link>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Monthly Care Plan</h3>
                <p className="text-gray-600">Hosting, updates, backups, and support — all in one bill.</p>
                <Link to="/services/care-plans" className="text-[#E01010] hover:underline text-sm mt-3 inline-block">Learn more</Link>
              </div>
            </div>
          </div>
        </section>

        <InlineCTABlock
          headline={`Ready to grow your ${shortName.toLowerCase()} business?`}
          subheadline="Get a free AI audit and see exactly where you're losing leads — and how to fix it."
          buttonText="Get My Free AI Audit"
          buttonLink="/free-audit"
        />

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
};

export default IndustryPage;
