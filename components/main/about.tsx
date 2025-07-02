"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center px-20 mt-40 mb-40 z-[20]">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl"
      >
        {/* Profile Image */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
            <Image
              src="/abhiksha-profile.jpg"
              alt="Abhiksha Bakshi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Abhiksha Bakshi</h3>
            <p className="text-purple-400 text-lg">Electronics Engineer</p>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a passionate Electronics Engineering student specializing in VLSI design 
                at VIT Chennai. My journey in electronics has been driven by a deep fascination 
                with semiconductor technology and digital circuit design.
              </p>
              
              <p>
                Currently pursuing my BTech degree, I focus on cutting-edge areas like Very 
                Large Scale Integration (VLSI), embedded systems, and digital signal processing. 
                I am committed to contributing to the advancement of electronics technology 
                through innovative solutions and research.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Education</h3>
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/30">
                <h4 className="text-xl font-bold text-white mb-2">
                  Bachelor of Technology - Electronics Engineering
                </h4>
                <p className="text-purple-400 mb-2">VLSI Specialization</p>
                <p className="text-gray-400">VIT Chennai</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 abhiksha.bakshi2024@vitstudent.ac.in</p>
                <p>📱 +91 9619796620</p>
                <p>🎓 Electronics Engineering with VLSI Specialization</p>
                <p>🏫 VIT Chennai</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
