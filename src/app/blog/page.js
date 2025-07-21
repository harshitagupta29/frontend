export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#023373] mb-6">Our Blog</h1>
        <p className="text-gray-700 mb-10">
          Explore the latest updates, trends, and insights from the Fintract Global team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-left">
            <h3 className="text-xl font-bold text-[#023373] mb-2">5 Trends in Digital Banking</h3>
            <p className="text-gray-600">Stay ahead with the emerging trends reshaping the financial industry.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-left">
            <h3 className="text-xl font-bold text-[#023373] mb-2">Why Financial Literacy Matters</h3>
            <p className="text-gray-600">Understand your finances better and make smarter money decisions.</p>
          </div>
        </div>
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

</main>
  );
}

