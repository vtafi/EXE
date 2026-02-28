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
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body h-screen overflow-hidden flex flex-col relative">
      {/* Navbar */}
      <div className="bg-[#DDDDDD] dark:bg-background-dark shrink-0">
        <Navbar />
      </div>

      {/* Main Content — fills remaining height, no scroll */}
      <main className="flex-1 overflow-hidden flex flex-col px-4 md:px-6 lg:px-10 py-3 w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="shrink-0 mb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block">
                {space.location}
              </span>
              <h1 className="text-3xl md:text-4xl font-display uppercase tracking-tight leading-tight text-black">
                {space.name}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                <span className="material-symbols-outlined text-[13px] text-primary">star</span>
                {space.rating} ({space.reviewCount})
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                space.isOpen ? "bg-white text-black border-gray-200" : "bg-gray-200 text-gray-500 border-gray-300"
              }`}>
                {space.isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
          </div>
        </header>

        {/* Grid — flex-1 fills remaining height */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Left: Images — main image + thumbnails side by side */}
          <div className="lg:col-span-8 flex flex-row gap-2 overflow-hidden min-h-0">

            {/* Main image — chiếm 75% chiều rộng */}
            <div
              onClick={() => setLightbox(space.image)}
              className="flex-[3] rounded-2xl overflow-hidden shadow-lg relative group cursor-zoom-in min-h-0"
            >
              <img
                alt={space.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={space.image}
              />
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(space.image); }}
                className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-md hover:bg-white transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
                View Gallery
              </button>
            </div>

            {/* Thumbnails — xếp dọc bên phải, chiếm 25% */}
            <div className="flex-1 flex flex-col gap-2 min-h-0">
              {space.galleryImages.slice(0, 2).map((img, i) => (
                <div key={i} onClick={() => setLightbox(img.src)}
                  className="flex-1 rounded-xl overflow-hidden shadow-md cursor-zoom-in min-h-0">
                  <img alt={img.alt} src={img.src}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
              {space.galleryImages[2] && (
                <div onClick={() => setLightbox(space.galleryImages[2].src)}
                  className="flex-1 rounded-xl overflow-hidden shadow-md relative cursor-zoom-in min-h-0">
                  <img alt={space.galleryImages[2].alt} src={space.galleryImages[2].src}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-bold text-sm">+8 More</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Booking Panel */}
          <div className="lg:col-span-4 overflow-y-auto h-full">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col h-full">
              <h2 className="text-lg font-display uppercase text-black mb-3">Space Info</h2>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {space.amenities.map((amenity, i) => (
                  <div key={i}
                    className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-center gap-1.5 group hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">{amenity.icon}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wide text-gray-700 leading-tight">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1.5">About</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{space.description}</p>
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
