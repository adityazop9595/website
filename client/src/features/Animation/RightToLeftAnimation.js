import React from 'react'
import { motion } from 'framer-motion'
export default function RightToLeftAnimation({children}) {
  return (
    <>
    
         <motion.div
              className=" relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
                {children}
            </motion.div>
    </>
  )
}
