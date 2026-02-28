import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CafeOwnerSidebar } from "../components/cafe-owner-sidebar";

const weekDays = [
  { day: "Mon", date: 14, isToday: false },
  { day: "Tue", date: 15, isToday: true },
  { day: "Wed", date: 16, isToday: false },
  { day: "Thu", date: 17, isToday: false },
  { day: "Fri", date: 18, isToday: false },
  { day: "Sat", date: 19, isToday: false },
  { day: "Sun", date: 20, isToday: false },
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00"];

interface Booking {
  title: string;
  subtitle?: string;
  color: "blue" | "green" | "purple" | "orange";
  day: number;
  time: string;
  tall?: boolean;
}

const bookings: Booking[] = [
  { title: "Private Meeting", color: "blue", day: 14, time: "09:00" },
  { title: "Team Sync", subtitle: "Zone B", color: "green", day: 15, time: "10:00" },
  { title: "Workshop A", subtitle: "Greenhouse", color: "purple", day: 17, time: "09:00", tall: true },
  { title: "Client Call", color: "orange", day: 16, time: "11:00" },
];

const bookingColorMap = {
  blue: { bg: "bg-blue-100", border: "border-blue-500", title: "text-blue-800", subtitle: "text-blue-600" },
  green: { bg: "bg-green-100", border: "border-green-500", title: "text-green-800", subtitle: "text-green-600" },
  purple: { bg: "bg-purple-100", border: "border-purple-500", title: "text-purple-800", subtitle: "text-purple-600" },
  orange: { bg: "bg-orange-100", border: "border-orange-500", title: "text-orange-800", subtitle: "text-orange-600" },
};

function getBookingForCell(day: number, time: string) {
  return bookings.find((b) => b.day === day && b.time === time);
}

const CafeOwnerDashboard = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        <CafeOwnerSidebar />

        <main className="flex-1 h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  Cafe Owner Dashboard
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Welcome back, manage your spaces and bookings.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:flex-initial">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                    search
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-primary text-sm w-full md:w-64 bg-white/80 backdrop-blur-sm placeholder:text-slate-400 outline-none"
                    placeholder="Search bookings..."
                    type="text"
                  />
                </div>
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 relative shrink-0">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </button>
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm shrink-0 hidden md:block"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD08xvv_DdIxpSgp4ciMnsvUJnu1h5O0zhBIO--zjBb_dHpy8jDM4dMakhfSjBDXw0ZSxWhusPQIm6_yYqEgnfJz4QeS6v_71UCN7I8g6TQtW9atAoitb1SrZBUuS6rjH3NFbCvX0sEGq93N7_EYceJHvH7cEHdnjsbhiA9-zLhLGmPMWQw0MlbfqFMKpoEsWjwnTOccdWyNpCu3YIsss2uRX8finMm7SaOleQhd1WnIFoHsbv31r0FujguRz4NpAuok-6LyO_EsgZo")',
                  }}
                />
              </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    +18.2%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Monthly Earnings</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  $3,450.00
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-500 text-[18px] filled-star">
                        star
                      </span>
                    ))}
                    <span className="material-symbols-outlined text-yellow-500 text-[18px] filled-star">
                      star_half
                    </span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Average Rating</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  4.8 <span className="text-lg text-slate-400 font-normal">/ 5.0</span>
                </h3>
              </div>
            </div>

            {/* Schedule + Edit Space */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Weekly Schedule */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-[#3D2B1F] text-lg">Weekly Schedule</h3>
                    <p className="text-slate-500 text-xs">Room occupancy for Nov 14 – Nov 20</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500">
                      <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                    <button className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                      Today
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-auto relative bg-white">
                  {/* Calendar Header */}
                  <div className="grid grid-cols-8 border-b border-slate-100 sticky top-0 bg-white z-10 min-w-[600px]">
                    <div className="p-3 border-r border-slate-100 text-xs text-slate-400 text-center flex items-center justify-center">
                      Time
                    </div>
                    {weekDays.map((wd) => (
                      <div
                        key={wd.day}
                        className={`p-3 border-r border-slate-100 text-center last:border-r-0 ${
                          wd.isToday ? "bg-orange-50/30" : ""
                        }`}
                      >
                        <div className={`text-xs font-medium ${wd.isToday ? "text-primary font-bold" : "text-slate-500"}`}>
                          {wd.day}
                        </div>
                        <div className={`text-sm font-bold ${wd.isToday ? "text-primary" : "text-[#3D2B1F]"}`}>
                          {wd.date}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="min-w-[600px] relative">
                    {/* Background column highlights */}
                    <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
                      <div className="border-r border-slate-50" />
                      <div className="border-r border-slate-50" />
                      <div className="border-r border-slate-50 bg-orange-50/10" />
                      <div className="border-r border-slate-50" />
                      <div className="border-r border-slate-50" />
                      <div className="border-r border-slate-50" />
                      <div className="border-r border-slate-50" />
                      <div />
                    </div>

                    {timeSlots.map((time) => (
                      <div key={time} className="grid grid-cols-8">
                        {/* Time label */}
                        <div className="p-2 border-r border-b border-slate-50 text-[10px] text-slate-400 text-right pr-3 h-16">
                          {time}
                        </div>
                        {/* Day cells */}
                        {weekDays.map((wd) => {
                          const booking = getBookingForCell(wd.date, time);
                          const isLunchClosed = time === "12:00";
                          const colors = booking ? bookingColorMap[booking.color] : null;

                          return (
                            <div
                              key={`${wd.date}-${time}`}
                              className={`border-r border-b border-slate-50 h-16 relative last:border-r-0 ${
                                isLunchClosed ? "bg-slate-50/50" : ""
                              }`}
                            >
                              {booking && colors && (
                                <div
                                  className={`absolute top-1 left-1 right-1 ${
                                    booking.tall ? "h-20 z-10 shadow-sm" : "bottom-1"
                                  } ${colors.bg} border-l-4 ${colors.border} rounded-sm p-1`}
                                >
                                  <div className={`text-[10px] font-bold ${colors.title} truncate`}>
                                    {booking.title}
                                  </div>
                                  {booking.subtitle && (
                                    <div className={`text-[9px] ${colors.subtitle} truncate`}>
                                      {booking.subtitle}
                                    </div>
                                  )}
                                </div>
                              )}
                              {isLunchClosed && !booking && (
                                <span className="absolute top-2 left-2 text-[9px] text-slate-300">
                                  Closed
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edit Space */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-5 border-b border-slate-100">
                  <h3 className="font-bold text-[#3D2B1F] text-lg">Edit Space</h3>
                  <p className="text-slate-500 text-xs">Update details for "The Greenhouse"</p>
                </div>
                <div className="p-6 space-y-6 flex-1">
                  {/* Cover Image */}
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-lg h-40 w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS")',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        edit_square
                      </span>
                    </div>
                  </div>

                  {/* Space Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#3D2B1F]">Space Name</label>
                    <input
                      className="w-full rounded-lg border border-slate-300 shadow-sm focus:border-primary focus:ring-primary text-sm font-medium text-slate-700 px-3 py-2 outline-none focus:ring-1"
                      type="text"
                      defaultValue="The Greenhouse"
                    />
                  </div>

                  {/* Amenities */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-[#3D2B1F]">Amenities Available</label>
                    <div className="space-y-2">
                      {[
                        { icon: "wifi", label: "High-Speed WiFi", checked: true },
                        { icon: "videocam", label: "Projector / Screen", checked: true },
                        { icon: "electrical_services", label: "Power Outlets", checked: false },
                      ].map((amenity) => (
                        <label
                          key={amenity.label}
                          className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                          <input
                            defaultChecked={amenity.checked}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            type="checkbox"
                          />
                          <span className="material-symbols-outlined text-slate-400 text-[18px]">
                            {amenity.icon}
                          </span>
                          <span className="text-sm text-slate-600 font-medium">{amenity.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                  <button className="w-full py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-sm shadow-orange-200 transition-all active:scale-[0.98]">
                    Update Space
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. Cafe Partner Platform. All rights reserved.
            </footer>
          </div>
        </main>
      </div>

      <style>{`
        .filled-star {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </SidebarProvider>
  );
};

export default CafeOwnerDashboard;
