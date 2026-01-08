import React from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[50px] shadow-2xl border border-white/5 overflow-hidden flex flex-col items-center justify-center text-center p-12 lg:p-20 reveal-on-scroll relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39200]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#005DAA]/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
           
           <h4 className="text-[#F39200] font-black text-xs uppercase tracking-[0.4em] mb-6 relative z-10">Direct Support</h4>
           <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight max-w-3xl relative z-10">Ready to start your journey? Let's connect directly.</h2>
           <p className="text-slate-400 text-lg mb-12 max-w-2xl relative z-10">
             Our technical counselors are standing by to help you map your career path and clarify any batch timings.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10">
              <a href="tel:+916361866299" className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group no-underline">
                <div className="w-14 h-14 bg-[#F39200]/10 rounded-2xl flex items-center justify-center text-[#F39200] mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Speak with a Consultant</p>
                <p className="text-xl font-bold text-white">+91 6361866299</p>
              </a>
              
              <a href="https://wa.me/916361866299" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group no-underline">
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-[#25D366] mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">WhatsApp Support</p>
                <p className="text-xl font-bold text-white">Chat Now</p>
              </a>

              <a href="mailto:info@neeltechnologies.net" className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group no-underline">
                <div className="w-14 h-14 bg-[#005DAA]/10 rounded-2xl flex items-center justify-center text-[#005DAA] mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Inquiries</p>
                <p className="text-xl font-bold text-white text-sm lg:text-base truncate">info@neeltechnologies.net</p>
              </a>
           </div>

           <div className="mt-16 flex items-center justify-center space-x-3 text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">
             <ShieldCheck size={18} className="text-[#F39200]" />
             <span>ISO 9001:2020 Certified Center</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;