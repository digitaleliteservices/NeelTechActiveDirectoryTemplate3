
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Video, BookOpen, Smartphone, HelpCircle, Briefcase, Headphones, Globe, CheckCircle, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.advantage-pulse', {
        scale: 1.5,
        opacity: 0,
        duration: 4,
        repeat: -1,
        stagger: 1,
        ease: 'power1.out'
      });

      gsap.to('.floating-node', {
        y: 'random(-60, 60)',
        x: 'random(-40, 40)',
        duration: 'random(4, 7)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2
      });

      gsap.to('.advantage-mesh', {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Instructor led live Training',
      desc: 'Interactive real-time sessions with industry experts.',
      icon: <Video className="text-[#005DAA]" />,
      bg: 'bg-[#005DAA]/5',
      accent: 'group-hover:bg-[#005DAA]'
    },
    {
      title: 'Hands-on Practical Training',
      desc: 'Focus on lab exercises and practical implementation.',
      icon: <Smartphone className="text-[#F39200]" />,
      bg: 'bg-[#F39200]/5',
      accent: 'group-hover:bg-[#F39200]'
    },
    {
      title: 'Trainer Support on WhatsApp',
      desc: 'Get your doubts cleared instantly via WhatsApp.',
      icon: <HelpCircle className="text-[#005DAA]" />,
      bg: 'bg-[#005DAA]/5',
      accent: 'group-hover:bg-[#005DAA]'
    },
    {
      title: 'Recorded lectures on LMS',
      desc: 'Never miss a class with our extensive video library.',
      icon: <BookOpen className="text-[#F39200]" />,
      bg: 'bg-[#F39200]/5',
      accent: 'group-hover:bg-[#F39200]'
    },
    {
      title: 'Access to Learning Portal',
      desc: '24/7 access to curated study materials.',
      icon: <Globe className="text-[#005DAA]" />,
      bg: 'bg-[#005DAA]/5',
      accent: 'group-hover:bg-[#005DAA]'
    },
    {
      title: 'Job Forum Access',
      desc: 'Stay updated with the latest IT job openings.',
      icon: <Briefcase className="text-[#F39200]" />,
      bg: 'bg-[#F39200]/5',
      accent: 'group-hover:bg-[#F39200]'
    },
    {
      title: 'Certificate from Center',
      desc: 'Official ISO certified training completion certificate.',
      icon: <CheckCircle className="text-[#005DAA]" />,
      bg: 'bg-[#005DAA]/5',
      accent: 'group-hover:bg-[#005DAA]'
    },
    {
      title: 'Support Desk for Students',
      desc: 'Dedicated team to help with your academic journey.',
      icon: <Headphones className="text-[#F39200]" />,
      bg: 'bg-[#F39200]/5',
      accent: 'group-hover:bg-[#F39200]'
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="advantage-mesh absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#005DAA 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1">
          <div className="advantage-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005DAA]/10 rounded-full blur-[80px]" />
          <div className="advantage-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F39200]/10 rounded-full blur-[100px]" />
        </div>

        <div className="floating-node absolute top-[10%] left-[5%] w-24 h-24 rounded-3xl bg-[#005DAA]/5 backdrop-blur-sm border border-white rotate-12" />
        <div className="floating-node absolute top-[40%] right-[-5%] w-40 h-40 rounded-full bg-[#F39200]/5 backdrop-blur-sm border border-white" />
        <div className="floating-node absolute bottom-[15%] left-[10%] w-16 h-16 rounded-xl bg-[#005DAA]/5 backdrop-blur-sm border border-white -rotate-6" />
        
        <div className="absolute top-[20%] right-[15%] text-[#F39200]/10"><Sparkles size={60} /></div>
        <div className="absolute bottom-[20%] left-[20%] text-[#005DAA]/10"><Sparkles size={40} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 bg-[#005DAA]/5 rounded-full text-[#005DAA] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Our Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">World Class Training Experience</h2>
          <div className="w-20 h-1 bg-[#F39200] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="reveal-on-scroll group p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-default"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 ${feature.accent} transition-all duration-300 group-hover:text-white`}>
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {React.cloneElement(feature.icon, {
                    className: "transition-colors duration-300 group-hover:text-white"
                  })}
                </div>
              </div>
              <h3 className="font-black text-slate-900 text-lg mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
