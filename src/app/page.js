import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar />

      
      <section className="py-24 px-6 md:px-32 bg-white text-left border-b">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-extrabold text-green-1000 leading-tight mb-6">
            Bank Smarter<br />Live Better
          </h1>
          <p className="text-[#737373] text-lg leading-relaxed mb-12 max-w-2xl">
            Manage your finances effortlessly with our advanced banking solutions.
            Safe, Fast, and designed for your everyday needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-green-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-green-800 transition shadow"
            >
              Get Started Today
            </a>
            <a
              href="#"
              className="border-2 border-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <section className="bg-green-900 text-white py-10 px-6 md:px-20 relative z-10">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
    
    <div>
      <p className="text-2xl font-bold">300%</p>
      <p className="text-sm mt-1">Fast Processing Cycle</p>
    </div>

    <div>
      <p className="text-2xl font-bold">80+</p>
      <p className="text-sm mt-1">
        points up in the NPS–<br />Net Promoter Score
      </p>
    </div>

    <div>
      <p className="text-2xl font-bold">5%</p>
      <p className="text-sm mt-1">
        CAPEX – Capital investment,<br />
        no upfront fees or hidden charges.
      </p>
    </div>

    <div>
      <p className="text-2xl font-bold">90%</p>
      <p className="text-sm mt-1">cheaper payment<br />fees and transaction cost</p>
    </div>

    <div>
      <p className="text-2xl font-bold">80+</p>
      <p className="text-sm mt-1">
        points up in the NPS–<br />Net Promoter Score
      </p>
    </div>

    <div>
      <p className="text-2xl font-bold">70%</p>
      <p className="text-sm mt-1">less expensive<br />of FX fees</p>
    </div>

  </div>
</section>

         


      {/* Feature Cards Section */}
      {/* Services Section (Accordion) */}

      <section className="py-20 bg-gray-50 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Discover Our Key Features
        </h2>

        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "International Money Transfer",
              desc: "Send and receive money across borders easily and securely.",
            },
            {
              title: "Financial Insights",
              desc: "Track spending and receive personalized insights to save better.",
            },
            {
              title: "Account Aggregation",
              desc: "Manage all your bank accounts from one single platform.",
            },
          ].map((item, i) => (
            <div key={i} className="shadow p-8 rounded-lg border border-gray-200 bg-white">
              <h3 className="text-xl font-semibold mb-3 text-green-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            ["300K+", "Customers"],
            ["90%", "Retention Rate"],
            ["80+", "Partners"],
            ["70%", "Faster Transactions"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-green-900 mb-2">{value}</h3>
              <p className="text-gray-600 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-8">About Us</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
            We aim to deliver seamless and secure financial services to customers across the globe.
            With our intuitive platform, advanced security, and customer-first mindset,
            we are redefining banking for the digital age.
          </p>

          <h3 className="text-xl font-semibold text-green-900 mb-6">
            Why we are the best in the marketplace
          </h3>

          <div className="grid gap-8 md:grid-cols-3 text-left text-gray-700 mt-4">
            {[
              ["Anywhere, Anytime", "Banking that fits your lifestyle, wherever you are."],
              ["Peace of Innovation", "We’re constantly evolving to serve you better."],
              ["Secured and Smooth", "Your data is safe with us — always encrypted and protected."],
            ].map(([title, desc], i) => (
              <div key={i}>
                <h4 className="font-bold text-green-900 mb-2">{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-8">Contact Us</h2>
          <p className="text-gray-700 mb-10">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <form className="space-y-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded border border-gray-300 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
      <footer className="bg-green-900 text-white px-6 md:px-20 py-12">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">

    {/* Logo + Description */}
    <div className="md:col-span-1 flex flex-col items-center md:items-start">
      <img src="/logo.png" alt="Logo" className="h-12 mb-4" /> {/* Replace with actual logo path */}
      <h3 className="text-xl font-bold mb-2">Fintract Global</h3>
      <p className="text-sm">
        We want to accelerate client growth, enhance their customer base, and
        boost revenue through the use of our quality-focused products.
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4 text-white text-lg">
        <a href="#"><i className="fab fa-facebook-square"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
      </div>
    </div>

    {/* About Us */}
    <div>
      <h4 className="font-bold mb-3">About us</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Our Vision</a></li>
        <li><a href="#">Key Features</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="font-bold mb-3">Services</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Account Aggregation</a></li>
        <li><a href="#">International Money Transfer</a></li>
        <li><a href="#">AI Analytics</a></li>
        <li><a href="#">Document Vault</a></li>
        <li><a href="#">Security Layer</a></li>
        <li><a href="#">FX</a></li>
        <li><a href="#">Core Banking</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-bold mb-3">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Help Centre</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-bold mb-3">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="mailto:Info@fintractglobal.com">Info@fintractglobal.com</a></li>
        <li><a href="tel:+41867738388">+41 8677383888</a></li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-10 border-t border-white/30 pt-4 text-sm text-center">
    © {new Date().getFullYear()} Fintract Global. All rights reserved.
  </div>
        </footer>
    </main>
  );
}

