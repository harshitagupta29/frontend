import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Services</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
          Fintract Global offers services including international money transfer,
          account aggregation, financial insights, and more — tailored to meet your
          financial needs.
        </p>
        <ul className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
          <li className="bg-gray-100 p-4 rounded shadow">International Money Transfer</li>
          <li className="bg-gray-100 p-4 rounded shadow">Account Aggregation</li>
          <li className="bg-gray-100 p-4 rounded shadow">Financial Planning Tools</li>
        </ul>
      </section>
    </>
  );
}
