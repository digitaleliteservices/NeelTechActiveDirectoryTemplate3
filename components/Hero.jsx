import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, Shield, Award, Target, TrendingUp, 
  Users, Clock, Zap, CheckCircle, Star, BookOpen, 
  Briefcase, DollarSign, ChevronRight, Sparkles, 
  PlayCircle, Trophy, Globe, Brain, Heart
} from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const [activeBenefitSlide, setActiveBenefitSlide] = useState(0);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Fixed Countdown timer
  useEffect(() => {
    const DURATION = 5 * 60 * 60; // 5 hours in seconds
    const STORAGE_KEY = 'mcse_deal_expiry';
    
    // Initialize or get expiry time from localStorage
    let expiry = localStorage.getItem(STORAGE_KEY);
    
    if (!expiry) {
      // Set expiry to 5 hours from now if not already set
      const newExpiry = Date.now() + DURATION * 1000;
      localStorage.setItem(STORAGE_KEY, newExpiry.toString());
      expiry = newExpiry.toString();
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = parseInt(expiry) - now;
      
      if (difference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
      }
      
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      return { hours, minutes, seconds };
    };

    // Set initial time
    setCountdown(calculateTimeLeft());

    // Update countdown every second
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setCountdown(timeLeft);
      
      // Clear interval if countdown is finished
      if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  const benefitSlides = [
    {
      title: 'From Learning to Leadership',
      subtitle: '90-Day Transformation',
      description: 'Join 5,000+ professionals who transformed their careers. Average salary uplift: ₹8-12 LPA.',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-500',
      stat: '94% Success Rate',
      emotion: 'confidence'
    },
    {
      title: 'Microsoft-Guaranteed Skills',
      subtitle: 'Enterprise Ready',
      description: 'Learn directly from Microsoft Certified Trainers with 10+ years industry experience.',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-500',
      stat: '500+ Projects',
      emotion: 'trust'
    },
    {
      title: 'Career Acceleration Program',
      subtitle: '3-5x Faster Growth',
      description: 'Structured path from Systems Admin to Cloud Architect in 12 months.',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-green-400',
      stat: '₹15-25 LPA Pathway',
      emotion: 'ambition'
    }
  ];

  const roles = [
    { 
      title: 'Cloud Architect', 
      salary: '₹18-25 LPA', 
      demand: 'High', 
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-400'
    },
    { 
      title: 'DevOps Engineer', 
      salary: '₹15-22 LPA', 
      demand: 'Very High', 
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-400'
    },
    { 
      title: 'Infrastructure Lead', 
      salary: '₹20-30 LPA', 
      demand: 'Medium', 
      icon: <Target className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-400'
    },
    { 
      title: 'Solutions Expert', 
      salary: '₹25-40 LPA', 
      demand: 'High', 
      icon: <Brain className="w-5 h-5" />,
      color: 'from-orange-500 to-amber-400'
    }
  ];

  const successStories = [
    { name: 'Priya Sharma', role: 'Cloud Engineer', salary: '₹18 LPA', company: 'Microsoft', avatar: 'PS' },
    { name: 'Rahul Verma', role: 'DevOps Lead', salary: '₹25 LPA', company: 'Amazon', avatar: 'RV' },
    { name: 'Anjali Patel', role: 'Infrastructure Architect', salary: '₹22 LPA', company: 'TCS', avatar: 'AP' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements with emotional appeal
      gsap.to('.floating-heart', {
        y: 20,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.pulse-dot', {
        scale: 1.5,
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      });

      // Animated text reveal with emotional impact
      gsap.from('.emotional-headline', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.3
      });

      // Success stories animation
      gsap.from('.success-story', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'back.out(1.2)'
      });

      // Interactive card hover effects
      gsap.utils.toArray('.interactive-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefitSlide((prev) => (prev + 1) % benefitSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [benefitSlides.length]);

  const scrollToCurriculum = () => {
    const target = document.querySelector('#curriculum');
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth'
      });
      
      // Emotional feedback animation
      const btn = document.querySelector('.main-cta-btn');
      gsap.to(btn, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 py-12 lg:py-20"
    >
      {/* Emotional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating hearts (emotional connection) */}
        <div className="floating-heart absolute top-20 left-1/4">
          <Heart className="w-8 h-8 text-pink-300/40" />
        </div>
        <div className="floating-heart absolute bottom-40 right-1/3">
          <Heart className="w-6 h-6 text-rose-300/40" />
        </div>

        {/* Pulse dots for attention */}
        <div className="pulse-dot absolute top-1/3 left-1/3 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
        <div className="pulse-dot absolute top-2/3 right-1/4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Emotional Headline Section */}
        <div className="text-center mb-12">
         
          {/* <div className="inline-flex items-center  space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full border border-blue-100 mb-8">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-sm  font-bold text-blue-700">#1 Rated Active Directory Program in India</span>
            <div className="flex ml-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>
          </div> */}

          <div className="emotional-headline space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                Active Directory Training
              </span>
              {/* <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent mt-2">
                for Solutions Architect
              </span> */}
            </h1>
            
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Stop dreaming about a better career. Start building it. Join India's most 
              <span className="font-bold text-blue-700"> intelligent Active Directory Infrastructure</span> that 
              understands your ambitions.
            </p>
          </div>

          {/* Psychological Trigger: Social Proof */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {successStories.map((story, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm cursor-pointer transform hover:scale-125 transition-all duration-300"
                    onMouseEnter={() => setHoveredRole(i)}
                    onMouseLeave={() => setHoveredRole(null)}
                  >
                    {story.avatar}
                    {hoveredRole === i && (
                      <div className="absolute -top-14 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                        <div className="font-bold">{story.name}</div>
                        <div className="text-amber-400">{story.salary}</div>
                        <div className="text-slate-300 text-xs">{story.company}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">3,000+</div>
                <div className="text-sm text-slate-600">Transformed Careers</div>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent hidden md:block"></div>
            
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">₹8-12 LPA</div>
                <div className="text-sm text-slate-600">Average Salary Uplift</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Benefits Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-100/50 border border-white/50 overflow-hidden">
            {benefitSlides.map((slide, index) => (
              <div
                key={index}
                className={`p-8 md:p-12 transition-all duration-700 ease-in-out ${
                  index === activeBenefitSlide ? 'opacity-100' : 'absolute inset-0 opacity-0'
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center space-x-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${slide.gradient} shadow-lg`}>
                        {slide.icon}
                      </div>
                      <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${slide.gradient}/10 border ${slide.gradient.replace('from-', 'border-').replace(' to-', '/20')}`}>
                        <span className={`text-sm font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-black`}>
                          {slide.emotion.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                      {slide.title}
                    </h3>
                    <div className={`text-xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent mb-6`}>
                      {slide.subtitle}
                    </div>
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full font-bold">
                        {slide.stat}
                      </div>
                      <button
                        onClick={() => {
                          document
                            .getElementById("success-stories")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
                      >
                        <span>See Success Stories</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </button>

                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} rounded-3xl blur-xl opacity-30`}></div>
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl">
                        {/* Interactive career path visualization */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">Week 1-4</div>
                                <div className="text-sm text-slate-600">Foundation Building</div>
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                              Start Here
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between opacity-60">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                                <Target className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">Month 2-3</div>
                                <div className="text-sm text-slate-600">Skill Mastery</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between opacity-40">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-amber-600" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">Month 4-6</div>
                                <div className="text-sm text-slate-600">Career Launch</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {benefitSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefitSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeBenefitSlide === index
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-orange-500'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Psychological Urgency Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Career Roles Visualization */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-900">Your Future Awaits</h3>
              <div className="flex items-center space-x-2 text-sm text-emerald-600 font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>Guanteed Interviews</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className="interactive-card group bg-gradient-to-r from-white to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => gsap.to(`.role-progress-${index}`, { width: '100%', duration: 0.5 })}
                  onMouseLeave={() => gsap.to(`.role-progress-${index}`, { width: '75%', duration: 0.5 })}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${role.color}`}>
                        {role.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">{role.title}</div>
                        <div className="text-sm text-slate-600">Market Demand: <span className="font-bold text-emerald-600">{role.demand}</span></div>
                      </div>
                    </div>
                    <div className="text-xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      {role.salary}
                    </div>
                  </div>
                  
                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`role-progress-${index} absolute left-0 top-0 h-full bg-gradient-to-r ${role.color} rounded-full transition-all duration-500`}
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-slate-600">Placement Probability: 92%</span>
                    <button className="group flex items-center space-x-1 text-blue-600 font-bold hover:text-blue-800">
                      {/* <span>Explore Path</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Urgency & Action Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
              {/* Limited Seats Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">Limited Seats Alert</div>
                    <div className="text-sm text-slate-600">Batch starts in</div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-red-700">3 seats left</span>
                  </div>
                </div>
              </div>

              {/* Emotional Countdown */}
              <div className="mb-8">
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(countdown).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white text-3xl font-black py-4 rounded-2xl mb-2">
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emotional Testimonial */}
              <div className="relative bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-2xl p-6 mb-8 border border-blue-100/50">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">"</span>
                </div>
                <p className="text-slate-700 italic mb-4">
                  "This program didn't just teach me skills—it changed my mindset. 
                  From ₹6 LPA to ₹18 LPA in 9 months. The emotional support was as 
                  valuable as the technical training."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      PS
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Priya Sharma</div>
                      <div className="text-sm text-slate-600">Now at Microsoft</div>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-amber-500">₹18 LPA</div>
                </div>
              </div>

              {/* Main CTA - Emotional Trigger */}
              <a
                href="https://wa.me/916361866299?text=Hi%20I%20am%20interested%20in%20your%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="main-cta-btn group relative w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl py-4 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white rounded-2xl font-bold md:font-black text-lg md:text-xl uppercase tracking-wide md:tracking-wider shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-0.5 md:hover:-translate-y-1 active:scale-95 overflow-hidden block text-center"
                aria-label="Contact on WhatsApp to secure your transformation with 100% placement support"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Main content */}
                <div className="relative p-2 md:p-3 z-10 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                  <Sparkles className="w-5 h-6 md:w-6 md:h-8 group-hover:rotate-180 transition-transform duration-500" />
                  
                  <span className="text-center sm:text-left">Secure My Transformation</span>
                  
                  {/* LAST CHANCE badge - hidden on smallest screens, visible from sm */}
                  <div className="hidden sm:flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-xs md:text-sm font-bold">LAST CHANCE</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Mobile LAST CHANCE indicator - visible only on small screens */}
                <div className="sm:hidden m-4 relative z-10 mt-1">
                  <div className="inline-flex items-center space-x-1 bg-white/20 px-2 py-0.5 rounded-full">
                    <span className="text-xs font-bold">LAST CHANCE</span>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Success guarantee badge - responsive positioning */}
                <div className="absolute -bottom-0 m-2 md:-bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  <span className="hidden xs:inline">🎯 100% Placement Support</span>
                  <span className="xs:hidden">🎯 100% Placement</span>
                </div>

                {/* Mobile tap indicator */}
                <div className="md:hidden absolute top-2 right-2 bg-black/20 rounded-full p-1 ">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
              </a>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">Money-Back Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-slate-700">Microsoft Certified</span>
                </div>
              </div>
            </div>

            {/* Quick Action Mini CTA */}
            <div className="bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-2xl p-6 border border-amber-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <PlayCircle className="w-10 h-10 text-amber-600" />
                  <div>
                    <div className="font-bold text-slate-900">Still Unsure?</div>
                    <div className="text-sm text-slate-600">Watch 5-min success story</div>
                  </div>
                </div>
                <a
                  href="https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg transition-shadow"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Watch Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final Emotional Push */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-3 rounded-full mb-6">
            <span className="font-bold">Your journey to ₹20 LPA starts with one decision</span>
          </div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Don't let uncertainty hold you back. Join a community of ambitious professionals 
            who dared to dream bigger. Your future self will thank you.
          </p>
        </div>
       <div class="text-center">
            <h1 class="mb-4 mt-8 text-xl font-normal">Want More Information? Let's Go Through This Site</h1>
            <a href="https://www.neeltechnologies.com/" 
              class="text-blue-600 hover:text-blue-800 font-mediam text-xl border-0 border-blue-600 hover:border-blue-800 px-2 py-2 rounded-lg inline-block transition duration-300"
              target="_blank" 
              rel="noopener noreferrer">
                www.neeltechnologies.com
            </a>
        </div>
       
      </div>

      <style>{`
        .floating-heart {
          filter: drop-shadow(0 4px 6px rgba(249, 168, 212, 0.3));
        }
        
        .interactive-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .main-cta-btn:hover {
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

