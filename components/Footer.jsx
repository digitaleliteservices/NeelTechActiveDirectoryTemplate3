// import React from 'react';
// import { Mail, Phone, MapPin, Youtube, Facebook, Twitter, Instagram, Linkedin, ExternalLink, Building, Award, Users, BookOpen } from 'lucide-react';
// import neelLogo from '../assets/neelLogo.png';

// const Footer = () => {
//   const cities = [
//     "Bangalore", "Chennai", "Hyderabad", "Pune", "Noida", "Delhi", "Mumbai", 
//     "Gurgaon", "Kolkata", "Ahmedabad", "Chandigarh", "Trivandrum", "Mysore"
//   ];
// const socialLinks = [
//   {
//     icon: Facebook,
//     url: "https://www.facebook.com/neeltechno",
//   },
//   {
//     icon: Twitter,
//     url: "https://x.com/NeelTechnologi1",
//   },
//   {
//     icon: Instagram,
//     url: "https://www.instagram.com/neeltechnologies/",
//   },
//   // {
//   //   icon: Linkedin,
//   //   url: "https://www.linkedin.com/in/yourprofile",
//   // },
//   {
//     icon: Youtube,
//     url: "https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA",
//   },
// ];

//   const courses = [
//     { name: "AWS Cloud", url:"https://www.neeltechnologies.com/aws-training-certification-course", icon: <Building size={14} /> },
//     { name: "Azure Cloud",url:"https://www.neeltechnologies.com/azure-training-certification-course",  icon: <Building size={14} /> },
//     { name: "Linux / Powershell",url:"https://www.neeltechnologies.com/powershell-training-certification-course",  icon: <BookOpen size={14} /> },
//     { name: "Python / GCP",url:"https://www.neeltechnologies.com/python-training-certification-course",  icon: <BookOpen size={14} /> },
//     { name: "Ethical Hacking", url:"https://www.neeltechnologies.com/cyber-security-training-certification-course", icon: <Users size={14} /> }
//   ];

//   const scrollToSection = (href) => {
//     const target = document.querySelector(href);
//     if (target) {
//       window.scrollTo({
//         top: target.getBoundingClientRect().top + window.pageYOffset - 80,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <footer className="bg-white text-gray-700 pt-16 pb-12 overflow-hidden relative border-t border-gray-100">
//       {/* Top accent line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600" />
      
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
//           {/* Company Info */}
//           <div className="space-y-8">
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <img
//                   src={neelLogo}
//                   alt="Neel Technologies"
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
//                   NEEL <span className="text-blue-600">TECHNOLOGIES</span>
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">ISO 9001:2020 Certified</p>
//               </div>
//             </div>
           
//             <p className="text-gray-600 leading-relaxed text-sm font-normal">
//               Neel Technologies boasts a team of highly experienced and qualified trainers 
//               who are deeply committed to student success. Empowering IT professionals since 2020.
//             </p>
             
//             <p class=" text-sm ">Want More Information? Let's Go Through This Site
//             <a href="https://www.neeltechnologies.com/" 
//               class="text-blue-600 hover:text-blue-800 font-mediam text- sm-0 border-blue-600 hover:border-blue-800 px-6 py-3 rounded-lg inline-block transition duration-300"
//               target="_blank" 
//               rel="noopener noreferrer">
//                 www.neeltechnologies.com
//             </a>
//             </p>
           
//             <div className="flex space-x-4">
//       {socialLinks.map(({ icon: Icon, url }, i) => (
//         <a
//           key={i}
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-10 h-10 rounded-md bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 flex items-center justify-center transition-all duration-200 group"
//         >
//           <Icon
//             size={18}
//             className="text-gray-500 group-hover:text-blue-600 transition-colors"
//           />
//         </a>
//       ))}
//     </div>

//           </div>

//           {/* Popular Cities */}
//           <div>
//             <div className="flex items-center mb-8">
//               <div className="w-8 h-0.5 bg-blue-600 mr-3" />
//               <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
//                 OUR PRESENCE
//               </h4>
//             </div>
//             <div className="grid grid-cols-2 gap-2">
//               {cities.map(city => (
//                 <div 
//                   key={city} 
//                   className="flex items-center space-x-2 px-3 py-2.5 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 group cursor-default border border-transparent hover:border-blue-100"
//                 >
//                   <MapPin size={12} className="text-blue-600 flex-shrink-0" />
//                   <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 truncate">
//                     {city}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Our Courses */}
//           <div>
//             <div className="flex items-center mb-8">
//               <div className="w-8 h-0.5 bg-blue-600 mr-3" />
//               <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
//                 OUR COURSES
//               </h4>
//             </div>
//             <ul className="space-y-3">
//               {courses.map(course => (
//                 <li key={course.name}>
//                   <a
//   href={course.url}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="w-full flex items-center space-x-3 py-2.5 hover:text-blue-600 transition-colors group"
// >
//                     <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
//                       {course.icon}
//                     </span>
//                     <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
//                       {course.name}
//                     </span>
//                     <ExternalLink size={12} className="text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <div className="flex items-center mb-8">
//               <div className="w-8 h-0.5 bg-blue-600 mr-3" />
//               <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
//                 CONTACT US
//               </h4>
//             </div>
//             <ul className="space-y-6">
//               <li className="flex items-start space-x-4">
//                 <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
//                   <MapPin size={18} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <h5 className="text-sm font-semibold text-gray-900 mb-1">Headquarters</h5>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     Doddabele Kengeri,<br />
//                     Bangalore - 560040
//                   </p>
//                 </div>
//               </li>
              
//               <li className="flex items-center space-x-4">
//                 <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
//                   <Phone size={18} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <h5 className="text-sm font-semibold text-gray-900 mb-1">Phone</h5>
//                   <a 
//                     href="tel:+916361866299" 
//                     className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
//                   >
//                     +91 6361866299
//                   </a>
//                 </div>
//               </li>
              
//               <li className="flex items-center space-x-4">
//                 <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
//                   <Mail size={18} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <h5 className="text-sm font-semibold text-gray-900 mb-1">Email</h5>
//                   <a 
//                     href="mailto:info@neeltechnologies.net" 
//                     className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
//                   >
//                     info@neeltechnologies.net
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-10 border-t border-gray-100">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-6 mb-6 md:mb-0">
//               <div className="flex items-center space-x-2">
//                 <Award size={16} className="text-blue-600" />
//                 <span className="text-xs font-medium text-gray-600">
//                   ISO 9001:2020 Certified
//                 </span>
//               </div>
//               <div className="h-4 w-px bg-gray-200" />
//               <div className="text-xs text-gray-500">
//                 © 2026 Neel Technologies. All rights reserved.
//               </div>
//             </div>
            
//             <div className="flex space-x-8">
//               {[
//                 { label: 'Curriculum', section: '#syllabus' },
//                 { label: 'Success Stories', section: '#success-stories' },
//                 { label: 'Contact', section: '#contact' }
//               ].map(item => (
//                 <button
//                   key={item.label}
//                   onClick={() => scrollToSection(item.section)}
//                   className="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
//                 >
//                   {item.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Trust Indicators */}
//           <div className="mt-10 pt-8 border-t border-gray-100">
//             <div className="flex flex-wrap items-center justify-center gap-8">
//               <div className="text-center">
//                 <div className="text-lg font-bold text-gray-900">3000+</div>
//                 <div className="text-xs text-gray-500">Professionals Trained</div>
//               </div>
//               <div className="h-6 w-px bg-gray-200" />
//               <div className="text-center">
//                 <div className="text-lg font-bold text-gray-900">13</div>
//                 <div className="text-xs text-gray-500">Cities Across India</div>
//               </div>
//               <div className="h-6 w-px bg-gray-200" />
//               <div className="text-center">
//                 <div className="text-lg font-bold text-gray-900">6+</div>
//                 <div className="text-xs text-gray-500">Years of Excellence</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Simple hover effects */}
//       <style jsx>{`
//         .hover-lift {
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }
//         .hover-lift:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Mail, Phone, MapPin, Youtube, Facebook, Twitter, Instagram, Linkedin, ExternalLink, Building, Award, Users, BookOpen } from 'lucide-react';
import neelLogo from '../assets/neelLogo.png';

const Footer = () => {
  const cities = [
    "Bangalore", "Chennai", "Hyderabad", "Pune", "Noida", "Delhi", "Mumbai", 
    "Gurgaon", "Kolkata", "Ahmedabad", "Chandigarh", "Trivandrum", "Mysore"
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/neeltechno",
    },
    {
      icon: Twitter,
      url: "https://x.com/NeelTechnologi1",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/neeltechnologies/",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA",
    },
  ];

  const courses = [
    { name: "AWS Cloud", url: "https://www.neeltechnologies.com/aws-training-certification-course", icon: <Building size={14} /> },
    { name: "Azure Cloud", url: "https://www.neeltechnologies.com/azure-training-certification-course", icon: <Building size={14} /> },
    { name: "Linux / Powershell", url: "https://www.neeltechnologies.com/powershell-training-certification-course", icon: <BookOpen size={14} /> },
    { name: "Python / GCP", url: "https://www.neeltechnologies.com/python-training-certification-course", icon: <BookOpen size={14} /> },
    { name: "Ethical Hacking", url: "https://www.neeltechnologies.com/cyber-security-training-certification-course", icon: <Users size={14} /> }
  ];

  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-12 overflow-hidden relative border-t border-gray-200">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 pt-1">
                <img
                  src={neelLogo}
                  alt="Neel Technologies"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
                  NEEL <span className="text-blue-600">TECHNOLOGIES</span>
                </h2>
                <p className="text-xs text-blue-600 font-medium mt-0.5">ISO 9001:2020 Certified</p>
              </div>
            </div>
           
            <p className="text-gray-600 leading-relaxed text-sm">
              Neel Technologies boasts a team of highly experienced and qualified trainers 
              who are deeply committed to student success. Empowering IT professionals since 2020.
            </p>
             
            <div className="pt-0">
              <p className="text-sm text-gray-700 mb-2">Want More Information?</p>
              <a 
                href="https://www.neeltechnologies.com/"
                className="inline-flex items-center text-gray-900 hover:text-blue-500 font-medium text-sm    rounded-lg transition-all duration-200 group"
                target="_blank" 
                rel="noopener noreferrer"
              >
                www.neeltechnologies.com
                <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
           
            <div className="flex space-x-3 pt-4">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 flex items-center justify-center transition-all duration-200 group shadow-sm hover:shadow"
                >
                  <Icon
                    size={16}
                    className="text-gray-600 group-hover:text-blue-600 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Cities */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-6 h-0.5 bg-blue-600 mr-3" />
              <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                OUR PRESENCE
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {cities.map(city => (
                <div 
                  key={city} 
                  className="flex items-center space-x-2 px-3 py-2.5 bg-white hover:bg-blue-50 rounded-lg transition-all duration-200 group cursor-default border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow"
                >
                  <MapPin size={12} className="text-blue-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 truncate">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-6 h-0.5 bg-blue-600 mr-3" />
              <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                OUR COURSES
              </h4>
            </div>
            <ul className="space-y-2.5">
              {courses.map(course => (
                <li key={course.name}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center space-x-3 py-2.5 px-3 hover:bg-blue-50 rounded-lg transition-all duration-200 group border border-transparent hover:border-blue-100"
                  >
                    <span className="text-blue-600 opacity-70 group-hover:opacity-100 transition-opacity">
                      {course.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 flex-grow">
                      {course.name}
                    </span>
                    <ExternalLink size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-6 h-0.5 bg-blue-600 mr-3" />
              <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                CONTACT US
              </h4>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-blue-600" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-1">Headquarters</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Doddabele Kengeri,<br />
                    Bangalore - 560040
                  </p>
                </div>
              </li>
              
              <li className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-blue-600" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-1">Phone</h5>
                  <a 
                    href="tel:+916361866299" 
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    +91 6361866299
                  </a>
                </div>
              </li>
              
              <li className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-1">Email</h5>
                  <a 
                    href="mailto:info@neeltechnologies.net" 
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    info@neeltechnologies.net
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-blue-600" />
                <span className="text-xs font-medium text-gray-700">
                  ISO 9001:2020 Certified
                </span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="text-xs text-gray-600">
                © {new Date().getFullYear()} Neel Technologies. All rights reserved.
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: 'Curriculum', section: '#syllabus' },
                { label: 'Success Stories', section: '#success-stories' },
                { label: 'Contact', section: '#contact' }
              ].map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-900">3000+</div>
                <div className="text-xs text-gray-600 font-medium">Professionals Trained</div>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden sm:block" />
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-900">13</div>
                <div className="text-xs text-gray-600 font-medium">Cities Across India</div>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden sm:block" />
              <div className="text-center px-4">
                <div className="text-xl font-bold text-gray-900">6+</div>
                <div className="text-xs text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;