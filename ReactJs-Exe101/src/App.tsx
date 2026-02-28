import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SpaceDetailPage from "./pages/SpaceDetailPage";
import ExplorePage from "./pages/ExplorePage";
import LocationsPage from "./pages/LocationsPage";
import BookingPage from "./pages/BookingPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import CafeApprovalsPage from "./pages/CafeApprovalsPage";
import UserDatabasePage from "./pages/UserDatabasePage";
import FinancialReportsPage from "./pages/FinancialReportsPage";
import MarketingReviewsPage from "./pages/MarketingReviewsPage";
import SystemSettingsPage from "./pages/SystemSettingsPage";
import CafeOwnerDashboard from "./pages/CafeOwnerDashboard";
import CafeOwnerBookingsPage from "./pages/CafeOwnerBookingsPage";
import CafeOwnerRevenuePage from "./pages/CafeOwnerRevenuePage";
import CafeOwnerReviewsPage from "./pages/CafeOwnerReviewsPage";
import CafeOwnerSpacesPage from "./pages/CafeOwnerSpacesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/space/:id" element={<SpaceDetailPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/approvals" element={<CafeApprovalsPage />} />
        <Route path="/admin/users" element={<UserDatabasePage />} />
        <Route path="/admin/financial" element={<FinancialReportsPage />} />
        <Route path="/admin/marketing" element={<MarketingReviewsPage />} />
        <Route path="/admin/settings" element={<SystemSettingsPage />} />
        <Route path="/cafe-owner" element={<CafeOwnerDashboard />} />
        <Route path="/cafe-owner/bookings" element={<CafeOwnerBookingsPage />} />
        <Route path="/cafe-owner/revenue" element={<CafeOwnerRevenuePage />} />
        <Route path="/cafe-owner/reviews" element={<CafeOwnerReviewsPage />} />
        <Route path="/cafe-owner/spaces" element={<CafeOwnerSpacesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
