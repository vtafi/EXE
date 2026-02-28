import { useMemo, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CafeOwnerSidebar } from "../components/cafe-owner-sidebar";
import {
  AnimatedTable,
  type ColumnDef,
  type SortDirection,
} from "@/components/ui/animated-table";

interface Booking {
  id: string;
  guestName: string;
  guestNote: string;
  guestAvatar?: string;
  guestInitials?: string;
  guestInitialsColor?: string;
  space: string;
  zone: string;
  date: string;
  time: string;
  duration: string;
  durationHours: number;
  price: number;
  status: "Confirmed" | "Checked-in" | "Completed";
}

const allBookings: Booking[] = [
  {
    id: "1",
    guestName: "Jane Doe",
    guestNote: "First-time guest",
    guestInitials: "JD",
    guestInitialsColor: "bg-purple-100 text-purple-600",
    space: "The Greenhouse",
    zone: "Table 4",
    date: "Nov 14, 2023",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hrs",
    durationHours: 2,
    price: 45.0,
    status: "Confirmed",
  },
  {
    id: "2",
    guestName: "Mark Smith",
    guestNote: "Regular",
    guestAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS",
    space: "Focus Zone B",
    zone: "Desk 12",
    date: "Nov 14, 2023",
    time: "09:00 AM - 05:00 PM",
    duration: "8 hrs",
    durationHours: 8,
    price: 120.0,
    status: "Checked-in",
  },
  {
    id: "3",
    guestName: "Alice Lee",
    guestNote: "3 bookings",
    guestInitials: "AL",
    guestInitialsColor: "bg-orange-100 text-orange-600",
    space: "Meeting Room A",
    zone: "Entire Room",
    date: "Nov 14, 2023",
    time: "01:00 PM - 02:30 PM",
    duration: "1.5 hrs",
    durationHours: 1.5,
    price: 75.0,
    status: "Checked-in",
  },
  {
    id: "4",
    guestName: "Raj Kumar",
    guestNote: "New Guest",
    guestInitials: "RK",
    guestInitialsColor: "bg-blue-100 text-blue-600",
    space: "Open Lounge",
    zone: "Seat 5",
    date: "Nov 14, 2023",
    time: "03:00 PM - 06:00 PM",
    duration: "3 hrs",
    durationHours: 3,
    price: 30.0,
    status: "Confirmed",
  },
  {
    id: "5",
    guestName: "Sarah Brown",
    guestNote: "Recurring",
    guestInitials: "SB",
    guestInitialsColor: "bg-gray-200 text-gray-600",
    space: "The Greenhouse",
    zone: "Table 2",
    date: "Nov 14, 2023",
    time: "08:00 AM - 09:30 AM",
    duration: "1.5 hrs",
    durationHours: 1.5,
    price: 35.0,
    status: "Completed",
  },
  {
    id: "6",
    guestName: "Tom Nguyen",
    guestNote: "2 bookings",
    guestInitials: "TN",
    guestInitialsColor: "bg-emerald-100 text-emerald-600",
    space: "Focus Zone A",
    zone: "Desk 3",
    date: "Nov 15, 2023",
    time: "09:00 AM - 01:00 PM",
    duration: "4 hrs",
    durationHours: 4,
    price: 60.0,
    status: "Confirmed",
  },
  {
    id: "7",
    guestName: "Lisa Park",
    guestNote: "Regular",
    guestInitials: "LP",
    guestInitialsColor: "bg-pink-100 text-pink-600",
    space: "Meeting Room B",
    zone: "Entire Room",
    date: "Nov 15, 2023",
    time: "02:00 PM - 04:00 PM",
    duration: "2 hrs",
    durationHours: 2,
    price: 90.0,
    status: "Confirmed",
  },
  {
    id: "8",
    guestName: "David Chen",
    guestNote: "First-time guest",
    guestInitials: "DC",
    guestInitialsColor: "bg-indigo-100 text-indigo-600",
    space: "Open Lounge",
    zone: "Seat 8",
    date: "Nov 15, 2023",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hrs",
    durationHours: 2,
    price: 20.0,
    status: "Confirmed",
  },
];

function StatusBadge({ status }: { status: Booking["status"] }) {
  const styles: Record<Booking["status"], string> = {
    Confirmed: "bg-blue-50 text-blue-700 border-blue-100",
    "Checked-in": "bg-green-50 text-green-700 border-green-100",
    Completed: "bg-slate-100 text-slate-500 border-slate-200",
  };
  return (
    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${styles[status]}`}>
      {status}
    </span>
  );
}

function ActionButton({ status }: { status: Booking["status"] }) {
  if (status === "Confirmed") {
    return (
      <button className="bg-primary hover:bg-orange-600 text-white px-3 py-1.5 rounded-md text-xs font-bold shadow-sm transition-colors">
        Check-in
      </button>
    );
  }
  if (status === "Completed") {
    return (
      <button className="text-slate-400 hover:text-[#3D2B1F] transition-colors font-medium text-xs border border-slate-200 px-3 py-1.5 rounded-md">
        View Receipt
      </button>
    );
  }
  return (
    <button className="text-slate-400 hover:text-[#3D2B1F] transition-colors font-medium text-xs border border-slate-200 px-3 py-1.5 rounded-md">
      View Details
    </button>
  );
}

const columns: ColumnDef<Booking>[] = [
  {
    id: "guestName",
    header: "Guest Name",
    sortable: true,
    hideable: false,
    cell: (row) => (
      <div className="flex items-center">
        {row.guestAvatar ? (
          <div
            className="h-9 w-9 rounded-full bg-cover bg-center mr-3 shrink-0"
            style={{ backgroundImage: `url('${row.guestAvatar}')` }}
          />
        ) : (
          <div
            className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-sm mr-3 shrink-0 ${row.guestInitialsColor}`}
          >
            {row.guestInitials}
          </div>
        )}
        <div>
          <div className={`text-sm font-semibold ${row.status === "Completed" ? "text-slate-500" : "text-[#3D2B1F]"}`}>
            {row.guestName}
          </div>
          <div className={`text-xs ${row.status === "Completed" ? "text-slate-400" : "text-slate-500"}`}>
            {row.guestNote}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "space",
    header: "Space / Zone",
    sortable: true,
    cell: (row) => (
      <div>
        <div className={`text-sm font-medium ${row.status === "Completed" ? "text-slate-500" : "text-slate-700"}`}>
          {row.space}
        </div>
        <div className={`text-xs ${row.status === "Completed" ? "text-slate-400" : "text-slate-500"}`}>
          {row.zone}
        </div>
      </div>
    ),
  },
  {
    id: "date",
    header: "Date & Time",
    sortable: true,
    cell: (row) => (
      <div>
        <div className={`text-sm ${row.status === "Completed" ? "text-slate-500" : "text-[#3D2B1F]"}`}>
          {row.date}
        </div>
        <div className={`text-xs ${row.status === "Completed" ? "text-slate-400" : "text-slate-500"}`}>
          {row.time}
        </div>
      </div>
    ),
  },
  {
    id: "durationHours",
    header: "Duration",
    sortable: true,
    cell: (row) => (
      <span className={`text-sm ${row.status === "Completed" ? "text-slate-500" : "text-slate-600"}`}>
        {row.duration}
      </span>
    ),
  },
  {
    id: "price",
    header: "Total Price",
    sortable: true,
    cell: (row) => (
      <div className={`text-sm font-bold ${row.status === "Completed" ? "text-slate-500" : "text-[#3D2B1F]"}`}>
        ${row.price.toFixed(2)}
      </div>
    ),
  },
  {
    id: "status",
    header: "Status",
    sortable: true,
    cell: (row) => <StatusBadge status={row.status} />,
  },
  {
    id: "actions",
    header: "",
    align: "right",
    cell: (row) => <ActionButton status={row.status} />,
  },
];

const STATUS_TABS = ["All", "Confirmed", "Checked-in", "Completed"] as const;

const CafeOwnerBookingsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPage(1);
  };

  const tabFiltered = useMemo(() => {
    if (activeTab === "All") return allBookings;
    return allBookings.filter((b) => b.status === activeTab);
  }, [activeTab]);

  const searchFiltered = useMemo(() => {
    if (!searchValue) return tabFiltered;
    const s = searchValue.toLowerCase();
    return tabFiltered.filter(
      (b) =>
        b.guestName.toLowerCase().includes(s) ||
        b.space.toLowerCase().includes(s) ||
        b.zone.toLowerCase().includes(s)
    );
  }, [tabFiltered, searchValue]);

  const sorted = useMemo(() => {
    if (!sortColumn || !sortDirection) return searchFiltered;
    return [...searchFiltered].sort((a, b) => {
      const aVal = a[sortColumn as keyof Booking];
      const bVal = b[sortColumn as keyof Booking];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }, [searchFiltered, sortColumn, sortDirection]);

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
                  Active Bookings
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Manage current and upcoming reservations for your spaces.
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

            {/* Status Tabs */}
            <div className="flex items-center space-x-1 bg-white p-1 rounded-lg shadow-sm border border-slate-200 w-fit">
              {STATUS_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-1.5 rounded-md text-sm transition-all ${
                    activeTab === tab
                      ? "bg-slate-100 shadow-sm font-semibold text-[#3D2B1F] ring-1 ring-black/5"
                      : "font-medium text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Animated Table */}
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
              searchPlaceholder="Search guests, spaces..."
              pagination={{
                page,
                pageSize,
                totalItems: sorted.length,
                pageSizeOptions: [5, 10, 20],
                onPageChange: setPage,
                onPageSizeChange: (newSize) => {
                  setPageSize(newSize);
                  setPage(1);
                },
              }}
              emptyMessage={
                <div className="flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-slate-300">
                    event_busy
                  </span>
                  <span>No bookings found.</span>
                </div>
              }
            />

            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. Cafe Partner Platform. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CafeOwnerBookingsPage;
