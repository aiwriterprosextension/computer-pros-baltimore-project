import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowLeft, Share2, CheckCircle } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch the post based on the slug
  const post = {
    title: "Cybersecurity Tips for Small Law Firms in Baltimore",
    excerpt: "Essential security practices to protect sensitive client data and maintain compliance with legal industry standards.",
    content: `
## Introduction

Small law firms in Baltimore face unique cybersecurity challenges. With sensitive client data and strict regulatory requirements, implementing robust security measures isn't just good practice—it's essential for business survival and professional compliance.

## Understanding the Threat Landscape

### Common Threats Facing Law Firms

Law firms are prime targets for cybercriminals due to the valuable and sensitive nature of their data. Recent studies show that:

- **60% of law firms** have experienced a security breach in the past year
- **Ransomware attacks** against legal practices have increased by 300% 
- **Average cost** of a data breach for law firms is $7.5 million

### Baltimore-Specific Considerations

The Baltimore legal community faces additional challenges:
- Proximity to federal agencies increases targeting
- State-specific data protection laws
- Local court system cyber requirements

## Essential Security Measures

### 1. Multi-Factor Authentication (MFA)

Implementing MFA across all systems is your first line of defense:

- Use authenticator apps rather than SMS when possible
- Require MFA for all email accounts and case management systems
- Consider hardware security keys for senior partners

### 2. Secure Email Communications

Email remains the primary attack vector for law firms:

- Use encrypted email for all client communications
- Implement email security gateways
- Train staff to identify phishing attempts
- Never send sensitive data via unencrypted email

### 3. Document Management Security

Protecting client files is paramount:

- Use cloud-based document management with end-to-end encryption
- Implement access controls based on case assignments
- Maintain detailed access logs
- Regular security audits of document access

### 4. Network Security

Your network infrastructure needs robust protection:

- Deploy enterprise-grade firewalls
- Use VPN for all remote access
- Segment networks to isolate sensitive systems
- Regular vulnerability assessments

## Compliance Requirements

### Maryland State Bar Requirements

Maryland lawyers must:
- Protect client confidentiality in digital communications
- Understand technology used in practice
- Supervise staff technology usage
- Report data breaches appropriately

### HIPAA Considerations

Law firms handling medical cases must also consider:
- Medical record protection requirements
- Business Associate Agreements
- Staff training on medical privacy

## Implementation Timeline

### Week 1: Assessment
- Conduct security risk assessment
- Inventory all systems and data
- Identify critical vulnerabilities

### Week 2-3: Core Security
- Deploy MFA across all systems
- Implement email encryption
- Update firewall configurations

### Week 4-6: Advanced Measures
- Deploy endpoint protection
- Implement backup solutions
- Conduct staff training

### Week 7-8: Monitoring & Compliance
- Set up security monitoring
- Document policies and procedures
- Create incident response plan

## Staff Training and Awareness

### Monthly Training Topics

1. **Phishing Recognition** - How to spot suspicious emails
2. **Password Security** - Creating and managing strong passwords
3. **Mobile Device Security** - Protecting firm data on personal devices
4. **Physical Security** - Protecting workspaces and devices

### Creating a Security Culture

- Regular security reminders
- Reward good security practices
- Make reporting easier, not punitive
- Lead by example from partners down

## Technology Recommendations

### Essential Security Tools

1. **Enterprise Antivirus** - Endpoint protection for all devices
2. **Email Security Gateway** - Advanced threat protection
3. **Backup Solution** - Automated, encrypted, off-site backups
4. **VPN Solution** - Secure remote access

### Recommended Vendors

For Baltimore law firms, we recommend:
- Microsoft 365 with Advanced Threat Protection
- Clio or LawPay for practice management
- CaseGuard for document security
- CrowdStrike for endpoint protection

## Creating an Incident Response Plan

### Immediate Response Steps

1. **Isolate** affected systems immediately
2. **Assess** the scope of the breach
3. **Notify** clients and authorities as required
4. **Document** all actions taken
5. **Recover** systems from clean backups

### Legal Notification Requirements

Maryland law requires:
- Client notification within reasonable time
- State bar notification for certain breaches
- Law enforcement notification for criminal activity

## Cost Considerations

### Budget Planning

Small law firms should budget approximately:
- **$150-300 per user/month** for comprehensive security
- **$5,000-15,000** for initial setup and configuration
- **$2,000-5,000 annually** for ongoing security assessments

### ROI of Security Investment

Consider the costs of NOT investing in security:
- Average breach cost: $7.5 million
- Regulatory fines: $50,000-500,000
- Client loss and reputation damage: Incalculable

## Conclusion

Cybersecurity for law firms isn't optional—it's a business imperative. Baltimore law firms that proactively implement these security measures will not only protect their clients but also gain a competitive advantage in an increasingly security-conscious legal market.

The investment in cybersecurity pays dividends through:
- Client trust and retention
- Regulatory compliance
- Business continuity
- Competitive differentiation

Don't wait for a security incident to take action. Start implementing these measures today to protect your practice and your clients.

## Need Help?

Implementing comprehensive cybersecurity can be overwhelming. Computer Pros specializes in cybersecurity solutions for Baltimore law firms. Contact us for a free security assessment and customized protection plan.
    `,
    category: "Cybersecurity",
    readTime: "12 min read",
    author: "John Smith, IT Security Specialist",
    date: "November 15, 2024",
    tags: ["cybersecurity", "law firms", "baltimore", "compliance", "data protection"]
  };

  const relatedPosts = [
    {
      title: "HIPAA Compliance in the Cloud: What Baltimore Healthcare Providers Need to Know", 
      slug: "hipaa-compliance-cloud-baltimore-healthcare",
      category: "Cybersecurity"
    },
    {
      title: "The Rise of Ransomware in Baltimore: How to Protect Your Business",
      slug: "ransomware-protection-baltimore-businesses", 
      category: "Cybersecurity"
    },
    {
      title: "Implementing Zero Trust Security in Small Professional Practices",
      slug: "zero-trust-security-small-practices",
      category: "Cybersecurity"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-background py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="space-y-6 text-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n\n')
                    .map(paragraph => {
                      if (paragraph.startsWith('## ')) {
                        return `<h2 class="text-3xl font-bold mt-12 mb-6 text-secondary">${paragraph.slice(3)}</h2>`;
                      } else if (paragraph.startsWith('### ')) {
                        return `<h3 class="text-2xl font-semibold mt-8 mb-4 text-primary">${paragraph.slice(4)}</h3>`;
                      } else if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n').map(item => 
                          item.startsWith('- ') ? `<li class="flex items-start space-x-2"><span class="text-primary mt-1">•</span><span>${item.slice(2)}</span></li>` : item
                        ).join('');
                        return `<ul class="space-y-2 my-4">${items}</ul>`;
                      } else if (paragraph.includes('**') && paragraph.includes('**')) {
                        return `<p class="mb-4 leading-relaxed">${paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')}</p>`;
                      } else if (paragraph.trim()) {
                        return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
                      }
                      return '';
                    })
                    .join('')
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Need Help Securing Your Law Firm?</CardTitle>
                <CardDescription className="text-base">
                  Computer Pros specializes in cybersecurity solutions for Baltimore legal practices. 
                  Get a free security assessment and customized protection plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Legal industry expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Compliance assistance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 monitoring</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Get Free Security Assessment</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services/cybersecurity">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="blog-card group">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{relatedPost.category}</Badge>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="service" size="sm" asChild>
                      <Link to={`/blog/${relatedPost.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;