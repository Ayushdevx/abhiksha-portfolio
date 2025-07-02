"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const ScrollIndicator = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      onClick={scrollToNext}
    >
      <motion.div
        className="flex flex-col items-center space-y-2 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
          Scroll Down
        </span>
        <motion.div
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-purple-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2 group-hover:bg-purple-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-white/50 group-hover:text-purple-400 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
