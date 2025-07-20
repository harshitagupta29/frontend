'use client';

export default function ServicesPage() {
  const services = [
    { title: "Account Aggregation", description: "The users will be able to add multiple accounts, even from different banks. User can apply for a bank account of their choice." },
    { title: "International Money Transfer", description: "We provide highly secure premium APIs (PISP and Arts) for transactions. Our own payment, FX, and anti-fraud engines and predefined policies, frameworks, rules are designed for different jurisdictions. The platform supports transferring money anywhere in the world in real time." },
    { title: "AI Analytics", description: "Our model allows end users and legal entities to get detailed insights in the form of cash flow and expenditure." },
    { title: "Shared the Ledger and Credit Data", description: "User credit and trade account details can easily be shared with consent. The one-click data is to be sent to the lenders and other business entities." },
    { title: "Document Vault", description: "Users can store sensitive documents in our highly secure vaults built on blockchain." },
    { title: "Security Layers", description: "We integrated safeguards including multi-factor authentication, security analytics, behavioural biometrics-based fraud detection and prevention, transaction monitoring automation, anti-money laundering protocols, and know your customer." },
    { title: "FX", description: "The user can send money anywhere in the world in real time with the best possible exchange rate. Banks can set their exchange rate in real time via a CSV update or from market data with an API." },
    { title: "Core Banking", description: "All banks and accounts in any country and in any currency are supported by our global core banking platform. It encompasses not just interest rates but also prices, foreign exchange, working capital, and FX transactions." },
    { title: "E2E Lending", description: "The platform has the capability to support end-to-end lending, including deal origination, deal operation, portfolio management, management reporting, and an intelligence dashboard. The firm supports both secured and unsecured lending." },
    { title: "Secure Payment", description: "With the advanced security intelligence in various layers, payments can be sent securely anywhere in the world, and accounts are protected from unauthorized withdrawals." },
    { title: "Payee Confirmation", description: "Our platform verifies every payee, ensuring secure and compliant transactions. You will always know you're sending money to the right person or account, reducing the risk of errors or fraud." },
    { title: "Regulatory and Reporting", description: "The platform can custom generate reports for regulators and management—empowering transparency and compliance for every jurisdiction and business vertical." },
    { title: "Future Dated Payment", description: "As per your planning, set your payment engine to process banking solution conversations as and when desired, and schedule up to 3 future dates." },
    { title: "CARD Management", description: "The user portal is used for functions, electronic devices, stored-value cards, and account management. Real insights and management for seamless operations." },
    { title: "Admin Dashboard", description: "A single, unified admin site that makes it easier to do everything: monitor transactions, manage users, and handle compliance and reporting for business operations." },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
      </div>
      <div className="max-w-4xl mx-auto divide-y">
        {services.map((service, index) => (
          <div key={index} className="flex items-center py-8">
            {/* Even index: text left, badge right */}
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 flex justify-start">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
              </>
            ) : (
              /* Odd index: badge left, text right */
              <>
                <div className="w-1/2 flex justify-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
