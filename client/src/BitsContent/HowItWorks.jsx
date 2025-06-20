import React from "react";
import { FaSearch, FaMoneyBillWave, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import BottomToTopAnimation from "../features/Animation/BottomToUp";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-blue-500" />,
    title: "Choose a Service",
    desc: "Explore services that meet your goals and business needs.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-yellow-400" />,
    title: "Select a Plan",
    desc: "Pick a pricing plan that fits your budget and requirements.",
  },
  {
    icon: <FaWhatsapp className="text-3xl text-green-500" />,
    title: "Chat on WhatsApp",
    desc: "Directly message us on WhatsApp to confirm your service.",
  },
];
export default function HowItWorks() {
  return (
      <section className="bg-white py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <BottomToTopAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          A Step-by-Step Guide to Our Platform
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Explore our platform with ease! Sign up, select your industry, and seamlessly integrate our tailored solutions.
        </p>

        {/* Stepper Container */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-center md:gap-16 gap-14">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative max-w-xs mx-auto">
              {/* Step Circle */}
              <div className="relative z-10">
                <div className=" h-16 w-16 rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-blue-700 mt-2">
                  Step {idx + 1}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-4">
                
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>

              {/* Line (horizontal for desktop, vertical for mobile) */}
              {idx < steps.length - 1 && (
                <>
                  {/* Vertical line for mobile */}
                  <div className="md:hidden w-1 h-10 bg-gray-300 mt-4 mb-2"></div>

                  {/* Horizontal dashed line for desktop */}
                  <div className="hidden md:block absolute top-[40%] right-[-8rem] w-[8rem] h-[1px] border-t border-dashed border-gray-300"></div>
                </>
              )}
            </div>
          ))}
        </div>
    </BottomToTopAnimation>
      </div>
    </section>
  );
}
