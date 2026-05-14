import IndustryPage from "@/components/IndustryPage";
import { Wrench } from "lucide-react";

const HVAC = () => (
  <IndustryPage
    slug="hvac"
    trade="HVAC"
    tradeLong="HVAC Companies"
    Icon={Wrench}
    painPoints={[
      { title: "Missed Overnight Emergency Calls", description: "Heat goes out at 11pm — voicemail picks up, customer calls the next company on Google. Lead lost." },
      { title: "Slow, Outdated Website", description: "Your site loads in 8 seconds on mobile. Homeowners searching 'AC repair near me' bounce before it loads." },
      { title: "No Review Automation", description: "You finish 80 jobs a month but only get 2 Google reviews because no one's asking." },
    ]}
    helpPoints={{
      website: "Mobile-first site that handles seasonal demand spikes with click-to-call on every page and clear emergency service messaging.",
      ai: "24/7 AI chat captures and qualifies after-hours leaks, no-heat calls, and AC failures — then books them automatically.",
      care: "Hosting tuned for traffic spikes during heat waves and cold snaps so your site never goes down when you need it most.",
    }}
    stats={[
      { value: "47", label: "new Google reviews in 60 days" },
      { value: "3.2x", label: "more after-hours bookings" },
      { value: "5 sec", label: "average mobile load time" },
    ]}
    testimonial={{
      quote: "We were missing every overnight call. Now the AI books them and I see the job on my phone at 6am with the customer's address and what's wrong. Game changer during the summer rush.",
      author: "Mike R.",
      company: "Owner, Baltimore HVAC Service Co.",
    }}
  />
);

export default HVAC;
