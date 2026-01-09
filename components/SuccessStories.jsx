import React from "react";
import {
  Star,
  Quote,
  Sparkles,
  Award,
  TrendingUp,
  Target,
  Briefcase,
} from "lucide-react";

const SuccessStories = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Systems Administrator",
      company: "Infosys",
      text:
        "The Active Directory Infrastructure course at Neel Technologies changed my career path. The practical labs were incredibly detailed.",
      img: "https://picsum.photos/100/100?random=1",
      salary: "12 LPA",
      course: "Active Directory Infrastructure",
    },
    {
      name: "Priya Venkatesh",
      role: "Cloud Engineer",
      company: "Amazon AWS",
      text:
        "24/7 WhatsApp support helped me clear doubts instantly and transition into a cloud role.",
      img: "https://picsum.photos/100/100?random=2",
      salary: "18 LPA",
      course: "Active Directory Training",
    },
    {
      name: "Anand Kumar",
      role: "Infrastructure Architect",
      company: "TCS",
      text:
        "Comprehensive curriculum with genuine placement support. Highly recommended.",
      img: "https://picsum.photos/100/100?random=3",
      salary: "15 LPA",
      course: "Azure Administrator",
    },
    {
      name: "Sneha Patel",
      role: "DevOps Engineer",
      company: "Microsoft",
      text:
        "Hands-on training prepared me perfectly for real-world DevOps challenges.",
      img: "https://picsum.photos/100/100?random=4",
      salary: "22 LPA",
      course: "DevOps Master",
    },
    {
      name: "Vikram Singh",
      role: "Security Analyst",
      company: "Wipro",
      text:
        "Exceptional ethical hacking labs boosted my confidence for real security work.",
      img: "https://picsum.photos/100/100?random=5",
      salary: "14 LPA",
      course: "Ethical Hacking",
    },
    {
      name: "Meera Desai",
      role: "Database Administrator",
      company: "Oracle",
      text:
        "Excellent mentorship and career guidance throughout the program.",
      img: "https://picsum.photos/100/100?random=6",
      salary: "16 LPA",
      course: "Oracle DBA",
    },
  ];

  return (
    <section
      id="success-stories"
      className="relative w-full bg-gradient-to-b from-[#0A192F] to-[#0F172A] py-12 sm:py-16 md:py-20 lg:py-28 text-white overflow-hidden"
    >
      {/* Background blobs (desktop only) */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#005DAA]/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F39200]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F39200]/10 border border-[#F39200]/20 px-4 py-2 rounded-full text-[#F39200] mb-6">
            <Sparkles size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Success Gallery
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transforming <span className="text-[#005DAA]">Careers</span>, Building{" "}
            <span className="text-[#F39200]">Futures</span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Join 3000+ professionals who transformed their careers with our
            industry-leading programs
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#005DAA] to-[#F39200] mx-auto mt-6 rounded-full" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {[
            { icon: <Briefcase />, value: "3000+", label: "Professionals Trained" },
            { icon: <Award />, value: "95%", label: "Placement Rate" },
            { icon: <TrendingUp />, value: "200%", label: "Salary Hike" },
            { icon: <Target />, value: "50+", label: "MNC Partners" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="text-[#F39200] flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl font-bold">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6"
            >
              <div className="flex text-[#F39200] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 opacity-20" />
                <p className="text-slate-200 text-sm pl-4">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-[#005DAA]/30 object-cover"
                />
                <div className="min-w-0">
                  <h5 className="font-bold text-sm sm:text-base truncate max-w-[180px]">
                    {review.name}
                  </h5>
                  <p className="text-xs text-slate-300 truncate max-w-[180px]">
                    {review.role}
                  </p>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <span className="text-xs font-bold text-[#005DAA] truncate">
                      {review.company}
                    </span>
                    <span className="text-xs font-bold text-[#F39200] bg-[#F39200]/10 px-2 py-0.5 rounded-full">
                      {review.salary}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/916361866299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#005DAA] to-[#004080] px-8 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
