const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              How we use cookies and similar technologies on our website
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="section-header text-2xl">1. What Are Cookies</h2>
            <p className="mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>

            <h2 className="section-header text-2xl">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-4">Essential Cookies</h3>
            <p className="mb-6">
              These cookies are necessary for the website to function properly. They enable basic functions 
              like page navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold mb-4">Analytics Cookies</h3>
            <p className="mb-6">
              We use analytics cookies to understand how visitors interact with our website. This helps us 
              improve our content and user experience. These cookies collect information anonymously.
            </p>

            <h3 className="text-xl font-semibold mb-4">Functional Cookies</h3>
            <p className="mb-6">
              These cookies enable enhanced functionality and personalization, such as remembering your 
              preferences and settings when you return to our website.
            </p>

            <h2 className="section-header text-2xl">3. Third-Party Cookies</h2>
            <p className="mb-6">Our website may include third-party services that set their own cookies:</p>
            <ul className="mb-8 space-y-2">
              <li><strong>Calendly:</strong> For booking consultation appointments</li>
              <li><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li><strong>Social Media:</strong> For social sharing functionality</li>
            </ul>

            <h2 className="section-header text-2xl">4. Managing Cookies</h2>
            <p className="mb-6">
              You can control and manage cookies in several ways:
            </p>
            <ul className="mb-8 space-y-2">
              <li>Most browsers allow you to refuse or accept cookies</li>
              <li>You can delete cookies that have already been set</li>
              <li>You can set your browser to notify you when cookies are being sent</li>
            </ul>

            <h2 className="section-header text-2xl">5. Cookie Retention</h2>
            <p className="mb-6">
              Cookies remain on your device for different periods:
            </p>
            <ul className="mb-8 space-y-2">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain until their expiration date or you delete them</li>
            </ul>

            <h2 className="section-header text-2xl">6. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>

            <h2 className="section-header text-2xl">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-accent p-6 rounded-lg">
              <p><strong>Computer Pros</strong></p>
              <p>Email: info@computerpros-baltimore.com</p>
              <p>Phone: (410) 555-TECH</p>
              <p>Address: Baltimore, MD Metro Area</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;