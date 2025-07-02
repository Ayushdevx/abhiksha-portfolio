"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ModernLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-black to-cyan-900 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            AB
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Abhiksha Bakshi
        </motion.h2>

        <motion.p
          className="text-purple-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Electronics Engineer • VLSI Specialist
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="text-gray-400 mt-4 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Portfolio... {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};
