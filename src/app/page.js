import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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

      {/* Feature Cards Section */}
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

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-lg mb-4">Fintract Global</h4>
            <p>
              Redefining digital banking experiences with innovation, trust,
              and security.
            </p>
          </div>

          {[
            ["Company", ["About Us", "Services", "Blog"]],
            ["Support", ["Contact", "FAQs", "Privacy Policy"]],
            ["Follow Us", ["LinkedIn", "Twitter", "Instagram"]],
          ].map(([title, links], i) => (
            <div key={i}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((text, j) => (
                  <li key={j}>
                    <a href="#" className="hover:underline">{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-xs mt-10 text-gray-300">
          &copy; {new Date().getFullYear()} Fintract Global. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
