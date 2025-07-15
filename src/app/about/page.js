import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">About Fintract Global</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At Fintract Global, we are revolutionizing banking through advanced digital
          solutions. Our mission is to deliver seamless financial services that are
          secure, innovative, and accessible globally.
        </p>
      </section>
    </>
  );
}
