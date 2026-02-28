import { useState } from "react";
import Navbar from "../components/Navbar";
import { FeedbackWidget } from "@/components/ui/feedback-widget";

const bookings = [
  {
    id: "WX-8821",
    name: "Urban Roastery",
    status: "confirmed",
    date: "Oct 24, 2023",
    time: "09:00 AM - 01:00 PM",
    description:
      "Private corner desk near window. Includes high-speed wifi & complimentary drip coffee.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA30ru_rkkQ-Hcgw9yGfazi3L43Pe95TPHQzHEO1QHB2dV7E5x3d2SpiYTIXIZQ1Zq9Nx2FHUNz7-YfwnBkfpkRLtb41ragV6CZtAAHocY-fFru52duuwH94N8F-5VN5UsR3sHAOywH7UAJV-am-e4UxbMiSITxRn1Tnuy8-_olFqjqHm30oearaAW6CgwXUPRFAwpjthsHV-UdD_fn6iVZo76TPZJE6iYWSEB4XpLGzyVOzlsUQAGVA27eKcBiqmpukDlqzyxfz3ES",
  },
  {
    id: "WX-7590",
    name: "The Greenhouse",
    status: "completed",
    date: "Oct 18, 2023",
    time: "02:00 PM - 06:00 PM",
    description: "Communal table, garden view. Power outlet access guaranteed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVeUg154bs0ZZpVGPaKbTBrrzbY_ylbj2_wjZ_SrCwr1ybzFkYNCZSzUJ7XoFCa0FS4d_MU-DKhkaL6T5u6YcFr0MR3Hrh6apMdZqA1M5fsSLqbRQr3XUMYhctQEuAkyQS5bcZt0ga3jxbj77sWUqMPmkwgvNBncHq6GbRM-il4sbaw0nogQ8nLLwZb72Vq6-ZxwBAPQPAIge4LUVXrpkXJtki4pYEPBfIvl0kGi4i2QeNqA0VXNfyEVbwBeHeLx-TQyaVflAXIUyE",
  },
  {
    id: "WX-6022",
    name: "Minimalist Pod",
    status: "completed",
    date: "Oct 12, 2023",
    time: "10:00 AM - 12:00 PM",
    description: "Single soundproof pod. Ideal for video calls.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLL6g3M3LpqIJiGY8m9Oasp-zfpRESLmv6WwvXfp9cFW-Vzu_HJwJlGqn6Ro3vw6jepzizhgKs_zJ7QDr0m2h6dqi3jw0930Wr5p4kp-FH9Vu4onXgXSPBj-wR2NkHfzQHj7Se2Jk7KPZtjPobPcba_eFwBZDTPCdOg53C81r0pz7JVaekWablEWyJD_nhLRoHvKNW3SSeajDhLXAqajthwmRcPflzEvcbaRGscm6WjJOJhCt0WQgy4S7VbSDSwJYiDykeFV3-f5Rb",
  },
  {
    id: "WX-5109",
    name: "Library Nook",
    status: "cancelled",
    date: "Sep 30, 2023",
    time: "01:00 PM - 05:00 PM",
    description: "Refund processed on Oct 1, 2023.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAakK_M44SIVb87EFzODfHNeOBhyRBvYUQJe3-Ut72DdqPj2jhyF3qc7o-F8RyvwXvv5EBvXNgqU1MmXxr09-sriGMSKncrwVoMkpT_h2NQajpFNBZDhCJb0MSptmvKD-vTPCXTywNdwpKn7X44SmQus1q24i-7Nam3BLKIliUEoHqQnJ2V5sllgC59hqaM60vSkDqUTtCN9keyRZ-Ub_jp2bW02dMRA2cr1PCqRkuzBtbBWVev90SPjqSqI1zNWTMbmtQbYBSd-Xck",
  },
];

const statusConfig: Record<
  string,
  { label: string; bgClass: string; textClass: string; borderClass: string }
> = {
  confirmed: {
    label: "Confirmed",
    bgClass: "bg-green-100",
    textClass: "text-green-800",
    borderClass: "border-green-200",
  },
  completed: {
    label: "Completed",
    bgClass: "bg-gray-200",
    textClass: "text-gray-600",
    borderClass: "border-gray-300",
  },
  cancelled: {
    label: "Cancelled",
    bgClass: "bg-red-100",
    textClass: "text-red-800",
    borderClass: "border-red-200",
  },
};

const MyBookingsPage = () => {
  const [openFeedback, setOpenFeedback] = useState<string | null>(null);

  const handleFeedbackSubmit = (
    bookingId: string,
    data: { rating: string; feedback: string }
  ) => {
    console.log(`Feedback for ${bookingId}:`, data);
    setOpenFeedback(null);
  };

  return (
    <div className="bg-[#DDDDDD] text-gray-900 font-body min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Background texture */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#DDDDDD] opacity-90 z-10" />
        <img
          alt="Background texture"
          className="w-full h-full object-cover opacity-10 saturate-0 blur-sm"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVv7RS8k5AoP990H84EY6KtSfyaFMiYLH6WZ-qApfuxsHYfiFR6b99cu4zlXnEOPY82N0Ogu-SKcopgqe3ViIYgprXmGphCg92fDo5MVOrq2SBnC_9kO5ow0oRbPXRACSNZoWSAiIeWHNZyWsAtOTyrdkekmVsulmi7FleLHJ95BrNcUU6cvw07kUHYzoUiWUB02QZ5ggFS_hkhXMk5ev3yhqY-Ef-82qU-v9wcnK9QwiIJocsIGLIQXQ4pqKd4J7jpOF-02UjCTb"
        />
      </div>

      {/* Navbar */}
      <div className="relative z-50 bg-[#DDDDDD]/80 backdrop-blur-md sticky top-0 border-b border-gray-300">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="relative z-40 flex-grow px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-12 mt-4 md:mt-8">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Dashboard
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-none text-black">
            Your Sessions
          </h1>
        </header>

        {/* Booking cards */}
        <div className="flex flex-col gap-6 pb-20">
          {bookings.map((booking) => {
            const status = statusConfig[booking.status];
            const isConfirmed = booking.status === "confirmed";
            const isCancelled = booking.status === "cancelled";
            const isCompleted = booking.status === "completed";
            const isFeedbackOpen = openFeedback === booking.id;

            return (
              <div
                key={booking.id}
                className={`bg-white rounded-2xl overflow-hidden relative group border border-gray-100 transition-all duration-300 ${
                  isConfirmed
                    ? "shadow-lg hover:shadow-xl"
                    : isCancelled
                      ? "shadow-sm opacity-60 hover:opacity-100 hover:shadow-md"
                      : "shadow-sm opacity-80 hover:opacity-100 hover:shadow-md"
                }`}
              >
                <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Image */}
                  <div
                    className={`w-full md:w-48 h-32 md:h-32 rounded-xl overflow-hidden shrink-0 relative transition-all duration-500 ${
                      isConfirmed
                        ? ""
                        : isCancelled
                          ? "grayscale"
                          : "grayscale group-hover:grayscale-0"
                    }`}
                  >
                    <img
                      alt={booking.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={booking.image}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Info */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`${status.bgClass} ${status.textClass} text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider border ${status.borderClass}`}
                      >
                        {status.label}
                      </span>
                      <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          confirmation_number
                        </span>{" "}
                        #{booking.id}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display uppercase text-black mb-1">
                      {booking.name}
                    </h3>

                    <div
                      className={`font-bold text-sm md:text-base flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-3 ${
                        isConfirmed ? "text-gray-600" : "text-gray-500"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-sm ${
                            isConfirmed ? "text-primary" : "text-gray-400"
                          }`}
                        >
                          calendar_month
                        </span>{" "}
                        {booking.date}
                      </span>
                      <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-sm ${
                            isConfirmed ? "text-primary" : "text-gray-400"
                          }`}
                        >
                          schedule
                        </span>{" "}
                        {booking.time}
                      </span>
                    </div>

                    <p
                      className={`text-xs max-w-md ${
                        isConfirmed ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {booking.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto mt-2 md:mt-0">
                    {isConfirmed && (
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors shadow-sm text-xs font-bold uppercase tracking-wide">
                        <span className="material-symbols-outlined text-sm">
                          receipt_long
                        </span>
                        View Receipt
                      </button>
                    )}
                    {isCompleted && (
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-500 rounded-lg hover:border-primary hover:text-primary transition-colors text-xs font-bold uppercase tracking-wide">
                        <span className="material-symbols-outlined text-sm">
                          refresh
                        </span>
                        Book Again
                      </button>
                    )}
                    {isCancelled && (
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-gray-400 rounded-lg hover:text-black transition-colors text-xs font-bold uppercase tracking-wide">
                        <span className="material-symbols-outlined text-sm">
                          info
                        </span>
                        Details
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setOpenFeedback(isFeedbackOpen ? null : booking.id)
                      }
                      className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-xs font-bold uppercase tracking-wide ${
                        isFeedbackOpen
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        rate_review
                      </span>
                      Feedback
                    </button>
                  </div>
                </div>

                {/* Feedback widget - inline below card content */}
                {isFeedbackOpen && (
                  <div className="border-t border-gray-100 bg-gray-50/50">
                    <FeedbackWidget
                      label={`How was ${booking.name}?`}
                      placeholder={`Share your experience at ${booking.name}...`}
                      className="p-2 md:p-4"
                      onSubmit={(data) => handleFeedbackSubmit(booking.id, data)}
                      onClose={() => setOpenFeedback(null)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-40 w-full px-8 py-6 flex flex-col md:flex-row justify-between items-center md:items-end mt-auto text-xs font-bold uppercase tracking-widest text-black border-t border-gray-300 bg-[#DDDDDD]/50">
        <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors mb-4 md:mb-0">
          <span className="material-symbols-outlined text-sm">share</span> Share
        </div>
        <div className="flex gap-8 mb-4 md:mb-0">
          <a className="hover:text-primary transition-colors pb-1" href="#">
            Discover
          </a>
          <a className="hover:text-primary transition-colors pb-1" href="#">
            Map
          </a>
          <a className="text-primary border-b-2 border-primary pb-1" href="#">
            My Bookings
          </a>
        </div>
        <div className="text-right flex flex-col items-center md:items-end">
          <p className="opacity-50">Curated by WorkX</p>
          <p>V 1.0.0</p>
        </div>
      </footer>

      {/* Decorative lines */}
      <div className="fixed left-8 top-32 h-20 w-[1px] bg-primary hidden xl:block z-30" />
      <div className="fixed left-8 top-56 h-10 w-[1px] bg-gray-900 hidden xl:block z-30 opacity-30" />
    </div>
  );
};

export default MyBookingsPage;
