import IndustryPage from "@/components/IndustryPage";
import { Trees } from "lucide-react";

const Landscaping = () => (
  <IndustryPage
    slug="landscaping"
    name="Landscaping & Lawn Care Companies"
    shortName="Landscaping"
    Icon={Trees}
    heroTitle="Websites & AI for Baltimore Landscapers"
    heroSubtitle="Show off your work, book seasonal contracts, and follow up with every quote request — automatically."
    benefits={[
      { title: "Stunning Project Galleries", description: "Before/after galleries that show off your best work and convert browsers into clients." },
      { title: "Quote Request Automation", description: "Quote requests get an instant reply, then a follow-up sequence so leads don't go cold." },
      { title: "Seasonal Booking Pushes", description: "Automated email blasts for spring cleanups, mulch installs, and fall leaf removal." },
      { title: "Recurring Service Sign-ups", description: "Easy online sign-up for weekly mowing or seasonal contracts — no phone tag required." },
    ]}
    faqs={[
      { question: "Can my site handle photo galleries?", answer: "Absolutely. Big, fast-loading project galleries are a core part of every landscaping site we build." },
      { question: "Can customers book recurring lawn care online?", answer: "Yes. We integrate booking that handles one-time, weekly, biweekly, or seasonal services." },
      { question: "Will the site work on mobile?", answer: "Mobile-first is our default — over 80% of landscaping searches happen on phones." },
      { question: "Can you help with social media?", answer: "Yes — our Growth Suite plan includes 4 social posts a week, AI-assisted." },
    ]}
  />
);

export default Landscaping;
