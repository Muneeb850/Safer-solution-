import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin indigo→rose gradient progress bar fixed to top of the page.
 * Fills as the user scrolls down.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none"
      aria-hidden
    >
      <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)' }} />
    </motion.div>
  );
}
