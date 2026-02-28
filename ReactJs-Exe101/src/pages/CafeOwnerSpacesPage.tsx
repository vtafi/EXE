import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CafeOwnerSidebar } from "../components/cafe-owner-sidebar";

interface Space {
  id: string;
  name: string;
  description: string;
  price: number;
  priceUnit: string;
  capacity: number;
  status: "Online" | "Offline";
  image: string;
  visible: boolean;
}

const initialSpaces: Space[] = [
  {
    id: "1",
    name: "Private Room A",
    description: "Quiet, enclosed meeting space ideal for client calls and small team huddles.",
    price: 25.0,
    priceUnit: "/ hour",
    capacity: 4,
    status: "Online",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3c5qCLJXtyyfZVdfh7R68o7F3zPCzFFTooFAhM_jUS3M_ZJpcUhDoI-llfVslNv0XhYfmDT8yD0M1aVEH2wJnt5db1VNOgNJbePpCbnvcpBOpmnrJERGXvWcHPTZQdyNy0BPZqsvjfnzT5kymQjJxzxRR-Ep_A2lH5HPBF0y8kP6CSIsgEzwLkSlm2HmRi-xUXxFRkhGDqpSVjgE4rAuaXuRcVt1IImTyzg8Vk_LS8-Nghbsd5jV-b_tvZzH7P0l9-2hpTRscBakx",
    visible: true,
  },
  {
    id: "2",
    name: "The Greenhouse",
    description: "Bright, open space surrounded by plants. Perfect for workshops and creative sessions.",
    price: 45.0,
    priceUnit: "/ hour",
    capacity: 12,
    status: "Online",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfqHob2KoYhB5cnN6gZFzAz_IlhLqAXzMyRFx5xUrOwuhYx3rVmWAkK5uznI-VX8T7ZvRk90rrwrUy1t2kenQ-7jzybqEk7IlwWBdK6ui52y2lKyTUzviXjZwwU9ngATdjWvo8-89mEByJdOVySC3ciDKAg_Hhj2K8wLlT-i6OOjNp_CmBzuyBQy-2S13XhfZJN0gW45eBjimf1S-qDjUIXsP9RQwurmjx2cOQ-3aezBFgtrsfh_rsMA1xcE7JrZwL9fpGml4Ev2kz",
    visible: true,
  },
  {
    id: "3",
    name: "Community Area",
    description: "Shared tables in the main hall. Good for freelancers and casual work.",
    price: 15.0,
    priceUnit: "/ hour / person",
    capacity: 20,
    status: "Offline",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHGM9pg9SuygNILalkvVHfUdXOsAhHK9WVk2iaGBkb_YTWyE9gaC7ygKQLtzPVKwaL_YpMv3iqNRFyjvhdlYdcecNQ79sRkaWsjRw6eX3w-gzUvEJHrMtWkQQ6Ci5VfSYCZiHIZex27NuOMnWRhbMQh41U-6MOsBSztn20MInTr91slVR42O-moJifu-52f3_Moxeym6WidLKcERFo6wKpE8tngFX__uXzitW7icgCd5hA8dW7jtFbbr17pcnw9NqkTJC0CfUY_NCe",
    visible: false,
  },
  {
    id: "4",
    name: "Meeting Box 1",
    description: "Soundproof booth perfect for confidential calls or focused individual work.",
    price: 18.0,
    priceUnit: "/ hour",
    capacity: 2,
    status: "Online",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgtPqKdWQlgYOszNiGZ_ElsBq142JQFos915z0MsFiLa-Pptn-O6GMqo7rX_iw2x4Zct5Qqh6bhV9GnUmw_Fx3JT3Mn50eVn_8T3LC8gaI3Xle3rCHg82GGvtAJJzqwfEMwZz4dWmsKyDN93UX2pkOUsc7e2k6gJtlt3yLPTKNqUa_nTC1JHxm60LRzkRGvWBtVZdcNPqTvBCQB1iNgWIBKNMIVKWHIL51GYTTtUXKe4JKwABqIRsx5TYjNH5u11zhnhb45vSAGHWY",
    visible: true,
  },
];

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="w-9 h-5 bg-slate-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white focus-within:ring-2 focus-within:ring-primary/20" />
      <span className="ml-2 text-sm font-medium text-slate-600">Visibility</span>
    </label>
  );
}

function SpaceCard({
  space,
  onToggleVisible,
}: {
  space: Space;
  onToggleVisible: (id: string, v: boolean) => void;
}) {
  const isOffline = space.status === "Offline";

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
      {/* Cover image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={space.image}
          alt={space.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            isOffline ? "grayscale opacity-70" : ""
          }`}
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          {isOffline ? (
            <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md shadow-sm border border-slate-200">
              Offline
            </span>
          ) : (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md shadow-sm border border-green-200">
              Online
            </span>
          )}
        </div>
        {/* Capacity badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">person</span>
            {space.capacity}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-xl font-bold text-[#3D2B1F] ${isOffline ? "opacity-60" : ""}`}>
            {space.name}
          </h3>
          <div className={`flex flex-col items-end ${isOffline ? "opacity-60" : ""}`}>
            <span className="text-lg font-bold text-primary">${space.price.toFixed(2)}</span>
            <span className="text-xs text-slate-400">{space.priceUnit}</span>
          </div>
        </div>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{space.description}</p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <ToggleSwitch
            checked={space.visible}
            onChange={(v) => onToggleVisible(space.id, v)}
          />
          <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-orange-50">
            <span className="material-symbols-outlined">edit_square</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const CafeOwnerSpacesPage = () => {
  const [spaces, setSpaces] = useState<Space[]>(initialSpaces);

  const handleToggleVisible = (id: string, visible: boolean) => {
    setSpaces((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, visible, status: visible ? "Online" : "Offline" }
          : s
      )
    );
  };

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
                  My Workspace Management
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Manage your spaces, availability, and pricing.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-200 transition-all active:scale-[0.98]">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Add New Space</span>
                </button>
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm shrink-0 hidden md:block"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZYpdDXHxHdJjcMk8pEmAfe6LGqVwaGaZcIb1NVwajZQJnil4s1n0RoMbp50TnVlVfo1bbPN7Kc7Mr3CQlNOzaWoXiKBV336jLViG-eniH2HLPkt-luSAnJQAMWiB1npT07Crmy-EA_koAZMqnQVh7kHSTUpXZ84NHjD5iNgBhOOoZrmgfVbhislHCOh-13HaQb3JmmIpsXe9gfrKej8XcZzPNz4sJ50CY3UlBXEs7PzsitA1SBOtSjRvJUaFg_sddikZoXWsjupE_")',
                  }}
                />
              </div>
            </header>

            {/* Space Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaces.map((space) => (
                <SpaceCard
                  key={space.id}
                  space={space}
                  onToggleVisible={handleToggleVisible}
                />
              ))}

              {/* Add new space card */}
              <button className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 hover:bg-white hover:border-primary/50 transition-all group min-h-[400px]">
                <div className="h-16 w-16 rounded-full bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center mb-4 transition-colors">
                  <span className="material-symbols-outlined text-[32px] text-slate-400 group-hover:text-primary transition-colors">
                    add
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-600 group-hover:text-[#3D2B1F] transition-colors">
                  Create Another Space
                </h3>
                <p className="text-slate-400 text-sm mt-2 text-center max-w-[200px]">
                  Set up a new area to start earning more revenue.
                </p>
              </button>
            </div>

            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. Cafe Partner Platform. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CafeOwnerSpacesPage;
