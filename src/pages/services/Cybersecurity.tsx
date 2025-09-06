import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, FileCheck, UserCheck, CheckCircle } from "lucide-react";

const Cybersecurity = () => {
  const introPoints = [
    "Real-time threat detection and response",
    "Compliance-ready security measures",
    "Employee security awareness training",
    "Local experts who understand your industry"
  ];

  const styles = {
    title: { color: '#505050', fontWeight: 'bold' },
    text: { color: '#333333' },
    button: { backgroundColor: '#E01010', color: '#FFFFFF', '&:hover': { backgroundColor: '#B00D0D' } },
    section: { backgroundColor: '#E0E0E0' }
  };

  const services = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security defenses to protect against malware, ransomware, and sophisticated cyber attacks."
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of your network for suspicious activity with immediate response to threats."
    },
    {
      icon: Lock,
      title: "Endpoint Security",
      description: "Comprehensive protection for all devices accessing your network, including laptops, phones, and tablets."
    },
    {
      icon: FileCheck,
      title: "Security Audits & Assessments",
      description: "Regular security evaluations to identify vulnerabilities and ensure compliance with industry standards."
    },
    {
      icon: UserCheck,
      title: "Employee Security Training",
      description: "Regular training programs to educate your staff about phishing, social engineering, and best practices."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and recovery services in the event of a security breach or cyber attack."
    }
  ];

  const compliance = [
    "HIPAA (Healthcare)",
    "SOX (Financial Services)", 
    "GDPR (Data Protection)",
    "PCI DSS (Payment Processing)",
    "FERPA (Education)",
    "CJIS (Law Enforcement)",
    "State Data Breach Laws"
  ];

  const threats = [
    "Ransomware attacks have increased 350% in Baltimore area",
    "95% of successful cyber attacks target small businesses",
    "Average cost of a data breach is $4.45 million",
    "60% of small businesses close within 6 months of a cyber attack",
    "Phishing attacks account for 80% of security incidents"
  ];

  return (
    <div className="min-h-screen">
      {/* Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={styles.title}>
              Cybersecurity Solutions for Baltimore Businesses
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={styles.text}>
              Enterprise-grade protection for your digital assets
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6" style={styles.text}>
                Protect your business from evolving cyber threats with enterprise-grade security solutions 
                tailored for Baltimore's small and mid-sized businesses.
              </p>
              <ul className="space-y-3 mb-8">
                {introPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" style={{ color: '#E01010' }} />
                    <span style={styles.text}>{point}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full md:w-auto" style={styles.button} asChild>
                <Link to="/contact">Get Your Free Assessment</Link>
              </Button>
            </div>
            <div>
              <img 
                src="/images/cybersecurity-hero.jpg" 
                alt="Security operations center with analyst"
                className="rounded-lg shadow-lg"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;