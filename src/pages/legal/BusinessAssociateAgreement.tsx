const BusinessAssociateAgreement = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Business Associate Agreement</h1>
        <div className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This Business Associate Agreement is required for HIPAA compliance...</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessAssociateAgreement;