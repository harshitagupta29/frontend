export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white py-8 px-4">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left side illustration (show only on md+) */}
        <div className="bg-green-50 flex-1 py-10 px-8 hidden md:flex items-center justify-center">
          <img src="/login.png" alt="Login Illustration" className="max-h-72 rounded" />
        </div>
        {/* Right side: Login form */}
        <div className="flex-1 py-10 px-6 sm:px-10">
          <h2 className="text-2xl font-bold mb-6 text-green-900">Login</h2>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white px-6 py-3 rounded-full font-bold hover:bg-green-800 transition"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-sm flex gap-2">
            <span className="text-gray-600">Don't have an account?</span>
            <a href="/signup" className="text-green-700 font-semibold hover:underline">Sign Up</a>
          </div>
        </div>
      </div>
    </main>
  );
}
