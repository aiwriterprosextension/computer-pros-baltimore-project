import IndustryPage from "@/components/IndustryPage";
import { Wrench } from "lucide-react";

const HVAC = () => (
  <IndustryPage
    slug="hvac"
    name="HVAC Companies"
    shortName="HVAC"
    Icon={Wrench}
    heroTitle="Websites & AI for Baltimore HVAC Companies"
    heroSubtitle="Capture every emergency call, automate review requests, and book more jobs without lifting a finger."
    benefits={[
      { title: "Emergency Call Capture", description: "AI chat answers questions and books emergency service calls 24/7 — even at 2am." },
      { title: "More Google Reviews", description: "Auto-text every customer after the job. More 5-star reviews mean more calls." },
      { title: "Seasonal Maintenance Reminders", description: "Automated email and text reminders for tune-ups keep your trucks busy in shoulder seasons." },
      { title: "Mobile-First Website", description: "75% of HVAC searches happen on phones. Your site needs to load fast and convert." },
    ]}
    faqs={[
      { question: "Can the AI chat actually book a service call?", answer: "Yes. It collects the customer's name, address, issue, and preferred time, then drops it straight into your inbox or CRM." },
      { question: "How many reviews can I really get?", answer: "Most HVAC clients see 20–40 new Google reviews in the first 60 days of automated review requests." },
      { question: "Do you integrate with ServiceTitan or Housecall Pro?", answer: "Yes — we connect lead forms and review automation to most major HVAC field service platforms." },
      { question: "How fast can my site launch?", answer: "5–7 business days for a Starter site, 2–3 weeks for the AI-Powered Pro plan." },
    ]}
  />
);

export default HVAC;
