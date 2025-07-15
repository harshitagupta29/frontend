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
    </main>
  );
}
