import { useState } from "react";
import { spaces } from "../data/spaces";
import Navbar from "../components/Navbar";
import SpaceCard from "../components/SpaceCard";
import { MorphingText } from "../components/ui/MorphingText";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const n = spaces.length;

  const prev = () => setActiveIndex((i) => (i - 1 + n) % n);
  const next = () => setActiveIndex((i) => (i + 1) % n);

  const visibleSpaces = [-1, 0, 1].map((offset) => ({
    space: spaces[(activeIndex + offset + n) % n],
    isActive: offset === 0,
  }));

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body transition-colors duration-300 min-h-screen flex flex-col overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Bright modern cafe interior with natural light"
          className="w-full h-full object-cover opacity-80 saturate-[0.8] brightness-110 blur-[2px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVv7RS8k5AoP990H84EY6KtSfyaFMiYLH6WZ-qApfuxsHYfiFR6b99cu4zlXnEOPY82N0Ogu-SKcopgqe3ViIYgprXmGphCg92fDo5MVOrq2SBnC_9kO5ow0oRbPXRACSNZoWSAiIeWHNZyWsAtOTyrdkekmVsulmi7FleLHJ95BrNcUU6cvw07kUHYzoUiWUB02QZ5ggFS_hkhXMk5ev3yhqY-Ef-82qU-v9wcnK9QwiIJocsIGLIQXQ4pqKd4J7jpOF-02UjCTb"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#DDDDDD]/60 via-[#DDDDDD]/30 to-[#DDDDDD]/80 dark:from-background-dark/90 dark:via-transparent dark:to-background-dark z-10" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-40 flex-grow flex flex-col justify-center items-center text-center px-4 mt-8 md:mt-0">
        {/* Hero Text */}
        <div className="mb-4">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
            Cafe Meeting Spaces · Da Nang
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none drop-shadow-sm">
            <span className="text-[#3D2B1F]">Workspace</span>{" "}
            <MorphingText
              words={["Rental", "Booking", "Meeting", "Event", "Space"]}
              className="bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600 bg-clip-text text-transparent"
              interval={2500}
              animationDuration={0.45}
            />{" "}
            <span className="text-[#3D2B1F]">eXperience</span>
          </h1>
        </div>

        <p className="max-w-2xl text-gray-800 text-sm md:text-base mb-10 leading-relaxed font-medium">
          Connect with cafes offering meeting rooms and private event spaces in Da Nang.
          <br className="hidden md:block" />
          Perfect for workshops, team meetings, and short-term training — up to 100 people.
        </p>

        {/* Filter */}
        <div className="mb-16">
          <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 hover:scale-105 transition-transform">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Filter By:
            </span>
            <span className="font-bold text-sm text-black">All Venues</span>
            <span className="material-symbols-outlined text-sm text-gray-400">
              expand_more
            </span>
          </button>
        </div>

        {/* Cards Carousel */}
        <div className="w-full max-w-[98%] xl:max-w-[1400px] relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div className="flex items-center justify-center gap-6 pb-10 overflow-hidden">
            {visibleSpaces.map(({ space, isActive }, idx) => (
              <div
                key={`${space.id}-${idx}`}
                className={`transition-all duration-500 ${
                  isActive
                    ? "scale-100 z-10 opacity-100"
                    : "scale-90 opacity-70 hover:opacity-90"
                }`}
              >
                <SpaceCard space={space} isActive={isActive} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {spaces.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary w-6 h-2"
                    : "bg-gray-400/50 w-2 h-2 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
          {/* Horizontal divider */}
          <div className="mt-6 flex items-center gap-4 px-2">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">
              WorkX · Da Nang
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-40 w-full px-8 py-6 flex justify-between items-end mt-auto text-xs font-bold uppercase tracking-widest text-black">
        <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">share</span> Share
        </div>
        <div className="flex gap-8 absolute left-1/2 -translate-x-1/2 bottom-6">
          <a className="text-primary border-b-2 border-primary pb-1" href="#">
            Explore
          </a>
          <a className="hover:text-primary transition-colors pb-1" href="#">
            Locations
          </a>
        </div>
        <div className="text-right">
          <p className="opacity-50">Curated by WorkX</p>
          <p>V 1.0.0</p>
        </div>
      </footer>

      {/* Side decorators */}
      <div className="fixed left-8 bottom-32 h-20 w-[1px] bg-primary hidden md:block z-30" />
      <div className="fixed left-8 bottom-56 h-10 w-[1px] bg-gray-900 hidden md:block z-30 opacity-30" />
    </div>
  );
};

export default HomePage;
