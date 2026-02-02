import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Check,
  MessageSquare,
  Search,
  Coffee,
  Sparkles,
} from "lucide-react";

const WorkXLandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // LƯU Ý: Component này phải nằm ngoài thẻ <Canvas> của React Three Fiber
    <div className="font-sans text-slate-900 bg-[#FDFBF7] min-h-screen w-full overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md border-b border-stone-100 py-3 shadow-sm" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl transition-transform duration-300 hover:scale-105">
              W.
            </div>
            <span className="text-xl font-bold tracking-tighter text-black">
              WorkX
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Khám phá", "Tính năng", "Cộng đồng", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-stone-500 hover:text-black transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-black hover:text-orange-600 transition-colors">
              Đăng nhập
            </button>
            <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-black/10">
              Bắt đầu ngay
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl p-6 flex flex-col gap-4">
            {["Khám phá", "Tính năng", "Cộng đồng", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-bold text-black py-2 border-b border-stone-50"
              >
                {item}
              </a>
            ))}
            <button className="bg-black text-white w-full py-3 rounded-full font-bold mt-2">
              Bắt đầu ngay
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-xs font-bold uppercase tracking-wider text-stone-500 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                New Way to Work
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.05] tracking-tight">
                Không gian <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  Làm việc số.
                </span>
              </h1>

              <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                WorkX không chỉ là công cụ, đó là nơi văn hóa doanh nghiệp được
                kiến tạo và vận hành trơn tru như một tách cà phê buổi sáng.
              </p>

              {/* Search Bar */}
              <div className="bg-white p-2 rounded-full shadow-xl shadow-stone-200/50 border border-stone-100 max-w-md flex items-center">
                <div className="pl-4 text-stone-400">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Bạn cần tìm giải pháp gì?"
                  className="flex-1 px-4 py-2 bg-transparent outline-none text-stone-800 placeholder:text-stone-400 w-full"
                />
                <button className="bg-black hover:bg-orange-600 text-white rounded-full p-3 transition-colors flex-shrink-0">
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium text-stone-500 pt-4">
                <span>Featured in:</span>
                <div className="flex gap-4 opacity-60">
                  <span className="font-serif italic">Forbes</span>
                  <span className="font-serif italic">TechCrunch</span>
                  <span className="font-serif italic">Wired</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 relative lg:h-[500px] w-full flex items-center justify-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#EBE5DE] rounded-[2rem] transform rotate-6 z-0"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-stone-200 rounded-[2rem] transform -rotate-3 z-10"></div>

                {/* Main Card */}
                <div className="absolute inset-4 bg-white rounded-[1.5rem] shadow-2xl shadow-stone-300/40 z-20 overflow-hidden border border-stone-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-2/3 bg-stone-100 relative overflow-hidden group">
                    {/* Placeholder Image using CSS Gradient instead of external URL to avoid loading issues */}
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <Coffee size={80} />
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1 shadow-sm">
                      <Coffee size={12} className="text-orange-600" /> Workspace
                    </div>
                  </div>
                  <div className="h-1/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-xl">WorkX Dashboard</h3>
                        <span className="text-orange-600 font-bold text-sm">
                          4.9 ★
                        </span>
                      </div>
                      <p className="text-stone-500 text-sm line-clamp-2">
                        Quản lý dự án, nhân sự và tài nguyên trên một nền tảng
                        duy nhất.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {["Thông minh", "Tối giản", "Hiệu quả"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase font-bold px-2 py-1 bg-stone-100 rounded text-stone-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <div className="absolute -bottom-6 -right-2 bg-black text-white p-4 rounded-xl shadow-xl z-30 flex items-center gap-3 max-w-[200px] animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Zap size={16} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-bold">
                      Hiệu suất
                    </p>
                    <p className="font-bold">+120%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURE GRID --- */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-black mb-2">
                Giải pháp của chúng tôi
              </h2>
              <p className="text-stone-500">
                Được thiết kế để phù hợp với mọi quy mô doanh nghiệp
              </p>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 font-bold text-black hover:text-orange-600 transition-colors"
            >
              Xem tất cả <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles size={64} strokeWidth={1} />
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  AI Powered
                </div>
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors mb-2">
                Trợ lý ảo WorkX
              </h3>
              <p className="text-stone-500 text-sm line-clamp-2 mb-3">
                Tự động hóa các tác vụ lặp lại, phân tích dữ liệu và đưa ra gợi
                ý thông minh.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 group-hover:scale-110 transition-transform duration-500">
                  <Shield size={64} strokeWidth={1} />
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  Enterprise
                </div>
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors mb-2">
                Bảo mật tuyệt đối
              </h3>
              <p className="text-stone-500 text-sm line-clamp-2 mb-3">
                Mã hóa đầu cuối chuẩn quân đội, đảm bảo dữ liệu doanh nghiệp
                luôn an toàn.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 group-hover:scale-110 transition-transform duration-500">
                  <Globe size={64} strokeWidth={1} />
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  Cloud
                </div>
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors mb-2">
                Kết nối toàn cầu
              </h3>
              <p className="text-stone-500 text-sm line-clamp-2 mb-3">
                Làm việc mọi lúc, mọi nơi trên mọi thiết bị với khả năng đồng bộ
                tức thì.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-24 bg-[#FDFBF7] px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center text-orange-600">
              <MessageSquare size={40} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif italic text-black leading-relaxed mb-8">
              "WorkX mang lại sự tinh gọn mà chúng tôi tìm kiếm bấy lâu nay.
              Giao diện đẹp, dễ sử dụng và cực kỳ hiệu quả."
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center font-bold text-stone-600 bg-stone-200">
                A
              </div>
              <div className="text-left">
                <div className="font-bold text-black">Nguyễn Văn A</div>
                <div className="text-sm text-stone-500">
                  CEO, TechStart Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-[2rem] border border-stone-200 p-12 md:p-20 text-center shadow-xl shadow-stone-200/50 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
                Sẵn sàng trải nghiệm?
              </h2>
              <p className="text-stone-500 text-lg mb-10 max-w-xl mx-auto">
                Tham gia cộng đồng WorkX ngay hôm nay. Dùng thử miễn phí 14
                ngày.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl">
                  Đăng ký miễn phí
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-16 pb-8 border-t border-stone-100 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  W.
                </div>
                <span className="text-xl font-bold">WorkX</span>
              </div>
              <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
                Nền tảng quản trị công việc hiện đại.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Sản phẩm</h4>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4">Công ty</h4>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>
                  <a href="#" className="hover:text-black transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-8 flex justify-between items-center text-sm text-stone-400">
            <p>&copy; 2024 WorkX Inc.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkXLandingPage;
