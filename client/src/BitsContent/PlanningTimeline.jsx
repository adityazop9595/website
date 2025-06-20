
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    year: "Step 1",
    title: "Ideation & Planning",
    description: "Understanding your needs, research, and setting the vision.",
    color: "text-green-500",
    position: "left",
  },
  {
    year: "Step 2",
    title: "Design & Prototyping",
    description: "Creating blueprints, wireframes, and visual concepts.",
    color: "text-purple-500",
    position: "right",
  },
  {
    year: "Step 3",
    title: "Development / Manufacturing",
    description: "Building the actual product with precision and quality.",
    color: "text-blue-500",
    position: "left",
  },
  {
    year: "Step 4",
    title: "Quality & Packaging",
    description: "Final testing and preparing your product for delivery.",
    color: "text-yellow-500",
    position: "right",
  },
  {
    year: "Step 5",
    title: "Shipping & Tracking",
    description: "We ship it with real-time tracking and updates.",
    color: "text-orange-500",
    position: "left",
  },
  {
    year: "Step 6",
    title: "✅ Final Product Delivered",
    description: "Your product arrives ready to use, beautifully packaged.",
    color: "text-cyan-500",
    position: "right",
  },
];

export default function PlanningTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
          Our Story
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Process from Vision to Delivery
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          A timeline overview of how we planned, structured, and executed our company foundation.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-300"></div>

        <div className="space-y-14">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                item.position === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="z-10 w-6 h-6 rounded-full bg-white border-4 border-gray-300 shadow absolute left-1/2 transform -translate-x-1/2"></div>

              {/* Card with Step */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div
                  className={`w-full md:pr-8 md:pl-8 text-center ${
                    item.position === "left" ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <p className={`text-lg font-bold ${item.color}`}>{item.year}</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 max-w-md mx-auto">
                  <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
