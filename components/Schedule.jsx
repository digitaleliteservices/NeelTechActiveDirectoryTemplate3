
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Schedule = () => {
  const batches = [
    { date: '15th Oct 2023', time: '07:00 AM - 09:00 AM', mode: 'Online Live', status: 'Filling Fast' },
    { date: '22nd Oct 2023', time: '08:00 PM - 10:00 PM', mode: 'Weekend Batch', status: 'Open' },
    { date: '1st Nov 2023', time: '10:00 AM - 12:00 PM', mode: 'Corporate Special', status: 'Open' },
  ];

  return (
    <section id="schedule" className="py-24 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h4 className="text-[#005DAA] font-black text-xs uppercase tracking-[0.4em] mb-4">Timing is Key</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-heading tracking-tight">Upcoming Batch Schedule</h2>
          <div className="w-24 h-1.5 bg-[#F39200] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">Flexible batches designed to fit your professional life. Reserve your spot today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {batches.map((batch, idx) => (
            <div key={idx} className="reveal-on-scroll bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#005DAA]/5 rounded-2xl flex items-center justify-center text-[#005DAA] group-hover:bg-[#005DAA] group-hover:text-white transition-all">
                    <Calendar size={28} />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${batch.status === 'Filling Fast' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                    {batch.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">{batch.date}</h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Clock size={18} className="text-[#F39200]" />
                    <span className="font-bold text-sm">{batch.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <MapPin size={18} className="text-[#005DAA]" />
                    <span className="font-bold text-sm">{batch.mode}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Users size={18} className="text-[#F39200]" />
                    <span className="font-bold text-sm">Limited Seats Left</span>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/916361866299" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-center bg-slate-50 text-slate-800 font-black rounded-2xl hover:bg-[#F39200] hover:text-white transition-all group-hover:shadow-lg no-underline uppercase tracking-widest text-[10px]">
                BOOK SEAT
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
