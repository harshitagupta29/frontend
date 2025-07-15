import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Bank Smarter, Live Better
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover key features and financial tools to power your future.
          </p>
          <a
            href="/services"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-blue-800 transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Discover Our Key Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="shadow-md p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              International Money Transfer
            </h3>
            <p className="text-gray-600">
              Send and receive money across borders easily and securely.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Financial Insights
            </h3>
            <p className="text-gray-600">
              Track spending and receive personalized insights to save better.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Account Aggregation
            </h3>
            <p className="text-gray-600">
              Manage all your bank accounts from one single platform.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">300K+</h3>
            <p className="text-gray-600 text-sm">Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">90%</h3>
            <p className="text-gray-600 text-sm">Retention Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">80+</h3>
            <p className="text-gray-600 text-sm">Partners</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">70%</h3>
            <p className="text-gray-600 text-sm">Faster Transactions</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg mb-10">
            We aim to deliver seamless and secure financial services to customers across the globe. 
            With our intuitive platform, advanced security, and customer-first mindset, 
            we are redefining banking for the digital age.
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Why we are the best in the marketplace
          </h3>

          <div className="grid gap-6 md:grid-cols-3 text-left text-gray-700 mt-4">
            <div>
              <h4 className="font-bold text-blue-800 mb-2">Anywhere, Anytime</h4>
              <p>Banking that fits your lifestyle, wherever you are.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-800 mb-2">Peace of Innovation</h4>
              <p>We’re constantly evolving to serve you better.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-800 mb-2">Secured and Smooth</h4>
              <p>Your data is safe with us — always encrypted and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-10">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <form className="space-y-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded border border-gray-300 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
