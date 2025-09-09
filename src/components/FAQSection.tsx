import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const defaultFaqs = [
    {
      question: "What IT services do Baltimore businesses need most?",
      answer: "Managed IT, cybersecurity, cloud migration, and 24/7 monitoring are top priorities. Outsourced IT helps SMBs reduce costs while maintaining enterprise-grade security."
    },
    {
      question: "How much do managed IT services cost in Baltimore?",
      answer: "Typically $100–$300 per user/month depending on needs. We offer transparent pricing with no hidden fees."
    },
    {
      question: "Do you provide emergency IT support in Baltimore?",
      answer: "Yes—our local team offers 24/7 emergency response for outages, breaches, and system failures."
    },
    {
      question: "What cybersecurity services do you offer Baltimore companies?",
      answer: "Threat monitoring, firewall management, endpoint protection, compliance audits, and incident response."
    },
    {
      question: "Can you help with HIPAA compliance for Baltimore healthcare practices?",
      answer: "Absolutely. We provide risk assessments, staff training, and ongoing compliance monitoring."
    },
    {
      question: "Do you work with small businesses in Baltimore?",
      answer: "Yes—we serve firms from 5 to 500 employees with scalable, affordable IT solutions."
    },
    {
      question: "How quickly can you respond to IT emergencies in Baltimore?",
      answer: "We guarantee 4-hour response times, often resolving urgent issues within 1–2 hours."
    },
    {
      question: "What's included in your Baltimore managed IT services?",
      answer: "24/7 monitoring, help desk, security, backups, updates, hardware support, and strategic planning."
    }
  ];

  const faqsToDisplay = faqs || defaultFaqs;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about IT services in Baltimore.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqsToDisplay.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;