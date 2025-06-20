import React from 'react'
import { motion } from 'framer-motion'

export default function BottomToTopAnimation({ children }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
