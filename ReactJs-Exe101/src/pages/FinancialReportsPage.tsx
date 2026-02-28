import { useMemo, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import {
  AnimatedTable,
  type ColumnDef,
  type SortDirection,
} from "@/components/ui/animated-table";

interface Transaction {
  id: string;
  cafeName: string;
  cafeImage: string;
  date: string;
  amount: number;
  commission: number;
}

const transactions: Transaction[] = [
  {
    id: "#TRX-9982",
    cafeName: "Bean There",
    cafeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08xvv_DdIxpSgp4ciMnsvUJnu1h5O0zhBIO--zjBb_dHpy8jDM4dMakhfSjBDXw0ZSxWhusPQIm6_yYqEgnfJz4QeS6v_71UCN7I8g6TQtW9atAoitb1SrZBUuS6rjH3NFbCvX0sEGq93N7_EYceJHvH7cEHdnjsbhiA9-zLhLGmPMWQw0MlbfqFMKpoEsWjwnTOccdWyNpCu3YIsss2uRX8finMm7SaOleQhd1WnIFoHsbv31r0FujguRz4NpAuok-6LyO_EsgZo",
    date: "Oct 24, 2024",
    amount: 120.0,
    commission: 14.4,
  },
  {
    id: "#TRX-9981",
    cafeName: "The Daily Grind",
    cafeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS",
    date: "Oct 24, 2024",
    amount: 45.5,
    commission: 5.46,
  },
  {
    id: "#TRX-9980",
    cafeName: "Morning Brew",
    cafeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyoRkFNLg98SGeY-COqGHohhgK-IRZKTnv1y_a6TlcpUlpHX96R7GjvDmH3U0RMmEjIXLxJ7laAFPVQUB_mCjHLvxGD5oPPWXfN-U9haxTuzBPVjV2vpTa-34bliEdM29hWtBucdilU5YWfEyeyif-NdOBdwUIbzXp46Dt2ocKy6gx5rxIaS0rkrx4Zuv-HdjUWE1y13Qd34D5VHrNb916YDFHJuyyZZzT006Z4V_U1j3Hr-Y3dpNDdkbUSOxI1mo2EAbSVvyYmGbR",
    date: "Oct 23, 2024",
    amount: 210.0,
    commission: 25.2,
  },
  {
    id: "#TRX-9979",
    cafeName: "Urban Space",
    cafeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYc8aoQb4aYoIE1UNMFsxD7whsRufNCQHtp6IB0c39qQL9bTg64TCr9Syd8uWawBaE5hNSI1kZNFYWE2Mu7_mr-Z5Vg1fzcFs4UzErctP1hv9uwW4ryCAJw-PB0H3RWNzc8e2rhY2N4Vl2ER_p197oEQsCIyjeoXQHiCeyRtL5qCtO9idEf1Pw_NUZs5B7LaNsQtXYjQlVZzpOUK_qfteYUuB_uxvYOLPOmT0dzy1sTK_8unDX77-tLCRTvH06B2ZeSMfTMWCR9BEC",
    date: "Oct 23, 2024",
    amount: 85.0,
    commission: 10.2,
  },
  {
    id: "#TRX-9978",
    cafeName: "Coastal Hub",
    cafeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnlAxWRhavVqrF4p7Jru0SgI4_fjCA3vW06fRLP5pBiIC-wPNPejdOjDQ801L7aInXHqMbD5hom-sYRp3038cYXINgA0p9V0WIu_kM-riU3f8v96IUqI9Oo6N-v4xt8fn_bQUmKH9VUn7iOhv2aPNJkkaNV5VEX116lkODjSYJDSLNj4lWFHZe6TteonB45DLd1_AbnGLdNgxdGYREKQHtAK5gtY-EiAe6y_H8oE6twngvMe3Rvoy9yKNPakT7bqHsCpIEXcFWKj21",
    date: "Oct 22, 2024",
    amount: 340.0,
    commission: 40.8,
  },
];

const txColumns: ColumnDef<Transaction>[] = [
  {
    id: "id",
    header: "Transaction ID",
    sortable: true,
    hideable: false,
    cell: (row) => (
      <span className="font-mono text-xs text-slate-500">{row.id}</span>
    ),
  },
  {
    id: "cafeName",
    header: "Cafe Name",
    sortable: true,
    cell: (row) => (
      <div className="flex items-center gap-3">
        <div
          className="h-8 w-8 rounded-lg bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url("${row.cafeImage}")` }}
        />
        <span className="font-semibold text-[#3D2B1F]">{row.cafeName}</span>
      </div>
    ),
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    sortable: true,
  },
  {
    id: "amount",
    header: "Amount",
    sortable: true,
    cell: (row) => (
      <span className="font-medium text-[#3D2B1F]">${row.amount.toFixed(2)}</span>
    ),
  },
  {
    id: "commission",
    header: "Commission Earned (12%)",
    sortable: true,
    align: "right",
    cell: (row) => (
      <span className="font-bold text-primary">+${row.commission.toFixed(2)}</span>
    ),
  },
];

const FinancialReportsPage = () => {
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
    if (!searchValue) return transactions;
    const s = searchValue.toLowerCase();
    return transactions.filter(
      (tx) =>
        tx.id.toLowerCase().includes(s) ||
        tx.cafeName.toLowerCase().includes(s) ||
        tx.date.toLowerCase().includes(s)
    );
  }, [searchValue]);

  const sorted = useMemo(() => {
    if (!sortColumn || !sortDirection) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortColumn as keyof Transaction];
      const bVal = b[sortColumn as keyof Transaction];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
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
                  Financial & Commission Reports
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Financial Analytics and commission tracking for WorkX.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full lg:w-auto flex-wrap">
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 relative shrink-0">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium shrink-0">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export CSV
                </button>
              </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    +18%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Total Revenue</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  $124,500
                </h3>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <span className="material-symbols-outlined">percent</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Steady
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Platform Commission (12%)
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  $14,940
                </h3>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1 bg-primary" />
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-orange-50 rounded-lg text-primary">
                    <span className="material-symbols-outlined">pending</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                    Needs Action
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Payouts Pending</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  $3,250
                </h3>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                    +5%
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Avg. Order Value</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] tracking-tight">
                  $28.45
                </h3>
              </div>
            </div>

            {/* Revenue Growth Chart */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <div>
                  <h3 className="text-lg font-bold text-[#3D2B1F]">Revenue Growth</h3>
                  <p className="text-xs text-slate-500">
                    Monthly revenue trends over the last 6 months
                  </p>
                </div>
                <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                  <option>Last 6 Months</option>
                  <option>Year to Date</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-64 w-full flex items-end gap-2 relative pl-10 pt-4">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 py-4">
                  <span>$30k</span>
                  <span>$20k</span>
                  <span>$10k</span>
                  <span>$0</span>
                </div>
                <div className="absolute left-10 right-0 top-4 h-[1px] bg-slate-100" />
                <div className="absolute left-10 right-0 top-[33%] h-[1px] bg-slate-100" />
                <div className="absolute left-10 right-0 top-[66%] h-[1px] bg-slate-100" />
                <div className="absolute left-10 right-0 bottom-4 h-[1px] bg-slate-100" />
                <svg
                  className="absolute left-10 right-0 top-4 bottom-4 w-[calc(100%-2.5rem)] h-[calc(100%-2rem)]"
                  viewBox="0 0 1200 220"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#ec7f13", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#ec7f13", stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,150 L150,130 L300,160 L450,80 L600,40 L750,20 L900,50 L1050,10 L1200,30 L1200,220 L0,220 Z"
                    fill="url(#revenueGradient)"
                    opacity="0.1"
                  />
                  <path
                    d="M0,150 L150,130 L300,160 L450,80 L600,40 L750,20 L900,50 L1050,10 L1200,30"
                    fill="none"
                    stroke="#ec7f13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <circle cx="0" cy="150" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="150" cy="130" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="300" cy="160" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="450" cy="80" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="600" cy="40" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="750" cy="20" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="900" cy="50" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="1050" cy="10" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                  <circle cx="1200" cy="30" r="4" fill="white" stroke="#ec7f13" strokeWidth="2" />
                </svg>
                <div className="absolute bottom-0 left-10 right-0 flex justify-between text-xs text-slate-400 translate-y-6">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>
              </div>
              <div className="h-6" />
            </div>

            {/* Recent Transactions - AnimatedTable */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-bold text-[#3D2B1F]">
                  Recent Transactions
                </h3>
                <button className="text-sm font-medium text-primary hover:text-orange-700 flex items-center gap-1">
                  View All Transactions
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <AnimatedTable
                data={paginated}
                columns={txColumns}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onSort={handleSort}
                striped
                searchable
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                searchPlaceholder="Search transactions..."
                pagination={{
                  page,
                  pageSize,
                  totalItems: sorted.length,
                  pageSizeOptions: [5, 10, 20],
                  onPageChange: setPage,
                  onPageSizeChange: (newSize) => { setPageSize(newSize); setPage(1); },
                }}
                emptyMessage="No transactions found."
              />
            </div>

            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default FinancialReportsPage;
