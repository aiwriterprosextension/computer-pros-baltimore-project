import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Download, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [costData, setCostData] = useState({
    employees: '',
    servers: '',
    currentItSpend: ''
  });
  
  const [phishingScore, setPhishingScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const calculateCosts = () => {
    const employees = parseInt(costData.employees) || 0;
    const servers = parseInt(costData.servers) || 0;
    const currentSpend = parseInt(costData.currentItSpend) || 0;
    
    const recommendedSpend = (employees * 150) + (servers * 200);
    const potentialSavings = Math.max(0, currentSpend - recommendedSpend);
    
    return { recommendedSpend, potentialSavings };
  };

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
    }
  ];

  const downloadables = [
    {
      title: "IT Security Checklist for Small Businesses",
      description: "A comprehensive 25-point checklist to secure your business technology.",
      type: "PDF Guide",
      pages: "8 pages"
    },
    {
      title: "Remote Work Security Best Practices",
      description: "Essential security guidelines for employees working from home.",
      type: "PDF Guide", 
      pages: "12 pages"
    },
    {
      title: "HIPAA Compliance IT Requirements",
      description: "Complete guide to HIPAA-compliant technology for healthcare practices.",
      type: "PDF Guide",
      pages: "16 pages"
    },
    {
      title: "Business Continuity Planning Template",
      description: "Ready-to-use template for creating your business continuity plan.",
      type: "Word Template",
      pages: "6 pages"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Free IT Resources for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Access our free tools, calculators, and guides to improve your business technology 
              and security posture. No registration required.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Interactive IT Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Use our free tools to assess your current IT situation and identify areas for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* IT Cost Calculator */}
            <Card className="service-card">
              <CardHeader className="text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Office IT Cost Calculator</CardTitle>
                <CardDescription>
                  Calculate your recommended IT budget and identify potential savings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Employees</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-input rounded-md"
                      placeholder="Enter number of employees"
                      value={costData.employees}
                      onChange={(e) => setCostData({...costData, employees: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Servers</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-input rounded-md"
                      placeholder="Enter number of servers"
                      value={costData.servers}
                      onChange={(e) => setCostData({...costData, servers: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Monthly IT Spend</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-input rounded-md"
                      placeholder="Enter current monthly spend"
                      value={costData.currentItSpend}
                      onChange={(e) => setCostData({...costData, currentItSpend: e.target.value})}
                    />
                  </div>
                </div>

                {costData.employees && (
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Your Results:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Recommended Monthly Budget:</span>
                        <span className="font-medium">${calculateCosts().recommendedSpend}</span>
                      </div>
                      {calculateCosts().potentialSavings > 0 && (
                        <div className="flex justify-between text-primary">
                          <span>Potential Monthly Savings:</span>
                          <span className="font-medium">${calculateCosts().potentialSavings}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <Button variant="service" className="w-full" asChild>
                  <Link to="/contact">Get Detailed Assessment</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Phishing Test */}
            <Card className="service-card">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Phishing Quick Test</CardTitle>
                <CardDescription>
                  Test your ability to identify phishing emails and improve your security awareness.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuestion < phishingQuestions.length ? (
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {phishingQuestions.length}
                    </div>
                    
                    <h4 className="font-semibold">
                      {phishingQuestions[currentQuestion].question}
                    </h4>
                    
                    <div className="space-y-2">
                      {phishingQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className="w-full p-3 text-left border border-input rounded-md hover:bg-accent transition-colors"
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
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold">Test Complete!</h4>
                    <div className="text-4xl font-bold text-primary">
                      {phishingScore}/{phishingQuestions.length}
                    </div>
                    <p className="text-muted-foreground">
                      {phishingScore === phishingQuestions.length 
                        ? "Perfect! You have excellent phishing awareness."
                        : phishingScore >= 2
                        ? "Good job! Consider additional security training."
                        : "Your team would benefit from security awareness training."
                      }
                    </p>
                    <Button 
                      variant="service" 
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

      {/* Downloadable Resources */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Free Downloadable Guides</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional IT guides and templates to help secure and optimize your business technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadables.map((resource, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{resource.type}</Badge>
                        <span className="text-sm text-muted-foreground">{resource.pages}</span>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="service" className="w-full" asChild>
                    <Link to="/contact">
                      <Download className="h-4 w-4 mr-2" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Quick Security Tips</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="service-card border-primary/20 bg-primary/5">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg text-primary">Do This</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Use unique passwords for each account</li>
                    <li>• Enable two-factor authentication</li>
                    <li>• Keep software updated automatically</li>
                    <li>• Backup data regularly to the cloud</li>
                    <li>• Train staff on phishing awareness</li>
                    <li>• Use a business-grade antivirus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle className="text-lg text-destructive">Avoid This</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Using personal email for business</li>
                    <li>• Sharing passwords between employees</li>
                    <li>• Clicking links in unexpected emails</li>
                    <li>• Using public WiFi for sensitive work</li>
                    <li>• Delaying security updates</li>
                    <li>• Storing data only on local devices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need Professional IT Help?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            These resources are just the beginning. Get comprehensive IT support 
            tailored to your Baltimore business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View Support Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;