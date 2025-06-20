import React from 'react';
import { ServicesList } from '../js/ServiceList';
import { easeInOut, motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <>
      <section className="service-section py-12">
        <div className="max-container px-4">
          {/* Heading Section */}
          <motion.div
            className="head-group text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h5 className="text-sm font-semibold text-primary uppercase mb-2">
              OUR SERVICES
            </h5>
            <div className="head-text">
              <h2 className="heading-title text-3xl md:text-4xl font-bold mb-4">
                Our Digital Services to <br /> build Your Brand
              </h2>
            </div>
            <div className="para-text-con text-center text-gray-600 text-base md:text-lg">
              <p>
                Ne summo dictas pertinacia nam. Illum cetero vocent ei vim,{' '}
                <br className="hidden md:block" />
                case regione signiferumque vim te.
              </p>
            </div>
          </motion.div>

          {/* Cards Section with Animations */}
          <motion.div
            className="max-w-[1140px] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full items-center justify-center mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ServicesList.map((element, index) => {
              const { title, discription, icon, startcolor, endcolor } = element;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="card-wrapper 
                    rounded-2xl md:rounded-full 
                    p-4 sm:p-6 md:p-8 
                    w-full max-w-md md:max-w-lg 
                    mx-auto transition-transform hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${startcolor} 0%, ${endcolor} 100%)`,
                  }}
                >
                  <div className="card flex flex-col md:flex-row items-start">
                    {/* Icon Section */}
                    <div className="icon mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                      <img
                        src={icon}
                        alt="Service Icon"
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="details-con">
                      <h2 className="title text-lg sm:text-xl font-semibold font-Inter mb-2">
                        {title}
                      </h2>
                      <p className="text-gray-700 text-base sm:text-lg">{discription}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}




