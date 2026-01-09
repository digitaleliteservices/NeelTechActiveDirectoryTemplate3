import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import neelLogo from '../assets/neelLogo.png'

const Navbar = ({ isBannerVisible = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us?', href: '#why-choose-us' },
    { name: 'Syllabus', href: '#syllabus' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'FAQs', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = isBannerVisible ? 120 : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <nav 
      style={{ top: isBannerVisible ? '48px' : '0' }}
      className={`fixed left-0  right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <button onClick={() => scrollToSection('#home')} className="flex-shrink-0 flex items-center space-x-3 group outline-none border-none bg-transparent cursor-pointer">
            <img src={neelLogo} alt="Neel Logo" className="w-12 h-auto" />
          </button>

          {/* Desktop Navigation & Button */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[12px] uppercase tracking-widest font-black text-slate-700 hover:text-[#324184ff] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#324184ff] after:transition-all hover:after:w-full no-underline"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => window.open("https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76")}
              className="bg-[#005DAA] text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_15px_30px_rgba(0,93,170,0.2)] hover:bg-[#F39200] hover:shadow-[0_15px_30px_rgba(243,146,0,0.2)] transition-all transform hover:-translate-y-1 active:scale-95 outline-none border-none cursor-pointer"
            >
              Join Free Demo
            </button>
          </div>

          {/* Mobile Button (Visible on small screens) */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => window.open("https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76")}
              className="bg-[#005DAA] text-white px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider shadow-[0_10px_20px_rgba(0,93,170,0.2)] hover:bg-[#F39200] active:scale-95 transition-all outline-none border-none cursor-pointer whitespace-nowrap"
            >
              Join Free Demo
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-[#005DAA] p-2 transition-colors focus:outline-none bg-transparent border-none cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden bg-white border-t border-slate-100 shadow-2xl absolute top-full left-0 right-0 transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="px-4 pt-4 pb-10 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-4 py-3 text-sm font-black text-slate-700 hover:bg-slate-50 hover:text-[#005DAA] rounded-xl transition-all no-underline"
            >
              {item.name}
            </a>
          ))}
          <div className="px-4 pt-4">
            <button
              onClick={() => window.open("https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76")}
              className="w-full text-center bg-[#F39200] text-white px-4 py-4 rounded-xl font-black text-base shadow-lg active:scale-95 transition-all outline-none border-none cursor-pointer"
            >
              Join Free Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;