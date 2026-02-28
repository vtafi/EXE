import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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

      {/* Main centered content */}
      <main className="relative z-10 w-full flex flex-col items-center justify-start pt-10 pb-20 px-4 min-h-[calc(100vh-160px)]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-black uppercase tracking-tight text-center mb-10 drop-shadow-sm">
          Welcome Back
        </h1>

        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden backdrop-blur-sm bg-opacity-95 p-8 md:p-10 border border-white/50">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#3D2B1F] mb-2">
              Sign in to your account
            </h2>
            <p className="text-gray-500 text-sm">Pick up where you left off.</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label
                className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-primary transition-colors"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-300 text-gray-900 outline-none transition-all"
                id="email"
                placeholder="name@workx.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="group">
              <div className="flex justify-between items-center mb-1">
                <label
                  className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-primary transition-colors"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="text-xs font-medium text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Forgot?
                </a>
              </div>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-300 text-gray-900 outline-none transition-all"
                id="password"
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
              Sign In
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

          {/* Google sign in */}
          <div className="mt-6">
            <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-sm hover:border-gray-300">
              <img alt="Google" className="w-5 h-5" src="/google-logo.svg" />
              Continue with Google
            </button>
          </div>

          {/* Create account link */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Don't have an account?{" "}
              <a
                className="font-bold text-[#3D2B1F] hover:text-primary transition-colors underline decoration-2 decoration-transparent hover:decoration-primary cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
                href="/register"
              >
                Create account
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

export default LoginPage;
