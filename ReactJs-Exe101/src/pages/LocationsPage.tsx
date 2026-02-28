import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayViewF,
  OverlayView,
  InfoWindowF,
} from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyCYvoL5s1v8KXUFV21MApewcCUBRsG9zZc";

const mapWorkspaces = [
  {
    id: "the-hideout-cafe",
    name: "The Hideout Cafe",
    location: "My Khe Beach, Da Nang",
    price: "$4",
    rating: "4.9",
    trending: true,
    lat: 16.0544,
    lng: 108.2472,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-9VBH3gDBYQQ2lge0mN0G-DihmCj7mS56ZZ62JcbmeeeuyfTmCEj1QALli9rexYKNce-DrM2RkTzdxWgtUu3xFUb016ednmJ7DlUpthfndWNjUSiSxMTBbAV7XUrNkpni7t4RA2NCAu87-PzHcqQDL0WpanMnzeckswYMETT-0f5MdU4medqDdj9KnOm4j94O5WTebIbC0wocj5nYV8TKciW1pe_-CKBaxlR1kasfLQb3aJ6HRq2Z6cgocKIeckHf5K8Vs_bO9aIB",
    imageAlt: "Modern cafe interior with warm lighting",
    tags: [
      { icon: "wifi", label: "Fast Wifi" },
      { icon: "power", label: "Plugs" },
    ],
  },
  {
    id: "nomad-space",
    name: "Nomad Space",
    location: "Hai Chau District",
    price: "$6",
    rating: "4.7",
    trending: false,
    lat: 16.0678,
    lng: 108.2208,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqS_UKjypZJpjCH_cAN87Qa4oT1_W74A6hdRUzFWw_8Vl4dhFtf2NzKFpJDqRaBoutKYMrc38uB2ZPdI7N-etw7fk83Err-W791crkpmTqvaI7gwG70S02Lm6eU7h5A0qsAzqNQV_2UBH20NgqEikVwvsoWA4Aq-MehY54ca-GSLIAdRkUD1esHTUX0egg2bd6glxf19ZMgGLqJDVh8Kq-fP5ocLcL1WwAEEYkNTZDrNkPDTFB0cy9UlpE39YE7GFRnjeERl9-n5AM",
    imageAlt: "Bright workspace with large windows",
    tags: [
      { icon: "meeting_room", label: "Meeting Room" },
      { icon: "local_cafe", label: "Specialty Coffee" },
    ],
  },
  {
    id: "zenith-hub",
    name: "Zenith Hub",
    location: "Cam Le District",
    price: "$3",
    rating: "4.5",
    trending: false,
    selected: true,
    lat: 16.0296,
    lng: 108.2094,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3MAqlSop1NELijS7QSBdRfA_OdTvNpi_D44qxaDB4B1jhuIsutuSWTkjSMaQekRgUAPTr7VQzS2e1_K0oL70fIE8P__4_QlUH6SzhpIjkVOWvDVbNCpFq2KDtkNs4RuPbnZC01afoS4WhFZjIjH4U1Uxr_c_FckkJ1cqnOuC6dCnavTCwkUIx7CQ8fujNQmlu8aq9HC4-y78u4_539ZMrP8twFWZvzEJTKJEqXbHife_DAHkJV613-CRgsF6D1ClY3Qr5K-1x-bC_",
    imageAlt: "Minimalist office space",
    tags: [{ icon: "park", label: "Garden View" }],
  },
  {
    id: "urban-roastery",
    name: "Urban Roastery",
    location: "Hai Chau District",
    price: "$15",
    rating: "4.9",
    trending: false,
    lat: 16.06,
    lng: 108.215,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
    imageAlt: "Urban Roastery workspace",
    tags: [
      { icon: "bolt", label: "Fast Wifi" },
      { icon: "power", label: "Outlets" },
    ],
  },
  {
    id: "the-greenhouse",
    name: "The Greenhouse",
    location: "Son Tra District",
    price: "$15",
    rating: "4.8",
    trending: false,
    lat: 16.083,
    lng: 108.238,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
    imageAlt: "Greenhouse workspace with plants",
    tags: [
      { icon: "nature", label: "Garden" },
      { icon: "coffee", label: "Free Coffee" },
    ],
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 16.055,
  lng: 108.225,
};

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  styles: [
    // Base geometry — dark slate
    { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
    // Hide default POI icons so markers stand out
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    // Administrative
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#64779e" }],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }],
    },
    // POI
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#283d6a" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6f9ba5" }],
    },
    // Parks — dark teal accent
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#023e58" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#3C7680" }],
    },
    // Roads — subtle warm gray
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#304a7d" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#2c6675" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#255763" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#b0d5ce" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#023e58" }],
    },
    // Transit
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [{ color: "#283d6a" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#3a4762" }],
    },
    // Water — deep navy blue
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0e1626" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4e6d70" }],
    },
  ],
};

const LocationsPage = () => {
  const navigate = useNavigate();
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const onMarkerClick = useCallback((id: string) => {
    setSelectedMarker(id);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-body h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="bg-white border-b border-gray-100">
        <Navbar />
      </div>

      {/* Main */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Left sidebar */}
        <section className="w-full lg:w-[35%] xl:w-[30%] flex flex-col bg-white h-full z-10 shadow-[4px_0_24px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Filters bar */}
          <div className="px-4 lg:px-5 py-3 bg-white z-10 sticky top-0">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-sm font-bold text-gray-900">
                {mapWorkspaces.length} Workspaces in Da Nang
              </h1>
              <button className="text-primary text-sm font-semibold hover:text-orange-700 transition-colors">
                Clear all
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar items-center">
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 hover:border-gray-300 transition-colors">
                <span className="text-gray-900 text-xs font-bold whitespace-nowrap">
                  Wifi Speed
                </span>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 shadow-md shadow-orange-500/20">
                <span className="text-white text-xs font-bold whitespace-nowrap">
                  Quiet Zone
                </span>
                <span className="material-symbols-outlined text-white text-[16px]">
                  close
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 hover:border-gray-300 transition-colors">
                <span className="text-gray-900 text-xs font-bold whitespace-nowrap">
                  Meeting Rooms
                </span>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 hover:border-gray-300 transition-colors">
                <span className="text-gray-900 text-xs font-bold whitespace-nowrap">
                  Price Range
                </span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className="flex-1 overflow-y-auto px-4 lg:px-5 pb-6 space-y-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#d1d5db transparent",
            }}
          >
            {mapWorkspaces.map((ws) => (
              <div
                key={ws.id}
                className={`group flex flex-col bg-white rounded-2xl p-3 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  selectedMarker === ws.id
                    ? "border-2 border-primary ring-4 ring-primary/5 shadow-lg"
                    : "shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100"
                }`}
                onClick={() => {
                  setSelectedMarker(ws.id);
                }}
              >
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-3">
                  <img
                    alt={ws.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={ws.image}
                  />
                  {ws.trending && (
                    <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      Trending
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-yellow-500 text-[16px]">
                      star
                    </span>
                    <span className="text-xs font-bold text-gray-900">
                      {ws.rating}
                    </span>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3
                        className={`text-base font-bold leading-tight transition-colors ${
                          selectedMarker === ws.id
                            ? "text-primary"
                            : "text-gray-900 group-hover:text-primary"
                        }`}
                      >
                        {ws.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 font-medium">
                        {ws.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-bold text-base block leading-none">
                        {ws.price}
                        <span className="text-gray-400 text-xs font-medium">
                          /hr
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {ws.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {tag.icon}
                        </span>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right: Google Map */}
        <section className="hidden lg:block w-[65%] xl:w-[70%] h-full relative">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={13}
              options={mapOptions}
            >
              {mapWorkspaces.map((ws) => {
                const isSelected = selectedMarker === ws.id;
                const size = isSelected ? 56 : 44;
                return (
                  <OverlayViewF
                    key={ws.id}
                    position={{ lat: ws.lat, lng: ws.lng }}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div
                      onClick={() => onMarkerClick(ws.id)}
                      style={{
                        position: "relative",
                        transform: "translate(-50%, -100%)",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {/* Circular image */}
                      <div
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: isSelected
                            ? "3px solid #F97316"
                            : "3px solid white",
                          boxShadow: isSelected
                            ? "0 0 0 3px rgba(249,115,22,0.3), 0 4px 12px rgba(0,0,0,0.4)"
                            : "0 2px 8px rgba(0,0,0,0.3)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <img
                          src={ws.image}
                          alt={ws.imageAlt}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      {/* Bottom pointer triangle */}
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "8px solid transparent",
                          borderRight: "8px solid transparent",
                          borderTop: isSelected
                            ? "10px solid #F97316"
                            : "10px solid white",
                          margin: "-2px auto 0",
                          filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))",
                        }}
                      />
                    </div>
                  </OverlayViewF>
                );
              })}

              {/* InfoWindow for selected marker */}
              {selectedMarker &&
                (() => {
                  const ws = mapWorkspaces.find((w) => w.id === selectedMarker);
                  if (!ws) return null;
                  return (
                    <InfoWindowF
                      position={{ lat: ws.lat, lng: ws.lng }}
                      onCloseClick={() => setSelectedMarker(null)}
                      options={{ pixelOffset: new google.maps.Size(0, -35) }}
                    >
                      <div
                        style={{
                          width: "280px",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "130px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src={ws.image}
                            alt={ws.imageAlt}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "4px",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "16px",
                              fontWeight: "700",
                              color: "#111",
                              margin: 0,
                            }}
                          >
                            {ws.name}
                          </h3>
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#F97316",
                            }}
                          >
                            {ws.price}/hr
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#666",
                            margin: "0 0 8px 0",
                          }}
                        >
                          {ws.location}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            marginBottom: "10px",
                          }}
                        >
                          <span style={{ color: "#eab308", fontSize: "14px" }}>
                            ★
                          </span>
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#333",
                            }}
                          >
                            {ws.rating}
                          </span>
                        </div>
                        <button
                          onClick={() => navigate(`/space/${ws.id}`)}
                          style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#111",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "13px",
                            fontWeight: "700",
                            cursor: "pointer",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#F97316")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#111")
                          }
                        >
                          View Details →
                        </button>
                      </div>
                    </InfoWindowF>
                  );
                })()}
            </GoogleMap>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-gray-300 animate-pulse mb-3 block">
                  map
                </span>
                <p className="text-gray-400 font-medium text-sm">
                  Loading map...
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Mobile Map toggle */}
        <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">map</span>
            <span className="font-bold text-sm">Map View</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default LocationsPage;
