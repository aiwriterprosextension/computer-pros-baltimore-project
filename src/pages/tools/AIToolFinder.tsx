import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, DollarSign, Users, FileText, Shield } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const AIToolFinder = () => {
  const [businessGoals, setBusinessGoals] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [teamSize, setTeamSize] = useState('');

  const goals = [
    { id: 'automation', label: 'Automate repetitive tasks', icon: Zap },
    { id: 'customer-service', label: 'Improve customer service', icon: Users },
    { id: 'content', label: 'Content creation & marketing', icon: FileText },
    { id: 'data-analysis', label: 'Data analysis & insights', icon: Brain },
    { id: 'security', label: 'Enhance cybersecurity', icon: Shield },
    { id: 'cost-reduction', label: 'Reduce operational costs', icon: DollarSign }
  ];

  const toggleGoal = (goalId: string) => {
    setBusinessGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(g => g !== goalId)
        : [...prev, goalId]
    );
  };

  const getRecommendations = () => {
    const recommendations = [];
    
    if (businessGoals.includes('automation')) {
      recommendations.push({
        name: 'Microsoft Power Automate',
        description: 'Automate workflows between apps and services',
        pricing: '$15-$40/user/month',
        bestFor: 'Office automation and data integration'
      });
    }
    
    if (businessGoals.includes('customer-service')) {
      recommendations.push({
        name: 'Zendesk AI',
        description: 'AI-powered customer support and chatbots',
        pricing: '$49-$99/agent/month',
        bestFor: 'Customer service automation'
      });
    }
    
    if (businessGoals.includes('content')) {
      recommendations.push({
        name: 'Jasper AI',
        description: 'AI content creation for marketing and communications',
        pricing: '$49-$125/month',
        bestFor: 'Marketing content and copywriting'
      });
    }
    
    if (businessGoals.includes('data-analysis')) {
      recommendations.push({
        name: 'Tableau with AI',
        description: 'Data visualization with AI-powered insights',
        pricing: '$70-$150/user/month',
        bestFor: 'Business intelligence and reporting'
      });
    }
    
    if (businessGoals.includes('security')) {
      recommendations.push({
        name: 'Microsoft Defender for Business',
        description: 'AI-powered cybersecurity protection',
        pricing: '$3-$22/user/month',
        bestFor: 'Comprehensive business security'
      });
    }
    
    if (businessGoals.includes('cost-reduction')) {
      recommendations.push({
        name: 'UiPath',
        description: 'Robotic Process Automation (RPA)',
        pricing: '$420/month per robot',
        bestFor: 'Automating manual processes'
      });
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AI Tool Finder for Small Businesses - Computer Pros Baltimore"
        description="Discover AI tools perfect for your business goals and budget. Get personalized recommendations from Baltimore's AI experts."
        keywords="AI tools for business, artificial intelligence, business automation, Baltimore AI services, SMB AI solutions"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
            <Badge className="bg-[#FFD700] text-black text-sm font-semibold px-3 py-1 rounded mb-4">
              Tool of the Month
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              AI Tool Finder for SMBs
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Discover AI tools that fit your business goals and budget. Get personalized recommendations from Baltimore's AI experts.
            </p>
          </div>
        </div>
      </section>

      {/* Finder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="service-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Find Your Perfect AI Tools</CardTitle>
                <CardDescription>
                  Select your business goals and preferences to get personalized AI tool recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-4">What are your main business goals? (Select all that apply)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {goals.map((goal) => {
                      const IconComponent = goal.icon;
                      return (
                        <button
                          key={goal.id}
                          onClick={() => toggleGoal(goal.id)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            businessGoals.includes(goal.id)
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-input hover:bg-accent'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-5 w-5" />
                            <span>{goal.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly AI Tool Budget</label>
                    <select
                      className="w-full p-3 border border-input rounded-md"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-100">Under $100/month</option>
                      <option value="100-500">$100 - $500/month</option>
                      <option value="500-1000">$500 - $1,000/month</option>
                      <option value="over-1000">Over $1,000/month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Team Size</label>
                    <select
                      className="w-full p-3 border border-input rounded-md"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-20">6-20 employees</option>
                      <option value="21-50">21-50 employees</option>
                      <option value="over-50">Over 50 employees</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center">Your Personalized AI Tool Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendations.map((tool, index) => (
                    <Card key={index} className="service-card">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Brain className="h-6 w-6 text-primary mr-2" />
                          {tool.name}
                        </CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="font-medium">{tool.pricing}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Best for:</span>
                            <span className="font-medium text-right flex-1 ml-2">{tool.bestFor}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Phishing Awareness Test
                </CardTitle>
                <CardDescription>
                  Test your team's ability to identify AI-generated phishing attempts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/phishing-test">Take Phishing Test</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-2" />
                  Compliance Gap Analyzer
                </CardTitle>
                <CardDescription>
                  Ensure your AI tools comply with industry regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/compliance-gap-analyzer">Check Compliance</Link>
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
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our Baltimore AI experts help you implement and optimize AI tools for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Schedule AI Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/ai-enablement">Learn About AI Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIToolFinder;