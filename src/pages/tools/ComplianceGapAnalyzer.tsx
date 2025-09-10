import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileText, AlertTriangle, CheckCircle, XCircle, Brain } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const ComplianceGapAnalyzer = () => {
  const [industry, setIndustry] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const industries = [
    { id: 'healthcare', label: 'Healthcare/Medical', frameworks: ['HIPAA', 'HITECH'] },
    { id: 'finance', label: 'Financial Services', frameworks: ['SOX', 'PCI DSS', 'GLBA'] },
    { id: 'legal', label: 'Legal Services', frameworks: ['Attorney-Client Privilege', 'State Bar Requirements'] },
    { id: 'education', label: 'Education', frameworks: ['FERPA', 'COPPA'] },
    { id: 'general', label: 'General Business', frameworks: ['GDPR', 'CCPA', 'SOC 2'] }
  ];

  const getQuestionsForIndustry = (industryId: string) => {
    const baseQuestions = [
      {
        id: 'data-encryption',
        question: 'Is sensitive data encrypted both at rest and in transit?',
        options: ['Yes, fully encrypted', 'Partially encrypted', 'Planning to encrypt', 'No encryption']
      },
      {
        id: 'access-controls',
        question: 'Do you have role-based access controls for sensitive data?',
        options: ['Comprehensive RBAC system', 'Basic access controls', 'Limited access controls', 'No formal access controls']
      },
      {
        id: 'audit-logs',
        question: 'Do you maintain comprehensive audit logs?',
        options: ['Complete audit trail', 'Basic logging', 'Limited logging', 'No audit logs']
      },
      {
        id: 'incident-response',
        question: 'Do you have a documented incident response plan?',
        options: ['Tested incident response plan', 'Written plan, not tested', 'Basic plan exists', 'No incident response plan']
      }
    ];

    const industrySpecific = {
      healthcare: [
        {
          id: 'hipaa-training',
          question: 'Do all staff receive HIPAA compliance training?',
          options: ['Annual HIPAA training', 'One-time HIPAA training', 'Basic privacy training', 'No HIPAA training']
        },
        {
          id: 'baa-agreements',
          question: 'Do you have Business Associate Agreements with vendors?',
          options: ['All vendors have BAAs', 'Most vendors have BAAs', 'Some vendors have BAAs', 'No BAAs in place']
        }
      ],
      finance: [
        {
          id: 'pci-compliance',
          question: 'Are you PCI DSS compliant for payment processing?',
          options: ['Fully PCI compliant', 'Mostly compliant', 'Working toward compliance', 'Not PCI compliant']
        },
        {
          id: 'sox-controls',
          question: 'Do you have SOX-compliant financial controls?',
          options: ['Full SOX compliance', 'Partial SOX compliance', 'Basic financial controls', 'No SOX controls']
        }
      ],
      legal: [
        {
          id: 'attorney-client',
          question: 'How do you protect attorney-client privileged communications?',
          options: ['Comprehensive privilege protection', 'Standard protection measures', 'Basic protection', 'Limited protection']
        },
        {
          id: 'document-retention',
          question: 'Do you have a compliant document retention policy?',
          options: ['Comprehensive retention policy', 'Basic retention policy', 'Informal retention practices', 'No retention policy']
        }
      ],
      education: [
        {
          id: 'ferpa-compliance',
          question: 'Are you FERPA compliant for student records?',
          options: ['Fully FERPA compliant', 'Mostly compliant', 'Working toward compliance', 'Not FERPA compliant']
        }
      ],
      general: [
        {
          id: 'gdpr-compliance',
          question: 'How do you handle GDPR/privacy requirements?',
          options: ['Full GDPR compliance', 'Partial compliance', 'Basic privacy measures', 'No GDPR measures']
        }
      ]
    };

    return [...baseQuestions, ...(industrySpecific[industryId as keyof typeof industrySpecific] || [])];
  };

  const questions = industry ? getQuestionsForIndustry(industry) : [];

  const calculateScore = () => {
    let totalScore = 0;
    const maxScore = questions.length * 3;
    
    Object.values(answers).forEach(answer => {
      const answerIndex = questions.find(q => 
        q.options.includes(answer as string)
      )?.options.indexOf(answer as string) || 0;
      totalScore += (3 - answerIndex);
    });
    
    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return AlertTriangle;
    return XCircle;
  };

  const getRecommendations = (score: number, industryId: string) => {
    const selectedIndustry = industries.find(i => i.id === industryId);
    const frameworks = selectedIndustry?.frameworks.join(', ') || 'relevant compliance frameworks';
    
    if (score >= 80) {
      return `Excellent! Your compliance with ${frameworks} is strong. Continue regular assessments.`;
    }
    if (score >= 60) {
      return `Good foundation, but gaps exist in your ${frameworks} compliance. Focus on documentation and training.`;
    }
    return `Significant compliance gaps identified. Immediate action required for ${frameworks} compliance.`;
  };

  const score = showResults ? calculateScore() : 0;
  const ScoreIcon = getScoreIcon(score);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Compliance Gap Analyzer - Computer Pros Baltimore"
        description="Identify compliance gaps in your business with HIPAA, GDPR, SOX, and other regulations. Free compliance assessment tool."
        keywords="compliance assessment, HIPAA compliance, GDPR compliance, Baltimore compliance consulting"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Compliance Gap Analyzer
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Identify gaps in your business's compliance with key regulations like HIPAA, GDPR, and industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!industry ? (
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Select Your Industry</CardTitle>
                  <CardDescription>
                    Choose your industry to get relevant compliance questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setIndustry(ind.id)}
                      className="w-full p-4 text-left border border-input rounded-md hover:bg-accent transition-colors"
                    >
                      <div className="font-semibold">{ind.label}</div>
                      <div className="text-sm text-muted-foreground">
                        Compliance frameworks: {ind.frameworks.join(', ')}
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            ) : !showResults ? (
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Compliance Assessment</CardTitle>
                  <CardDescription>
                    Answer these questions to identify compliance gaps in your organization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {questions.map((question, index) => (
                    <div key={question.id} className="space-y-3">
                      <h4 className="font-semibold">
                        {index + 1}. {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              onChange={(e) => setAnswers({...answers, [question.id]: e.target.value})}
                              className="text-primary"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIndustry('');
                        setAnswers({});
                      }}
                    >
                      Change Industry
                    </Button>
                    <Button 
                      variant="service" 
                      className="flex-1"
                      onClick={() => setShowResults(true)}
                      disabled={Object.keys(answers).length < questions.length}
                    >
                      Analyze Compliance Gaps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="service-card">
                <CardHeader className="text-center">
                  <ScoreIcon className={`h-16 w-16 mx-auto mb-4 ${getScoreColor(score)}`} />
                  <CardTitle className="text-3xl">Your Compliance Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
                    {score}%
                  </div>
                  
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Compliance Analysis</h4>
                    <p className="text-muted-foreground">
                      {getRecommendations(score, industry)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Priority Actions:</h4>
                    <ul className="text-left space-y-2 text-sm">
                      {score < 60 && (
                        <>
                          <li>• Implement comprehensive data encryption</li>
                          <li>• Establish formal access controls</li>
                          <li>• Create incident response procedures</li>
                          <li>• Begin compliance training program</li>
                        </>
                      )}
                      {score >= 60 && score < 80 && (
                        <>
                          <li>• Enhance audit logging capabilities</li>
                          <li>• Improve staff training programs</li>
                          <li>• Strengthen vendor agreements</li>
                          <li>• Regular compliance assessments</li>
                        </>
                      )}
                      {score >= 80 && (
                        <>
                          <li>• Maintain current compliance standards</li>
                          <li>• Regular third-party audits</li>
                          <li>• Stay current with regulatory changes</li>
                          <li>• Continuous improvement processes</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowResults(false);
                        setAnswers({});
                        setIndustry('');
                      }}
                    >
                      Start Over
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowResults(false);
                        setAnswers({});
                      }}
                    >
                      Retake Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Compliance Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 text-primary mr-2" />
                  Cybersecurity Risk Score
                </CardTitle>
                <CardDescription>
                  Assess your security posture to support compliance efforts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/security-score">Check Security Score</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-2" />
                  AI Tool Finder
                </CardTitle>
                <CardDescription>
                  Find AI tools that meet your industry's compliance requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/ai-finder">Find Compliant AI Tools</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Achieve Full Compliance
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get expert help implementing comprehensive compliance solutions for your Baltimore business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Schedule Compliance Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/cybersecurity">Learn About Compliance Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceGapAnalyzer;