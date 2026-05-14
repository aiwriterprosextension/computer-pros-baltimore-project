import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Bot, LifeBuoy, ArrowRight, CheckCircle, Wrench, Droplet, Trees, Sparkles, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-it-services.jpg";
import SEOHead from "@/components/SEOHead";
import InlineCTABlock from "@/components/InlineCTABlock";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustMetricsBar from "@/components/TrustMetricsBar";
import FAQSection from "@/components/FAQSection";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Professional Websites",
      description: "Fast, mobile-first sites built to turn visitors into booked jobs — launched in 5–7 days.",
      href: "/services/websites",
      features: ["Mobile-first design", "Built-in SEO", "Online booking forms"],
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Chatbots, automated review requests, and lead follow-ups that work while you're on the job.",
      href: "/services/ai-automation",
      features: ["24/7 AI chat widget", "Review request texts", "Lead follow-up sequences"],
    },
    {
      icon: LifeBuoy,
      title: "Monthly Care Plans",
      description: "Hosting, updates, backups, and friendly local support — all rolled into one predictable bill.",
      href: "/services/care-plans",
      features: ["Hosting & SSL", "Updates & backups", "Same-day support"],
    },
  ];

  const industries = [
    { icon: Wrench, title: "HVAC", description: "Heating & cooling companies", href: "/industries/hvac" },
    { icon: Droplet, title: "Plumbing", description: "Plumbers & drain specialists", href: "/industries/plumbing" },
    { icon: Trees, title: "Landscaping & Lawn Care", description: "Lawn, landscape & tree pros", href: "/industries/landscaping" },
    { icon: Sparkles, title: "House Cleaning", description: "Residential cleaning crews", href: "/industries/cleaning" },
  ];

  const blogPosts = [
    {
      title: "How Baltimore HVAC Companies Get More Google Reviews with AI",
      excerpt: "The simple AI text automation that's helping local HVAC pros add 30+ reviews a month.",
      category: "AI Automation",
      readTime: "5 min read",
      href: "/blog/hvac-google-reviews-ai",
    },
    {
      title: "Why Your Plumbing Website Is Losing You Jobs",
      excerpt: "5 common website mistakes that send Baltimore homeowners to your competitors.",
      category: "Websites",
      readTime: "6 min read",
      href: "/blog/plumbing-website-losing-jobs",
    },
  ];

  const whyUs = [
    { icon: Wrench, title: "Built for your trade", description: "We design sites and automations specifically for HVAC, plumbing, landscaping, and cleaning businesses." },
    { icon: MapPin, title: "Baltimore-based team", description: "Local people who answer the phone and understand your customers and your market." },
    { icon: Clock, title: "Results in 30 days", description: "New site live, automations running, and more booked jobs hitting your calendar within a month." },
  ];

  const homeFaqs = [
    { question: "How long does a new website take to launch?", answer: "Most home service business sites go live in 5–7 business days once we have your photos, services, and service area details." },
    { question: "What does AI automation actually do for my business?", answer: "It answers customer questions on your site 24/7, texts customers to ask for Google reviews after jobs, and follows up with quote requests automatically — so no lead falls through the cracks." },
    { question: "Do I have to sign a long contract?", answer: "No. Our monthly care plans are month-to-month. We earn your business every month." },
    { question: "Do you only work with Baltimore companies?", answer: "We're based in Baltimore and focus on the Maryland metro area, but we serve home service businesses throughout the Mid-Atlantic." },
    { question: "Can you help if I already have a website?", answer: "Yes. We can rebuild it, redesign it, or add AI automation on top of what you already have." },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Computer Pros - Websites & AI Automation for Baltimore Home Service Businesses"
        description="Professional websites, AI automation, and monthly care plans for Baltimore HVAC, plumbing, landscaping, and house cleaning companies. Launch in 5–7 days."
        keywords="Baltimore HVAC website, plumber website Baltimore, landscaping website, house cleaning website, home service AI automation, Google reviews automation"
        canonicalUrl="https://computerpros-baltimore.com"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Trusted by 50+ Baltimore Home Service Businesses
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Baltimore's Home Service Businesses Run on Referrals. We Make Sure Your Tech Keeps Up.
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional websites, AI automation, and monthly care plans for HVAC, plumbing, landscaping, and cleaning companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/free-audit">Get My Free AI Audit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">See Our Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <TrustMetricsBar />

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">What We Do for Home Service Pros</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple things, done well: a great website, smart AI automation, and a care plan that keeps it all running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-12 w-12 text-primary" />
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="service" className="w-full" asChild>
                      <Link to={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Computer Pros */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Why Computer Pros?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized websites and automation for Baltimore's home service trades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="service-card text-center">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                    <CardDescription className="text-base">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="service" className="w-full" asChild>
                      <Link to={industry.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <InlineCTABlock
        headline="Ready to Get More Booked Jobs?"
        subheadline="Get a free AI audit and we'll show you exactly where you're losing leads — and how to fix it."
        buttonText="Get My Free AI Audit"
        buttonLink="/free-audit"
      />

      {/* Blog Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">From the Blog</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical tips for Baltimore home service businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="blog-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="service" asChild>
                    <Link to={post.href}>Read Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homeFaqs} />

      <StickyMobileCTA />
    </div>
  );
};

export default Home;
