export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#023373] mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-10">
          Have a question or feedback? We'd love to hear from you!
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
            className="bg-[#023373] text-white px-6 py-3 rounded-md hover:bg-[#021e4e] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
