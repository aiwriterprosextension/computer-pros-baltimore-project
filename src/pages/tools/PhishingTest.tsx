import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, AlertTriangle, Brain } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const PhishingTest = () => {
  const [phishingScore, setPhishingScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const phishingQuestions = [
    {
      question: "You receive an urgent email from your 'bank' asking you to verify your account by clicking a link. What do you do?",
      options: [
        "Click the link immediately to secure my account",
        "Check the sender's email address and contact my bank directly",
        "Forward the email to colleagues to warn them",
        "Delete the email without reading it"
      ],
      correct: 1
    },
    {
      question: "An email claims to be from Microsoft asking for your Office 365 password to 'update security settings'. What's the best response?",
      options: [
        "Provide the password since it's from Microsoft",
        "Ignore it - Microsoft never asks for passwords via email",
        "Call the number provided in the email",
        "Change your password immediately"
      ],
      correct: 1
    },
    {
      question: "You get an email with an attachment labeled 'Invoice.pdf.exe'. What should you do?",
      options: [
        "Open it to see what the invoice is for",
        "Don't open it - the double extension is suspicious",
        "Forward it to accounting to handle",
        "Save it to desktop for later review"
      ],
      correct: 1
    },
    {
      question: "A colleague sends you a link to an 'urgent document' but the email seems slightly off. What do you do?",
      options: [
        "Click the link since it's from a colleague",
        "Call or message the colleague to verify they sent it",
        "Share the link with your team",
        "Ignore it completely"
      ],
      correct: 1
    },
    {
      question: "You receive a prize notification email asking for personal information to claim your winnings. What's your response?",
      options: [
        "Provide the information to claim the prize",
        "Delete the email - it's likely a scam",
        "Forward it to friends who might be interested",
        "Click to see what the prize is"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Free Phishing Awareness Test - Computer Pros Baltimore"
        description="Test your ability to identify phishing emails with our free interactive quiz. Improve your cybersecurity awareness and protect your Baltimore business."
        keywords="phishing test, email security, cybersecurity awareness, phishing quiz, Baltimore cybersecurity"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Phishing Awareness Test
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Test your ability to identify phishing emails and improve your cybersecurity awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Phishing Awareness Quiz</CardTitle>
                <CardDescription>
                  Answer 5 questions to test your phishing detection skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuestion < phishingQuestions.length ? (
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {phishingQuestions.length}
                    </div>
                    
                    <h4 className="font-semibold text-lg">
                      {phishingQuestions[currentQuestion].question}
                    </h4>
                    
                    <div className="space-y-3">
                      {phishingQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className="w-full p-4 text-left border border-input rounded-md hover:bg-accent transition-colors"
                          onClick={() => {
                            if (index === phishingQuestions[currentQuestion].correct) {
                              setPhishingScore(phishingScore + 1);
                            }
                            setCurrentQuestion(currentQuestion + 1);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto" />
                    <h4 className="text-3xl font-bold">Test Complete!</h4>
                    <div className="text-5xl font-bold text-primary">
                      {phishingScore}/{phishingQuestions.length}
                    </div>
                    <div className="bg-accent/30 p-6 rounded-lg">
                      <p className="text-lg mb-4">
                        {phishingScore === phishingQuestions.length 
                          ? "Perfect! You have excellent phishing awareness."
                          : phishingScore >= 4
                          ? "Great job! You have good security awareness."
                          : phishingScore >= 2
                          ? "Good effort! Consider additional security training."
                          : "Your team would benefit from security awareness training."
                        }
                      </p>
                      <p className="text-muted-foreground">
                        Phishing attacks are responsible for 91% of successful cyber attacks. Regular training can reduce your risk by up to 70%.
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setCurrentQuestion(0);
                        setPhishingScore(0);
                      }}
                    >
                      Retake Test
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
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
                  Get a comprehensive assessment of your business's security posture.
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
                  <Brain className="h-6 w-6 text-primary mr-2" />
                  Compliance Gap Analyzer
                </CardTitle>
                <CardDescription>
                  Identify compliance gaps in your security and data protection practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/compliance-gap-analyzer">Analyze Compliance</Link>
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
            Strengthen Your Cybersecurity
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get comprehensive security training and protection for your Baltimore business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Schedule Security Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/cybersecurity">Learn About Our Security Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhishingTest;