const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Computer Pros respects your privacy and is committed to protecting your personal information...</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;