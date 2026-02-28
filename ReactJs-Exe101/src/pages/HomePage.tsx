import { spaces } from "../data/spaces";
import Navbar from "../components/Navbar";
import SpaceCard from "../components/SpaceCard";

const HomePage = () => {
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
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Premium Workspaces
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-tight leading-none text-black drop-shadow-sm">
            Cozy Cafe Spaces
          </h1>
        </div>

        <p className="max-w-2xl text-gray-800 text-sm md:text-base mb-10 leading-relaxed font-medium">
          Curated spaces designed for deep work and collaboration. High-speed
          <br className="hidden md:block" />
          wifi, artisan coffee, and silence included.
        </p>

        {/* Filter */}
        <div className="mb-16">
          <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 hover:scale-105 transition-transform">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Filter By:
            </span>
            <span className="font-bold text-sm text-black">All Spaces</span>
            <span className="material-symbols-outlined text-sm text-gray-400">
              expand_more
            </span>
          </button>
        </div>

        {/* Cards Carousel */}
        <div className="w-full max-w-[95%] xl:max-w-7xl relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 px-4 snap-x snap-mandatory">
            {spaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
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
            Discover
          </a>
          <a className="hover:text-primary transition-colors pb-1" href="#">
            Map
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
