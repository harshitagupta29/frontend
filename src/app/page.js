// src/components/Hero.js
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
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
            <div className="flex gap-4 flex-wrap">
              <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
                Get Started Today
              </button>
              <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100">
                Contact Us
              </button>
            </div>
            
          </div>
          <div>
            <Image src="/Captureit.png" alt="Hero" width={500} height={400} className="w-full h-auto" />
          </div>
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
      <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-10">
          Discover our key features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-2">International Money Transfer</h3>
            <p className="text-sm text-gray-600">Send money globally with secure processing.</p>
          </div>
          <Image src="/mockup1.png" alt="Mobile UI" width={220} height={420} className="mx-auto" />
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-2">Transfer Money Easily</h3>
            <p className="text-sm text-gray-600">Quick fund transfers with a smooth interface.</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-100 px-4 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12">
          Our Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Seamless Global Transactions", "Enable smooth payments and cross-border banking."],
            ["Universal Banking Integration", "Manage all your accounts from one dashboard."],
            ["Secure and Compliant", "Bank with top-tier encryption and compliance."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-green-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">

          {/* Logo + Desc */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
            <p className="text-sm mt-4">
              Accelerating client growth, enhancing their customer base,
              and boosting revenue through quality-focused products.
            </p>
            <div className="flex gap-4 mt-4 text-lg">
              <a href="#"><i className="fab fa-facebook-square"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>

          {/* Footer Links */}
          {[
            ["About Us", ["Our Mission", "Our Vision", "Key Features"]],
            ["Services", ["International Transfer", "Analytics", "Security", "Core Banking"]],
            ["Resources", ["Blogs", "Careers", "Help Centre"]],
            ["Contact", ["info@fintractglobal.com", "+41 8677383888"]],
          ].map(([heading, links], i) => (
            <div key={i}>
              <h4 className="font-bold mb-3">{heading}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link, j) => (
                  <li key={j}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/30 pt-4 text-sm text-center">
          © {new Date().getFullYear()} Fintract Global. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
