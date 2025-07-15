import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          We'd love to hear from you! Send us your queries, feedback, or partnership requests.
        </p>

        <form className="max-w-md mx-auto text-left space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32 resize-none" />
          <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
