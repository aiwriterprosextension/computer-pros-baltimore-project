import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorSpeaker, Wifi, Shield, Users, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const RemoteWorkAssessment = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'vpn',
      question: 'Do remote employees use a VPN for business access?',
      options: ['Always required VPN', 'VPN recommended but optional', 'VPN available but rarely used', 'No VPN provided']
    },
    {
      id: 'devices',
      question: 'What devices do employees use for remote work?',
      options: ['Company-provided secured devices', 'Mix of company and personal devices', 'Mostly personal devices', 'Personal devices only']
    },
    {
      id: 'wifi',
      question: 'How do you ensure secure WiFi usage for remote workers?',
      options: ['VPN required + WiFi guidelines', 'WiFi security guidelines provided', 'Basic WiFi recommendations', 'No specific WiFi guidance']
    },
    {
      id: 'access',
      question: 'How do employees access company files remotely?',
      options: ['Secure cloud platform with 2FA', 'Cloud platform with basic auth', 'VPN to office servers', 'Email or USB transfers']
    },
    {
      id: 'communication',
      question: 'What tools are used for remote communication?',
      options: ['Business-grade encrypted platforms', 'Standard business platforms', 'Mix of business and personal apps', 'Personal messaging apps']
    },
    {
      id: 'monitoring',
      question: 'Do you monitor remote work security?',
      options: ['Comprehensive monitoring tools', 'Basic endpoint monitoring', 'Manual security checks', 'No monitoring in place']
    },
    {
      id: 'training',
      question: 'How often do remote workers receive security training?',
      options: ['Quarterly remote-specific training', 'Annual security training', 'One-time remote work training', 'No specific remote training']
    },
    {
      id: 'support',
      question: 'What IT support is available for remote workers?',
      options: ['24/7 remote IT support', 'Business hours remote support', 'Limited remote support', 'No dedicated remote support']
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
    if (score >= 75) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 75) return CheckCircle;
    if (score >= 50) return AlertTriangle;
    return XCircle;
  };

  const getRecommendations = (score: number) => {
    if (score >= 75) {
      return "Excellent! Your remote work security is well-implemented. Continue monitoring and updating policies.";
    }
    if (score >= 50) {
      return "Good foundation, but improvements needed. Focus on VPN usage and secure access protocols.";
    }
    return "Significant security gaps in your remote work setup. Immediate action required to protect your business.";
  };

  const score = showResults ? calculateScore() : 0;
  const ScoreIcon = getScoreIcon(score);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Remote Work Security Assessment - Computer Pros Baltimore"
        description="Evaluate your remote work security posture. Free assessment tool for Baltimore businesses with remote and hybrid workforces."
        keywords="remote work security, work from home security, hybrid work security, Baltimore remote IT"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MonitorSpeaker className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Remote Work Security Assessment
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Evaluate the security readiness of your remote or hybrid workforce.
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
                  <CardTitle className="text-2xl">Remote Work Security Evaluation</CardTitle>
                  <CardDescription>
                    Answer these questions to assess your remote work security posture.
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
                    Get My Remote Work Security Score
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="service-card">
                <CardHeader className="text-center">
                  <ScoreIcon className={`h-16 w-16 mx-auto mb-4 ${getScoreColor(score)}`} />
                  <CardTitle className="text-3xl">Your Remote Work Security Score</CardTitle>
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
                    <h4 className="font-semibold">Priority Improvements:</h4>
                    <ul className="text-left space-y-2 text-sm">
                      {score < 50 && (
                        <>
                          <li>• Implement mandatory VPN for all remote access</li>
                          <li>• Establish secure file sharing protocols</li>
                          <li>• Provide company-managed devices</li>
                          <li>• Deploy endpoint security monitoring</li>
                        </>
                      )}
                      {score >= 50 && score < 75 && (
                        <>
                          <li>• Enhance remote worker security training</li>
                          <li>• Improve WiFi security guidelines</li>
                          <li>• Implement comprehensive monitoring</li>
                          <li>• Standardize communication platforms</li>
                        </>
                      )}
                      {score >= 75 && (
                        <>
                          <li>• Maintain current security standards</li>
                          <li>• Regular security policy reviews</li>
                          <li>• Advanced threat monitoring</li>
                          <li>• Continuous security awareness training</li>
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
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Cybersecurity Risk Score
                </CardTitle>
                <CardDescription>
                  Get a comprehensive assessment of your overall security posture.
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
                  <Users className="h-6 w-6 text-primary mr-2" />
                  Phishing Awareness Test
                </CardTitle>
                <CardDescription>
                  Test your remote team's ability to identify phishing attempts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/phishing-test">Test Phishing Awareness</Link>
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
            Secure Your Remote Workforce
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get expert help implementing secure remote work solutions for your Baltimore business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Schedule Remote Work Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/managed-services">Learn About Managed Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoteWorkAssessment;