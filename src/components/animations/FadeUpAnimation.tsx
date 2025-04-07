// components/AnimatedComponent.jsx

'use client';
import { motion } from 'framer-motion';

export const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const FadeUpAnimation = ({ children }) => (
  <motion.div animate="animate" initial="initial" variants={fadeUpVariant}>
    {children}
  </motion.div>
);

export default FadeUpAnimation;
