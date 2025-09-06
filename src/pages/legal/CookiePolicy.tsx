const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This Cookie Policy explains how Computer Pros uses cookies...</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;