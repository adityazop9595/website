// import React, { useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { MenuList } from '../js/MenuList'





// export default function Navbar() {
//   let navRef=useRef();
//   useEffect(() => {
//     const handleScroll = () => {
//       // console.log(window.scrollY)
//       let scroll=window.scrollY;
//       scroll>100? navRef.current.classList.add('sticky') :navRef.current.classList.remove('sticky')
        




//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>
//     <div ref={navRef} className='navbar flex items-center w-full py-3.5 justify-center'>
//       <div className='menu w-full flex items-center justify-between xl-1800:w-[1500px]'>
//         <div className='logo text-2xl font-bubble ml-5'>
//           <span className='text-cyan-500'>Fusion.</span>
//           <span className='text-purple-400'>tech.</span>
//         </div>
//         <div className='menu-list mr-5 flex items-center'>
//           <ul>
//             {MenuList.map((element)=>{
//               let {name,path}=element;
//               return( 
//                 <li className='inline-block'><Link to={path} className='font-Poppins text-[16px] text-black flex py-2 px-4'>{name}</Link></li>
//               )
//             })}
//           </ul>
//           <Link to="/" className='flex px-3.5 py-[10px] rounded-full border border-black font-Inter text-black text-[12px]'>GET IN TOUCH</Link>
//         </div>
//       </div>
//     </div>
    
    
//     </>
//   )
// }
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MenuList } from "../js/MenuList";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import WhatsappDmButton from "./WhatsappDmButton";
import Logo from "./Logo";

export default function Navbar() {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      scroll > 100
        ? navRef.current.classList.add("sticky", "top-0", "bg-white", "shadow-md")
        : navRef.current.classList.remove("sticky", "top-0", "bg-white", "shadow-md");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className="navbar z-50 w-full py-4 transition-all duration-300 ease-in-out"
      >
        <div className="max-w-7xl mx-auto max-xl:px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="logo text-3xl font-Alfa-Slab-One ">
            <Logo/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4">
              {MenuList.map(({ name, path }, i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="font-Poppins text-[16px] text-gray-800 hover:text-purple-600 transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          <WhatsappDmButton/>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <HiX className="text-3xl text-gray-800" />
              ) : (
                <HiOutlineMenu className="text-3xl text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4">
            {MenuList.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-purple-600 font-medium text-base"
              >
                {name}
              </Link>
            ))}
         <WhatsappDmButton/>
          </div>
        )}
      </div>
    </>
  );
}
