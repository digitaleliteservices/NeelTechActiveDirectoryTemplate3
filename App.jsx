import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Syllabus from './components/Syllabus';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackgroundAnimation from './components/BackgroundAnimation';
import DiscountModal from './components/DiscountModal';
import TopBanner from './components/TopBanner';
import Schedule from './components/Schedule';
import StickySocialLinks from './components/StickySocialLinks';
import VideoSection from './components/videoSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 8,
          filter: 'blur(4px)',
          scale: 0.99
        }, 
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          scale: 1,
          duration: 0.25,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 96%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    window.scrollTo(0, 0);

    const bannerTriggered = localStorage.getItem('mcse_banner_triggered');
    if (bannerTriggered === 'true') {
      setIsBannerVisible(true);
    }
  }, []);

  const handleModalClose = () => {
    setIsBannerVisible(true);
    localStorage.setItem('mcse_banner_triggered', 'true');
  };

  return (
    <div className="min-h-screen relative selection:bg-[#F39200] selection:text-white">
      <BackgroundAnimation />
      <TopBanner isVisible={isBannerVisible} />
      <Navbar isBannerVisible={isBannerVisible} />
      
      <main className={`relative z-10 transition-all duration-300 ${isBannerVisible ? 'mt-12' : 'mt-0'}`}>
        <Hero />
        <VideoSection />
        <About />
        <WhyChooseUs />
        <Syllabus />
        <SuccessStories />
        {/* <Schedule /> */}
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      
      <Footer />
       <StickySocialLinks />
      {/* <WhatsAppButton /> */}
      <DiscountModal onCloseComplete={handleModalClose} />
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import WhyChooseUs from './components/WhyChooseUs';
// import Syllabus from './components/Syllabus';
// import SuccessStories from './components/SuccessStories';
// import FAQ from './components/FAQ';
// import Pricing from './components/Pricing';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';
// import BackgroundAnimation from './components/BackgroundAnimation';
// import DiscountModal from './components/DiscountModal';
// import TopBanner from './components/TopBanner';
// import Schedule from './components/Schedule';
// import StickySocialLinks from './components/StickySocialLinks'; // Add this import

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const [isBannerVisible, setIsBannerVisible] = useState(false);

//   useEffect(() => {
//     const revealElements = document.querySelectorAll('.reveal-on-scroll');
//     revealElements.forEach((el) => {
//       gsap.fromTo(el, 
//         { 
//           opacity: 0, 
//           y: 8,
//           filter: 'blur(4px)',
//           scale: 0.99
//         }, 
//         { 
//           opacity: 1, 
//           y: 0, 
//           filter: 'blur(0px)',
//           scale: 1,
//           duration: 0.25,
//           ease: 'expo.out',
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 96%',
//             toggleActions: 'play none none none'
//           }
//         }
//       );
//     });

//     window.scrollTo(0, 0);

//     const bannerTriggered = localStorage.getItem('mcse_banner_triggered');
//     if (bannerTriggered === 'true') {
//       setIsBannerVisible(true);
//     }
//   }, []);

//   const handleModalClose = () => {
//     setIsBannerVisible(true);
//     localStorage.setItem('mcse_banner_triggered', 'true');
//   };

//   return (
//     <div className="min-h-screen relative selection:bg-[#F39200] selection:text-white">
//       <BackgroundAnimation />
//       <TopBanner isVisible={isBannerVisible} />
//       <Navbar isBannerVisible={isBannerVisible} />
      
//       <main className={`relative z-10 transition-all duration-300 ${isBannerVisible ? 'mt-12' : 'mt-0'}`}>
//         <Hero />
//         <About />
//         <WhyChooseUs />
//         <Syllabus />
//         <SuccessStories />
//         {/* <Schedule /> */}
//         <Pricing />
//         <Contact />
//         <FAQ />
//       </main>
      
//       <Footer />
//       <WhatsAppButton />
//       <StickySocialLinks /> {/* Add this component */}
//       <DiscountModal onCloseComplete={handleModalClose} />
//     </div>
//   );
// };

// export default App;