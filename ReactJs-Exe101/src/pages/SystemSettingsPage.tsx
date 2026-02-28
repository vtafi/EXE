import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

const SystemSettingsPage = () => {
  const [platformName, setPlatformName] = useState("WorkX");
  const [supportEmail, setSupportEmail] = useState("support@workx.com");
  const [platformFee, setPlatformFee] = useState(12);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-8">
            {/* Header */}
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b border-slate-300/50">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  Global System Settings
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Core system settings for WorkX platform.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-slate-600 relative shrink-0">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </button>
              </div>
            </header>

            {/* Settings Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 md:p-8 space-y-8">
                {/* Platform Name & Support Email */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-[#3D2B1F]"
                        htmlFor="platform-name"
                      >
                        Platform Name
                      </label>
                      <input
                        id="platform-name"
                        type="text"
                        value={platformName}
                        onChange={(e) => setPlatformName(e.target.value)}
                        placeholder="Enter platform name"
                        className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary text-sm bg-slate-50/50"
                      />
                      <p className="text-xs text-slate-500">
                        This name will appear in emails and page titles.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-[#3D2B1F]"
                        htmlFor="support-email"
                      >
                        Support Email
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="material-symbols-outlined text-slate-400 text-[18px]">
                            mail
                          </span>
                        </div>
                        <input
                          id="support-email"
                          type="email"
                          value={supportEmail}
                          onChange={(e) => setSupportEmail(e.target.value)}
                          placeholder="contact@example.com"
                          className="block w-full rounded-lg border-slate-300 pl-10 focus:border-primary focus:ring-primary text-sm bg-slate-50/50"
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        Public facing email for user inquiries.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Platform Fee Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <label
                      className="block text-sm font-semibold text-[#3D2B1F]"
                      htmlFor="fee-slider"
                    >
                      Global Platform Fee %
                    </label>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Current: {platformFee}%
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <input
                      id="fee-slider"
                      type="range"
                      min="0"
                      max="30"
                      value={platformFee}
                      onChange={(e) => setPlatformFee(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                      <span>0%</span>
                      <span>15%</span>
                      <span>30%</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    This percentage is deducted from every booking transaction.
                  </p>
                </div>

                <hr className="border-slate-100" />

                {/* Maintenance Mode Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#3D2B1F]">
                      Maintenance Mode
                    </span>
                    <span className="text-xs text-slate-500">
                      Temporarily disable access to the platform for all users.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={maintenanceMode}
                      onChange={(e) => setMaintenanceMode(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="bg-slate-50 px-6 md:px-8 py-5 border-t border-slate-200 flex justify-end items-center gap-4">
                <button className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                  Discard
                </button>
                <button className="px-6 py-2.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Save Changes
                </button>
              </div>
            </div>

            <footer className="text-center text-slate-400 text-xs py-4 pb-8">
              © 2024 WorkX Inc. All rights reserved.
            </footer>
          </div>
        </main>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ec7f13;
          cursor: pointer;
          margin-top: -8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: #e2e8f0;
          border-radius: 2px;
        }
      `}</style>
    </SidebarProvider>
  );
};

export default SystemSettingsPage;
