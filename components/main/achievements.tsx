"use client";

import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  TrophyIcon, 
  CodeBracketIcon, 
  UserGroupIcon,
  SparklesIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const achievements = [
  {
    icon: AcademicCapIcon,
    title: "Academic Excellence",
    description: "Maintaining high GPA in Electronics Engineering with VLSI specialization",
    metric: "8.5+",
    label: "CGPA",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: CodeBracketIcon,
    title: "Projects Completed",
    description: "Successfully designed and implemented various electronics projects",
    metric: "12+",
    label: "Projects",
    color: "from-cyan-500 to-green-500"
  },
  {
    icon: TrophyIcon,
    title: "Technical Skills",
    description: "Proficient in multiple VLSI design tools and programming languages",
    metric: "15+",
    label: "Technologies",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: UserGroupIcon,
    title: "Collaborations",
    description: "Active participation in team projects and knowledge sharing",
    metric: "25+",
    label: "Connections",
    color: "from-yellow-500 to-orange-500"
  }
];

const highlights = [
  {
    icon: SparklesIcon,
    text: "VLSI Design Specialization"
  },
  {
    icon: RocketLaunchIcon,
    text: "Innovation in Electronics"
  },
  {
    icon: CodeBracketIcon,
    text: "Circuit Design Excellence"
  }
];

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20 relative min-h-screen"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mb-4">
          Achievements & Impact
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          A journey of continuous learning, innovation, and excellence in electronics engineering
        </p>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 mb-16"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.text}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
          >
            <highlight.icon className="h-5 w-5 text-purple-400" />
            <span className="text-white font-medium">{highlight.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements Grid */}
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 text-center h-full group/card overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300`} />
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-1 group-hover:scale-110 transition-transform duration-300">
                    {achievement.metric}
                  </div>
                  <div className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                    {achievement.label}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-300 mb-6 text-lg">
          Passionate about pushing the boundaries of what&apos;s possible in electronics
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border-2 border-purple-500/50 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
};
