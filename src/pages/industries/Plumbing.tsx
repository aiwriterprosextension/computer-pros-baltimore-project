import IndustryPage from "@/components/IndustryPage";
import { Droplet } from "lucide-react";

const Plumbing = () => (
  <IndustryPage
    slug="plumbing"
    name="Plumbing & Drain Companies"
    shortName="Plumbing"
    Icon={Droplet}
    heroTitle="Websites & AI for Baltimore Plumbers"
    heroSubtitle="Stop losing emergency leads to competitors. Capture, qualify, and book every call — automatically."
    benefits={[
      { title: "24/7 Emergency Lead Capture", description: "AI chat handles after-hours leaks and clogs and books the slot for the morning." },
      { title: "Click-to-Call That Actually Works", description: "Our sites are built so every page makes calling you a one-tap action." },
      { title: "Auto Review Texts", description: "Send a review request the moment the job is done — when customers are most likely to leave 5 stars." },
      { title: "Local SEO for Every Service Area", description: "Rank for plumber-near-me searches across Baltimore, Towson, Columbia, and Ellicott City." },
    ]}
    faqs={[
      { question: "Can the AI chat handle emergency calls overnight?", answer: "Yes. It collects details, gives an honest ETA, and books the slot. You see it first thing in the morning." },
      { question: "Will my site rank in Google Maps?", answer: "We optimize your Google Business Profile and local SEO so you show up in the map pack for plumbing searches in your service area." },
      { question: "Can you migrate my existing site?", answer: "Yes — we'll rebuild it on WordPress with all your existing content and reviews intact." },
      { question: "Do you only work with big plumbing companies?", answer: "No. We work with everyone from solo plumbers to 15-truck shops." },
    ]}
  />
);

export default Plumbing;
