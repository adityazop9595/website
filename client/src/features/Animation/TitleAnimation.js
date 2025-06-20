import { motion } from 'framer-motion'

export default function Titleanimate({ children }) {
  return (
    <>
      <style>{`
        .title-popup {
          animation: popup 2.4s ease-in-out infinite;
          will-change: transform;
        }

        .title-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 2.2s linear infinite;
          pointer-events: none;
        }

        @keyframes popup {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        @keyframes shine {
          0% { left: -100%; }
          60% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>

      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
          delay: 0.15,
        }}
        className="relative inline-block text-4xl md:text-5xl font-bold text-gray-800 dark:text-white overflow-hidden title-popup title-shine"
      >
        {children}
      </motion.span>
    </>
  )
}
