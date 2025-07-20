import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#023373] mb-6 text-center">
          About Us
        </h1>

        {/* About Us Description + Photo */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
          <div className="md:w-1/2 w-full">
            <p className="text-gray-900 text-base md:text-lg">
              Our ability to send and receive money instantly and anywhere in the world without a card network. The users can add or pre-populate numerous accounts, even those from various banks. The user has the option of applying for any bank account. We offer premium APIs (PISP and AISP) for transactions that are extremely safe. Our own payment, FX, and anti-fraud engines, as well as pre-established frameworks, laws, and policies, are created specifically for each country and hundreds of jurisdictions. High trust and satisfied consumers will arise from the platform's ability to verify and check for a legitimate payee in order to detect and prevent fraud.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <Image
              src="/about-us-photo.png"
              alt="Fintract Global Team"
              width={440}
              height={340}
              className="rounded-md shadow object-cover"
            />
          </div>
        </div>

        {/* Why We Are the Best Section */}
        <h2 className="text-2xl font-bold text-[#023373] mb-6 text-center">
          Why we are the best in the marketplace
        </h2>

        <div className="space-y-8">
          {/* Anywhere, Anytime */}
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold text-[#027A48] mb-2">Anywhere, Anytime</h3>
            <p className="text-gray-800 text-base">
              Our platform allows you to access and manage your accounts instantly, from anywhere in the world, at any time. With real-time technology and robust infrastructure, you are always connected to your finances—no delays, no limitations.
            </p>
          </div>
          {/* Pace of Innovation */}
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold text-[#027A48] mb-2">Pace of Innovation</h3>
            <p className="text-gray-800 text-base">
              Our relentless pursuit of innovative banking drives us to continually offer new features and services. From AI-based analytics and dynamic APIs to seamless integrations, we stay ahead of industry trends to serve you better.
            </p>
          </div>
          {/* Secured and Smooth */}
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold text-[#027A48] mb-2">Secured and Smooth</h3>
            <p className="text-gray-800 text-base">
              Transactions on our platform are designed with security and user experience in mind. Advanced encryption, dedicated anti-fraud systems, and intuitive design work together to ensure every operation is both safe and effortless.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
