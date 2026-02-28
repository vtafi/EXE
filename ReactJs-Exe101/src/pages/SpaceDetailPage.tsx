import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "../data/spaces";
import Navbar from "../components/Navbar";

const SpaceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  const space = spaces.find((s) => s.id === id);

  if (!space) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light font-body">
        <div className="text-center">
          <h1 className="text-4xl font-display uppercase text-black mb-4">
            Space Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary font-bold uppercase tracking-wide hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body transition-colors duration-300 min-h-screen flex flex-col relative">
      {/* Shared Navbar */}
      <div className="bg-[#DDDDDD] dark:bg-background-dark">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-6 lg:px-10 pb-8 w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-5 pt-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-2">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-1 block">
                {space.location}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-tight text-black drop-shadow-sm">
                {space.name}
              </h1>
            </div>
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <span className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                <span className="material-symbols-outlined text-[13px] text-primary">
                  star
                </span>
                {space.rating} ({space.reviewCount})
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  space.isOpen
                    ? "bg-white text-black border-gray-200"
                    : "bg-gray-200 text-gray-500 border-gray-300"
                }`}
              >
                {space.isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Images */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {/* Main image */}
            <div
              onClick={() => setLightbox(space.image)}
              className="w-full rounded-2xl overflow-hidden shadow-lg relative group cursor-zoom-in"
            >
              <img
                alt={space.imageAlt}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                src={space.image}
              />
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(space.image); }}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-md hover:bg-white transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
                View Gallery
              </button>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-3 gap-3 h-[120px] md:h-[160px]">
              {space.galleryImages.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(img.src)}
                  className="rounded-xl overflow-hidden shadow-md cursor-zoom-in"
                >
                  <img
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    src={img.src}
                  />
                </div>
              ))}
              {space.galleryImages[2] && (
                <div
                  onClick={() => setLightbox(space.galleryImages[2].src)}
                  className="rounded-xl overflow-hidden shadow-md relative cursor-zoom-in"
                >
                  <img
                    alt={space.galleryImages[2].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    src={space.galleryImages[2].src}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-bold text-base">+8 More</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Booking Panel */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col sticky top-5">
              <h2 className="text-lg font-display uppercase text-black mb-4">
                Space Info
              </h2>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {space.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-center gap-1.5 group hover:border-primary/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        {amenity.icon}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wide text-gray-700 leading-tight">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1.5">
                  About
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {space.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-1">
                  <span>Capacity: {space.capacity}</span>
                  <span>•</span>
                  <span>{space.hours}</span>
                </div>
                <button
                  onClick={() => navigate(`/book/${space.id}`)}
                  className="w-full py-3 bg-primary hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  <span>Book This Space</span>
                  <span className="w-1 h-1 bg-white rounded-full mx-1" />
                  <span>{space.price}/hr</span>
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-1">
                  Free cancellation up to 2 hours before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Side decorators */}
      <div className="fixed left-8 bottom-12 h-20 w-[1px] bg-primary hidden md:block z-30" />
      <div className="fixed left-8 bottom-36 h-10 w-[1px] bg-gray-900 hidden md:block z-30 opacity-30" />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Image */}
          <img
            src={lightbox}
            alt="Full size"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default SpaceDetailPage;
