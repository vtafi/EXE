import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "../data/spaces";
import Navbar from "../components/Navbar";

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const space = spaces.find((s) => s.id === id);

  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([
    "10:00",
    "11:00",
    "12:00",
  ]);
  const [guests, setGuests] = useState(1);

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

  const toggleSlot = (slot: string) => {
    if (slot === "08:00") return; // disabled
    setSelectedSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((s) => s !== slot)
        : [...prev, slot].sort(),
    );
  };

  const priceNum = parseFloat(space.price.replace("$", ""));
  const duration = selectedSlots.length;
  const subtotal = priceNum * duration;
  const serviceFee = Math.round(subtotal * 0.07 * 100) / 100;
  const total = subtotal + serviceFee;

  const getTimeRange = () => {
    if (selectedSlots.length === 0) return "No slots selected";
    const sorted = [...selectedSlots].sort();
    const lastHour = parseInt(sorted[sorted.length - 1].split(":")[0]) + 1;
    return `${sorted[0]} - ${lastHour.toString().padStart(2, "0")}:00`;
  };

  // Generate calendar days for October 2023
  const prevMonthDays = [25, 26, 27, 28, 29, 30]; // Sept days filling Mon-Sat
  const daysInMonth = 31;

  const capacityNum = parseInt(space.capacity) || 30;

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body transition-colors duration-300 min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Background"
          className="w-full h-full object-cover opacity-10 saturate-0 brightness-110 blur-[4px]"
          src={space.image}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#DDDDDD]/80 via-[#DDDDDD]/90 to-[#DDDDDD] z-10" />
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main */}
      <main className="relative z-40 flex-grow px-4 md:px-8 py-8 w-full max-w-7xl mx-auto flex flex-col">
        {/* Back + Title */}
        <div className="mb-10">
          <button
            onClick={() => navigate(`/space/${id}`)}
            className="inline-flex items-center text-gray-500 hover:text-black mb-4 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-lg mr-1">
              arrow_back
            </span>
            Back to {space.name}
          </button>
          <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight leading-none text-black">
            Reserve Your Spot
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full max-w-6xl">
          {/* Left: Calendar + Time + Guests */}
          <div className="lg:col-span-7 space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  calendar_month
                </span>
                Select Date
              </h2>
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <span className="text-base font-bold font-display uppercase tracking-wider">
                  October 2023
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-1 text-center">
                {dayNames.map((d) => (
                  <div
                    key={d}
                    className="text-xs font-bold text-gray-400 uppercase py-2"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Previous month filler */}
                {prevMonthDays.map((d) => (
                  <button
                    key={`prev-${d}`}
                    className="aspect-square flex items-center justify-center text-gray-300 rounded-xl hover:bg-gray-50 text-sm"
                  >
                    {d}
                  </button>
                ))}
                {/* Current month */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                  (day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center font-medium rounded-xl text-sm transition-colors ${
                        selectedDate === day
                          ? "bg-primary text-white shadow-sm shadow-orange-200"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {day}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  schedule
                </span>
                Select Time Slots
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {timeSlots.map((slot) => {
                  const isDisabled = slot === "08:00";
                  const isSelected = selectedSlots.includes(slot);
                  return (
                    <button
                      key={slot}
                      disabled={isDisabled}
                      onClick={() => toggleSlot(slot)}
                      className={`py-3 px-2 rounded-xl text-sm font-medium transition-colors ${
                        isDisabled
                          ? "border border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
                          : isSelected
                            ? "bg-primary text-white font-bold shadow-md shadow-orange-100"
                            : "border border-gray-200 text-gray-900 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Guests */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  groups
                </span>
                Number of Guests
              </h2>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-600"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <div className="text-center">
                  <span className="text-4xl font-display text-black">
                    {guests}
                  </span>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">
                    {guests === 1 ? "Person" : "People"}
                  </p>
                </div>
                <button
                  onClick={() => setGuests(Math.min(capacityNum, guests + 1))}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-600"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
                <span className="text-sm text-gray-400 font-medium ml-4">
                  Max capacity: {space.capacity}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Booking Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg sticky top-8 border border-gray-100">
              {/* Space Image */}
              <div className="h-48 relative">
                <img
                  alt={space.imageAlt}
                  className="w-full h-full object-cover"
                  src={space.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-display uppercase">
                    {space.name}
                  </h3>
                  <p className="text-xs opacity-80 font-medium">
                    {space.location}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">
                  Booking Summary
                </h4>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Date</span>
                    <span className="font-bold text-black">
                      Oct {selectedDate.toString().padStart(2, "0")}, 2023
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Time</span>
                    <span className="font-bold text-black">
                      {getTimeRange()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-bold text-black">
                      {duration} {duration === 1 ? "Hour" : "Hours"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-bold text-black">
                      {guests} {guests === 1 ? "Person" : "People"}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-gray-200 w-full mb-6" />

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Rate per hour</span>
                    <span className="font-bold text-black">
                      {space.price}.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-bold text-black">
                      ${serviceFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg mt-2 pt-2">
                    <span className="font-bold text-black">Total</span>
                    <span className="font-bold text-primary text-xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold text-sm uppercase px-6 py-4 rounded-xl transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2 group">
                  Confirm Booking
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-wider">
                  Free cancellation up to 24h before
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-40 w-full px-8 py-6 flex flex-col md:flex-row justify-between items-center mt-auto text-xs font-bold uppercase tracking-widest text-black border-t border-gray-300/50 bg-background-light/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors mb-4 md:mb-0">
          <span className="material-symbols-outlined text-sm">share</span> Share
        </div>
        <div className="flex gap-8 mb-4 md:mb-0">
          <a className="text-primary border-b-2 border-primary pb-1" href="#">
            Discover
          </a>
          <a className="hover:text-primary transition-colors pb-1" href="#">
            Map
          </a>
        </div>
        <div className="text-right flex flex-col items-center md:items-end">
          <p className="opacity-50">Curated by WorkX</p>
          <p>V 1.0.0</p>
        </div>
      </footer>

      {/* Decorators */}
      <div className="fixed left-8 bottom-32 h-20 w-[1px] bg-primary hidden md:block z-30" />
      <div className="fixed left-8 bottom-56 h-10 w-[1px] bg-gray-900 hidden md:block z-30 opacity-30" />
    </div>
  );
};

export default BookingPage;
