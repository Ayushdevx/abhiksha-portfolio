"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bars3Icon, 
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const ModernNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["about-me", "skills", "projects"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadCV = () => {
    // Create a download link for CV
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You'll need to add your CV to public folder
    link.download = 'Abhiksha_Bakshi_CV.pdf';
    link.click();
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black/20 backdrop-blur-xl border-b border-purple-500/10 shadow-2xl shadow-purple-500/5" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="#" className="flex items-center space-x-3">
                <div className="relative group">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/25"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    AB
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-xl opacity-20 blur-lg"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="hidden sm:block">
                  <motion.span 
                    className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Abhiksha Bakshi
                  </motion.span>
                  <motion.p 
                    className="text-purple-400 text-xs sm:text-sm font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Electronics Engineer
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-white/5 backdrop-blur-xl rounded-full px-8 py-3 border border-white/10">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.link}
                    className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      activeSection === link.link.substring(1)
                        ? "text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <motion.button
                onClick={downloadCV}
                className="hidden lg:flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 text-white rounded-full text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowDownTrayIcon className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.button>

              <motion.a
                href="mailto:abhiksha.bakshi2024@vitstudent.ac.in"
                className="p-2 sm:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>

              <motion.a
                href="tel:+919619796620"
                className="p-2 sm:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="sm:hidden p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
            <motion.div
              className="relative bg-black/30 backdrop-blur-2xl border-r border-purple-500/10 w-full sm:w-80 h-full p-4 sm:p-6 shadow-2xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="space-y-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.link}
                      className="block px-4 py-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-white/10">
                  <motion.button
                    onClick={() => {
                      downloadCV();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.button>
                </div>

                <div className="flex space-x-4 pt-4">
                  {SOCIALS.map(({ link, name, icon: Icon }) => (
                    <motion.a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
