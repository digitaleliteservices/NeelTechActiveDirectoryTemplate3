import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Sparkles, Ticket, ArrowRight, Clock, ShieldCheck, Timer } from 'lucide-react';

const DiscountModal = ({ onCloseComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    const DURATION = 5 * 60 * 60;
    const STORAGE_KEY = 'active_directory_infrastructure_deal_expiry';
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
    const interval = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      if (remaining <= 0) clearInterval(interval);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline();
      
      tl.fromTo(overlayRef.current, 
        { opacity: 0, backdropFilter: 'blur(0px)' },
        { opacity: 1, backdropFilter: 'blur(12px)', duration: 0.5, ease: 'power2.out' }
      );

      tl.fromTo(cardRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' },
        "-=0.3"
      );

      gsap.to('.timer-glow', {
        opacity: 0.4,
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, [isVisible]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onCloseComplete();
      }
    });
    tl.to(cardRef.current, { scale: 0.9, opacity: 0, y: 30, duration: 0.3, ease: 'power2.in' });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
  };

  const handleClaim = () => {
    handleClose();
    setTimeout(() => {
      const target = document.querySelector('#pricing');
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 120,
          behavior: 'smooth'
        });
      }
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        ref={overlayRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-950/60 cursor-pointer"
      />

      <div ref={cardRef} className="relative w-full max-w-[380px] sm:max-w-md bg-white rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20">
        <div className="absolute top-0 left-0 h-1.5 bg-[#F39200] z-20 transition-all duration-1000 ease-linear" style={{ width: `${(timeLeft / (5 * 3600)) * 100}%` }} />

        <button onClick={handleClose} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all z-30 border-none cursor-pointer">
          <X size={18} />
        </button>

        <div className="p-8 sm:p-10 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-[#F39200]/10 px-4 py-1.5 rounded-full text-[#F39200] mb-6">
            <Sparkles size={14} fill="currentColor" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Surprise Offer</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tighter leading-tight">
            Unlock Your <span className="text-[#005DAA]">Tech Future</span>
          </h2>
          
          <div className="relative py-4 flex flex-col items-center">
             <div className="text-6xl sm:text-7xl font-black text-[#F39200] leading-none tracking-tighter flex items-center">
                <span>30</span>
                <span className="text-3xl sm:text-4xl ml-1 mt-2">% OFF</span>
             </div>
             <p className="text-slate-400 font-black text-[9px] uppercase tracking-[0.3em] mt-3 opacity-80">Flash Deal Activated</p>
          </div>

          <div className="my-6 py-3 px-6 bg-slate-900 rounded-2xl border border-slate-800 relative group overflow-hidden">
             <div className="timer-glow absolute inset-0 bg-[#005DAA]/20 opacity-0 blur-xl" />
             <div className="flex flex-col items-center relative z-10">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1">Offer Expires In</span>
                <div className="flex items-center space-x-2">
                  <Timer size={14} className="text-[#F39200]" />
                  <span className="text-2xl font-black text-white font-mono tabular-nums tracking-wider">
                    {formatTime(timeLeft)}
                  </span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full mb-8">
             <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Clock size={16} className="text-[#005DAA] mb-1.5" />
                <span className="text-[7px] font-black text-slate-400 uppercase text-center leading-tight">Limited<br/>Seats</span>
             </div>
             <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Ticket size={16} className="text-[#F39200] mb-1.5" />
                <span className="text-[7px] font-black text-slate-400 uppercase text-center leading-tight">One-Time<br/>Use</span>
             </div>
             <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <ShieldCheck size={16} className="text-[#005DAA] mb-1.5" />
                <span className="text-[7px] font-black text-slate-400 uppercase text-center leading-tight">ISO<br/>Certified</span>
             </div>
          </div>

          <button onClick={handleClaim} className="w-full py-5 bg-[#005DAA] text-white rounded-2xl font-black text-sm shadow-[0_15px_30px_rgba(0,93,170,0.3)] hover:bg-slate-900 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 group border-none cursor-pointer">
            <span className="uppercase tracking-widest">Claim My Discount</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;