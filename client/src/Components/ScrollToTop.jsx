import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
const[Visible,setVisible]=useState(false)

function listenScroll() {
  // console.log("ScrollY:", window.scrollY);
  window.scrollY > 500 ? setVisible(true) : setVisible(false)
}

useEffect(() => {
  window.addEventListener('scroll', listenScroll);

  // Cleanup when the component unmounts
  return () => {
    window.removeEventListener('scroll', listenScroll);
  };
}, []);
    function scrolltotop(){
        window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
    <>

    {Visible && 
    <div className="p-2.5 bg-blue-500 rounded-full inline-block fixed bottom-[5%] right-5" onClick={scrolltotop}>
  <FaArrowUp className="text-3xl text-white" />
</div>
}
    </>
  )
}

