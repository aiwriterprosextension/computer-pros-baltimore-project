import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const ITCostCalculator = () => {
  const [costData, setCostData] = useState({
    employees: '',
    servers: '',
    currentItSpend: ''
  });

  const calculateCosts = () => {
    const employees = parseInt(costData.employees) || 0;
    const servers = parseInt(costData.servers) || 0;
    const currentSpend = parseInt(costData.currentItSpend) || 0;
    
    const recommendedSpend = (employees * 150) + (servers * 200);
    const potentialSavings = Math.max(0, currentSpend - recommendedSpend);
    
    return { recommendedSpend, potentialSavings };
  };

  const results = calculateCosts();

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Free IT Cost Calculator - Computer Pros Baltimore"
        description="Calculate your recommended IT budget and identify potential cost savings. Free tool for Baltimore businesses to optimize their technology spending."
        keywords="IT cost calculator, IT budget planning, Baltimore IT costs, technology spending optimization"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Office IT Cost Calculator
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Calculate your recommended IT budget and identify potential cost savings for your Baltimore business.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Calculate Your IT Costs</CardTitle>
                <CardDescription>
                  Enter your business details to get a personalized IT budget recommendation.
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
                    <label className="block text-sm font-medium mb-2">Current Monthly IT Spend ($)</label>
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
                  <div className="bg-accent/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Your Results:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Recommended Monthly Budget:</span>
                        <span className="font-bold text-lg text-primary">${results.recommendedSpend}</span>
                      </div>
                      {results.potentialSavings > 0 && (
                        <div className="flex justify-between items-center text-green-600">
                          <span>Potential Monthly Savings:</span>
                          <span className="font-bold text-lg">${results.potentialSavings}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span>Annual Budget:</span>
                        <span className="font-medium">${results.recommendedSpend * 12}</span>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">Related Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 text-primary mr-2" />
                  Cybersecurity Risk Score
                </CardTitle>
                <CardDescription>
                  Assess your security posture and identify vulnerabilities that could cost your business.
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
                  <Calculator className="h-6 w-6 text-primary mr-2" />
                  AI Tool Finder
                </CardTitle>
                <CardDescription>
                  Discover AI tools that can reduce operational costs and improve efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tools/ai-finder">Find AI Tools</Link>
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
            Ready to Optimize Your IT Budget?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a detailed IT assessment and custom recommendations from our Baltimore IT experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/pricing">View IT Support Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITCostCalculator;