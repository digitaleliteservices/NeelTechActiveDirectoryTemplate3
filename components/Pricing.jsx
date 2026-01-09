import React from 'react';
import { Check, Clock, Globe, ShieldCheck, Ticket, ArrowUpRight, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const originalPrice = 16000;
  const discountPercent = 30;
  const finalPrice = originalPrice * (1 - discountPercent / 100);

  return (
    <section id="pricing" className="py-32 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-[#F39200]/10 border border-[#F39200]/20 px-4 py-2 rounded-full text-[#F39200] mb-8 shadow-sm">
             <TrendingUp size={16} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Career Investment</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 font-heading tracking-tighter">
            Elite Training. <span className="text-[#005DAA]">Unbeatable Value.</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#F39200] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Self Paced Card */}
          <div className="reveal-on-scroll bg-white/70 backdrop-blur-md p-8 rounded-[40px] border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group lg:-mr-4">
            <div>
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#005DAA] group-hover:text-white transition-all">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6">Self Paced</h3>
              <ul className="space-y-4 mb-10">
                {['2 Month access', 'Full Recorded Library', 'Free Updates'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-bold">
                    <Check size={14} className="text-[#005DAA]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://wa.me/916361866299" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-center bg-[#0F172A] text-white font-black rounded-[20px] no-underline uppercase tracking-widest text-xs hover:bg-[#005DAA] transition-colors">
              VISIT PORTAL
            </a>
          </div>

          {/* Live Training Card - Featured */}
          <div className="reveal-on-scroll bg-white rounded-[48px] shadow-[0_30px_60px_rgba(0,93,170,0.15)] relative overflow-hidden transform lg:scale-105 z-20 border border-[#005DAA]/20">
            {/* Fixed BEST VALUE badge - positioned properly */}
            <div className="absolute top-4 right-4 bg-[#F39200] text-white px-6 py-2 font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-lg z-20">
              BEST VALUE
            </div>
            
            <div className="p-8 xl:p-10">
              <div className="w-16 h-16 bg-[#005DAA] text-white rounded-3xl flex items-center justify-center mb-8">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Live Training</h3>
              <p className="text-sm text-slate-500 mb-8">Most Popular Choice</p>
              
              <ul className="space-y-4 mb-10">
                {['Real-time Lab Practicals', 'WhatsApp Support 24/7', 'Career Mapping'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-bold">
                    <Check size={18} className="text-[#F39200]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F8FAFC] p-6 rounded-[32px] mb-10 border border-slate-100">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-black text-[#0F172A] tracking-tighter">₹{finalPrice.toLocaleString()}</span>
                  <span className="text-lg text-slate-400 line-through font-bold">₹{originalPrice.toLocaleString()}</span>
                  <span className="ml-auto bg-[#F39200] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {discountPercent}% OFF
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-3">One-time payment • Lifetime access to updates</p>
              </div>

              <a href="https://wa.me/916361866299" target="_blank" rel="noopener noreferrer" className="w-full py-5 bg-[#005DAA] text-white font-black rounded-[24px] shadow-lg flex items-center justify-center space-x-3 group text-base no-underline hover:bg-[#004c8c] transition-colors">
                <span>ENROLL NOW</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Corporate Card */}
          <div className="reveal-on-scroll bg-[#0F172A] p-8 rounded-[40px] border border-slate-800 flex flex-col justify-between text-white group lg:-ml-4">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#F39200] transition-all">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6">Corporate</h3>
              <ul className="space-y-4 mb-10">
                {['Custom Timings', 'Group Benefits', 'Audit & Reporting'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-300 font-bold">
                    <Check size={14} className="text-[#F39200]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="mailto:info@neeltechnologies.net" className="w-full py-4 text-center bg-white text-[#0F172A] font-black rounded-[20px] no-underline uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors">
              REQUEST PROPOSAL
            </a>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck size={16} className="text-[#005DAA]" />
             <span>Success-focused learning methodology</span>
            </div>
            <div className="h-4 w-px bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <Ticket size={16} className="text-[#F39200]" />
              <span>Flexible payment options available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;