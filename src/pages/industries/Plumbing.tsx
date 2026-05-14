import IndustryPage from "@/components/IndustryPage";
import { Droplet } from "lucide-react";

const Plumbing = () => (
  <IndustryPage
    slug="plumbing"
    trade="Plumbing"
    tradeLong="Plumbing & Drain Companies"
    Icon={Droplet}
    painPoints={[
      { title: "Burst Pipes Don't Wait for Business Hours", description: "Customers with flooding basements at 2am call until someone answers. If that's not you, it's your competitor." },
      { title: "Site Doesn't Show Up on Google", description: "You're not in the local map pack for 'plumber near me' — so 70% of new leads never even see you." },
      { title: "Quote Requests Go Cold", description: "Estimates sent and forgotten. No follow-up means most never convert into jobs." },
    ]}
    helpPoints={{
      website: "Fast mobile site optimized for emergency search terms, with one-tap call buttons on every page.",
      ai: "AI chat handles overnight leaks, drain backups, and water heater failures — captures the job and books a morning slot.",
      care: "Local SEO maintenance so you stay ranked in the Baltimore, Towson, and Columbia map pack month after month.",
    }}
    stats={[
      { value: "2.8x", label: "more emergency calls captured" },
      { value: "Top 3", label: "Google Maps ranking in 90 days" },
      { value: "62%", label: "quote-to-job conversion" },
    ]}
    testimonial={{
      quote: "Before Computer Pros our website was an embarrassment. Now we rank #2 in Maps for plumber Baltimore and the AI chat books overnight calls while I sleep. We added a second truck.",
      author: "Dave M.",
      company: "Owner, Charm City Plumbing & Drain",
    }}
  />
);

export default Plumbing;
