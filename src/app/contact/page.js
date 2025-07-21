"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    country: "+91",
    message: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("success");
        setForm({ first: "", last: "", email: "", phone: "", country: "+91", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Row: Contact Info | Get in Touch Form */}
        <div className="flex flex-col lg:flex-row gap-10 border-t border-gray-200 pt-8 items-stretch">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-full rounded-lg shadow bg-white p-8 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-700 mb-4 text-base">
                Email, call or complete the form to learn how Fintract Global can help you!
              </p>
              <a
                href="mailto:info@fintractglobal.com"
                className="font-semibold text-gray-900 hover:underline block text-base mb-1"
              >
                info@fintractglobal.com
              </a>
              <p className="text-gray-900 text-lg font-semibold mb-1 leading-tight">
                3241- 567- 884
              </p>
              <a
                href="#"
                className="text-gray-900 text-base underline hover:no-underline mb-2"
              >
                Customer support
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1">Customer Support</h3>
                  <p className="text-gray-700 text-sm">
                    Our support team is available around the clock to address any concerns or queries you may have.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1">Feedback Suggestions</h3>
                  <p className="text-gray-700 text-sm">
                    We value your feedback and are continuously working to improve our services. Your input is crucial in shaping the future of Fintract Global.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-full bg-white rounded-lg shadow p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-sm text-gray-500 mb-4">You can reach us anytime</p>
              
              {/* Status messages */}
              {status === "success" && (
                <div className="text-green-700 text-sm mb-3">
                  Thank you! We will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-600 text-sm mb-3">
                  Sorry, there was a problem. Please try again.
                </div>
              )}
              {status === "loading" && (
                <div className="text-gray-500 text-sm mb-3">Sending...</div>
              )}

              <form className="flex flex-col gap-5 flex-grow" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First name*"
                    value={form.first}
                    onChange={e => setForm(f => ({ ...f, first: e.target.value }))}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name*"
                    value={form.last}
                    onChange={e => setForm(f => ({ ...f, last: e.target.value }))}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                  required
                />
                <div className="flex gap-3">
                  <select
                    value={form.country}
                    onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
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
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-900"
                    required
                  />
                </div>
                <textarea
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 h-32 resize-none text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 active:bg-gray-700 transition"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  By contacting us, you agree to our <span className="underline cursor-pointer">Terms of service</span> and <span className="underline cursor-pointer">Privacy policy</span>.
                </p>
              </form>
            </div>
          </div>
        </div>


        {/* Map & Location section remains unchanged */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8 items-start">
          {/* Map */}
          <div className="w-full lg:w-1/2 h-[300px] rounded-xl overflow-hidden shadow border border-gray-200">
            <iframe
              title="Fintract Global Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.7958743879308!2d-0.13139899999999998!3d51.523763999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b32cf06ad3f%3A0x123456789abcdef0!2sFintract%20Global!5e0!3m2!1sen!2suk!4v1625678900000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Location Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-sm text-gray-700 font-semibold mb-1">
              Our Location
            </h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Contacting Near and Far
            </h4>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Headquarters:</span><br />
              Fintract Global Inc.<br />
              Tiler Rd 1-6,<br />
              Dockland Business Centre<br />
              London, England, E14 8PX
            </p>
          </div>
        </div>

        {/* Footer (untouched) */}
        {/* ...your existing footer code, unchanged... */}
      </div>
    

    
    {/* Footer */}

    
<footer className="bg-green-900 text-white py-10 px-6">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    {/* Logo and description */}
    <div>
      <div className="flex items-center mb-2">
        <img src="/Capturew.PNG" alt="Fintract Global Logo" className="h-8 mr-2" />
        <span className="font-bold text-lg">Fintract Global</span>
      </div>
      <p className="mb-2 text-sm">
        We want to accelerate client growth, enhance their customer base, and boost revenue through the use of our quality-focused products.
      </p>
      <div className="flex space-x-3 mt-2">
        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          {/* Facebook icon, use SVG or icon library */}
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.596..."/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          {/* YouTube icon */}
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23.499..."/>
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          {/* LinkedIn icon */}
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.24..."/>
          </svg>
        </a>
      </div>
    </div>

    {/* About Us */}
    <div>
      <h4 className="font-semibold mb-3">About Us</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Our Mission</a></li>
        <li><a href="#" className="hover:underline">Our Vision</a></li>
        <li><a href="#" className="hover:underline">Key Features</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="font-semibold mb-3">Services</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Account Aggregation</a></li>
        <li><a href="#" className="hover:underline">International Money Transfer</a></li>
        <li><a href="#" className="hover:underline">AI Analytics</a></li>
        <li><a href="#" className="hover:underline">Document Vault</a></li>
        <li><a href="#" className="hover:underline">Security Layer</a></li>
        <li><a href="#" className="hover:underline">FX</a></li>
        <li><a href="#" className="hover:underline">Core Banking</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold mb-3">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Blogs</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Help Centre</a></li>
        <li><a href="#" className="hover:underline">Support</a></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h4 className="font-semibold mb-3">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="mailto:info@fintractglobal.com" className="hover:underline">
            info@fintractglobal.com
          </a>
        </li>
        <li>
          <a href="tel:+418677383888" className="hover:underline">
            +41 8677383888
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="mt-10 border-t border-white/30 pt-4 text-sm text-center">
    © {new Date().getFullYear()} Fintract Global. All rights reserved.
  </div>
</footer>

</main>
  );
}
