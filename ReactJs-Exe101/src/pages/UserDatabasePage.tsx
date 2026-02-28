import { useMemo, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import {
  AnimatedTable,
  type ColumnDef,
  type SortDirection,
} from "@/components/ui/animated-table";

interface User {
  id: string;
  name: string;
  memberSince?: string;
  userId?: string;
  email: string;
  role: "Member" | "Cafe Owner";
  totalBookings: number;
  reliability: number | null;
  status: "Active" | "Inactive" | "Flagged";
  avatar: string;
  phone?: string;
  joinDate?: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    memberSince: "2023",
    email: "sarah.j@example.com",
    role: "Member",
    totalBookings: 42,
    reliability: 98,
    status: "Active",
    phone: "+84 901 234 567",
    joinDate: "Jan 15, 2023",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyoRkFNLg98SGeY-COqGHohhgK-IRZKTnv1y_a6TlcpUlpHX96R7GjvDmH3U0RMmEjIXLxJ7laAFPVQUB_mCjHLvxGD5oPPWXfN-U9haxTuzBPVjV2vpTa-34bliEdM29hWtBucdilU5YWfEyeyif-NdOBdwUIbzXp46Dt2ocKy6gx5rxIaS0rkrx4Zuv-HdjUWE1y13Qd34D5VHrNb916YDFHJuyyZZzT006Z4V_U1j3Hr-Y3dpNDdkbUSOxI1mo2EAbSVvyYmGbR",
  },
  {
    id: "2",
    name: "Michael Chen",
    userId: "#UX-8821",
    email: "m.chen@coffeehouse.co",
    role: "Cafe Owner",
    totalBookings: 156,
    reliability: 92,
    status: "Active",
    phone: "+84 912 345 678",
    joinDate: "Mar 8, 2023",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS",
  },
  {
    id: "3",
    name: "David Ross",
    userId: "#UX-2219",
    email: "david.ross@nomad.net",
    role: "Member",
    totalBookings: 8,
    reliability: 35,
    status: "Flagged",
    phone: "+84 923 456 789",
    joinDate: "Jun 22, 2024",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08xvv_DdIxpSgp4ciMnsvUJnu1h5O0zhBIO--zjBb_dHpy8jDM4dMakhfSjBDXw0ZSxWhusPQIm6_yYqEgnfJz4QeS6v_71UCN7I8g6TQtW9atAoitb1SrZBUuS6rjH3NFbCvX0sEGq93N7_EYceJHvH7cEHdnjsbhiA9-zLhLGmPMWQw0MlbfqFMKpoEsWjwnTOccdWyNpCu3YIsss2uRX8finMm7SaOleQhd1WnIFoHsbv31r0FujguRz4NpAuok-6LyO_EsgZo",
  },
  {
    id: "4",
    name: "Emily Tran",
    userId: "#UX-9001",
    email: "emily.tran@design.io",
    role: "Member",
    totalBookings: 0,
    reliability: null,
    status: "Inactive",
    phone: "+84 934 567 890",
    joinDate: "Oct 5, 2024",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYc8aoQb4aYoIE1UNMFsxD7whsRufNCQHtp6IB0c39qQL9bTg64TCr9Syd8uWawBaE5hNSI1kZNFYWE2Mu7_mr-Z5Vg1fzcFs4UzErctP1hv9uwW4ryCAJw-PB0H3RWNzc8e2rhY2N4Vl2ER_p197oEQsCIyjeoXQHiCeyRtL5qCtO9idEf1Pw_NUZs5B7LaNsQtXYjQlVZzpOUK_qfteYUuB_uxvYOLPOmT0dzy1sTK_8unDX77-tLCRTvH06B2ZeSMfTMWCR9BEC",
  },
  {
    id: "5",
    name: "Alex Johnson",
    userId: "#UX-3341",
    email: "alex.j@techcorp.com",
    role: "Member",
    totalBookings: 28,
    reliability: 75,
    status: "Active",
    phone: "+84 945 678 901",
    joinDate: "Aug 18, 2023",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2W49BzI0_5ufbfRwLDsd2vVHD806XNE_fltd9i2xfKOS1W4zOWu2xbtma3erk7Ol8-ahideOfO0TJ2PU9zDTEmhFIjfiVJ72cUmeSDSMFhplqPrK5CtVIVKtZ3bIfTR5swxqHEMItzo3UE-tdSIqGPD9IoTBYAiUSVXoJmaXyDHMYA6EB_3_6d0QVbHjbj4IM8U4ErhpZN-mWHCe1zVc05WEYfHT7758IKj3IEITJM8zxheu_lQ1z_hN3J7AN5PKCd-QSLNEjuEUb",
  },
];

function ReliabilityBar({ value }: { value: number | null }) {
  if (value === null) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-slate-100 rounded-full h-2">
          <div
            className="bg-slate-300 h-2 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
        <span className="text-xs font-bold text-slate-400 w-8 text-right">
          N/A
        </span>
      </div>
    );
  }
  const color =
    value >= 90 ? "bg-green-500" : value >= 50 ? "bg-orange-400" : "bg-red-500";
  const textColor =
    value >= 90
      ? "text-green-600"
      : value >= 50
        ? "text-orange-600"
        : "text-red-600";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-slate-100 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`text-xs font-bold ${textColor} w-8 text-right`}>
        {value}%
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: User["status"] }) {
  const styles: Record<User["status"], string> = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-slate-100 text-slate-600",
    Flagged: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function RoleBadge({ role }: { role: User["role"] }) {
  if (role === "Cafe Owner") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
        <span className="material-symbols-outlined text-[14px]">
          storefront
        </span>
        Cafe Owner
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
      <span className="material-symbols-outlined text-[14px]">person</span>
      Member
    </span>
  );
}

const columns: ColumnDef<User>[] = [
  {
    id: "name",
    header: "User Details",
    sortable: true,
    hideable: false,
    cell: (row) => (
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center border border-slate-200 shrink-0"
          style={{ backgroundImage: `url("${row.avatar}")` }}
        />
        <div>
          <p className="font-bold text-[#3D2B1F]">{row.name}</p>
          <p className="text-xs text-slate-500">
            {row.memberSince ? `Member since ${row.memberSince}` : row.userId}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "email",
    header: "Email Address",
    accessorKey: "email",
    sortable: true,
  },
  {
    id: "role",
    header: "Role",
    sortable: true,
    cell: (row) => <RoleBadge role={row.role} />,
  },
  {
    id: "totalBookings",
    header: "Total Bookings",
    sortable: true,
    align: "center",
    cell: (row) => (
      <span className="font-semibold text-[#3D2B1F]">{row.totalBookings}</span>
    ),
  },
  {
    id: "reliability",
    header: "Reliability Score",
    sortable: true,
    width: "160px",
    cell: (row) => <ReliabilityBar value={row.reliability} />,
  },
  {
    id: "status",
    header: "Status",
    sortable: true,
    align: "center",
    cell: (row) => <StatusBadge status={row.status} />,
  },
  {
    id: "actions",
    header: "Actions",
    align: "right",
    cell: () => (
      <button className="p-1 text-slate-400 hover:text-[#3D2B1F] transition-colors">
        <span className="material-symbols-outlined">more_vert</span>
      </button>
    ),
  },
];

const ExpandedUserContent = ({ row }: { row: User }) => (
  <div className="grid gap-4 sm:grid-cols-3 pl-2">
    <div className="flex items-center gap-2 text-sm">
      <span className="material-symbols-outlined text-slate-400 text-[18px]">
        mail
      </span>
      <span className="text-slate-500">Email:</span>
      <span className="text-[#3D2B1F] font-medium">{row.email}</span>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <span className="material-symbols-outlined text-slate-400 text-[18px]">
        phone
      </span>
      <span className="text-slate-500">Phone:</span>
      <span className="text-[#3D2B1F] font-medium">{row.phone || "N/A"}</span>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <span className="material-symbols-outlined text-slate-400 text-[18px]">
        calendar_today
      </span>
      <span className="text-slate-500">Joined:</span>
      <span className="text-[#3D2B1F] font-medium">
        {row.joinDate || "N/A"}
      </span>
    </div>
  </div>
);

const UserDatabasePage = () => {
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [reliabilityFilter, setReliabilityFilter] =
    useState("Reliability: Any");

  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columns.map((c) => c.id),
  );

  const handleSort = (columnId: string, direction: SortDirection) => {
    setSortColumn(columnId);
    setSortDirection(direction);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setPage(1);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setPage(1);
  };

  const dropdownFiltered = useMemo(() => {
    return users.filter((u) => {
      if (roleFilter !== "All Roles" && u.role !== roleFilter) return false;
      if (statusFilter !== "All Statuses" && u.status !== statusFilter)
        return false;
      if (
        reliabilityFilter === "High (>90%)" &&
        (u.reliability === null || u.reliability <= 90)
      )
        return false;
      if (
        reliabilityFilter === "Medium (50-90%)" &&
        (u.reliability === null || u.reliability < 50 || u.reliability > 90)
      )
        return false;
      if (
        reliabilityFilter === "Low (<50%)" &&
        (u.reliability === null || u.reliability >= 50)
      )
        return false;
      return true;
    });
  }, [roleFilter, statusFilter, reliabilityFilter]);

  const searchFiltered = useMemo(() => {
    if (!searchValue) return dropdownFiltered;
    const s = searchValue.toLowerCase();
    return dropdownFiltered.filter(
      (u) =>
        u.name.toLowerCase().includes(s) ||
        u.email.toLowerCase().includes(s) ||
        u.role.toLowerCase().includes(s),
    );
  }, [dropdownFiltered, searchValue]);

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return searchFiltered;
    return [...searchFiltered].sort((a, b) => {
      const aVal = a[sortColumn as keyof User];
      const bVal = b[sortColumn as keyof User];
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }, [searchFiltered, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page, pageSize]);

  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-7xl mx-auto space-y-6 p-4 md:p-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  USER DATABASE
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Manage users, track reliability scores, and monitor platform
                  roles.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 relative">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </button>
                <div className="hidden md:flex items-center gap-2">
                  <div
                    className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center border-2 border-white shadow-sm"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnlAxWRhavVqrF4p7Jru0SgI4_fjCA3vW06fRLP5pBiIC-wPNPejdOjDQ801L7aInXHqMbD5hom-sYRp3038cYXINgA0p9V0WIu_kM-riU3f8v96IUqI9Oo6N-v4xt8fn_bQUmKH9VUn7iOhv2aPNJkkaNV5VEX116lkODjSYJDSLNj4lWFHZe6TteonB45DLd1_AbnGLdNgxdGYREKQHtAK5gtY-EiAe6y_H8oE6twngvMe3Rvoy9yKNPakT7bqHsCpIEXcFWKj21")',
                    }}
                  />
                  <div className="text-sm">
                    <p className="font-bold text-[#3D2B1F] leading-tight">
                      Admin User
                    </p>
                    <p className="text-xs text-slate-500">Super Admin</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Dropdown Filters */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm shrink-0">
                <span className="material-symbols-outlined text-slate-400 text-sm">
                  filter_list
                </span>
                <span className="text-sm font-semibold text-[#3D2B1F] whitespace-nowrap">
                  Filter By:
                </span>
              </div>
              <select
                value={roleFilter}
                onChange={(e) => { setRoleFilter(e.target.value); setPage(1); }}
                className="bg-white border border-slate-200 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-[#3D2B1F] shrink-0 shadow-sm"
              >
                <option>All Roles</option>
                <option>Member</option>
                <option>Cafe Owner</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                className="bg-white border border-slate-200 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-[#3D2B1F] shrink-0 shadow-sm"
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Flagged</option>
              </select>
              <select
                value={reliabilityFilter}
                onChange={(e) => { setReliabilityFilter(e.target.value); setPage(1); }}
                className="bg-white border border-slate-200 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-[#3D2B1F] shrink-0 shadow-sm"
              >
                <option>Reliability: Any</option>
                <option>High (&gt;90%)</option>
                <option>Medium (50-90%)</option>
                <option>Low (&lt;50%)</option>
              </select>
            </div>

            {/* AnimatedTable */}
            <AnimatedTable
              data={paginatedData}
              columns={columns}
              selectable
              selectedIds={selectedIds}
              onSelectionChange={setSelectedIds}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              onSort={handleSort}
              striped
              searchable
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
              searchPlaceholder="Search by name, email, or role..."
              expandable
              renderExpandedRow={(row) => <ExpandedUserContent row={row} />}
              columnVisibility
              visibleColumns={visibleColumns}
              onVisibleColumnsChange={setVisibleColumns}
              pagination={{
                page,
                pageSize,
                totalItems: sortedData.length,
                pageSizeOptions: [5, 10, 20],
                onPageChange: setPage,
                onPageSizeChange: handlePageSizeChange,
              }}
              emptyMessage={
                <div className="flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-slate-300">
                    search_off
                  </span>
                  <span>No users match your filters.</span>
                </div>
              }
            />

            {selectedIds.length > 0 && (
              <p className="text-slate-500 text-sm">
                {selectedIds.length} user{selectedIds.length > 1 ? "s" : ""}{" "}
                selected
              </p>
            )}

            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default UserDatabasePage;
