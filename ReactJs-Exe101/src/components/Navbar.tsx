import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Explore", path: "/explore" },
    { label: "Locations", path: "/locations" },
    { label: "Pricing", path: "#" },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6 w-full">
      {/* Left: Menu + Logo */}
      <div className="flex items-center gap-6">
        <a
          className="flex items-center gap-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          href="/"
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">
            W
          </div>
          <span className="text-xl font-display tracking-wider font-bold text-black">
            WORKX
          </span>
        </a>
      </div>

      {/* Center: Nav links */}
      <div className="hidden md:flex items-center gap-12 font-medium text-sm tracking-wide">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <a
              key={link.label}
              className={`uppercase cursor-pointer transition-colors ${
                isActive
                  ? "text-primary font-bold"
                  : "text-black hover:text-primary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (link.path !== "#") navigate(link.path);
              }}
              href={link.path}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/my-bookings")}
          className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border transition-colors shadow-sm ${
            location.pathname === "/my-bookings"
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300 hover:border-primary"
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            calendar_today
          </span>
          <span className="text-xs font-bold uppercase">My Bookings</span>
        </button>
        <button className="text-gray-900">
          <span className="material-symbols-outlined">search</span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white shadow-md">
          <img
            alt="User Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZJXiCBe5bn8mgTOEHjpAHxI6ArYW5hq6y0QmnR94M-mpm1Krn959FXdO5ldUgP2CqxPcwY-fZPIjTsvrtwoIyYJtX9SBgR6E5BgIbTPFM0MTwVGreUsicZ4-nXxGdIcL2H2ydj1t9x3IDH0_QMnoTi-K9Y-Jsnl9or4H9slNgZNUJ0-usALxs-zUib43F2Lwrl7o6KOFEBGT9z0cTpvP-vf0bgrSSWD5W41w0VPzYz2Up__tiC7XZmKNHxoe8gjFknnwiA33J08Ui"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
