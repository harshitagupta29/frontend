import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Blog</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Get the latest insights, financial tips, and company updates from Fintract Global.
        </p>
      </section>
    </>
  );
}
