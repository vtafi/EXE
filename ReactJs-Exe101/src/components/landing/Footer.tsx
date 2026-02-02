import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                W.
              </div>
              <span className="text-xl font-bold">WorkX</span>
            </div>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              Nền tảng quản trị công việc hiện đại, giúp bạn làm việc thông minh
              hơn mỗi ngày.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-4">Sản phẩm</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-black transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-4">Công ty</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-black transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-4">Kết nối</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <a href="#" className="hover:text-black transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
          <p>&copy; 2024 WorkX Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
