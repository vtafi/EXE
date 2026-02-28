import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

const CafeApprovalsPage = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#DDDDDD] text-[#3D2B1F] font-body min-h-screen flex w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto bg-background-light">
          <div className="sticky top-0 z-10 flex items-center px-4 md:px-8 py-2 bg-[#DDDDDD]/80 backdrop-blur-sm border-b border-slate-200/50">
            <SidebarTrigger />
          </div>
          <div className="max-w-6xl mx-auto space-y-6 p-4 md:p-8">
            <header className="flex flex-col lg:flex-row lg:justify-between items-start border-b border-slate-200/60 pb-6 gap-4">
              <div>
                <h2 className="text-[#3D2B1F] text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
                  Review Application: The Daily Grind
                </h2>
                <p className="text-slate-500 font-medium flex items-center flex-wrap gap-2 text-sm md:text-base">
                  <span className="material-symbols-outlined text-lg">
                    location_on
                  </span>
                  123 Bach Dang Street, Hai Chau District, Da Nang
                  <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-300 mx-2"></span>
                  <span className="text-primary font-semibold w-full md:w-auto mt-2 md:mt-0">
                    Submitted 2 days ago
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  Pending Review
                </span>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="font-bold text-lg text-[#3D2B1F] flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        photo_library
                      </span>
                      Workspace Gallery
                    </h3>
                    <button className="text-sm text-primary font-medium hover:underline">
                      Download All
                    </button>
                  </div>
                  <div className="h-80 w-full bg-slate-100 relative group overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBovlFWBIjit8lU80epZcbg_aV7ILLZKQqsr_FUzec7DzyDUAHVgojYzbW9hKlyxx9mQmp61qcmgvchaWk_5Y1Gw7lKdBnOzs4KLE8Q7Q3c6CI5sf1YRxnyhAJn6QY5EaBlyrr6z3VMMbMXtuTB7S6yteKjWJUK3ydWDVkgy-xyvu9jcMcGeeRMayb8RnFQJjvG612alkocy-hZDLS14uWMQ3ZVV4uHRGd8a5lBpW3Wz9LOeip9osbPcH_hEYFtC4UoohcKWSiqRjMS")',
                      }}
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-medium">
                      Main Workspace Area
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-0.5 bg-slate-100">
                    <div
                      className="h-40 bg-cover bg-center relative group cursor-pointer"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD08xvv_DdIxpSgp4ciMnsvUJnu1h5O0zhBIO--zjBb_dHpy8jDM4dMakhfSjBDXw0ZSxWhusPQIm6_yYqEgnfJz4QeS6v_71UCN7I8g6TQtW9atAoitb1SrZBUuS6rjH3NFbCvX0sEGq93N7_EYceJHvH7cEHdnjsbhiA9-zLhLGmPMWQw0MlbfqFMKpoEsWjwnTOccdWyNpCu3YIsss2uRX8finMm7SaOleQhd1WnIFoHsbv31r0FujguRz4NpAuok-6LyO_EsgZo")',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                        Meeting Room A
                      </div>
                    </div>
                    <div
                      className="h-40 bg-cover bg-center relative group cursor-pointer"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyoRkFNLg98SGeY-COqGHohhgK-IRZKTnv1y_a6TlcpUlpHX96R7GjvDmH3U0RMmEjIXLxJ7laAFPVQUB_mCjHLvxGD5oPPWXfN-U9haxTuzBPVjV2vpTa-34bliEdM29hWtBucdilU5YWfEyeyif-NdOBdwUIbzXp46Dt2ocKy6gx5rxIaS0rkrx4Zuv-HdjUWE1y13Qd34D5VHrNb916YDFHJuyyZZzT006Z4V_U1j3Hr-Y3dpNDdkbUSOxI1mo2EAbSVvyYmGbR")',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                        Quiet Zone
                      </div>
                    </div>
                    <div
                      className="h-40 bg-cover bg-center relative group cursor-pointer"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnlAxWRhavVqrF4p7Jru0SgI4_fjCA3vW06fRLP5pBiIC-wPNPejdOjDQ801L7aInXHqMbD5hom-sYRp3038cYXINgA0p9V0WIu_kM-riU3f8v96IUqI9Oo6N-v4xt8fn_bQUmKH9VUn7iOhv2aPNJkkaNV5VEX116lkODjSYJDSLNj4lWFHZe6TteonB45DLd1_AbnGLdNgxdGYREKQHtAK5gtY-EiAe6y_H8oE6twngvMe3Rvoy9yKNPakT7bqHsCpIEXcFWKj21")',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                        Coffee Bar
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="font-bold text-lg text-[#3D2B1F] mb-4">
                    Application Notes
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "We are a specialty coffee shop focusing on digital nomads.
                    We have recently installed fiber optic internet and
                    sound-absorbing panels in our dedicated quiet zone. We can
                    accommodate up to 25 remote workers comfortably."
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-outlined text-[18px]">
                        person
                      </span>
                      Owner: Nguyen Van A
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-outlined text-[18px]">
                        call
                      </span>
                      +84 905 123 456
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-outlined text-[18px]">
                        mail
                      </span>
                      contact@dailygrind.vn
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden lg:sticky lg:top-6">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-lg text-[#3D2B1F] flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        fact_check
                      </span>
                      Amenity Verification
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Verify each item before approving.
                    </p>
                  </div>
                  <div className="p-2">
                    <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
                      <input
                        defaultChecked
                        className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary/50 cursor-pointer form-checkbox"
                        type="checkbox"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[#3D2B1F] text-sm">
                            High-speed Wi-Fi
                          </span>
                          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                            85 Mbps
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Tested speed meets minimum requirement ({">"}50Mbps).
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
                      <input
                        className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary/50 cursor-pointer form-checkbox"
                        type="checkbox"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[#3D2B1F] text-sm">
                            Power Outlets
                          </span>
                          <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded">
                            Unverified
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Accessible outlets at every workspace seat.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
                      <input
                        className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary/50 cursor-pointer form-checkbox"
                        type="checkbox"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[#3D2B1F] text-sm">
                            Quiet Zone
                          </span>
                          <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded">
                            Unverified
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Designated area with low noise levels.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
                      <input
                        defaultChecked
                        className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary/50 cursor-pointer form-checkbox"
                        type="checkbox"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[#3D2B1F] text-sm">
                            Air Conditioning
                          </span>
                          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                            Pass
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Climate control functional and adjustable.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
                      <input
                        className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary/50 cursor-pointer form-checkbox"
                        type="checkbox"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[#3D2B1F] text-sm">
                            Ergonomic Seating
                          </span>
                          <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded">
                            Optional
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Chairs suitable for extended work sessions.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-200">
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Review Notes (Internal)
                      </label>
                      <textarea
                        className="w-full text-sm rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary bg-white outline-none p-3"
                        placeholder="Add any notes for the team..."
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
                  <button className="w-full py-3 px-4 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2 outline-none">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Approve & Publish
                  </button>
                  <button className="w-full py-3 px-4 bg-white text-slate-500 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 hover:text-red-600 hover:border-red-200 transition-colors flex justify-center items-center gap-2 outline-none">
                    <span className="material-symbols-outlined">cancel</span>
                    Reject Application
                  </button>
                </div>
              </div>
            </div>

            <footer className="text-center text-slate-400 text-xs py-8 mt-4 border-t border-slate-200/50">
              © 2024 WorkX Inc. Super Admin Panel.
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CafeApprovalsPage;
