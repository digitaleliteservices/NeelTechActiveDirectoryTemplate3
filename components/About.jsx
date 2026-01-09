
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Award, Phone, Mail, Cloud, Network, Database } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.data-path', 
        { strokeDashoffset: 1000 }, 
        { 
          strokeDashoffset: 0, 
          duration: 10, 
          repeat: -1, 
          ease: 'none' 
        }
      );

      gsap.to('.floating-shape', {
        y: 'random(-40, 40)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(5, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.about-bg-layer', {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none about-bg-layer">
        <svg 
          ref={streamRef}
          className="absolute inset-0 w-full h-full opacity-[0.15]" 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none"
        >
          <path 
            className="data-path" 
            d="M-50,200 Q250,150 500,500 T1050,800" 
            fill="none" 
            stroke="#005DAA" 
            strokeWidth="2" 
            strokeDasharray="50, 150"
          />
          <path 
            className="data-path" 
            d="M-50,800 Q300,600 500,500 T1050,200" 
            fill="none" 
            stroke="#F39200" 
            strokeWidth="1.5" 
            strokeDasharray="30, 120"
          />
        </svg>

        <div className="floating-shape absolute top-1/4 left-10 w-32 h-32 border-2 border-[#005DAA]/10 rounded-3xl rotate-12" />
        <div className="floating-shape absolute bottom-1/4 right-20 w-48 h-48 border border-[#F39200]/10 rounded-full" />
        <div className="floating-shape absolute top-1/3 right-1/4 w-16 h-16 bg-[#005DAA]/5 rounded-xl blur-sm" />
        
        <div className="absolute top-[20%] left-[15%] text-[#005DAA]/20"><Network size={40} /></div>
        <div className="absolute bottom-[30%] right-[10%] text-[#F39200]/20"><Database size={40} /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#005DAA]/10"><Cloud size={120} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-on-scroll">
            <div className="w-20 h-2 bg-[#005DAA] mb-10 rounded-full"></div>
            <h4 className="text-[#F39200] font-black text-sm tracking-[0.4em] uppercase mb-6">Learn from Masters</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Bridging the gap to <br />
              <span className="text-[#005DAA]">Cloud Solutions</span>
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              The Active Directory Infrastructure is the gold standard for IT professionals. At Neel Technologies, we go beyond the slides to give you practical, enterprise-grade architecture skills that span from physical servers to the hyper-scale cloud.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-slate-100 hover:border-[#005DAA]/20 transition-all hover:bg-white hover:shadow-xl group">
                <div className="w-12 h-12 bg-[#005DAA]/5 rounded-xl flex items-center justify-center text-[#005DAA] mb-4 group-hover:bg-[#005DAA] group-hover:text-white transition-all">
                  <Target size={24} />
                </div>
                <h5 className="font-black text-slate-900 mb-1">Architecture Focused</h5>
                <p className="text-sm text-slate-400 font-medium">Design systems that scale globally and securely.</p>
              </div>
              <div className="p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-slate-100 hover:border-[#F39200]/20 transition-all hover:bg-white hover:shadow-xl group">
                <div className="w-12 h-12 bg-[#F39200]/5 rounded-xl flex items-center justify-center text-[#F39200] mb-4 group-hover:bg-[#F39200] group-hover:text-white transition-all">
                  <Award size={24} />
                </div>
                <h5 className="font-black text-slate-900 mb-1">ISO Quality</h5>
                <p className="text-sm text-slate-400 font-medium">Training standards that match corporate rigor.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-10 pt-10 border-t border-slate-100">
               <div className="flex items-center space-x-4 group">
                 <div className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-[#005DAA] group-hover:bg-[#005DAA] group-hover:text-white transition-all">
                   <Phone size={20} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connect</p>
                   <p className="text-base font-black text-slate-900">+91 6361866299</p>
                 </div>
               </div>
               <div className="flex items-center space-x-4 group">
                 <div className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-[#F39200] group-hover:bg-[#F39200] group-hover:text-white transition-all">
                   <Mail size={20} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiries</p>
                   <p className="text-base font-black text-slate-900">info@neeltechnologies.net</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="reveal-on-scroll relative">
             <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6 pt-12">
                   <div className="bg-[#005DAA] p-10 rounded-[44px] text-white shadow-2xl hover-lift">
                     <p className="text-5xl font-black mb-3 tracking-tighter">5K+</p>
                     <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">Success Stories</p>
                   </div>
                   <div className="bg-white/80 backdrop-blur-md p-10 rounded-[44px] text-slate-900 border border-slate-100 shadow-xl hover-lift">
                     <p className="text-4xl font-black text-[#F39200] mb-3">98%</p>
                     <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Satisfaction</p>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="bg-white/80 backdrop-blur-md p-10 rounded-[44px] text-slate-900 border border-slate-100 shadow-xl hover-lift">
                     <p className="text-4xl font-black text-[#005DAA] mb-3">120+</p>
                     <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Corporate Partners</p>
                   </div>
                   <div className="bg-[#F39200] p-10 rounded-[44px] text-white shadow-2xl hover-lift">
                     <p className="text-5xl font-black mb-3 tracking-tighter">Top</p>
                     <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">Rated Center</p>
                   </div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-[#005DAA]/10 to-[#F39200]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
