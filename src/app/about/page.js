export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#023373] mb-6">About Fintract Global</h1>
        <p className="text-lg text-gray-700 mb-8">
          Fintract Global is a forward-thinking fintech platform designed to simplify your banking experience.
          We focus on innovation, user satisfaction, and world-class security.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left mt-10 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-[#023373] mb-2">Our Mission</h3>
            <p>
              Empower people globally through smarter financial services and secure technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#023373] mb-2">Our Vision</h3>
            <p>
              To become the most customer-centric digital banking platform across the globe.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
