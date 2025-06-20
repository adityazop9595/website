





import React, { useState, lazy, Suspense } from "react";
import rocketImg from "../assets/about-rocket.png";
import yoga from "../assets/home-yoga-abstract-img.png";
import Titleanimate from "../features/Animation/TitleAnimation";
import { motion } from "framer-motion";
import LeftToRightAnimation from "../features/Animation/LeftToRightAnimation";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import WhichPageSection from "../Components/WhichPageSection";

const PlanningTimeline = lazy(() => import("../BitsContent/PlanningTimeline"));
const PricingSection = lazy(() => import("../BitsContent/PricingSection"));
const FAQPage = lazy(() => import("../BitsContent/FAQ"));

export default function About() {
  const [activeTab, setActiveTab] = useState("Story");
  const { ref: lazyRef, inView: showLazyComponents } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const tabContent = {
    Story: `Fushion Tech was born from a simple idea: to fuse creativity with technology and help businesses thrive in the digital era. What started as a small team of passionate developers and designers has grown into a full-fledged IT solutions partner, committed to building meaningful digital experiences. We’ve helped startups scale, brands connect, and ideas turn into impactful platforms — all through strategy, code, and design.`,
    Mission: `To empower businesses with smart, scalable, and beautifully crafted digital solutions. We aim to simplify technology and make it work for our clients — whether through websites, applications, or IT infrastructure — by staying innovative, agile, and always aligned with their goals.`,
    Vision: `To become a trusted global technology partner for startups and enterprises alike — known not just for what we build, but how we think. We envision a digital future where every business, regardless of size, has access to world-class technology that drives real growth and lasting impact.`,
  };

  const tabs = ["Story", "Mission", "Vision"];

  return (
    <>
    <WhichPageSection/>
    

      {/* Boost Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[50vh]">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Boosts Your Website Traffic!
            </h2>
            <p className="text-lg text-gray-600 mb-6">Boost your website traffic with proven SEO strategies, optimized content, and faster load times. We help your brand reach more people, rank higher on search engines, and turn clicks into loyal customers.</p>
            {/* <p className="text-gray-500 mb-6">Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.</p> */}
            <Link to="/services" className="px-6 py-3 rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white transition">
              Discover More
            </Link>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true  }}
          >
            <div className="absolute -z-10 rounded-full w-56 h-56 bg-lime-100 top-0 left-1/2 transform -translate-x-1/2 md:-translate-x-1/3 md:top-1/4 blur-xl"></div>
            <img src={rocketImg} alt="Rocket illustration" className="w-full max-w-md mx-auto" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Tabs + Info */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="w-full"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true ,amount:0.5}}
          >
            <img
              src="https://demo.htmlcodex.com/2639/financial-services-website-template/img/about.jpg"
              alt="Two men on calling"
              className="rounded-xl shadow-md w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
              About Us
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              We Help Our Clients To <br />
              <span className="text-blue-800">Grow Their Business</span>
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            </p>
            <div className="w-full bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-sm font-medium px-3 py-3 transition-all duration-200 text-center ${
                      activeTab === tab ? "bg-white text-blue-700 border-b-2 border-blue-700" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-5 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {tabContent[activeTab]}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
  className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 px-4 sm:px-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {[
    {
      title: "No Hidden Cost",
      icon: "💰",
      desc: "We believe in transparent pricing. No surprises or extra fees — ever.",
      borderColor: "from-green-400 to-lime-400",
    },
    {
      title: "Dedicated Team",
      icon: "🧑‍💻",
      desc: "Get a consistent team that understands your business goals deeply.",
      borderColor: "from-indigo-500 to-purple-500",
    },
    {
      title: "24/7 Available",
      icon: "📞",
      desc: "Our experts are ready to support you day or night, every day.",
      borderColor: "from-pink-500 to-red-500",
    },
  ].map(({ title, icon, desc, borderColor }, idx) => (
    <div
      key={idx}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border border-transparent shadow-lg hover:shadow-xl transition duration-300 relative group`}
    >
      {/* Gradient Accent Ring */}
      <div
        className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br ${borderColor} flex items-center justify-center text-white text-2xl shadow-md`}
      >
        {icon}
      </div>

      <div className="pl-16">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
      </div>
    </div>
  ))}
</motion.div>

      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <LeftToRightAnimation>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-200 rounded-full z-0 blur-xl"></div>
                <img src={yoga} alt="Illustration" className="relative z-10 max-w-full" loading="lazy" />
              </div>
            </LeftToRightAnimation>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-sm font-semibold text-indigo-800">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Save Time & Effort <br />With the Fushion Tech.
            </h2>
            <p className="text-gray-600 text-lg">
              Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui muva.
            </p>
            <div className="space-y-5">
              {["For startups and growing businesses...",
                "Your digital consultant will also...",
                "Lorem ipsum dolor sit amet..."].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`w-6 p-3.5 h-6 rounded-full flex items-center justify-center text-white ${idx === 0 ? "bg-teal-400" : idx === 1 ? "bg-purple-500" : "bg-red-400"}`}>
                    ✓
                  </div>
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lazy-loaded components below fold */}
      <div ref={lazyRef}>
        {showLazyComponents && (
          <Suspense fallback={<div className="text-center py-10">Loading more content...</div>}>
            <PlanningTimeline />
           
          </Suspense>
        )}
      </div>
    </>
  );
}
