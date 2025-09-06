import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "Cybersecurity", count: 8, color: "bg-red-100 text-red-800" },
    { name: "AI in Business", count: 6, color: "bg-blue-100 text-blue-800" },
    { name: "IT Best Practices", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Local SMB Tech News", count: 4, color: "bg-purple-100 text-purple-800" }
  ];

  const featuredPosts = [
    {
      title: "Cybersecurity Tips for Small Law Firms in Baltimore",
      excerpt: "Essential security practices to protect sensitive client data and maintain compliance with legal industry standards. Learn how Baltimore law firms can implement cost-effective cybersecurity measures.",
      category: "Cybersecurity",
      readTime: "5 min read",
      author: "John Smith",
      date: "Nov 15, 2024",
      slug: "cybersecurity-tips-law-firms-baltimore",
      featured: true
    },
    {
      title: "AI Tools for Medical Practices in Baltimore",
      excerpt: "How AI automation can streamline patient care, reduce administrative overhead, and improve outcomes while maintaining HIPAA compliance in Baltimore medical practices.",
      category: "AI in Business", 
      readTime: "7 min read",
      author: "Sarah Johnson",
      date: "Nov 12, 2024",
      slug: "ai-tools-medical-practices-baltimore",
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: "HIPAA Compliance in the Cloud: What Baltimore Healthcare Providers Need to Know",
      excerpt: "A comprehensive guide to maintaining HIPAA compliance when moving to cloud-based systems, with specific considerations for Maryland healthcare providers.",
      category: "Cybersecurity",
      readTime: "8 min read",
      author: "Dr. Emily Chen",
      date: "Nov 10, 2024",
      slug: "hipaa-compliance-cloud-baltimore-healthcare"
    },
    {
      title: "Microsoft 365 vs Google Workspace: Which is Right for Your Baltimore Business?",
      excerpt: "An in-depth comparison of productivity platforms, focusing on features, security, and cost considerations for small professional firms in Baltimore.",
      category: "IT Best Practices",
      readTime: "6 min read", 
      author: "Mike Rodriguez",
      date: "Nov 8, 2024",
      slug: "microsoft-365-vs-google-workspace-baltimore"
    },
    {
      title: "The Rise of Ransomware in Baltimore: How to Protect Your Business",
      excerpt: "Recent ransomware attacks in the Baltimore area and practical steps local businesses can take to protect themselves from becoming the next victim.",
      category: "Cybersecurity",
      readTime: "4 min read",
      author: "Lisa Thompson",
      date: "Nov 5, 2024",
      slug: "ransomware-protection-baltimore-businesses"
    },
    {
      title: "AI-Powered Document Management for Legal Firms",
      excerpt: "How artificial intelligence is transforming document review, contract analysis, and case management for law firms, with real-world implementation examples.",
      category: "AI in Business",
      readTime: "9 min read",
      author: "David Park",
      date: "Nov 3, 2024",
      slug: "ai-document-management-legal-firms"
    },
    {
      title: "Remote Work Security: Best Practices for Baltimore Businesses",
      excerpt: "Essential security measures and policies for maintaining data protection when employees work from home, tailored for small business budgets.",
      category: "IT Best Practices",
      readTime: "5 min read",
      author: "Jennifer Lee",
      date: "Oct 30, 2024",
      slug: "remote-work-security-baltimore-businesses"
    },
    {
      title: "Baltimore's New Data Privacy Regulations: What Small Businesses Need to Know",
      excerpt: "Understanding the latest data privacy requirements affecting Baltimore businesses and practical steps for compliance without breaking the budget.",
      category: "Local SMB Tech News",
      readTime: "6 min read",
      author: "Robert Kim",
      date: "Oct 28, 2024",
      slug: "baltimore-data-privacy-regulations-small-business"
    },
    {
      title: "Implementing Zero Trust Security in Small Professional Practices",
      excerpt: "A practical guide to implementing zero trust security principles in small professional practices, with cost-effective solutions and phased approaches.",
      category: "Cybersecurity",
      readTime: "7 min read",
      author: "Amanda Foster",
      date: "Oct 25, 2024",
      slug: "zero-trust-security-small-practices"
    },
    {
      title: "AI Chatbots for Customer Service: ROI Analysis for Baltimore SMBs",
      excerpt: "Real-world case studies showing how Baltimore small businesses are using AI chatbots to improve customer service while reducing costs.",
      category: "AI in Business",
      readTime: "8 min read",
      author: "Kevin Wang",
      date: "Oct 22, 2024",
      slug: "ai-chatbots-customer-service-baltimore-smb"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              IT Insights for Baltimore Businesses
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Stay ahead with the latest cybersecurity tips, AI trends, and IT best practices 
              specifically for small professional firms in Baltimore.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className={`px-4 py-2 rounded-full ${category.color} group-hover:opacity-80 transition-opacity`}>
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-2 text-sm">({category.count})</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="blog-card group">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📰</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="service" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Recent Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="blog-card group">
                <div className="h-32 bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <div className="text-3xl opacity-30">📄</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <Button variant="service" size="sm" className="w-full mt-4" asChild>
                    <Link to={`/blog/${post.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Stay Updated on Baltimore IT Trends
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest cybersecurity alerts, AI insights, and IT best practices 
            delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border border-input"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-secondary-foreground/70 mt-4">
            No spam. Unsubscribe anytime. Read our <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;