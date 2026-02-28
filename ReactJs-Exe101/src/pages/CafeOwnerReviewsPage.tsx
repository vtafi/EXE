import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CafeOwnerSidebar } from "../components/cafe-owner-sidebar";

interface Review {
  id: string;
  initials: string;
  name: string;
  rating: number;
  visitedAgo: string;
  space: string;
  text: string;
  images?: string[];
  reply?: { text: string; daysAgo: string };
}

const reviews: Review[] = [
  {
    id: "1",
    initials: "EM",
    name: "Emily Marston",
    rating: 5,
    visitedAgo: "Visited 2 days ago",
    space: "The Greenhouse",
    text: 'Absolutely loved the quiet atmosphere in "The Greenhouse". Perfect for deep work. The wifi was blazing fast and the coffee was excellent. Will definitely be booking again for my team meeting next week!',
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS",
    ],
  },
  {
    id: "2",
    initials: "JD",
    name: "James Donovan",
    rating: 4,
    visitedAgo: "Visited 5 days ago",
    space: "Main Lounge",
    text: "Great spot, but it got a little noisy around lunch time. The staff were super helpful though and moved me to a quieter corner.",
    reply: {
      text: '"Thanks for the feedback James! We try to manage noise levels but lunch rush can be tricky. Glad our team could help you find a better spot."',
      daysAgo: "4 days ago",
    },
  },
  {
    id: "3",
    initials: "AK",
    name: "Sarah Kim",
    rating: 5,
    visitedAgo: "Visited 1 week ago",
    space: "Meeting Room A",
    text: "The projector in the meeting room worked flawlessly. We had a client presentation and everything went smooth. Highly recommend the private meeting room.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA29N-rOBKDhhml3bwQeu4COX_3NUCzUW-eLHDnhxkdSESXxpH696g4gTGP7H8g0dzhfbD7J8qNhpBzTD5RWqj9JaPzgNQLFRL2cjA-oJ4j5kJZvpDGky71rK5MMA_4qeqY7tSxlwjyOgL1-9YKs6eVXOVtY6RD-R-575_p-WQg3GRaghaj3IV32Fj4rpekXW1W2FUzEvMQ5Ri7_f5c6lA9QyvVUQmucvkPyO9SnoRUXQQVZ-3rqTek8Gpxw8YX_TXv2C9-aOPDDRL0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08xvv_DdIxpSgp4ciMnsvUJnu1h5O0zhBIO--zjBb_dHpy8jDM4dMakhfSjBDXw0ZSxWhusPQIm6_yYqEgnfJz4QeS6v_71UCN7I8g6TQtW9atAoitb1SrZBUuS6rjH3NFbCvX0sEGq93N7_EYceJHvH7cEHdnjsbhiA9-zLhLGmPMWQw0MlbfqFMKpoEsWjwnTOccdWyNpCu3YIsss2uRX8finMm7SaOleQhd1WnIFoHsbv31r0FujguRz4NpAuok-6LyO_EsgZo",
    ],
  },
];

const ratingBreakdown = [
  { star: 5, pct: 85 },
  { star: 4, pct: 10 },
  { star: 3, pct: 3 },
  { star: 2, pct: 1 },
  { star: 1, pct: 1 },
];

const categoryBreakdown = [
  { label: "Ambiance", score: "4.9" },
  { label: "Service",  score: "4.7" },
  { label: "WiFi",     score: "5.0" },
  { label: "Value",    score: "4.6" },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex text-primary">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[16px] ${
            i <= rating ? "filled-star" : "text-slate-300"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm shrink-0">
            {review.initials}
          </div>
          <div>
            <h4 className="font-bold text-[#3D2B1F] text-sm">{review.name}</h4>
            <StarRow rating={review.rating} />
          </div>
        </div>
        <span className="text-xs text-slate-400 whitespace-nowrap">{review.visitedAgo}</span>
      </div>

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{review.text}</p>

      {/* Images */}
      {review.images && review.images.length > 0 && (
        <div className="flex gap-3 mb-5 flex-wrap">
          {review.images.map((img, idx) => (
            <div
              key={idx}
              className="h-24 w-32 rounded-lg bg-cover bg-center shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundImage: `url("${img}")` }}
            />
          ))}
        </div>
      )}

      {/* Owner reply bubble */}
      {review.reply && (
        <div className="bg-slate-50 p-4 rounded-lg mb-4 border border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#3D2B1F]">Your Reply</span>
            <span className="text-[10px] text-slate-400">• {review.reply.daysAgo}</span>
          </div>
          <p className="text-xs text-slate-600 italic">{review.reply.text}</p>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-2">
        <div className="text-xs text-slate-400 font-medium">Space: {review.space}</div>
        {review.reply ? (
          <button
            onClick={() => setReplyOpen((v) => !v)}
            className="px-4 py-2 text-slate-400 hover:text-[#3D2B1F] rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">edit</span>
            Edit Reply
          </button>
        ) : (
          <button
            onClick={() => setReplyOpen((v) => !v)}
            className="px-4 py-2 bg-orange-50 text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">reply</span>
            Reply
          </button>
        )}
      </div>

      {/* Inline reply form */}
      {replyOpen && (
        <div className="mt-4 border-t border-slate-100 pt-4 space-y-3">
          <textarea
            rows={3}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply to this guest..."
            className="w-full rounded-lg border border-slate-200 text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-slate-400"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => { setReplyOpen(false); setReplyText(""); }}
              className="px-4 py-2 text-slate-500 hover:text-[#3D2B1F] text-sm font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setReplyOpen(false)}
              className="px-4 py-2 bg-primary hover:bg-orange-600 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
            >
              Post Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const CafeOwnerReviewsPage = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        <CafeOwnerSidebar />

        <main className="flex-1 h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-5xl mx-auto space-y-8 p-4 md:p-8">

            {/* Header */}
            <header className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  Guest Reviews &amp; Ratings
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Manage feedback and build relationships with your guests.
                </p>
              </div>
              <div className="flex items-center gap-4">
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

            {/* Main layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Sidebar: Rating overview */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-fit lg:sticky lg:top-6">
                {/* Overall score */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-50 text-primary text-3xl font-bold mb-3 border-4 border-orange-100">
                    4.8
                  </div>
                  <h3 className="text-xl font-bold text-[#3D2B1F]">Overall Rating</h3>
                  <p className="text-slate-400 text-sm">Based on 128 reviews</p>
                </div>

                {/* Star distribution */}
                <div className="space-y-3 mb-6">
                  {ratingBreakdown.map(({ star, pct }) => (
                    <div key={star} className="flex items-center gap-3 text-sm">
                      <span className="w-3 font-medium text-slate-500">{star}</span>
                      <span className="material-symbols-outlined text-yellow-400 text-[18px] filled-star">star</span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-slate-400 text-xs">{pct}%</span>
                    </div>
                  ))}
                </div>

                {/* Category breakdown */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-[#3D2B1F] mb-3 text-sm">Rating Breakdown</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {categoryBreakdown.map(({ label, score }) => (
                      <div key={label} className="bg-slate-50 p-3 rounded-lg text-center">
                        <span className="block text-xs text-slate-500 mb-1">{label}</span>
                        <span className="font-bold text-[#3D2B1F]">{score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review cards */}
              <div className="lg:col-span-2 space-y-4">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}

                {/* Load more */}
                <div className="text-center py-4">
                  <button className="text-slate-500 hover:text-primary font-medium text-sm transition-colors flex items-center justify-center gap-2 w-full">
                    Load More Reviews
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </button>
                </div>
              </div>
            </div>

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

export default CafeOwnerReviewsPage;
