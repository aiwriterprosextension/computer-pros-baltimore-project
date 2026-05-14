import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { LucideIcon, AlertTriangle, Globe, Bot, LifeBuoy, Quote } from "lucide-react";

interface PainPoint { title: string; description: string }
interface Stat { value: string; label: string }
interface FAQ { question: string; answer: string }

interface IndustryPageProps {
  slug: string;
  trade: string; // e.g. "HVAC"
  tradeLong: string; // e.g. "HVAC Companies"
  Icon: LucideIcon;
  painPoints: PainPoint[];
  helpPoints: { website: string; ai: string; care: string };
  stats: Stat[];
  testimonial: { quote: string; author: string; company: string };
}

const IndustryPage = ({ slug, trade, tradeLong, Icon, painPoints, helpPoints, stats, testimonial }: IndustryPageProps) => {
  return (
    <>
      <SEOHead
        title={`Websites & AI for Baltimore ${tradeLong} | Computer Pros`}
        description={`Professional websites, AI automation, and care plans built for Baltimore ${tradeLong.toLowerCase()}. Get more booked jobs and 5-star reviews on autopilot.`}
        canonicalUrl={`https://computerpros-baltimore.com/industries/${slug}`}
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-[#E0E0E0] py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Icon className="h-16 w-16 text-[#E01010] mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#E01010] mb-6">
              {trade} Companies in Baltimore Deserve a Website That Works As Hard As They Do
            </h1>
            <p className="text-lg text-[#505050] max-w-3xl mx-auto mb-8">
              Built-for-trade websites and AI automation that turn after-hours calls and Google searches into booked jobs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get a Free Website Quote for Your {trade} Business</Link>
            </Button>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">
              The Problems We Hear from Baltimore {trade} Pros
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((p, i) => (
                <Card key={i} className="border-l-4 border-l-[#E01010]">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-[#E01010] mb-2" />
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How we help */}
        <section className="py-16 bg-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">
              How We Help {trade} Companies Win More Jobs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <Globe className="h-10 w-10 text-[#E01010] mb-2" />
                  <CardTitle>Professional Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{helpPoints.website}</p>
                  <Link to="/services/websites" className="text-[#E01010] hover:underline text-sm font-semibold">Learn more →</Link>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Bot className="h-10 w-10 text-[#E01010] mb-2" />
                  <CardTitle>AI Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{helpPoints.ai}</p>
                  <Link to="/services/ai-automation" className="text-[#E01010] hover:underline text-sm font-semibold">Learn more →</Link>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <LifeBuoy className="h-10 w-10 text-[#E01010] mb-2" />
                  <CardTitle>Monthly Care Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{helpPoints.care}</p>
                  <Link to="/services/care-plans" className="text-[#E01010] hover:underline text-sm font-semibold">Learn more →</Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#505050] text-center mb-12">
              Real Results for Baltimore {trade} Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center bg-[#E0E0E0] rounded-lg p-8">
                  <div className="text-5xl font-bold text-[#E01010] mb-2">{s.value}</div>
                  <div className="text-[#505050]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-[#E0E0E0]">
          <div className="max-w-3xl mx-auto px-4">
            <Card className="bg-white">
              <CardContent className="p-10">
                <Quote className="h-10 w-10 text-[#E01010] mb-4" />
                <blockquote className="text-xl italic text-[#333333] mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-[#505050]">— {testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Stop Losing {trade} Leads?
            </h2>
            <p className="text-lg text-secondary-foreground/90 mb-8">
              Get a free website quote and AI audit tailored to your {trade.toLowerCase()} business.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get a Free Website Quote for Your {trade} Business</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndustryPage;
