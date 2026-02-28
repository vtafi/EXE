import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

const navItems = [
  { icon: "storefront", label: "My Spaces", path: "/cafe-owner/spaces" },
  { icon: "calendar_month", label: "Active Bookings", path: "/cafe-owner/bookings" },
  { icon: "attach_money", label: "Revenue Report", path: "/cafe-owner/revenue" },
  { icon: "reviews", label: "Guest Reviews", path: "/cafe-owner/reviews" },
];

export function CafeOwnerSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent active:bg-transparent" asChild>
              <Link to="/cafe-owner">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-full bg-cover bg-center bg-no-repeat shadow-sm"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBm91CV9uY5IzzwurXpJt0fnwOXr5C78JeBvCrd7noW9rFfOH18Qhj5qoiIjVlRJ_EwW53-v3K07QkM90PZ3dOqGSYBF6i0sP_izUXe37bdObSwnIIxwMXq4DEs-S-Htt2AtHq6w5lL1lw3d_RKc1E_gNDo2-K0xmMbaD9VrKE-GScccy-YPoOZNzJviBCsWpw4t1kgmo_zJHRkA1SfcXcwz7brM3xKC2Dy2QY03rZUV1Wz0L6RZqztEWk6V4MASZQw9km7MGmEn6_U")',
                  }}
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold text-[#3D2B1F] text-base tracking-tight">WorkX</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Cafe Partner
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                    >
                      <Link to={item.path}>
                        <span
                          className={`material-symbols-outlined text-[20px] shrink-0 ${
                            isActive ? "text-[#F97316]" : ""
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign Out"
              className="text-slate-500 hover:text-red-600 hover:bg-red-50"
            >
              <span className="material-symbols-outlined text-[20px] shrink-0">
                logout
              </span>
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
