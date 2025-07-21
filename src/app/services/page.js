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
    

    {/* Footer */}

    
<footer className="bg-green-900 text-white py-10 px-6">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    {/* Logo and description */}
    <div>
      <div className="flex items-center mb-2">
        <img src="/Capturew.PNG" alt="Fintract Global Logo" className="h-8 mr-2" />
        <span className="font-bold text-lg">Fintract Global</span>
      </div>
      <p className="mb-2 text-sm">
        We want to accelerate client growth, enhance their customer base, and boost revenue through the use of our quality-focused products.
      </p>
      <div className="flex space-x-3 mt-2">
        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          {/* Facebook icon, use SVG or icon library */}
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.596..."/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          {/* YouTube icon */}
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23.499..."/>
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          {/* LinkedIn icon */}
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.24..."/>
          </svg>
        </a>
      </div>
    </div>

    {/* About Us */}
    <div>
      <h4 className="font-semibold mb-3">About Us</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Our Mission</a></li>
        <li><a href="#" className="hover:underline">Our Vision</a></li>
        <li><a href="#" className="hover:underline">Key Features</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="font-semibold mb-3">Services</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Account Aggregation</a></li>
        <li><a href="#" className="hover:underline">International Money Transfer</a></li>
        <li><a href="#" className="hover:underline">AI Analytics</a></li>
        <li><a href="#" className="hover:underline">Document Vault</a></li>
        <li><a href="#" className="hover:underline">Security Layer</a></li>
        <li><a href="#" className="hover:underline">FX</a></li>
        <li><a href="#" className="hover:underline">Core Banking</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold mb-3">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Blogs</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Help Centre</a></li>
        <li><a href="#" className="hover:underline">Support</a></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h4 className="font-semibold mb-3">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="mailto:info@fintractglobal.com" className="hover:underline">
            info@fintractglobal.com
          </a>
        </li>
        <li>
          <a href="tel:+418677383888" className="hover:underline">
            +41 8677383888
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="mt-10 border-t border-white/30 pt-4 text-sm text-center">
    © {new Date().getFullYear()} Fintract Global. All rights reserved.
  </div>
</footer>
</div>
  );
}

