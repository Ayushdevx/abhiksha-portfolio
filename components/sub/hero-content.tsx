"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { ParticleBackground } from "@/components/effects/particle-background";
import { TypingEffect } from "@/components/effects/typing-effect";
import { ScrollIndicator } from "@/components/effects/scroll-indicator";

export const HeroContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "innovative solutions",
    "cutting-edge designs", 
    "smart electronics",
    "VLSI circuits"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    });
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-20 w-full z-[20] relative h-screen gap-8 lg:gap-16"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Interactive gradient overlay - Fixed positioning */}
      <div 
        className="fixed inset-0 pointer-events-none -z-5"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
                      rgba(139, 92, 246, 0.1) 0%, 
                      rgba(6, 182, 212, 0.05) 50%, 
                      transparent 70%)`
        }}
      />

      {/* Floating geometric shapes - Fixed positioning - Hidden on mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5 hidden lg:block">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div className={`w-${3 + (i % 3)} h-${3 + (i % 3)} ${i % 2 === 0 ? 'bg-purple-500/20' : 'bg-cyan-500/20'} ${i % 3 === 0 ? 'rounded-full' : 'rotate-45'}`} />
          </motion.div>
        ))}
      </div>

      <div className="h-auto lg:h-full w-full lg:w-1/2 flex flex-col gap-3 lg:gap-5 justify-center text-center lg:text-start relative z-10 max-w-4xl order-2 lg:order-1">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] backdrop-blur-sm relative overflow-hidden group cursor-pointer mx-auto lg:mx-0 w-fit"
          whileHover={{ scale: 1.05, borderColor: "#7042f8" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            animate={isHovered ? { opacity: [0.3, 0.6, 0.3] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          <div className="relative z-10 flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            </motion.div>
            <h1 className="Welcome-text text-[13px] font-medium">
              Electronics Engineer Portfolio
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 lg:gap-6 mt-4 lg:mt-6 text-2xl sm:text-3xl lg:text-6xl font-bold text-white max-w-full lg:max-w-[600px] w-auto h-auto relative"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
          }}
        >
          <motion.span className="relative">
            Creating{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 relative inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              <TypingEffect
                texts={rotatingTexts}
                speed={150}
                deleteSpeed={100}
                delayBetween={2000}
                className="font-bold"
              />
              
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.span>{" "}
            in electronics and VLSI.
            
            {/* Floating tech icons - Hidden on mobile for cleaner layout */}
            <div className="hidden lg:block">
              <motion.div
                className="absolute -right-20 top-5 text-2xl"
                animate={floatingAnimation}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute -right-10 -top-5 text-xl"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              >
                🔬
              </motion.div>
              <motion.div
                className="absolute -left-10 top-10 text-lg"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
              >
                💡
              </motion.div>
            </div>
          </motion.span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-400 my-3 lg:my-5 max-w-full lg:max-w-[600px] leading-relaxed relative px-2 lg:px-0"
          whileHover={{ scale: 1.02 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ color: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            I&apos;m an Electronics Engineer specializing in VLSI from VIT Chennai.
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{ color: "#06b6d4" }}
            transition={{ duration: 0.3 }}
          >
            Passionate about designing cutting-edge electronic systems and exploring 
            the latest in semiconductor technology.
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{ color: "#10b981" }}
            transition={{ duration: 0.3 }}
          >
            Check out my projects and skills.
          </motion.span>
          
          {/* Animated cursor */}
          <motion.span
            className="inline-block w-0.5 h-6 bg-purple-500 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.p>

        <motion.button
          variants={slideInFromLeft(1)}
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] relative overflow-hidden group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 mx-auto lg:mx-0 text-sm sm:text-base"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
            initial={false}
            animate={{ x: [-100, 200] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <span className="relative z-10 font-semibold">Learn More</span>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white rounded-lg opacity-0"
            whileTap={{ 
              scale: [0, 1],
              opacity: [0.3, 0]
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center relative order-1 lg:order-2"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePosition.y * 3}deg) rotateY(${-mousePosition.x * 3}deg)`
        }}
      >
        <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-md">
          {/* Animated rings around profile - Mobile responsive */}
          <motion.div
            className="absolute rounded-full border-2 border-purple-500/30 z-0"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ 
              width: "100%", 
              height: "0",
              paddingBottom: "100%",
              top: "10%", 
              left: "10%", 
              right: "10%",
              bottom: "10%"
            }}
          />
          <motion.div
            className="absolute rounded-full border border-cyan-500/20 z-0"
            animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ 
              width: "110%", 
              height: "0",
              paddingBottom: "110%",
              top: "5%", 
              left: "5%", 
              right: "5%",
              bottom: "5%"
            }}
          />
          
          {/* Enhanced Profile Picture - Mobile responsive */}
          <motion.div 
            className="relative w-full aspect-square z-10 group-hover:z-20 mx-auto"
            whileHover={{ scale: 1.1, rotateY: 15 }}
            animate={pulseAnimation}
            style={{ maxWidth: "200px" }}
          >
            <motion.div 
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl group-hover:border-cyan-400 transition-all duration-500"
              style={{
                boxShadow: `0 0 30px rgba(139, 92, 246, 0.5), 
                           0 0 60px rgba(139, 92, 246, 0.3),
                           inset 0 0 20px rgba(139, 92, 246, 0.1)`
              }}
              whileHover={{
                boxShadow: `0 0 40px rgba(6, 182, 212, 0.6), 
                           0 0 80px rgba(6, 182, 212, 0.4),
                           inset 0 0 30px rgba(6, 182, 212, 0.2)`
              }}
            >
              <Image
                src="/abhiksha-profile.jpg"
                alt="Abhiksha Bakshi"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
              
              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            
            {/* Floating name tag */}
            <motion.div
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              <span className="text-white text-sm font-medium">Abhiksha Bakshi</span>
            </motion.div>
          </motion.div>
          
          {/* Interactive Background SVG - Mobile responsive */}
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src="/hero-bg.svg"
              alt="work icons"
              fill
              draggable={false}
              className="select-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 object-contain"
            />
          </motion.div>
          
          {/* Animated tech symbols floating around - Hidden on mobile for better performance */}
          <div className="hidden lg:block">
            {[
              { symbol: "⚡", delay: 0, radius: 120 },
              { symbol: "🔬", delay: 1, radius: 140 },
              { symbol: "💻", delay: 2, radius: 100 },
              { symbol: "🔧", delay: 3, radius: 160 },
              { symbol: "⚙️", delay: 4, radius: 130 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute text-2xl opacity-60 group-hover:opacity-100 pointer-events-none"
                animate={{
                  rotate: 360,
                  x: Math.cos(index * 72 * Math.PI / 180) * item.radius,
                  y: Math.sin(index * 72 * Math.PI / 180) * item.radius,
                }}
                transition={{
                  duration: 10 + item.delay,
                  repeat: Infinity,
                  ease: "linear",
                  delay: item.delay
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "center"
                }}
              >
                {item.symbol}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </motion.div>
  );
};
