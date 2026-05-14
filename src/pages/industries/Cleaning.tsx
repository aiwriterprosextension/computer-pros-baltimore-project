import IndustryPage from "@/components/IndustryPage";
import { Sparkles } from "lucide-react";

const Cleaning = () => (
  <IndustryPage
    slug="cleaning"
    trade="House Cleaning"
    tradeLong="House Cleaning Companies"
    Icon={Sparkles}
    painPoints={[
      { title: "Phone Tag Eats Your Day", description: "Every booking is a 4-text back-and-forth to confirm a date, address, and price. You're a scheduler, not an owner." },
      { title: "Last-Minute Cancellations Kill Margins", description: "No reminder system means customers forget — and your crews show up to a locked door." },
      { title: "Repeat Customers Get No Easy Path Back", description: "Without recurring booking, customers re-book once… maybe… then drift away to a competitor with an app." },
    ]}
    helpPoints={{
      website: "Online booking right on the homepage — customers pick a date, see the price, and book in under 60 seconds.",
      ai: "Automated reminder texts the day before each clean cut no-shows dramatically, plus review request texts after every job.",
      care: "Recurring booking automation handles weekly, biweekly, and monthly schedules — no spreadsheets, no chasing.",
    }}
    stats={[
      { value: "78%", label: "of bookings now happen online" },
      { value: "−81%", label: "no-shows after reminders launched" },
      { value: "32", label: "new 5-star reviews in 60 days" },
    ]}
    testimonial={{
      quote: "I used to spend 2 hours a day texting to confirm appointments. Now customers book themselves, get a reminder, and we get a review the next morning. I run a real business now.",
      author: "Tina P.",
      company: "Owner, Sparkle Sisters Cleaning",
    }}
  />
);

export default Cleaning;
