import { useMemo, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CafeOwnerSidebar } from "../components/cafe-owner-sidebar";
import {
  AnimatedTable,
  type ColumnDef,
  type SortDirection,
} from "@/components/ui/animated-table";

interface Payout {
  id: string;
  date: string;
  dateSort: number;
  amount: number;
  status: "Paid" | "Processing";
}

const payouts: Payout[] = [
  { id: "1", date: "Nov 20, 2024", dateSort: 20241120, amount: 1250.0, status: "Paid" },
  { id: "2", date: "Nov 13, 2024", dateSort: 20241113, amount: 980.5, status: "Paid" },
  { id: "3", date: "Nov 06, 2024", dateSort: 20241106, amount: 1045.0, status: "Paid" },
  { id: "4", date: "Oct 30, 2024", dateSort: 20241030, amount: 850.0, status: "Processing" },
  { id: "5", date: "Oct 23, 2024", dateSort: 20241023, amount: 920.0, status: "Paid" },
  { id: "6", date: "Oct 16, 2024", dateSort: 20241016, amount: 1100.0, status: "Paid" },
];

// Bar heights in % for 30 daily bars
const barData = [
  { h: 40, projected: false, label: "$120" },
  { h: 65, projected: false, label: "$195" },
  { h: 50, projected: false, label: null },
  { h: 30, projected: false, label: null },
  { h: 75, projected: true,  label: "$225" },
  { h: 60, projected: false, label: null },
  { h: 85, projected: false, label: null },
  { h: 55, projected: false, label: null },
  { h: 45, projected: false, label: null },
  { h: 70, projected: true,  label: null },
  { h: 60, projected: false, label: null },
  { h: 40, projected: false, label: null },
  { h: 50, projected: false, label: null },
  { h: 90, projected: false, label: null },
  { h: 80, projected: true,  label: null },
  { h: 65, projected: false, label: null },
  { h: 55, projected: false, label: null },
  { h: 45, projected: false, label: null },
  { h: 60, projected: false, label: null },
  { h: 75, projected: true,  label: null },
  { h: 70, projected: false, label: null },
  { h: 50, projected: false, label: null },
  { h: 40, projected: false, label: null },
  { h: 65, projected: false, label: null },
  { h: 85, projected: true,  label: null },
  { h: 60, projected: false, label: null },
  { h: 50, projected: false, label: null },
  { h: 45, projected: false, label: null },
  { h: 55, projected: false, label: null },
  { h: 70, projected: true,  label: null },
];

const columns: ColumnDef<Payout>[] = [
  {
    id: "date",
    header: "Payout Date",
    sortable: true,
    hideable: false,
    cell: (row) => (
      <span className="font-medium text-[#3D2B1F]">{row.date}</span>
    ),
  },
  {
    id: "amount",
    header: "Amount",
    sortable: true,
    cell: (row) => (
      <span className="font-bold text-[#3D2B1F]">${row.amount.toFixed(2)}</span>
    ),
  },
  {
    id: "status",
    header: "Status",
    sortable: true,
    cell: (row) => {
      const styles: Record<Payout["status"], string> = {
        Paid: "bg-green-100 text-green-700",
        Processing: "bg-yellow-100 text-yellow-700",
      };
      const dotColor: Record<Payout["status"], string> = {
        Paid: "bg-green-500",
        Processing: "bg-yellow-500",
      };
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[row.status]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor[row.status]}`} />
          {row.status}
        </span>
      );
    },
  },
  {
    id: "receipt",
    header: "Receipt",
    align: "right",
    cell: () => (
      <button className="text-slate-400 hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-[20px]">receipt_long</span>
      </button>
    ),
  },
];

const CafeOwnerRevenuePage = () => {
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleSort = (columnId: string, direction: SortDirection) => {
    setSortColumn(columnId);
    setSortDirection(direction);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setPage(1);
  };

  const filtered = useMemo(() => {
    if (!searchValue) return payouts;
    const s = searchValue.toLowerCase();
    return payouts.filter(
      (p) =>
        p.date.toLowerCase().includes(s) ||
        p.status.toLowerCase().includes(s)
    );
  }, [searchValue]);

  const sorted = useMemo(() => {
    if (!sortColumn || !sortDirection) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortColumn as keyof Payout];
      const bVal = b[sortColumn as keyof Payout];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return 0;
    });
  }, [filtered, sortColumn, sortDirection]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize]);

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
                  Revenue Analytics
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Track your earnings, payouts, and financial growth.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:flex-initial">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                    date_range
                  </span>
                  <select className="pl-10 pr-8 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-primary text-sm bg-white/80 backdrop-blur-sm text-slate-600 font-medium w-full md:w-auto outline-none appearance-none cursor-pointer">
                    <option>Last 30 Days</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                  </select>
                </div>
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 shrink-0">
                  <span className="material-symbols-outlined">download</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">+12.4%</span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Total Revenue (Month)</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">$4,250.00</h3>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <span className="material-symbols-outlined">event_available</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Completed Bookings</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">84</h3>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                    <span className="material-symbols-outlined">shopping_bag</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-700 rounded-full">+5.1%</span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Avg. Order Value</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">$50.60</h3>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Payout Status</p>
                <h3 className="text-lg font-bold text-[#3D2B1F] tracking-tight mt-2">Processing</h3>
                <p className="text-xs text-slate-400">Next payout: Nov 25</p>
              </div>
            </div>

            {/* Daily Revenue Bar Chart */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <div>
                  <h3 className="font-bold text-[#3D2B1F] text-lg">Daily Revenue</h3>
                  <p className="text-slate-500 text-xs">Revenue performance over the last 30 days</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-3 h-3 rounded-full bg-[#3D2B1F]" />
                    Revenue
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    Projected
                  </span>
                </div>
              </div>
              <div className="h-64 w-full flex items-end justify-between gap-1">
                {barData.map((bar, i) => (
                  <div
                    key={i}
                    className="w-full bg-slate-100 rounded-t-sm relative group transition-colors hover:bg-slate-200"
                    style={{ height: `${bar.h}%` }}
                  >
                    <div
                      className={`absolute bottom-0 left-0 right-0 rounded-t-sm h-full transition-colors ${
                        bar.projected
                          ? "bg-primary group-hover:bg-orange-600"
                          : "bg-[#3D2B1F]/80 group-hover:bg-[#3D2B1F]"
                      }`}
                    />
                    {bar.label && (
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity z-10 whitespace-nowrap">
                        {bar.label}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-xs text-slate-400 px-1">
                <span>Nov 1</span>
                <span>Nov 15</span>
                <span>Nov 30</span>
              </div>
            </div>

            {/* Payout History — AnimatedTable */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-[#3D2B1F] text-lg">Payout History</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Recent transfers to your bank account</p>
                </div>
                <button className="text-sm text-primary font-medium hover:text-orange-600 transition-colors flex items-center gap-1">
                  View All
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <AnimatedTable
                data={paginated}
                columns={columns}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onSort={handleSort}
                striped
                searchable
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                searchPlaceholder="Search by date or status..."
                pagination={{
                  page,
                  pageSize,
                  totalItems: sorted.length,
                  pageSizeOptions: [5, 10],
                  onPageChange: setPage,
                  onPageSizeChange: (newSize) => {
                    setPageSize(newSize);
                    setPage(1);
                  },
                }}
                emptyMessage={
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-4xl text-slate-300">
                      account_balance_wallet
                    </span>
                    <span>No payouts found.</span>
                  </div>
                }
              />
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

export default CafeOwnerRevenuePage;
