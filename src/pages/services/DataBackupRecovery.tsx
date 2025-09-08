import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cloud, Shield, Clock, Server, AlertTriangle, Zap } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import SEOHead from "@/components/SEOHead";

const DataBackupRecovery = () => {
  const benefits = [
    "Automated daily backups with no manual intervention required",
    "Cloud and local backup redundancy for maximum protection",
    "Rapid data recovery with minimal business disruption",
    "Continuous monitoring and automated testing",
    "HIPAA-compliant backup solutions for regulated industries",
    "Ransomware protection with immutable backup copies",
    "Professional setup and ongoing management included"
  ];

  const backupSolutions = [
    {
      icon: Cloud,
      title: "Cloud Backup",
      description: "Secure, encrypted backups stored in enterprise-grade cloud infrastructure"
    },
    {
      icon: Server,
      title: "Local Backup",
      description: "On-site backup appliances for rapid recovery and compliance requirements"
    },
    {
      icon: Shield,
      title: "Ransomware Protection",
      description: "Immutable backup copies that can't be encrypted by malware"
    },
    {
      icon: Clock,
      title: "Continuous Backup",
      description: "Real-time data protection with minimal recovery point objectives"
    },
    {
      icon: Zap,
      title: "Instant Recovery",
      description: "Virtual machine recovery and bare-metal restoration capabilities"
    },
    {
      icon: AlertTriangle,
      title: "Disaster Recovery",
      description: "Complete business continuity planning and disaster recovery testing"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Data Assessment",
      description: "Comprehensive evaluation of your data, systems, and recovery requirements"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom backup strategy designed for your business needs and compliance requirements"
    },
    {
      step: "3",
      title: "System Installation",
      description: "Professional installation and configuration of backup hardware and software"
    },
    {
      step: "4",
      title: "Initial Backup",
      description: "Complete initial backup and verification of all critical business data"
    },
    {
      step: "5",
      title: "Testing & Optimization",
      description: "Backup testing and recovery verification to ensure reliability"
    },
    {
      step: "6",
      title: "Ongoing Monitoring",
      description: "24/7 monitoring, maintenance, and regular recovery testing"
    }
  ];

  const recoveryOptions = [
    {
      type: "File-Level Recovery",
      time: "Minutes",
      description: "Restore individual files or folders quickly without full system recovery"
    },
    {
      type: "Application Recovery", 
      time: "30-60 Minutes",
      description: "Restore specific applications and databases with minimal downtime"
    },
    {
      type: "Full System Recovery",
      time: "2-4 Hours",
      description: "Complete server restoration to new or existing hardware"
    },
    {
      type: "Disaster Recovery",
      time: "4-24 Hours", 
      description: "Full business operations restoration at alternate location if needed"
    }
  ];

  const faqs = [
    {
      question: "How often are backups performed?",
      answer: "We perform automated backups daily at minimum, with many clients using continuous backup for critical systems. The frequency depends on your business needs and data change rate."
    },
    {
      question: "Where is my backup data stored?",
      answer: "We use a hybrid approach with both local backup appliances for rapid recovery and encrypted cloud storage for offsite protection. All cloud storage is in secure, SOC 2 certified data centers."
    },
    {
      question: "How quickly can you restore my data?",
      answer: "File-level recovery typically takes minutes, while full system recovery ranges from 2-4 hours depending on data volume. We design solutions to meet your specific recovery time requirements."
    },
    {
      question: "Is my backup data encrypted?",
      answer: "Yes, all backup data is encrypted both in transit and at rest using enterprise-grade encryption. We manage encryption keys securely and provide detailed compliance reporting."
    },
    {
      question: "Do you test backups regularly?",
      answer: "Absolutely. We perform automated backup verification daily and conduct full recovery testing monthly to ensure your data can be restored when needed."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Data Backup & Recovery Setup in Baltimore | Computer Pros"
        description="Professional data backup and recovery solutions for Baltimore businesses. Automated backups, ransomware protection, and rapid recovery with ongoing monitoring."
        keywords="data backup Baltimore, disaster recovery Maryland, cloud backup setup, ransomware protection Baltimore, business continuity planning"
        canonicalUrl="https://computerpros-baltimore.com/services/data-backup-recovery"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Business Continuity Protection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Data Backup & Recovery Setup for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Protect your business data with automated backup solutions and rapid recovery capabilities. 
              Professional setup, ongoing monitoring, and ransomware protection included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton 
                text="Schedule Backup Assessment" 
                variant="hero" 
                size="lg"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/cybersecurity">View Security Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-header text-left mb-6">
                  Comprehensive Data Protection Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Data loss can destroy a business in minutes, but recovery doesn't have to take days. 
                  Our professional backup and recovery solutions ensure your Baltimore business can 
                  bounce back quickly from any data disaster.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  From automated daily backups to comprehensive disaster recovery planning, we design 
                  solutions that protect your critical business data and ensure rapid recovery when 
                  you need it most. Every solution includes ongoing monitoring and regular testing.
                </p>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {backupSolutions.slice(0, 4).map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <Card key={index} className="service-card">
                      <CardHeader className="text-center pb-4">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {solution.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Solutions Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Complete Backup & Recovery Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement layered data protection strategies that safeguard against every type of data loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backupSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="service-card">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{solution.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recovery Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Recovery Time Objectives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Different recovery scenarios with predictable timeframes to restore your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recoveryOptions.map((option, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{option.type}</CardTitle>
                    <Badge variant="secondary" className="text-sm font-medium">
                      {option.time}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Our Setup Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a comprehensive process to ensure your backup solution is properly configured 
              and thoroughly tested before going live.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <Card key={index} className="service-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Backup & Recovery Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, predictable pricing with setup fee and monthly monitoring included.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Complete Backup Solution</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">$500</div>
                  <div className="text-sm text-muted-foreground">one-time setup fee</div>
                  <div className="text-lg font-semibold">+ $50/month</div>
                  <div className="text-sm text-muted-foreground">ongoing monitoring & management</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Complete backup system design and installation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Hybrid cloud and local backup configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ransomware protection and immutable backups</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Initial full backup and recovery testing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 monitoring and automated alerts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Monthly backup verification and reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Unlimited recovery assistance when needed</span>
                  </li>
                </ul>
                <CalendlyPopupButton 
                  text="Setup Backup Protection" 
                  variant="default" 
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Don't Risk Losing Your Business Data
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Protect your Baltimore business with professional backup and recovery solutions. 
            Setup includes testing, monitoring, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton 
              text="Schedule Backup Assessment" 
              variant="hero" 
              size="lg"
            />
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/cybersecurity">Learn About Security Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataBackupRecovery;