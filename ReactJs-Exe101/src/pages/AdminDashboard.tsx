import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import {
  AnimatedTable,
  type ColumnDef,
} from "@/components/ui/animated-table";

const GOOGLE_MAPS_API_KEY = "AIzaSyCYvoL5s1v8KXUFV21MApewcCUBRsG9zZc";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.75rem",
};

const center = {
  lat: 16.055,
  lng: 108.225, // Da Nang center
};

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
  ],
};

// Dummy data for active cafes/venues for the map
const activeVenues = [
  { id: 1, lat: 16.0544, lng: 108.2472 }, // The Hideout
  { id: 2, lat: 16.0678, lng: 108.2208 }, // Nomad
  { id: 3, lat: 16.0296, lng: 108.2094 }, // Zenith
  { id: 4, lat: 16.06, lng: 108.215 }, // Urban
  { id: 5, lat: 16.083, lng: 108.238 }, // Greenhouse
];

interface CafeApplication {
  id: string;
  name: string;
  district: string;
  image: string;
  photosStatus: "Verified" | "Pending" | "Missing";
  amenitiesVerified: boolean;
}

const cafeApplications: CafeApplication[] = [
  {
    id: "1",
    name: "Bean There",
    district: "Hai Chau District",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08xvv_DdIxpSgp4ciMnsvUJnu1h5O0zhBIO--zjBb_dHpy8jDM4dMakhfSjBDXw0ZSxWhusPQIm6_yYqEgnfJz4QeS6v_71UCN7I8g6TQtW9atAoitb1SrZBUuS6rjH3NFbCvX0sEGq93N7_EYceJHvH7cEHdnjsbhiA9-zLhLGmPMWQw0MlbfqFMKpoEsWjwnTOccdWyNpCu3YIsss2uRX8finMm7SaOleQhd1WnIFoHsbv31r0FujguRz4NpAuok-6LyO_EsgZo",
    photosStatus: "Verified",
    amenitiesVerified: true,
  },
  {
    id: "2",
    name: "Morning Brew",
    district: "Son Tra District",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyoRkFNLg98SGeY-COqGHohhgK-IRZKTnv1y_a6TlcpUlpHX96R7GjvDmH3U0RMmEjIXLxJ7laAFPVQUB_mCjHLvxGD5oPPWXfN-U9haxTuzBPVjV2vpTa-34bliEdM29hWtBucdilU5YWfEyeyif-NdOBdwUIbzXp46Dt2ocKy6gx5rxIaS0rkrx4Zuv-HdjUWE1y13Qd34D5VHrNb916YDFHJuyyZZzT006Z4V_U1j3Hr-Y3dpNDdkbUSOxI1mo2EAbSVvyYmGbR",
    photosStatus: "Pending",
    amenitiesVerified: true,
  },
  {
    id: "3",
    name: "Urban Space",
    district: "Thanh Khe District",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYc8aoQb4aYoIE1UNMFsxD7whsRufNCQHtp6IB0c39qQL9bTg64TCr9Syd8uWawBaE5hNSI1kZNFYWE2Mu7_mr-Z5Vg1fzcFs4UzErctP1hv9uwW4ryCAJw-PB0H3RWNzc8e2rhY2N4Vl2ER_p197oEQsCIyjeoXQHiCeyRtL5qCtO9idEf1Pw_NUZs5B7LaNsQtXYjQlVZzpOUK_qfteYUuB_uxvYOLPOmT0dzy1sTK_8unDX77-tLCRTvH06B2ZeSMfTMWCR9BEC",
    photosStatus: "Missing",
    amenitiesVerified: false,
  },
  {
    id: "4",
    name: "Coastal Hub",
    district: "Ngu Hanh Son District",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnlAxWRhavVqrF4p7Jru0SgI4_fjCA3vW06fRLP5pBiIC-wPNPejdOjDQ801L7aInXHqMbD5hom-sYRp3038cYXINgA0p9V0WIu_kM-riU3f8v96IUqI9Oo6N-v4xt8fn_bQUmKH9VUn7iOhv2aPNJkkaNV5VEX116lkODjSYJDSLNj4lWFHZe6TteonB45DLd1_AbnGLdNgxdGYREKQHtAK5gtY-EiAe6y_H8oE6twngvMe3Rvoy9yKNPakT7bqHsCpIEXcFWKj21",
    photosStatus: "Verified",
    amenitiesVerified: true,
  },
];

const cafeColumns: ColumnDef<CafeApplication>[] = [
  {
    id: "name",
    header: "Cafe Name",
    sortable: true,
    hideable: false,
    cell: (row) => (
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-lg bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url("${row.image}")` }}
        />
        <div>
          <p className="font-semibold text-[#3D2B1F]">{row.name}</p>
          <p className="text-xs text-slate-500">{row.district}</p>
        </div>
      </div>
    ),
  },
  {
    id: "photosStatus",
    header: "Photos Status",
    sortable: true,
    cell: (row) => {
      const styles: Record<CafeApplication["photosStatus"], string> = {
        Verified: "bg-green-100 text-green-800",
        Pending: "bg-yellow-100 text-yellow-800",
        Missing: "bg-red-100 text-red-800",
      };
      const dotColor: Record<CafeApplication["photosStatus"], string> = {
        Verified: "bg-green-500",
        Pending: "bg-yellow-500",
        Missing: "bg-red-500",
      };
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${styles[row.photosStatus]}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dotColor[row.photosStatus]}`} />
          {row.photosStatus}
        </span>
      );
    },
  },
  {
    id: "amenitiesVerified",
    header: "Amenities Verified",
    align: "center",
    sortable: true,
    cell: (row) => (
      <span
        className={`material-symbols-outlined ${row.amenitiesVerified ? "text-green-600" : "text-slate-300"}`}
      >
        {row.amenitiesVerified ? "check_circle" : "cancel"}
      </span>
    ),
  },
  {
    id: "action",
    header: "Action",
    align: "right",
    cell: () => (
      <button className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg text-sm transition-colors focus:outline-none">
        Review
      </button>
    ),
  },
];

const AdminDashboard = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  Super Admin Dashboard
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Welcome back, oversee the WorkX ecosystem.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:flex-initial">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                    search
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-primary text-sm w-full md:w-64 bg-white/80 backdrop-blur-sm placeholder:text-slate-400 outline-none"
                    placeholder="Search cafes, users..."
                    type="text"
                  />
                </div>
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 relative shrink-0">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </button>
              </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    +12%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Total Platform GMV
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  $42,500
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <span className="material-symbols-outlined">
                      storefront
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    +3%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Active Partner Cafes
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  124
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <span className="material-symbols-outlined">
                      confirmation_number
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                    +24%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Total Bookings (Month)
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  1,890
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 h-full w-1 bg-primary" />
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-orange-50 rounded-lg text-primary">
                    <span className="material-symbols-outlined">
                      pending_actions
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                    Action Req
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Pending Requests
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  15
                </h3>
              </div>
            </div>

            {/* Large Map Area */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-64 md:h-96 relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-[#3D2B1F]">
                  Live Activity Map
                </h3>
                <p className="text-xs text-slate-500">
                  Da Nang Districts • High Demand
                </p>
              </div>
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={12}
                  options={mapOptions}
                >
                  {/* Heatmap/Activity simulation via markers */}
                  {activeVenues.map((venue) => (
                    <MarkerF
                      key={venue.id}
                      position={{ lat: venue.lat, lng: venue.lng }}
                      icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: "#F97316",
                        fillOpacity: 0.8,
                        strokeColor: "#ffffff",
                        strokeWeight: 2,
                      }}
                    />
                  ))}
                </GoogleMap>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 rounded-xl">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-5xl text-slate-300 animate-pulse mb-3 block">
                      map
                    </span>
                    <p className="text-slate-400 font-medium text-sm">
                      Loading map...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Table Area */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-bold text-[#3D2B1F]">
                  New Cafe Applications
                </h3>
                <button className="text-xs md:text-sm font-medium text-primary hover:text-orange-700 flex items-center gap-1 focus:outline-none">
                  View All{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>

              <AnimatedTable
                data={cafeApplications}
                columns={cafeColumns}
                striped
                emptyMessage="No pending cafe applications."
              />
            </div>

            {/* Footer */}
            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
