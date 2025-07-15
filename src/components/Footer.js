export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Fintract Global</h3>
          <p className="text-sm text-gray-300">
            Bridging finance and technology across the globe.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © 2025 Fintract Global. All rights reserved.
      </div>
    </footer>
  );
}
