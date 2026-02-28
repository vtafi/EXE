import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

interface PromoCode {
  id: string;
  code: string;
  description: string;
  status: "Active" | "Scheduled" | "Expired";
  statusNote: string;
  used: number;
  limit: number;
}

interface Review {
  id: string;
  initials: string;
  initialsColor: string;
  name: string;
  timeAgo: string;
  rating: number;
  cafeName: string;
  text: string;
  systemFlag?: string;
  images: string[];
  flagged: boolean;
}

const promoCodes: PromoCode[] = [
  {
    id: "1",
    code: "SUMMER24",
    description: "25% Discount on all bookings",
    status: "Active",
    statusNote: "Expires in 2 days",
    used: 342,
    limit: 500,
  },
  {
    id: "2",
    code: "WORKXNEW",
    description: "$10 Off first booking",
    status: "Scheduled",
    statusNote: "Starts Sep 1st",
    used: 0,
    limit: 1000,
  },
  {
    id: "3",
    code: "FLASH50",
    description: "50% Discount (Flash Sale)",
    status: "Expired",
    statusNote: "Ended Yesterday",
    used: 100,
    limit: 100,
  },
];

const reviews: Review[] = [
  {
    id: "1",
    initials: "AL",
    initialsColor: "bg-slate-200 text-slate-600",
    name: "Alex L.",
    timeAgo: "2 hours ago",
    rating: 5,
    cafeName: "Bean There",
    text: "Absolutely loved the atmosphere here. The WiFi was super fast, which is critical for my work. The coffee was a bit pricey but worth it for the quiet environment. Highly recommend for remote workers!",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnlAxWRhavVqrF4p7Jru0SgI4_fjCA3vW06fRLP5pBiIC-wPNPejdOjDQ801L7aInXHqMbD5hom-sYRp3038cYXINgA0p9V0WIu_kM-riU3f8v96IUqI9Oo6N-v4xt8fn_bQUmKH9VUn7iOhv2aPNJkkaNV5VEX116lkODjSYJDSLNj4lWFHZe6TteonB45DLd1_AbnGLdNgxdGYREKQHtAK5gtY-EiAe6y_H8oE6twngvMe3Rvoy9yKNPakT7bqHsCpIEXcFWKj21",
    ],
    flagged: false,
  },
  {
    id: "2",
    initials: "MK",
    initialsColor: "bg-slate-200 text-slate-600",
    name: "Minh K.",
    timeAgo: "5 hours ago",
    rating: 2,
    cafeName: "The Daily Grind",
    text: "Not great. The AC was broken and it was way too hot to focus. Also, the staff seemed overwhelmed. Might try again in winter but not now.",
    images: [],
    flagged: false,
  },
  {
    id: "3",
    initials: "SP",
    initialsColor: "bg-purple-100 text-purple-600",
    name: "Sarah P.",
    timeAgo: "1 day ago",
    rating: 1,
    cafeName: "Urban Space",
    systemFlag: "System Flag: Potential Spam Keyword Detected",
    text: "Check out my profile for crypto investment tips! Make $5000 a week working from cafes like this one. #crypto #money",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYc8aoQb4aYoIE1UNMFsxD7whsRufNCQHtp6IB0c39qQL9bTg64TCr9Syd8uWawBaE5hNSI1kZNFYWE2Mu7_mr-Z5Vg1fzcFs4UzErctP1hv9uwW4ryCAJw-PB0H3RWNzc8e2rhY2N4Vl2ER_p197oEQsCIyjeoXQHiCeyRtL5qCtO9idEf1Pw_NUZs5B7LaNsQtXYjQlVZzpOUK_qfteYUuB_uxvYOLPOmT0dzy1sTK_8unDX77-tLCRTvH06B2ZeSMfTMWCR9BEC",
    ],
    flagged: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-primary">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[18px] ${
            i <= rating ? "filled-star" : "text-slate-300"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}

function PromoCard({ promo }: { promo: PromoCode }) {
  const statusStyles: Record<PromoCode["status"], string> = {
    Active: "bg-green-100 text-green-700",
    Scheduled: "bg-blue-100 text-blue-700",
    Expired: "bg-slate-100 text-slate-600",
  };

  const barColor =
    promo.status === "Active"
      ? "bg-primary"
      : promo.status === "Expired"
        ? "bg-slate-400"
        : "bg-slate-300";

  const isExpired = promo.status === "Expired";
  const usagePercent = promo.limit > 0 ? (promo.used / promo.limit) * 100 : 0;

  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative group overflow-hidden ${
        isExpired ? "opacity-75" : ""
      }`}
    >
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <span
          className={`material-symbols-outlined text-6xl ${
            isExpired ? "text-slate-400" : "text-primary"
          }`}
        >
          local_offer
        </span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span
          className={`${statusStyles[promo.status]} text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide`}
        >
          {promo.status}
        </span>
        <span className="text-slate-400 text-xs">{promo.statusNote}</span>
      </div>
      <h4
        className={`text-2xl font-mono font-bold tracking-wider mb-1 ${
          isExpired ? "text-slate-600" : "text-[#3D2B1F]"
        }`}
      >
        {promo.code}
      </h4>
      <p className="text-slate-500 text-sm mb-4">{promo.description}</p>
      <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
        <div
          className={`${barColor} h-2 rounded-full`}
          style={{ width: `${usagePercent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500 font-medium">
        <span>{promo.used} Used</span>
        <span>Limit: {promo.limit}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">
          {isExpired ? "Duplicate" : "Edit"}
        </button>
        <button className="py-1.5 px-3 rounded-lg border border-red-100 text-red-600 hover:bg-red-50">
          <span className="material-symbols-outlined text-sm">delete</span>
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className={`p-6 flex flex-col md:flex-row gap-6 transition-colors ${
        review.flagged
          ? "bg-red-50/30 hover:bg-red-50/50 border-l-4 border-l-red-400"
          : "hover:bg-slate-50"
      }`}
    >
      {/* Reviewer info */}
      <div className="md:w-48 shrink-0 space-y-2">
        <div className="flex items-center gap-3">
          <div
            className={`h-10 w-10 rounded-full ${review.initialsColor} flex items-center justify-center font-bold`}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-sm font-bold text-[#3D2B1F]">{review.name}</p>
            <p className="text-xs text-slate-400">{review.timeAgo}</p>
          </div>
        </div>
        <StarRating rating={review.rating} />
        <p className="text-xs text-slate-500">
          Cafe: <span className="font-semibold text-slate-700">{review.cafeName}</span>
        </p>
      </div>

      {/* Review content */}
      <div className="flex-1 space-y-3">
        {review.systemFlag && (
          <p className="text-sm italic text-slate-500">[{review.systemFlag}]</p>
        )}
        <p className="text-sm text-slate-700 leading-relaxed">{review.text}</p>
        {review.images.length > 0 && (
          <div className="flex gap-2">
            {review.images.map((img, idx) => (
              <div
                key={idx}
                className={`h-20 w-20 rounded-lg bg-cover bg-center border border-slate-200 ${
                  review.flagged ? "opacity-50" : "cursor-pointer hover:opacity-90"
                }`}
                style={{ backgroundImage: `url("${img}")` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div
        className={`md:w-48 shrink-0 flex flex-col gap-2 justify-center border-l ${
          review.flagged
            ? "md:border-l-red-100"
            : "md:border-l-slate-100"
        } md:pl-6 border-l-0 pl-0`}
      >
        {review.flagged ? (
          <>
            <button className="w-full py-2 bg-red-100 text-red-700 hover:bg-red-200 font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">block</span>
              Reject
            </button>
            <button className="w-full py-2 bg-white border border-slate-200 text-slate-600 hover:bg-green-50 hover:text-green-700 hover:border-green-200 font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check</span>
              Ignore Flag
            </button>
          </>
        ) : (
          <>
            <button className="w-full py-2 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              Approve
            </button>
            <button className="w-full py-2 bg-white border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">flag</span>
              Flag
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const MarketingReviewsPage = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
            {/* Header */}
            <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  Marketing & Moderation
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Manage promo codes and moderate community reviews.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full lg:w-auto">
                <div className="relative flex-1 lg:flex-initial">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                    search
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-primary text-sm w-full lg:w-64 bg-white/80 backdrop-blur-sm placeholder:text-slate-400 outline-none"
                    placeholder="Search codes, reviews..."
                    type="text"
                  />
                </div>
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 relative shrink-0">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </button>
              </div>
            </header>

            {/* Promo Codes Section */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#3D2B1F] flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">sell</span>
                  Active Promo Codes
                </h3>
                <button className="px-4 py-2 bg-primary text-white hover:bg-orange-600 font-medium rounded-lg text-sm transition-colors shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Create New Code
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promoCodes.map((promo) => (
                  <PromoCard key={promo.id} promo={promo} />
                ))}
              </div>
            </section>

            {/* Review Moderation Section */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#3D2B1F] flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    rate_review
                  </span>
                  Review Moderation Queue
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 font-medium">Sort by:</span>
                  <select className="text-sm border-none bg-transparent font-semibold text-[#3D2B1F] focus:ring-0 cursor-pointer p-0 pr-6 outline-none">
                    <option>Newest First</option>
                    <option>Lowest Rating</option>
                    <option>Flagged by System</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500">
                  Showing <span className="font-bold">1-3</span> of{" "}
                  <span className="font-bold">24</span> pending reviews
                </p>
                <div className="flex gap-2">
                  <button
                    disabled
                    className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-400 cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50">
                    Next
                  </button>
                </div>
              </div>
            </section>

            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. All rights reserved.
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

export default MarketingReviewsPage;
