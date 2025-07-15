import Navbar from "@/components/Navbar";

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
    </main>
  );
}
