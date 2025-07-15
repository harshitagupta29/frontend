export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#023373] mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 mb-10">
          Fintract Global offers a wide range of financial services tailored for modern banking needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-[#023373] mb-2">Digital Banking</h3>
            <p className="text-gray-600">24/7 access to your account, smart transfers, and bill payments.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-[#023373] mb-2">Investment Insights</h3>
            <p className="text-gray-600">Personalized advice and real-time tracking for your financial goals.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-[#023373] mb-2">Expense Monitoring</h3>
            <p className="text-gray-600">Visualize your spending and optimize your budgeting strategy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
