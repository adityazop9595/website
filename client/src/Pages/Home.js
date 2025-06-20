// import React from 'react'
// import titleIcon from "../assets/ai-icon-gradient.png"
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from 'react-router-dom'
// import BannerRightImg from "../assets/home-social-img4.png"
// import TwinkleIcon from "../assets/stars-dark.png"
// export default function Home() {

//   return (
//     <>
//     <section className='bg-before  relative min-h-[90vh] flex items-center justify-center'>
//         <div className='animate-icon'><img src={TwinkleIcon}alt="*" className=' absolute left-[2em] top-[2em]'/></div>
//         <div className='max-container grid grid-cols-2 xl-1500:max-w-[1400px]'>
//             <div className='details-con  bg-amber-000 p-2 max-w-2xl'>
//                 <div className='head-group'>
//                     <div className='head-text'>
//                     <h1 className='topic text-[5rem]  font-Inter font-[500] leading-[1em] max-sm:text-[3.4rem]'>Brand Building with Expert</h1>
//                     <div className='topic flex items-center'>
//                         <h1 className='text-[5rem]  font-Inter font-[500] leading-[70px] max-sm:text-[3.4rem]'>SEO</h1>
//                         <div className='eleminator px-1'><img src={titleIcon} width="115" height="80" alt='title'/></div>
//                         <h1 className='text-[5rem]  font-Inter font-[500] leading-[70px] max-sm:text-[3.4rem]'>& AI</h1>
//                     </div>
//                     </div>
//                     <div className='para-text-con py-4'>
//                       <p className='text-[20px] text-gray-500 font-Poppins '>
//                       Do you know what it takes to grow your 
//                       <br/>
//                       business online? Do you want to?
//                       </p>
//                     </div>
//                 </div>
//                 <div className='btn-con'>
//                     <Link to="/"className='inline-flex items-center text-[1.3rem] justify-between'>
//                     <span className='pr-2.5'>Get in Touch</span> <FaArrowRightLong className='text-black'/></Link>
//                 </div>
//             </div>

//             <div className='img-con'>
//                 <img src={BannerRightImg}alt='i'/>
//             </div>

//         </div>

//     </section>
    
    
    
//     </>
//   )
// }

// import React from 'react'
// import titleIcon from "../assets/ai-icon-gradient.png"
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from 'react-router-dom'
// import BannerRightImg from "../assets/home-social-img4.png"
// import TwinkleIcon from "../assets/stars-dark.png"

// export default function Home() {
//   return (
//     <>
//       <section className="bg-before relative min-h-screen flex items-center justify-center">
//         {/* Floating Twinkle Icon */}
//         <div className="animate-icon">
//           <img src={TwinkleIcon} alt="Decorative Star" className="absolute left-8 top-8 w-8 h-8" />
//         </div>

//         {/* Main Container */}
//         <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8 xl:max-w-[1400px] mx-auto">
          
//           {/* Left Section (Text Content) */}
//           <div className="details-con p-2">
//             <div className="head-group">
//               <div className="head-text">
                
//                 {/* Main Heading */}
//                 <h1 className="topic text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-Inter font-semibold leading-[1rem]">
//                   Brand Building with Expert
//                 </h1>

//                 {/* SEO and AI Heading */}
//                 <div className="topic flex items-center flex-wrap">
//                   <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-Inter font-semibold leading-[1rem] sm:text-[3em]">
//                     SEO
//                   </h1>
//                   <div className="eleminator px-1">
//                     <img src={titleIcon} alt="SEO Icon" className="w-[70px] md:w-[90px] lg:w-[115px] h-auto" />
//                   </div>
//                   <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-Inter font-semibold leading-tight">
//                     & AI
//                   </h1>
//                 </div>

//               </div>

//               {/* Paragraph */}
//               <div className="para-text-con py-4">
//                 <p className="text-lg md:text-xl text-gray-600 font-Poppins leading-relaxed">
//                   Do you know what it takes to grow your <br className="hidden md:block" />
//                   business online? Do you want to?
//                 </p>
//               </div>
//             </div>

//             {/* Call to Action Button */}
//             <div className="btn-con mt-4">
//               <Link to="/" className="inline-flex items-center text-lg md:text-xl font-medium text-black hover:underline">
//                 <span className="pr-2.5">Get in Touch</span>
//                 <FaArrowRightLong />
//               </Link>
//             </div>
//           </div>

//           {/* Right Section (Image) */}
//           <div className="img-con flex justify-center">
//             <img src={BannerRightImg} alt="Social Media Illustration" className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto" />
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }
import React, { useState } from 'react'
import {  FaThLarge } from "react-icons/fa";
import titleIcon from "../assets/ai-icon-gradient.png"
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import BannerRightImg from "../assets/Untitled_design-removebg-preview.png"
import TwinkleIcon from "../assets/stars-dark.png"
import Services from '../BitsContent/Services';
import Titleanimate from '../features/Animation/TitleAnimation';
import LeftToRightAnimation from '../features/Animation/LeftToRightAnimation';
import RightToLeftAnimation from '../features/Animation/RightToLeftAnimation';
import { TbWorld } from "react-icons/tb";
import { SiCircle } from "react-icons/si";
import HowItWorks from '../BitsContent/HowItWorks';
import BottomToTopAnimation from '../features/Animation/BottomToUp';


export default function Home() {

  return (
    <>
      <section className="bg-before relative min-h-screen flex items-center justify-center">
        {/* Floating Twinkle Icon */}
        <div className="animate-icon">
          <img
  src={TwinkleIcon}
  alt="Decorative Star"
  className="absolute left-[10%] top-8 w-12 h-12 md:w-16 md:h-16"
/>

        </div>

        {/* Main Container */}
        <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 xl-1500:max-w-[1400px] mx-auto">

          {/* Left Section (Text Content) */}
          <LeftToRightAnimation>
          <div className="details-con p-2">
            <div className="head-group space-y-4">

              {/* Main Heading */}
              <Titleanimate>
              <div className="head-text space-y-2">
                <h1 className="topic text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-Inter font-semibold text-gray-900 leading-snug md:leading-[1.1]">
                  Brand Building with Expert
                </h1>
                {/* SEO + AI Heading */}
                <div className="topic flex items-center flex-wrap">
                  <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-Inter font-semibold text-gray-900 leading-snug md:leading-[1.1]">
                    SEO
                  </h1>
                  <div className="eleminator px-2">
                    <img src={titleIcon} alt="SEO Icon" className="w-[60px] md:w-[80px] lg:w-[100px] h-auto" />
                  </div>
                  <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-Inter font-semibold text-gray-900 leading-snug md:leading-[1.1]">
                    & AI
                  </h1>
                </div>
              </div>
</Titleanimate>

              {/* Paragraph */}
              <div className="para-text-con">
                <p className="text-base md:text-lg text-gray-600 font-Poppins leading-normal md:leading-relaxed">
                  Do you know what it takes to grow your 
                  <br className="hidden md:block" />
                  business online? Let’s discover it together.
                </p>
              </div>

              {/* Call to Action Button */}
              <div className="btn-con mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-primary-500 hover:underline">
                  Get in Touch
                  <FaArrowRightLong className="text-black" />
                </Link>
              </div>

            </div>
          </div>
          </LeftToRightAnimation>

          {/* Right Section (Image) */}
          <RightToLeftAnimation>
          <div className="img-con flex justify-center">
            <img src={BannerRightImg} alt="Social Media Illustration" className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto" />
          </div>
</RightToLeftAnimation>
        </div>
      </section>

<Services/>






{/*  */}


    <section className="bg-slate-900 text-white py-20 px-6 md:px-16 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <LeftToRightAnimation>
    <div>
      <p className="text-sm tracking-widest text-gray-400 mb-2">
        01 — 
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8 break-words">
       Power Your Business with Smart IT Solutions


      </h2>

      <div className="flex flex-col sm:flex-row gap-8 mb-8">
        {/* Video Conferencing Feature */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <TbWorld className="text-xl text-white shrink-0" />
            <h4 className="text-lg font-medium">Website Development</h4>
          </div>
           <hr className=' mt-2 mb-2'/>
          <p className="text-gray-400 text-sm">
            Get a fast, mobile-friendly website that represents your brand and brings in customers.
          </p>
        </div>

        {/* Project Dashboards Feature */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <SiAmazonsimpleemailservice className="text-xl text-white shrink-0" />
            <h4 className="text-lg font-medium">Email & Domain Setup</h4>
          </div>
           <hr className=' mt-2 mb-2'/>
          <p className="text-gray-400 text-sm">
            Set up professional email addresses and domains to give your business a trusted online identity.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link to="/services" className="px-6 py-3 border rounded-full border-purple-500 text-white hover:bg-purple-700 transition-all">
          Explore the Benefits
        </Link>
      </div>
    </div>
</LeftToRightAnimation>
    {/* Right Illustration */}
    <RightToLeftAnimation>
          <div className="w-full flex justify-center items-center">
      <img
        src="https://codi.bold-themes.com/demo-01/wp-content/uploads/sites/2/2023/07/hero_image_02.png"
        alt="AI Chat Illustration"
        className="w-full max-w-md sm:max-w-sm md:max-w-full h-auto object-contain"
      />
    </div>
    </RightToLeftAnimation>
  </div>
</section>






<section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6 md:px-16 overflow-hidden transition-colors duration-300">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <BottomToTopAnimation>

    {/* Left Illustration */}
    <div className="w-full flex justify-center items-center">
      <span>
      <img
        src="https://codi.bold-themes.com/demo-01/wp-content/uploads/sites/2/2023/07/illustration_01_blue.png"
        alt="AI Chat Illustration"
        className="w-full max-w-md sm:max-w-sm md:max-w-full h-auto object-contain"
      />
      </span>
      
    </div>
    </BottomToTopAnimation>

    {/* Right Content */}
    <RightToLeftAnimation>
    <div>
      <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-2">
        02 —       </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8 break-words">
        Position Your Business for Growth with IT Services
      </h2>

      <div className="flex flex-col sm:flex-row gap-8 mb-8">

        {/* Feature 1 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <SiCircle className="text-xl text-purple-600 dark:text-purple-400 shrink-0" />
            <h4 className="text-lg font-medium">Improved Functionality</h4>
          </div>
          <hr className="mt-2 mb-2 border-gray-300 dark:border-gray-700" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Maintain financial stability and avoid unexpected expenses, which can disrupt operations and impact profitability.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <FaThLarge className="text-xl text-purple-600 dark:text-purple-400 shrink-0" />
            <h4 className="text-lg font-medium">Optimized Presence</h4>
          </div>
          <hr className="mt-2 mb-2 border-gray-300 dark:border-gray-700" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Boost your digital footprint through high-performing websites, improved search visibility, and strategic social media that drive engagement and growth.
          </p>

        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="px-6 py-3 border rounded-full border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white transition-all">
          Explore the Benefits
        </button>
      </div>
    </div>
    </RightToLeftAnimation>
  </div>
</section>













{/*  */}





<HowItWorks/>



    </>
  )
}
