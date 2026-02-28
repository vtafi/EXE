import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "../data/spaces";
import Navbar from "../components/Navbar";
import { Slider } from "@/components/ui/slider";

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Parse "07:00 AM - 09:00 PM" → { openMin, closeMin } in minutes since midnight
const parseHours = (hoursStr: string) => {
  const parts = hoursStr.split(" - ");
  const toMin = (s: string) => {
    const [time, period] = s.trim().split(" ");
    const [rawH, rawM] = time.split(":").map(Number);
    let hour = rawH;
    if (period === "PM" && rawH !== 12) hour += 12;
    if (period === "AM" && rawH === 12) hour = 0;
    return hour * 60 + rawM;
  };
  return { openMin: toMin(parts[0]), closeMin: toMin(parts[1]) };
};

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const space = spaces.find((s) => s.id === id);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [guests, setGuests] = useState(1);

  const spaceHours = space?.hours ?? "08:00 AM - 10:00 PM";
  const { openMin, closeMin } = parseHours(spaceHours);

  const allTimeSlots = (() => {
    const slots: string[] = [];
    for (let m = openMin; m < closeMin; m += 30) {
      const h = Math.floor(m / 60).toString().padStart(2, "0");
      const min = (m % 60).toString().padStart(2, "0");
      slots.push(`${h}:${min}`);
    }
    return slots;
  })();

  if (!space) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light font-body">
        <div className="text-center">
          <h1 className="text-4xl font-display uppercase text-black mb-4">Space Not Found</h1>
          <button onClick={() => navigate("/")} className="text-primary font-bold uppercase tracking-wide hover:underline">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ── Calendar helpers ──────────────────────────────────────────────────────
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
  const firstDayAdjusted = (firstDayOfMonth + 6) % 7;             // 0=Mon
  const prevMonthLastDay = new Date(calYear, calMonth, 0).getDate();
  const prevFiller = Array.from({ length: firstDayAdjusted }, (_, i) =>
    prevMonthLastDay - firstDayAdjusted + 1 + i,
  );

  const monthLabel = new Date(calYear, calMonth).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const canGoPrev =
    calYear > today.getFullYear() || calMonth > today.getMonth();

  const goPrev = () => {
    if (!canGoPrev) return;
    if (calMonth === 0) { setCalYear((y) => y - 1); setCalMonth(11); }
    else setCalMonth((m) => m - 1);
    setSelectedDate(null);
    setSelectedSlots([]);
  };

  const goNext = () => {
    if (calMonth === 11) { setCalYear((y) => y + 1); setCalMonth(0); }
    else setCalMonth((m) => m + 1);
    setSelectedDate(null);
    setSelectedSlots([]);
  };

  const isDateDisabled = (day: number) => {
    const d = new Date(calYear, calMonth, day);
    return d < today;
  };

  const handleSelectDate = (day: number) => {
    if (isDateDisabled(day)) return;
    setSelectedDate(day);
    setSelectedSlots([]);
  };

  // ── Time slot helpers ─────────────────────────────────────────────────────
  // Validate with Vietnam timezone (UTC+7)
  const isSlotPast = (slot: string) => {
    if (!selectedDate) return false;
    const selDateObj = new Date(calYear, calMonth, selectedDate);
    if (selDateObj.getTime() !== today.getTime()) return false;
    const now = new Date();
    const [h, m] = slot.split(":").map(Number);
    const slotMin = h * 60 + m;
    const vnNowMin = ((now.getUTCHours() + 7) % 24) * 60 + now.getUTCMinutes();
    return slotMin <= vnNowMin;
  };

  // Only allow consecutive slots
  const toggleSlot = (slot: string) => {
    if (isSlotPast(slot)) return;

    // Deselect: only from edges; clicking middle clears all
    if (selectedSlots.includes(slot)) {
      const sorted = [...selectedSlots].sort();
      if (slot === sorted[0] || slot === sorted[sorted.length - 1]) {
        setSelectedSlots((prev) => prev.filter((s) => s !== slot));
      } else {
        setSelectedSlots([]);
      }
      return;
    }

    // Select: must be adjacent to current range
    if (selectedSlots.length === 0) {
      setSelectedSlots([slot]);
      return;
    }

    const sorted = [...selectedSlots].sort();
    const slotIdx = allTimeSlots.indexOf(slot);
    const firstIdx = allTimeSlots.indexOf(sorted[0]);
    const lastIdx = allTimeSlots.indexOf(sorted[sorted.length - 1]);

    if (slotIdx === firstIdx - 1) {
      // Adjacent before — prepend
      setSelectedSlots([slot, ...sorted]);
    } else if (slotIdx === lastIdx + 1) {
      // Adjacent after — append
      setSelectedSlots([...sorted, slot]);
    } else {
      // Not adjacent — reset to just this slot
      setSelectedSlots([slot]);
    }
  };

  // ── Pricing ───────────────────────────────────────────────────────────────
  const priceNum = parseFloat(space.price.replace("$", ""));
  const durationMinutes = selectedSlots.length * 30;
  const duration = durationMinutes / 60;
  const subtotal = priceNum * duration;
  // Service fee is flat per booking (only applies when slots are selected)
  const SERVICE_FEE = 2.00;
  const serviceFee = selectedSlots.length > 0 ? SERVICE_FEE : 0;
  const total = subtotal + serviceFee;
  const capacityNum = parseInt(space.capacity) || 30;

  const slotToMinutes = (slot: string) => {
    const [h, m] = slot.split(":").map(Number);
    return h * 60 + m;
  };

  const getTimeRange = () => {
    if (selectedSlots.length === 0) return "No slots selected";
    const sorted = [...selectedSlots].sort();
    const endMin = slotToMinutes(sorted[sorted.length - 1]) + 30;
    const eH = Math.floor(endMin / 60).toString().padStart(2, "0");
    const eM = (endMin % 60).toString().padStart(2, "0");
    return `${sorted[0]} – ${eH}:${eM}`;
  };

  const formatDuration = () => {
    if (durationMinutes === 0) return "0 Hours";
    const h = Math.floor(durationMinutes / 60);
    const m = durationMinutes % 60;
    if (m === 0) return `${h} ${h === 1 ? "Hour" : "Hours"}`;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  const formattedDate = selectedDate
    ? new Date(calYear, calMonth, selectedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    : "Not selected";

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body h-screen overflow-hidden flex flex-col relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          alt="Background"
          className="w-full h-full object-cover opacity-10 saturate-0 brightness-110 blur-[4px]"
          src={space.image}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#DDDDDD]/80 via-[#DDDDDD]/90 to-[#DDDDDD] z-10" />
      </div>

      {/* Navbar */}
      <div className="relative z-50 shrink-0 bg-[#DDDDDD] dark:bg-background-dark">
        <Navbar />
      </div>

      {/* Main */}
      <main className="relative z-40 flex-1 overflow-hidden flex flex-col px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20 pt-3 xl:pt-4 pb-3 xl:pb-4 w-full max-w-[1600px] mx-auto">

        {/* Header */}
        <header className="shrink-0 mb-2 xl:mb-3 relative flex items-center justify-center">
          <div className="absolute left-0 flex items-center gap-2">
            <button
              onClick={() => navigate(`/space/${id}`)}
              className="shrink-0 w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white/80 hover:bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
            </button>
            <p className="text-[10px] xl:text-xs text-gray-500 font-medium uppercase tracking-widest leading-none hidden sm:block">
              Back to {space.name}
            </p>
          </div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-display uppercase tracking-tight leading-none text-black">
            Book Your Venue
          </h1>
        </header>

        {/* Grid */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-6 2xl:gap-8 min-h-0">

          {/* Left card */}
          <div className="lg:col-span-7 min-h-0 flex flex-col">
            <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden min-h-0">

              {/* Tab bar */}
              <div className="flex border-b border-gray-100 shrink-0">
                <button
                  onClick={() => step === 2 && setStep(1)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 xl:py-3 text-xs xl:text-sm font-bold uppercase tracking-wide transition-colors border-b-2 ${
                    step === 1 ? "border-primary text-primary" : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span className={`w-5 h-5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center text-[10px] xl:text-xs font-bold shrink-0 ${step === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}>
                    1
                  </span>
                  Choose Date
                  {selectedDate && step === 2 && (
                    <span className="text-primary font-bold normal-case tracking-normal hidden sm:inline">· {formattedDate}</span>
                  )}
                </button>
                <div className="w-px bg-gray-100 self-stretch shrink-0" />
                <button
                  disabled={!selectedDate}
                  onClick={() => selectedDate && setStep(2)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 xl:py-3 text-xs xl:text-sm font-bold uppercase tracking-wide transition-colors border-b-2 ${
                    step === 2 ? "border-primary text-primary" : "border-transparent text-gray-400"
                  } ${!selectedDate ? "cursor-not-allowed opacity-50" : "hover:text-gray-600"}`}
                >
                  <span className={`w-5 h-5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center text-[10px] xl:text-xs font-bold shrink-0 ${step === 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}>
                    2
                  </span>
                  Time & Guests
                </button>
              </div>

              {/* STEP 1: Calendar */}
              {step === 1 && (
                <div className="flex-1 flex flex-col min-h-0 px-4 md:px-5 xl:px-7 2xl:px-9 pt-3 xl:pt-4 pb-3 xl:pb-4">

                  {/* Month nav */}
                  <div className="shrink-0 flex items-center justify-between mb-2 xl:mb-3">
                    <button
                      onClick={goPrev}
                      disabled={!canGoPrev}
                      className={`p-1.5 rounded-full transition-colors ${canGoPrev ? "hover:bg-gray-100 text-gray-600 hover:text-black" : "text-gray-200 cursor-not-allowed"}`}
                    >
                      <span className="material-symbols-outlined xl:text-2xl">chevron_left</span>
                    </button>
                    <span className="text-sm xl:text-base 2xl:text-lg font-bold font-display uppercase tracking-wider">
                      {monthLabel}
                    </span>
                    <button
                      onClick={goNext}
                      className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-black"
                    >
                      <span className="material-symbols-outlined xl:text-2xl">chevron_right</span>
                    </button>
                  </div>

                  {/* Day names */}
                  <div className="shrink-0 grid grid-cols-7 gap-1 text-center mb-1">
                    {DAY_NAMES.map((d) => (
                      <div key={d} className="text-[10px] xl:text-xs 2xl:text-sm font-bold text-gray-400 uppercase py-1">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Day cells — flex-1, auto-sized rows */}
                  <div
                    className="flex-1 min-h-0 grid grid-cols-7 gap-1 text-center"
                    style={{ gridAutoRows: "1fr" }}
                  >
                    {prevFiller.map((d) => (
                      <div key={`prev-${d}`} className="flex items-center justify-center text-gray-300 text-xs xl:text-sm">
                        {d}
                      </div>
                    ))}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                      const disabled = isDateDisabled(day);
                      const selected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          disabled={disabled}
                          onClick={() => handleSelectDate(day)}
                          className={`flex items-center justify-center font-medium rounded-xl text-xs xl:text-sm 2xl:text-base transition-colors ${
                            disabled
                              ? "text-gray-300 cursor-not-allowed"
                              : selected
                                ? "bg-primary text-white shadow-sm shadow-orange-200"
                                : "text-gray-900 hover:bg-gray-100"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Continue button */}
                  <div className="shrink-0 mt-2 xl:mt-3 pt-2 xl:pt-3 border-t border-gray-100">
                    <button
                      disabled={!selectedDate}
                      onClick={() => setStep(2)}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 xl:py-3 2xl:py-4 rounded-xl font-bold text-xs xl:text-sm 2xl:text-base uppercase tracking-wide transition-all duration-200 ${
                        selectedDate
                          ? "bg-primary hover:bg-orange-600 text-white shadow-md shadow-orange-200 group"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {selectedDate ? (
                        <>
                          Continue with {formattedDate}
                          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </>
                      ) : (
                        "Please select a date first"
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Time + Guests */}
              {step === 2 && (
                <div className="flex-1 flex flex-col min-h-0 px-4 md:px-5 xl:px-7 2xl:px-9 pt-3 xl:pt-4 pb-3 xl:pb-4">

                  {/* Time Slots */}
                  <div className="shrink-0">
                    <div className="flex items-center justify-between mb-2 xl:mb-3">
                      <h2 className="text-xs xl:text-sm font-bold uppercase tracking-wide flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-base xl:text-xl">schedule</span>
                        Select Time Slots
                        <span className="text-gray-400 font-normal normal-case tracking-normal text-[10px] xl:text-xs ml-1">
                          ({space.hours})
                        </span>
                      </h2>
                      <span className="text-[10px] xl:text-xs text-gray-400">tap to toggle</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1.5 xl:gap-2 2xl:gap-3">
                      {allTimeSlots.map((slot) => {
                        const past = isSlotPast(slot);
                        const isSelected = selectedSlots.includes(slot);
                        return (
                          <button
                            key={slot}
                            disabled={past}
                            onClick={() => toggleSlot(slot)}
                            className={`py-2 xl:py-2.5 2xl:py-3 px-1 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                              past
                                ? "border border-gray-200 text-gray-300 cursor-not-allowed line-through"
                                : isSelected
                                  ? "bg-primary text-white font-bold shadow-sm shadow-orange-100"
                                  : "border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="shrink-0 h-px bg-gray-100 my-3 xl:my-4" />

                  {/* Guests */}
                  <div className="flex-1 flex flex-col justify-center min-h-0">
                    <h2 className="text-xs xl:text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 mb-3 xl:mb-4">
                      <span className="material-symbols-outlined text-primary text-base xl:text-xl">groups</span>
                      Number of Guests
                      <span className="text-gray-400 font-normal normal-case tracking-normal ml-auto text-[10px] xl:text-xs">
                        Max: {space.capacity}
                      </span>
                    </h2>

                    {/* Counter */}
                    <div className="flex items-center justify-center gap-5 xl:gap-7 mb-4 xl:mb-5">
                      <button
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-9 h-9 xl:w-11 xl:h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-600 shrink-0"
                      >
                        <span className="material-symbols-outlined text-base xl:text-xl">remove</span>
                      </button>
                      <div className="text-center shrink-0 min-w-[4rem]">
                        <span className="text-4xl xl:text-5xl 2xl:text-6xl font-display text-black">{guests}</span>
                        <p className="text-[10px] xl:text-xs text-gray-400 font-medium uppercase tracking-wide mt-0.5">
                          {guests === 1 ? "Person" : "People"}
                        </p>
                      </div>
                      <button
                        onClick={() => setGuests(Math.min(capacityNum, guests + 1))}
                        className="w-9 h-9 xl:w-11 xl:h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-600 shrink-0"
                      >
                        <span className="material-symbols-outlined text-base xl:text-xl">add</span>
                      </button>
                    </div>

                    {/* Slider */}
                    <div className="px-1">
                      <Slider
                        min={1}
                        max={capacityNum}
                        step={1}
                        value={[guests]}
                        onValueChange={([val]) => setGuests(val)}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[10px] xl:text-xs text-gray-400 font-medium mt-1.5">
                        <span>1</span>
                        <span className="text-primary font-bold">{Math.round((guests / capacityNum) * 100)}% capacity</span>
                        <span>{capacityNum}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-5 min-h-0 flex flex-col">
            <div className="flex-1 flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-0">

              <div className="shrink-0 h-[32%] relative">
                <img alt={space.imageAlt} className="w-full h-full object-cover" src={space.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-base xl:text-lg 2xl:text-xl font-display uppercase leading-tight">{space.name}</h3>
                  <p className="text-[10px] xl:text-xs opacity-80 font-medium">{space.location}</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col min-h-0 px-4 xl:px-5 2xl:px-6 pt-3 pb-3">
                <p className="shrink-0 text-[10px] xl:text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 xl:mb-3">
                  Booking Summary
                </p>

                <div className="shrink-0 space-y-2 xl:space-y-2.5">
                  {[
                    { label: "Date", value: formattedDate },
                    { label: "Time", value: getTimeRange() },
                    { label: "Duration", value: formatDuration() },
                    { label: "Guests", value: `${guests} ${guests === 1 ? "Person" : "People"}` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-xs xl:text-sm">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-bold text-black">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-1" />

                <div className="shrink-0 h-px bg-gray-100 mb-2" />

                <div className="shrink-0 space-y-1.5 xl:space-y-2 mb-3">
                  <div className="flex justify-between items-center text-xs xl:text-sm">
                    <span className="text-gray-500">Rate per hour</span>
                    <span className="font-bold text-black">{space.price}.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs xl:text-sm">
                    <span className="text-gray-500">Service Fee (7%)</span>
                    <span className="font-bold text-black">${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1.5 border-t border-gray-100">
                    <span className="font-bold text-sm xl:text-base text-black">Total</span>
                    <span className="font-bold text-primary text-lg xl:text-xl 2xl:text-2xl">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  disabled={!selectedDate || selectedSlots.length === 0}
                  className={`shrink-0 w-full font-bold text-xs xl:text-sm uppercase px-4 py-2.5 xl:py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    selectedDate && selectedSlots.length > 0
                      ? "bg-primary hover:bg-orange-600 text-white shadow-md shadow-orange-200 group cursor-pointer"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Confirm Booking
                  <span className={`material-symbols-outlined text-base transition-transform ${selectedDate && selectedSlots.length > 0 ? "group-hover:translate-x-1" : ""}`}>
                    arrow_forward
                  </span>
                </button>
                <p className="shrink-0 text-center text-[10px] xl:text-xs text-gray-400 mt-1.5 font-medium uppercase tracking-wider">
                  Free cancellation up to 24h before
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
