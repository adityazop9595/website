import React, { Suspense, useEffect,lazy } from 'react'
// const PricingSection = lazy(() => import("../BitsContent/PricingSection"));
const FAQPage = lazy(() => import("./BitsContent/FAQ"));

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './Pages/About'
import ServicesPage from './Pages/ServicesPage'
import PageWrapper from './features/Animation/PageWrapper'
import NotFound from './Pages/NotFound'
import Contact from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTop'
import PricingSection from './BitsContent/PricingSection'
import PricingPage from './Pages/PricingPage'


export default function App() {
  let location=useLocation();
  // let a=window.scrollY;
  useEffect(()=>{
    window.scroll({left:0,top:0,behavior:'smooth'})
  },[location.pathname])
  return (
<>

<Navbar />


    {/* <AnimatePresence mode="wait"> */}
        <Routes location={location} key={location.pathname}>
          <Route element={<PageWrapper/>}>

        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/services'element={<ServicesPage/>}/>
        <Route path='/services/pricing'element={<PricingSection/>}/>
       
        <Route path='/contact'element={<Contact/>}/>


        
<Route path="/pricing" element={<PricingPage />} />
<Route path='*'element={<NotFound/>}/>
      </Route>
    </Routes>
   <Suspense fallback={<div className="text-center py-10">Loading ...</div>}>

    <FAQPage/>
   </Suspense>
    
<ScrollToTop/>

<Footer/>
</>
  )
}
