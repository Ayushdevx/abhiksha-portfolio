"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  AcademicCapIcon, 
  MapPinIcon, 
  CalendarIcon,
  SparklesIcon,
  TrophyIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

import { slideInFromLeft, slideInFromRight, staggerContainer } from "@/lib/motion";

export const ModernAbout = () => {
  const achievements = [
    { icon: AcademicCapIcon, title: "VLSI Specialization", desc: "Advanced semiconductor design" },
    { icon: TrophyIcon, title: "Academic Excellence", desc: "Top performer in electronics" },
    { icon: RocketLaunchIcon, title: "Innovation Focus", desc: "Cutting-edge solutions" },
  ];

  const stats = [
    { number: "2028", label: "Expected Graduation" },
    { number: "3.8+", label: "GPA Achievement" },
    { number: "15+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
  ];

  return (
    <section id="about-me" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          variants={slideInFromLeft(0.2)}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full mb-6">
            <SparklesIcon className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Electronics Engineer with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              VLSI Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about designing next-generation electronic systems and pushing the boundaries of semiconductor technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <motion.div
            variants={slideInFromLeft(0.4)}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <div className="relative">
                  <motion.div
                    className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/abhiksha-profile.jpg"
                      alt="Abhiksha Bakshi"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent" />
                  </motion.div>
                  
                  {/* Floating Status */}
                  <motion.div
                    className="absolute top-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                </div>

                {/* Quick Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <AcademicCapIcon className="w-5 h-5 text-purple-400" />
                    <span>BTech Electronics Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <SparklesIcon className="w-5 h-5 text-cyan-400" />
                    <span>VLSI Specialization</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-5 h-5 text-green-400" />
                    <span>VIT Chennai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <CalendarIcon className="w-5 h-5 text-yellow-400" />
                    <span>Graduating 2028</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={slideInFromRight(0.4)}
            className="space-y-8"
          >
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As an Electronics Engineering student specializing in VLSI at VIT Chennai, 
                  I&apos;m passionate about the intersection of hardware and innovation. My journey 
                  began with curiosity about how electronic devices work at the most fundamental level.
                </p>
                <p>
                  Today, I focus on designing efficient semiconductor solutions and exploring 
                  cutting-edge technologies like IoT, embedded systems, and digital signal processing. 
                  My goal is to contribute to the next generation of electronic innovations.
                </p>
                <p>
                  When I&apos;m not designing circuits or coding, you&apos;ll find me exploring new 
                  technologies, working on personal projects, or collaborating with fellow 
                  engineers to solve real-world problems.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Key Highlights</h4>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <achievement.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{achievement.title}</h5>
                      <p className="text-sm text-gray-400">{achievement.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-bold text-white mb-2">Let&apos;s Connect!</h4>
              <p className="text-gray-300 mb-4">
                Interested in collaborating or discussing electronics engineering? 
                I&apos;d love to hear from you!
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="mailto:abhiksha.bakshi2024@vitstudent.ac.in"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abhikshabakshi2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
