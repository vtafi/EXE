import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    product: {
      title: 'Sản phẩm',
      links: ['Features', 'Pricing', 'Download']
    },
    company: {
      title: 'Công ty',
      links: ['About', 'Careers', 'Contact']
    },
    social: {
      title: 'Kết nối',
      links: ['Twitter', 'Instagram', 'Facebook']
    }
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                W.
              </div>
              <span className="text-xl font-bold">WorkX</span>
            </div>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              Nền tảng quản trị công việc hiện đại, giúp bạn làm việc thông minh hơn mỗi ngày.
            </p>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-bold text-black mb-4">{footerLinks.product.title}</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              {footerLinks.product.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-black transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-black mb-4">{footerLinks.company.title}</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              {footerLinks.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-black transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-black mb-4">{footerLinks.social.title}</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              {footerLinks.social.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-black transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
          <p>&copy; 2024 WorkX Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
