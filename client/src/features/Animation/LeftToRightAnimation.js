import React from 'react'
import { motion } from 'framer-motion'
export default function LeftToRightAnimation({children}) {
  return (
    <>
    
    
       <motion.div
          className=""
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
            {children}
        </motion.div>
    </>
  )
}
