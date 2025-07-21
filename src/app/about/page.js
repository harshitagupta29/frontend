import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Us Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#023373] mb-10 text-center">
          About Us
        </h1>

        {/* About Us Section - Image + Text side-by-side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Our ability to send and receive money instantly and anywhere in the world without a card network sets us apart. Users can add or pre-populate accounts from various banks and even apply for new accounts instantly. We offer premium APIs (PISP and AISP) for secure transactions. Our payment, FX, and anti-fraud engines, as well as pre-established frameworks, laws, and policies, are tailored for each country. High trust and satisfied users result from diligent verification and fraud prevention within the platform.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/girl.png"
              alt="Fintract Global Team"
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Why We Are the Best Section */}
        <section className="bg-white py-20 px-4 md:px-20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16">
    Why we are the best in the marketplace
  </h2>

  <div className="flex flex-col gap-10 max-w-3xl mx-auto text-left">
    {/* Card 1 */}
    <div className="bg-white border rounded-2xl shadow-md p-6">
      <h3 className="text-green-700 text-xl font-semibold mb-4">Anywhere, Anytime</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
        <li>Web and app users can transact securely from anywhere in the world.</li>
        <li>Self-serve needs: payments, transfers, analytics, 24x7.</li>
        <li>Advanced recognition and encryption helps secure the process.</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-white border rounded-2xl shadow-md p-6">
      <h3 className="text-green-700 text-xl font-semibold mb-4">Pace of Innovation</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
        <li>Innovation & efficiency to support complex transactions.</li>
        <li>Platform constantly evolves with new features & compliance updates.</li>
        <li>Gain competitive advantage through continuous upgrades.</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="bg-white border rounded-2xl shadow-md p-6">
      <h3 className="text-green-700 text-xl font-semibold mb-4">Secured and Smooth</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
        <li>Built on robust infrastructure with multi-factor authentication.</li>
        <li>End-to-end encryption and anti-fraud systems.</li>
        <li>Frictionless onboarding and secure transactions.</li>
      </ul>
    </div>

    {/* Card 4 */}
    <div className="bg-white border rounded-2xl shadow-md p-6">
      <h3 className="text-green-700 text-xl font-semibold mb-4">Our Customers Drive Us</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
        <li>Real-world feedback helps us improve continuously.</li>
        <li>Trusted by clients for long-term collaboration.</li>
        <li>Focus on user satisfaction and evolving financial needs.</li>
      </ul>
    </div>
  </div>
</section>
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
