// // src/components/AnimatedPage.jsx
// import { motion } from "framer-motion";

// export default function AnimatedPage({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }
// src/components/AnimatedPage.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 0.98,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.1,
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
