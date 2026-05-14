import IndustryPage from "@/components/IndustryPage";
import { Trees } from "lucide-react";

const Landscaping = () => (
  <IndustryPage
    slug="landscaping"
    trade="Landscaping"
    tradeLong="Landscaping & Lawn Care Companies"
    Icon={Trees}
    painPoints={[
      { title: "Beautiful Work, Boring Website", description: "Your portfolio is your superpower — but your site doesn't show off the before/after photos that close the deal." },
      { title: "Quote Requests Pile Up in Spring", description: "March hits and you have 50 quote requests you can't keep up with. Half go cold before you can follow up." },
      { title: "No Recurring Revenue", description: "Every spring you start from zero with no easy way for repeat customers to re-sign for the season." },
    ]}
    helpPoints={{
      website: "Stunning before/after project galleries that show off your best work and make pricing feel justified.",
      ai: "Quote requests get an instant AI reply and a multi-step follow-up sequence so leads don't go cold during the spring rush.",
      care: "Online recurring booking for weekly mowing, seasonal cleanups, and contract renewals — set up once, billed automatically.",
    }}
    stats={[
      { value: "180+", label: "project gallery photos showcased" },
      { value: "4.7x", label: "spring quote-to-contract rate" },
      { value: "$38k", label: "added annual recurring revenue" },
    ]}
    testimonial={{
      quote: "The before-and-after gallery alone changed how customers see us. They book before even getting on a call. And the recurring booking system means I'm not chasing payments every Friday.",
      author: "Carlos T.",
      company: "Owner, Greenway Lawn & Landscape",
    }}
  />
);

export default Landscaping;
