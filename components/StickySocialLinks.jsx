import React, { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone,
  MessageCircle,
  X,
  Youtube
} from 'lucide-react';

const StickySocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSocialExpanded, setIsSocialExpanded] = useState(false);

  // Only show after scrolling past hero (about 100vh)
  useEffect(() => {
    const toggleVisibility = () => {
      // Show only after scrolling past 100vh (hero section)
      if (window.pageYOffset > window.innerHeight*2.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/neeltechno", color: "bg-[#1877F2]", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/neeltechnologies/", color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", label: "Instagram" },
    { icon: Twitter, url: "https://x.com/NeelTechnologi1", color: "bg-black", label: "Twitter" },
    { icon: Youtube, url: "https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA", color: "bg-[#FF0000]", label: "Youtube" },
  ];

  // Configuration
  const whatsappNumber = "916361866299";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const phoneNumber = "tel:+916361866299";

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-2 z-[100] flex flex-col items-center space-y-4 animate-fadeIn">
      {/* ... rest of your component remains exactly the same ... */}
      {/* 1. Social Menu Container */}
      <div className="flex flex-col items-center relative">
        {/* Vertical Social List (appears on expansion) */}
        <div className={`absolute bottom-full mb-3 flex flex-col items-center space-y-3 transition-all duration-300 origin-bottom ${
          isSocialExpanded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
        }`}>
          {socialLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 ${link.color} text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}
              style={{ transitionDelay: isSocialExpanded ? `${idx * 50}ms` : '0ms' }}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* The Capsule Trigger */}
        <button 
          onClick={() => setIsSocialExpanded(!isSocialExpanded)}
          className={`bg-white p-2 rounded-full shadow-md border border-slate-50 flex items-center justify-center transition-all hover:shadow-lg active:scale-95 ${
            isSocialExpanded ? 'ring-1 ring-blue-50' : ''
          }`}
        >
          {isSocialExpanded ? (
            <X size={20} className="text-slate-800" />
          ) : (
            <div className="flex items-center space-x-2">
              <Facebook size={12} className="text-slate-800" />
              <Instagram size={12} className="text-slate-800" />
              <Twitter size={12} className="text-slate-800" />
            </div>
          )}
        </button>
      </div>

      {/* 2. WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white rounded-full shadow-[0_10px_25px_rgba(46,204,113,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle size={20} strokeWidth={2.5} className="fill-none" />
      </a>

      {/* 3. Call Button */}
      <a 
        href={phoneNumber}
        className="w-12 h-12 bg-gradient-to-br from-[#f39c12] to-[#e67e22] text-white rounded-full shadow-[0_10px_25px_rgba(230,126,34,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Phone size={20} strokeWidth={2.5} className="fill-none" />
      </a>

      {/* 4. Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`w-12 h-12 bg-white text-slate-800 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center border border-slate-50 hover:bg-slate-50 transition-all duration-500`}
      >
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default StickySocialLinks;