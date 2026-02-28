import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="font-body min-h-screen relative overflow-x-hidden">
      {/* Full-screen blurred background */}
      <div className="fixed inset-0 z-0">
        <img
          alt="Bright cafe background with natural light"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVv7RS8k5AoP990H84EY6KtSfyaFMiYLH6WZ-qApfuxsHYfiFR6b99cu4zlXnEOPY82N0Ogu-SKcopgqe3ViIYgprXmGphCg92fDo5MVOrq2SBnC_9kO5ow0oRbPXRACSNZoWSAiIeWHNZyWsAtOTyrdkekmVsulmi7FleLHJ95BrNcUU6cvw07kUHYzoUiWUB02QZ5ggFS_hkhXMk5ev3yhqY-Ef-82qU-v9wcnK9QwiIJocsIGLIQXQ4pqKd4J7jpOF-02UjCTb"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 w-full px-8 py-6 flex justify-start items-center">
        <a
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          href="/"
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">
            W
          </div>
          <span className="text-xl font-display tracking-wider font-bold text-black">
            WORKX
          </span>
        </a>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full flex flex-col items-center justify-start pt-10 pb-20 px-4 min-h-[calc(100vh-160px)]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-black uppercase tracking-tight text-center mb-10 drop-shadow-sm">
          Join WorkX
        </h1>

        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden backdrop-blur-sm bg-opacity-95 p-8 md:p-10 border border-white/50">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#3D2B1F] mb-2">
              Create your account
            </h2>
            <p className="text-gray-500 text-sm">
              Find and book the best meeting venues and workshop spaces in Da Nang.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label
                className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-primary transition-colors"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-300 text-gray-900 outline-none transition-all"
                id="name"
                placeholder="E.g. Alex Morgan"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="group">
              <label
                className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-primary transition-colors"
                htmlFor="reg-email"
              >
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-300 text-gray-900 outline-none transition-all"
                id="reg-email"
                placeholder="name@workx.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="group">
              <label
                className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-primary transition-colors"
                htmlFor="reg-phone"
              >
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-300 text-gray-900 outline-none transition-all"
                id="reg-phone"
                placeholder="+84 905 123 456"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="group">
              <label
                className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-primary transition-colors"
                htmlFor="reg-password"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-300 text-gray-900 outline-none transition-all"
                id="reg-password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-widest text-sm mt-6"
              type="submit"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-400 text-xs">
                or continue with
              </span>
            </div>
          </div>

          {/* Google sign up */}
          <div className="mt-6">
            <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-sm hover:border-gray-300">
              <img alt="Google" className="w-5 h-5" src="/google-logo.svg" />
              Continue with Google
            </button>
          </div>

          {/* Sign in link */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Already have an account?{" "}
              <a
                className="font-bold text-[#3D2B1F] hover:text-primary transition-colors underline decoration-2 decoration-transparent hover:decoration-primary cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
                href="/login"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full px-8 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-black/60 uppercase tracking-widest bg-white/60 backdrop-blur-md border-t border-white/20">
        <div>© 2024 WorkX Inc.</div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a className="hover:text-black transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-black transition-colors" href="#">
            Terms
          </a>
          <a className="hover:text-black transition-colors" href="#">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
