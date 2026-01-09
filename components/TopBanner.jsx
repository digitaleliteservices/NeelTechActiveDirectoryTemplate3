import React, { useState, useEffect } from 'react';
import { Zap, Clock, ArrowRight } from 'lucide-react';

const TopBanner = ({ isVisible }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const DURATION = 5 * 60 * 60;
    const STORAGE_KEY = 'mcse_deal_expiry';
    
    let expiry = localStorage.getItem(STORAGE_KEY);
    
    if (!expiry) {
      const newExpiry = Date.now() + DURATION * 1000;
      localStorage.setItem(STORAGE_KEY, newExpiry.toString());
      expiry = newExpiry.toString();
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = parseInt(expiry) - now;
      return Math.max(0, Math.floor(difference / 1000));
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      if (remaining <= 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToPricing = () => {
    const target = document.querySelector('#pricing');
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0F172A] overflow-hidden animate-slide-down">
      <div className="absolute inset-0 bg-gradient-to-r from-[#005DAA] via-[#F39200] to-[#005DAA] opacity-20 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Offer</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Zap size={14} className="text-[#F39200] fill-[#F39200]" />
            <p className="text-[11px] sm:text-xs font-black text-white tracking-tight">
              FLASH SALE: <span className="text-[#F39200]">30% OFF</span> ACTIVE DIRECTORY COURSE
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            <Clock size={14} className="text-white opacity-70" />
            <span className="text-sm font-black text-white font-mono tabular-nums">{formatTime(timeLeft)}</span>
          </div>
          
          <button 
            onClick={scrollToPricing}
            className="hidden md:flex items-center space-x-1 text-[10px] font-black text-white uppercase tracking-widest hover:text-[#F39200] transition-colors group bg-transparent border-none cursor-pointer"
          >
            <span>Claim Now</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;