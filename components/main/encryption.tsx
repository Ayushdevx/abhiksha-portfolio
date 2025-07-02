"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheckIcon, CpuChipIcon, WrenchScrewdriverIcon, BoltIcon } from "@heroicons/react/24/outline";

import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Encryption = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "VLSI Design",
      description: "Advanced chip design and verification techniques",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Circuit Design",
      description: "Innovative electronic circuit solutions",
      color: "from-cyan-500 to-green-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Systems",
      description: "Hardware security and protection mechanisms",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: BoltIcon,
      title: "High Performance",
      description: "Optimized for speed and efficiency",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full py-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-[#030014]/30 to-[#030014]/50" />
      </div>

      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute bottom-20 right-60 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      {/* Main Title */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        className="text-center mb-16 z-10"
      >
        <h2 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mb-4">
          Innovation
          <span className="text-white"> & </span>
          Excellence
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Combining cutting-edge technology with secure, high-performance solutions in electronics and VLSI design
        </p>
      </motion.div>

      {/* Central Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-16 z-10"
      >
        <div className="relative flex flex-col items-center group cursor-pointer">
          {/* Animated rings */}
          <div className="absolute inset-0 -z-10">
            <div className="w-40 h-40 border border-purple-500/30 rounded-full animate-ping" />
            <div className="absolute inset-4 border border-cyan-500/20 rounded-full animate-ping delay-1000" />
            <div className="absolute inset-8 border border-pink-500/10 rounded-full animate-ping delay-2000" />
          </div>

          {/* Central Lock Animation */}
          <div className="relative">
            <Image
              src="/lock-top.png"
              alt="Innovation top"
              width={60}
              height={60}
              className="translate-y-6 transition-all duration-300 group-hover:translate-y-12 drop-shadow-lg"
            />
            <Image
              src="/lock-main.png"
              alt="Innovation core"
              width={80}
              height={80}
              className="z-10 drop-shadow-lg"
            />
          </div>

          {/* Enhanced label */}
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-lg px-6 py-2 mt-6">
            <span className="text-white font-semibold text-sm tracking-wider">
              SECURE • INNOVATIVE • EFFICIENT
            </span>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="w-full max-w-6xl px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[rgba(3,0,20,0.6)] to-[rgba(3,0,20,0.3)] backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-xl p-6 hover:border-[rgba(112,66,248,0.6)] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center z-10"
      >
        <p className="text-gray-300 text-lg italic max-w-2xl mx-auto">
          "Engineering the future with secure, innovative solutions that bridge the gap between 
          theoretical knowledge and practical excellence."
        </p>
      </motion.div>
    </div>
  );
};
