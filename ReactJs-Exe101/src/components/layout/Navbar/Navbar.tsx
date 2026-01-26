import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Khám phá', 'Tính năng', 'Cộng đồng', 'Blog'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-3' 
          : 'bg-transparent py-5'
      } ${className}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform duration-300">
            W.
          </div>
          <span className="text-xl font-bold tracking-tighter text-black">WorkX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-medium text-stone-500 hover:text-black transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-bold text-black hover:text-orange-600 transition-colors">
            Đăng nhập
          </button>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-black/10">
            Bắt đầu ngay
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl p-6 flex flex-col gap-4 animate-slideDown">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-lg font-bold text-black py-2 border-b border-stone-50"
            >
              {item}
            </a>
          ))}
          <button className="bg-black text-white w-full py-3 rounded-full font-bold mt-2">
            Bắt đầu ngay
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
