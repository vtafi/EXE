import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const exploreSpaces = [
  {
    id: "urban-roastery",
    name: "Urban Roastery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
    imageAlt: "Urban Roastery workspace",
    rating: "4.9",
    reviews: 128,
    district: "Hai Chau District",
    price: "45k",
    description:
      "A vibrant space combining the aroma of fresh coffee with serious productivity zones.",
    tags: ["High-Speed Wifi", "Printer", "Coffee"],
  },
  {
    id: "the-greenhouse",
    name: "The Greenhouse",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
    imageAlt: "Greenhouse workspace with plants",
    rating: "4.8",
    reviews: 85,
    district: "Son Tra District",
    price: "60k",
    description:
      "Immerse yourself in nature while you work. Natural light and oxygen-rich environment.",
    tags: ["Outdoor Terrace", "Quiet", "Pet Friendly"],
  },
  {
    id: "minimalist-pod",
    name: "Minimalist Pod",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLL6g3M3LpqIJiGY8m9Oasp-zfpRESLmv6WwvXfp9cFW-Vzu_HJwJlGqn6Ro3vw6jepzizhgKs_zJ7QDr0m2h6dqi3jw0930Wr5p4kp-FH9Vu4onXgXSPBj-wR2NkHfzQHj7Se2Jk7KPZtjPobPcba_eFwBZDTPCdOg53C81r0pz7JVaekWablEWyJD_nhLRoHvKNW3SSeajDhLXAqajthwmRcPflzEvcbaRGscm6WjJOJhCt0WQgy4S7VbSDSwJYiDykeFV3-f5Rb",
    imageAlt: "Minimalist wooden pod workspace",
    rating: "5.0",
    reviews: 42,
    district: "Thanh Khe District",
    price: "80k",
    description:
      "Ultra-private soundproof pods for focus work and confidential calls.",
    tags: ["Soundproof", "Ergonomic", "24/7 Access"],
  },
  {
    id: "library-nook",
    name: "The Library",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAakK_M44SIVb87EFzODfHNeOBhyRBvYUQJe3-Ut72DdqPj2jhyF3qc7o-F8RyvwXvv5EBvXNgqU1MmXxr09-sriGMSKncrwVoMkpT_h2NQajpFNBZDhCJb0MSptmvKD-vTPCXTywNdwpKn7X44SmQus1q24i-7Nam3BLKIliUEoHqQnJ2V5sllgC59hqaM60vSkDqUTtCN9keyRZ-Ub_jp2bW02dMRA2cr1PCqRkuzBtbBWVev90SPjqSqI1zNWTMbmtQbYBSd-Xck",
    imageAlt: "Quiet library corner",
    rating: "4.7",
    reviews: 210,
    district: "Hai Chau District",
    price: "30k",
    description:
      "Classic studious atmosphere. Perfect for reading, writing, and research.",
    tags: ["Silence", "Books", "Tea"],
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="bg-background-light text-gray-900 font-body min-h-screen flex flex-col">
      {/* Shared Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <Navbar />
      </div>

      {/* Main Content - full width */}
      <main className="flex-1 p-6 md:p-12 max-w-[1920px] mx-auto w-full relative">
        {/* Header row with filter button */}
        <div className="mb-10">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-primary rounded-full">
                Da Nang, Vietnam
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-[#3D2B1F] uppercase leading-tight mb-2">
                Find Your Flow
                <br />
                In Da Nang
              </h1>
              <p className="text-lg text-gray-600 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                12 spaces available today
              </p>
            </div>

            {/* Filter toggle button */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg ${
                filtersOpen
                  ? "bg-primary text-white shadow-orange-200"
                  : "bg-white text-[#3D2B1F] border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {filtersOpen ? "filter_list_off" : "filter_list"}
              </span>
              Filters
            </button>
          </div>

          {/* Dynamic Filter Card */}
          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              filtersOpen
                ? "max-h-[600px] opacity-100 mt-6"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-[#3D2B1F] uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    tune
                  </span>
                  Filter Workspaces
                </h3>
              </div>

              {/* Filters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Location */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      location_on
                    </span>
                    Location
                  </h4>
                  <div className="space-y-2.5">
                    {["Hai Chau", "Son Tra", "Ngu Hanh Son", "Thanh Khe"].map(
                      (loc, i) => (
                        <label
                          key={loc}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            defaultChecked={i === 0}
                            className="form-checkbox text-primary rounded border-gray-300 focus:ring-primary h-4 w-4"
                            type="checkbox"
                          />
                          <span className="text-sm text-gray-600 group-hover:text-[#3D2B1F] transition-colors">
                            {loc}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                {/* Capacity */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      groups
                    </span>
                    Capacity
                  </h4>
                  <div className="space-y-2.5">
                    {["1-5 people", "6-15 people", "20-50+ people"].map(
                      (cap, i) => (
                        <label
                          key={cap}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            defaultChecked={i === 1}
                            className="form-radio text-primary border-gray-300 focus:ring-primary h-4 w-4"
                            name="capacity"
                            type="radio"
                          />
                          <span className="text-sm text-gray-600 group-hover:text-[#3D2B1F] transition-colors">
                            {cap}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      coffee
                    </span>
                    Amenities
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      { label: "Projector", checked: false },
                      { label: "Whiteboard", checked: true },
                      { label: "Quiet Zone", checked: true },
                      { label: "Ergonomic Chairs", checked: false },
                    ].map((item) => (
                      <label
                        key={item.label}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          defaultChecked={item.checked}
                          className="form-checkbox text-primary rounded border-gray-300 focus:ring-primary h-4 w-4"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-[#3D2B1F] transition-colors">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      payments
                    </span>
                    Price Range
                  </h4>
                  <div className="px-1 pt-2">
                    <input
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      max="1000000"
                      min="0"
                      step="50000"
                      type="range"
                      defaultValue="300000"
                    />
                    <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
                      <span>0 VND</span>
                      <span>1M+ VND</span>
                    </div>
                    <div className="mt-2 text-center text-sm font-bold text-[#3D2B1F]">
                      Up to 300,000 VND / hr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {exploreSpaces.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
              onClick={() => navigate(`/space/${space.id}`)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={space.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={space.image}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#3D2B1F] shadow-sm">
                  ★ {space.rating} ({space.reviews})
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-white uppercase">
                  {space.district}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-display uppercase text-[#3D2B1F] group-hover:text-primary transition-colors">
                    {space.name}
                  </h3>
                  <span className="text-xl font-bold text-gray-900">
                    {space.price}
                    <span className="text-xs font-normal text-gray-500">
                      /hr
                    </span>
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {space.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {space.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/space/${space.id}`);
                    }}
                    className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg uppercase tracking-wider transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Book Now
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* View All Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-dashed border-gray-300 flex items-center justify-center min-h-[400px] cursor-pointer hover:border-primary group">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl text-gray-300 group-hover:text-primary transition-colors mb-4">
                add_location_alt
              </span>
              <h3 className="text-xl font-display uppercase text-gray-400 group-hover:text-[#3D2B1F] transition-colors">
                View All 12 Spaces
              </h3>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-4 bg-white border border-gray-300 text-gray-600 font-bold uppercase tracking-wider rounded-full hover:bg-gray-50 hover:text-[#3D2B1F] transition-colors shadow-sm">
            Load More Results
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
