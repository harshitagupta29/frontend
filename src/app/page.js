// src/components/Hero.js
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Hero() {
  return (
    <main className="bg-white text-black font-sans">

      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-20 bg-white border-b">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div>
       

            <h1 className="text-6xl sm:text-7xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
                  Bank Smarter <br /> Live Better
            </h1>

            <p className="text-gray-600 mb-6">
              Manage your finances effortlessly with our advanced banking solutions.
              Safe, Fast, and designed for your everyday needs.
            </p>
            <div className="flex gap-4 flex-wrap mb-6">
              <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
                Get Started Today
              </button>
              <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100">
                Contact Us
              </button>
            </div>
          </div>
            
          
          <div className="flex flex-col items-center md:items-end">
           <Image
              src="/Captureit.PNG"
              alt="Hero"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

  <div className="flex flex-col sm:flex-row items-center justify-between gap-75 mt-10 max-auto w-full">
    <p className="text-black text-lg font-bold whitespace-nowrap mb-4 sm:mb-0">
      Trusted by more than 100+ top Companies
    </p>
    <Image
      src="/trusted-logos.png"
      alt="Trusted by 100+ companies"
      width={1000}
      height={100}
      className="rounded-2xl shadow border p-2 bg-white max-w-full h-auto"
    />
    </div>
  </section>

     
      {/* Stats Bar */}
      <section className="bg-green-900 text-white py-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-sm">
          <div>
            <p className="text-2xl font-bold">300%</p>
            <p>Improvement in cycle</p>
          </div>
          <div>
            <p className="text-2xl font-bold">80+</p>
            <p>Net Promoter Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5%</p>
            <p>No upfront fees</p>
          </div>
          <div>
            <p className="text-2xl font-bold">90%</p>
            <p>Cheaper payments</p>
          </div>
          <div>
            <p className="text-2xl font-bold">80+</p>
            <p>Partners globally</p>
          </div>
          <div>
            <p className="text-2xl font-bold">70%</p>
            <p>Less FX expense</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
          <section className="py-16 px-4 md:px-20 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Discover our key features
    </h2>
  </div>

  <div className="max-w-6xl mx-auto">
    <Image
      src="/mockup1.png"
      alt="Key features"
      width={1400}
      height={700}
      className="w-full h-auto rounded-xl shadow-md"
    />
  </div>
</section>

 {/* Our Mission Section */}
<section className="bg-gray-50 py-20 px-4 md:px-20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
    Our Mission
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">
        <Image src="/mission1.png" alt="Icon 1" width={50} height={50} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Seamless Global Transactions
      </h3>
      <p className="text-gray-600 text-sm">
        Enabling instant money transfers worldwide without relying on traditional card networks, allowing users to send and receive payments effortlessly.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">
        <Image src="/mission2.png" alt="Icon 2" width={50} height={50} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Universal Banking Integration
      </h3>
      <p className="text-gray-600 text-sm">
        Providing users the flexibility to add multiple bank accounts, even from different banks, and apply for any bank account, ensuring a unified financial experience.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">
        <Image src="/mission3.png" alt="Icon 3" width={50} height={50} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Secure and Compliant Financial Ecosystem
      </h3>
      <p className="text-gray-600 text-sm">
        Leveraging premium APIs (PISP & AISP), advanced fraud detection, and country-specific frameworks to ensure safe, compliant, and highly trusted financial transactions.
      </p>
    </div>
  </div>
  
</section>

    
  {/* Text + Image Section */}
  <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-8 items-center text-left px-4 md:px-0">
    {/* Left Text */}
    <div className="flex items-center justify-center h-full">

        <p className="text-gray-800 text-xl leading-relaxed md:text-left text-center">
      
      
        CXOs of many big companies trust and believe in our ethics and professional journey,
        emulating their business goals and success. This list includes multinational corporations,
        financial institutions, private equity funds, domestic corporations, joint ventures,
        emerging companies, start-ups, non-governmental organizations, international organizations,
        individuals, and the government.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end px-4 md:px-0">
      <Image
        src="/girl.png"
        alt="Professional Discussion"
        width={400}
        height={200}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  </div>


     {/* Footer */}

    
<footer className="bg-green-900 text-white py-10 px-6">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    {/* Logo and description */}
    <div>
      <div className="flex items-center mb-2">
        <img src="/Capturew.png" alt="Fintract Global Logo" className="h-8 mr-2" />
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
