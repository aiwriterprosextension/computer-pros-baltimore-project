import IndustryPage from "@/components/IndustryPage";
import { Sparkles } from "lucide-react";

const Cleaning = () => (
  <IndustryPage
    slug="cleaning"
    name="House Cleaning Companies"
    shortName="House Cleaning"
    Icon={Sparkles}
    heroTitle="Websites & AI for Baltimore House Cleaning Companies"
    heroSubtitle="Online booking, automatic reminders, and review automation — built for residential cleaning crews."
    benefits={[
      { title: "Instant Online Booking", description: "Customers pick a date, get a quote, and book — without picking up the phone." },
      { title: "Appointment Reminder Texts", description: "Automated reminders cut no-shows and last-minute cancellations dramatically." },
      { title: "Review Requests on Autopilot", description: "Texts go out after every clean. More 5-star reviews mean more bookings." },
      { title: "Recurring Customer Sign-ups", description: "Weekly, biweekly, and monthly recurring schedules handled automatically." },
    ]}
    faqs={[
      { question: "Can customers really book and pay online?", answer: "Yes. We can integrate booking with payment, deposits, or just a request-to-book flow — your call." },
      { question: "Will reminders go to text or email?", answer: "Both, if you want. Most cleaning clients see the best results with a 24-hour text reminder." },
      { question: "Do you help with branding?", answer: "We can refresh your logo and brand colors as part of the website build." },
      { question: "How long until I see more bookings?", answer: "Most cleaning clients see a meaningful increase in online bookings within 30 days of launching." },
    ]}
  />
);

export default Cleaning;
