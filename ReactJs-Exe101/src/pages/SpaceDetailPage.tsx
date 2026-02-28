import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "../data/spaces";
import Navbar from "../components/Navbar";

const SpaceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
      <main className="flex-grow px-4 md:px-8 lg:px-12 pb-12 w-full max-w-[1920px] mx-auto">
        {/* Header */}
        <header className="mb-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                {space.location}
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-tight leading-[0.85] text-black drop-shadow-sm">
                {space.name}
              </h1>
            </div>
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                <span className="material-symbols-outlined text-[14px] text-primary">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Left: Images */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl relative group">
              <img
                alt={space.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={space.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur text-black px-4 py-2 rounded-full text-xs font-bold uppercase shadow-lg hover:bg-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  grid_view
                </span>
                View Gallery
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 h-[160px] md:h-[200px]">
              {space.galleryImages.slice(0, 2).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    src={img.src}
                  />
                </div>
              ))}
              {space.galleryImages[2] && (
                <div className="rounded-2xl overflow-hidden shadow-md relative">
                  <img
                    alt={space.galleryImages[2].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    src={space.galleryImages[2].src}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      +8 More
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Booking Panel */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col sticky top-8">
              <h2 className="text-2xl font-display uppercase text-black mb-6">
                Space Info
              </h2>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {space.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 text-center gap-2 group hover:border-primary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">
                        {amenity.icon}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-800">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="prose prose-sm mb-8">
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-widest mb-2">
                  About
                </h3>
                <p className="text-gray-800 text-base leading-relaxed font-normal">
                  {space.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <div className="flex items-center justify-between text-sm font-medium text-gray-600 mb-2">
                  <span>Capacity: {space.capacity}</span>
                  <span>•</span>
                  <span>{space.hours}</span>
                </div>
                <button
                  onClick={() => navigate(`/book/${space.id}`)}
                  className="w-full py-4 bg-primary hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  <span>Book This Space</span>
                  <span className="w-1 h-1 bg-white rounded-full mx-1" />
                  <span>{space.price}/hr</span>
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">
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
    </div>
  );
};

export default SpaceDetailPage;
