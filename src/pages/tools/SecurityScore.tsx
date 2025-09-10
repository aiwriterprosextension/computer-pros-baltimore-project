import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, XCircle, MonitorSpeaker } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const SecurityScore = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'antivirus',
      question: 'Do you have business-grade antivirus installed on all devices?',
      options: ['Yes, on all devices', 'Yes, on most devices', 'Only on some devices', 'No antivirus protection']
    },
    {
      id: 'backups',
      question: 'How often do you backup your business data?',
      options: ['Daily automated backups', 'Weekly backups', 'Monthly backups', 'Rarely or never']
    },
    {
      id: 'passwords',
      question: 'What is your current password policy?',
      options: ['Strong passwords + 2FA required', 'Strong passwords required', 'Basic password requirements', 'No formal password policy']
    },
    {
      id: 'updates',
      question: 'How do you handle software updates?',
      options: ['Automatic updates enabled', 'Regular manual updates', 'Occasional updates', 'Updates delayed or ignored']
    },
    {
      id: 'training',
      question: 'Do employees receive cybersecurity training?',
      options: ['Regular quarterly training', 'Annual training', 'One-time training', 'No formal training']
    },
    {
      id: 'wifi',
      question: 'How secure is your business WiFi?',
      options: ['WPA3 with guest network', 'WPA2 with guest network', 'WPA2 single network', 'Open or basic security']
    },
    {
      id: 'email',
      question: 'What email security measures do you have?',
      options: ['Advanced threat protection', 'Basic spam filtering', 'Built-in email security only', 'No additional email security']
    },
    {
      id: 'access',
      question: 'How do you control access to sensitive data?',
      options: ['Role-based access controls', 'Basic user permissions', 'Shared accounts for teams', 'Everyone has full access']
    }
  ];

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

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return "Excellent! Your security posture is strong. Consider regular security audits to maintain this level.";
    }
    if (score >= 60) {
      return "Good foundation, but there are areas for improvement. Focus on employee training and access controls.";
    }
    return "Your business has significant security vulnerabilities. Immediate action is recommended to protect your data.";
  };

  const score = showResults ? calculateScore() : 0;
  const ScoreIcon = getScoreIcon(score);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Free Cybersecurity Risk Score Calculator - Computer Pros Baltimore"
        description="Get a quick assessment of your business's cybersecurity posture. Free security evaluation tool for Baltimore businesses."
        keywords="cybersecurity assessment, security risk score, Baltimore cybersecurity, business security evaluation"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Cybersecurity Risk Score Calculator
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Get a quick snapshot of your business's security posture with our comprehensive assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!showResults ? (
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Security Assessment</CardTitle>
                  <CardDescription>
                    Answer these questions to evaluate your current cybersecurity posture.
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
                  
                  <Button 
                    variant="service" 
                    className="w-full"
                    onClick={() => setShowResults(true)}
                    disabled={Object.keys(answers).length < questions.length}
                  >
                    Calculate My Security Score
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="service-card">
                <CardHeader className="text-center">
                  <ScoreIcon className={`h-16 w-16 mx-auto mb-4 ${getScoreColor(score)}`} />
                  <CardTitle className="text-3xl">Your Security Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
                    {score}%
                  </div>
                  
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Assessment Results</h4>
                    <p className="text-muted-foreground">
                      {getRecommendations(score)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Next Steps:</h4>
                    <ul className="text-left space-y-2 text-sm">
                      {score < 60 && (
                        <>
                          <li>• Implement comprehensive backup strategy</li>
                          <li>• Strengthen password policies and enable 2FA</li>
                          <li>• Deploy business-grade security solutions</li>
                        </>
                      )}
                      {score >= 60 && score < 80 && (
                        <>
                          <li>• Enhance employee security training</li>
                          <li>• Implement advanced threat protection</li>
                          <li>• Regular security assessments</li>
                        </>
                      )}
                      {score >= 80 && (
                        <>
                          <li>• Maintain current security practices</li>
                          <li>• Consider annual security audits</li>
                          <li>• Stay updated on emerging threats</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowResults(false);
                      setAnswers({});
                    }}
                  >
                    Retake Assessment
                  </Button>
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
            <h2 className="text-3xl font-bold mb-4">Related Security Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MonitorSpeaker className="h-6 w-6 text-primary mr-2" />
                  Remote Work Security Assessment
                </CardTitle>
                <CardDescription>
                  Evaluate the security of your remote and hybrid workforce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/remote-work-assessment">Assess Remote Security</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  IT Cost Calculator
                </CardTitle>
                <CardDescription>
                  Calculate the cost of security improvements for your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/it-cost">Calculate IT Costs</Link>
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
            Improve Your Security Score
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get professional cybersecurity services to protect your Baltimore business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Schedule Security Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/cybersecurity">Learn About Security Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityScore;