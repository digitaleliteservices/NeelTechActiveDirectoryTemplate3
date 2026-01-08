
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Database, Layers } from 'lucide-react';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.blob-blue', {
        x: 'random(-150, 150)',
        y: 'random(-150, 150)',
        scale: 'random(0.9, 1.3)',
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.blob-orange', {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        scale: 'random(0.8, 1.2)',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 5
      });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 60;
        const yPos = (clientY / window.innerHeight - 0.5) * 60;

        gsap.to('.interactive-glow', {
          x: xPos,
          y: yPos,
          duration: 3,
          ease: 'power3.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#F8FAFC]">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="blob-blue absolute top-[-15%] right-[-10%] w-[900px] h-[900px] bg-[#005DAA]/10 rounded-full blur-[160px]" />
      <div className="blob-orange absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-[#F39200]/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[180px] opacity-60" />
      <div className="interactive-glow absolute inset-0 bg-gradient-to-tr from-[#005DAA]/5 via-transparent to-[#F39200]/5 opacity-60" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="premium-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#005DAA" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.5" fill="#005DAA" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#premium-grid)" />
      </svg>
      <div className="absolute inset-0 opacity-[0.03]">
        <Database size={200} className="absolute top-1/4 left-1/4 -rotate-12 text-[#005DAA]" />
        <Layers size={150} className="absolute bottom-1/3 right-1/4 rotate-45 text-[#F39200]" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
