import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading and Subheading (LEFT-ALIGNED, not centered) */}
        <h1 className="text-4xl font-bold text-gray-900 mb-1 text-left">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-8 max-w-2xl text-left">
          Email, call or complete the form to learn how Fintract Global can help you!
        </p>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 border-t border-gray-200 pt-8">
          {/* Left: Info Block (no duplicated heading, all flush left) */}
          <div className="lg:w-[38%] w-full flex flex-col gap-6 border-r border-gray-200 pr-8">
            <div className="rounded-lg shadow p-6 bg-white">
              <a
                href="mailto:info@fintractglobal.com"
                className="font-semibold text-gray-900 hover:underline block text-base mb-0 pb-0"
              >
                info@fintractglobal.com
              </a>
              <p className="text-gray-900 text-lg font-semibold tracking-wide leading-tight mb-0 pb-0">
                3241- 567- 884
              </p>
              <a
                href="#"
                className="text-gray-900 text-base underline hover:no-underline mb-2"
              >
                Customer support
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base mb-1">
                Customer Support
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Our support team is available around the clock to address any concerns or queries you may have.
              </p>
              <h3 className="font-semibold text-gray-900 text-base mb-1 mt-4">
                Feedback Suggestions
              </h3>
              <p className="text-gray-700 text-sm">
                We value your feedback and are continuously working to improve our services. Your input is crucial in shaping the future of Fintract Global.
              </p>
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="lg:w-[62%] w-full bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
              Get in Touch
            </h2>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                required
              />
              <div className="flex gap-3">
                <select
                  className="px-3 py-3 rounded border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 w-24"
                  aria-label="Country code"
                >
                  <option value="+64">+64</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                  required
                />
              </div>
              <textarea
                placeholder="How can we help?"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 h-32 resize-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 active:bg-gray-700 transition"
              >
                Submit
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                By contacting us, you agree to our <span className="underline cursor-pointer">Terms of service</span> and <span className="underline cursor-pointer">Privacy policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
