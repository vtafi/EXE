import React from "react";
import { ArrowRight, Search, Coffee, Zap } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-xs font-bold uppercase tracking-wider text-stone-500">
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

            {/* Search-bar style input */}
            <div className="bg-white p-2 rounded-full shadow-xl shadow-stone-200/50 border border-stone-100 max-w-md flex items-center">
              <div className="pl-4 text-stone-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Bạn đang tìm giải pháp gì?"
                className="flex-1 px-4 py-2 bg-transparent outline-none text-stone-800 placeholder:text-stone-400"
              />
              <button className="bg-black hover:bg-orange-600 text-white rounded-full p-3 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-stone-500">
              <span>Featured in:</span>
              <div className="flex gap-3 opacity-60">
                <span className="font-serif italic">Forbes</span>
                <span className="font-serif italic">TechCrunch</span>
                <span className="font-serif italic">Wired</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Card Stack Style */}
          <div className="lg:w-1/2 relative lg:h-[500px] w-full flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square">
              {/* Abstract shapes */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#EBE5DE] rounded-[2rem] transform rotate-6 z-0"></div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-stone-200 rounded-[2rem] transform -rotate-3 z-10"></div>

              {/* Main Visual Card */}
              <div className="absolute inset-4 bg-white rounded-[1.5rem] shadow-2xl shadow-stone-300/40 z-20 overflow-hidden border border-stone-100 flex flex-col">
                <div className="h-2/3 bg-stone-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1">
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
                      Quản lý dự án, nhân sự và tài nguyên trên một nền tảng duy
                      nhất.
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
              <div className="absolute -bottom-6 -right-2 bg-black text-white p-4 rounded-xl shadow-xl z-30 flex items-center gap-3 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Zap size={16} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-bold">Hiệu suất</p>
                  <p className="font-bold">+120%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
