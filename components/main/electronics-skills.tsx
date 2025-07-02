"use client";

import { motion } from "framer-motion";
import { ELECTRONICS_SKILLS } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const ElectronicsSkills = () => {
  const skillCategories = [
    { name: "Core Electronics", color: "from-purple-500 to-purple-700" },
    { name: "Programming", color: "from-cyan-500 to-cyan-700" },
    { name: "Hardware", color: "from-pink-500 to-pink-700" },
    { name: "Systems", color: "from-green-500 to-green-700" },
  ];

  return (
    <section id="skills" className="flex flex-col items-center justify-center py-20">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Technical Skills
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          My expertise spans across various domains of electronics engineering, 
          from low-level hardware design to high-level system integration.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl px-10">
        {skillCategories.map((category, categoryIndex) => {
          const categorySkills = ELECTRONICS_SKILLS.filter(
            skill => skill.category === category.name
          );

          return (
            <motion.div
              key={category.name}
              variants={slideInFromLeft(0.5 + categoryIndex * 0.1)}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <h3 className={`text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.skill_name}
                    variants={slideInFromRight(0.5 + index * 0.1)}
                    initial="hidden"
                    animate="visible"
                    className="group relative bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {skill.skill_name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {skill.description}
                      </p>
                    </div>

                    {/* Animated background effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional section for tools and software */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="mt-16 w-full max-w-6xl px-10"
      >
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-center">
          Tools & Software
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "Cadence", "Mentor Graphics", "Xilinx Vivado", "Altium Designer", 
            "MATLAB", "LTSpice", "KiCad", "ModelSim", "Quartus Prime", 
            "Eagle PCB", "Proteus", "Arduino IDE"
          ].map((tool, index) => (
            <motion.div
              key={tool}
              variants={slideInFromLeft(0.5 + index * 0.05)}
              initial="hidden"
              animate="visible"
              className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-white text-sm font-medium">{tool}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
