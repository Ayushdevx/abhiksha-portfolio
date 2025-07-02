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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/10" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="#" className="flex items-center space-x-3">
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    AB
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="hidden md:block">
                  <motion.span 
                    className="text-white font-semibold text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Abhiksha Bakshi
                  </motion.span>
                  <motion.p 
                    className="text-purple-400 text-xs"
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
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.link}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === link.link.substring(1)
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.title}
                    {activeSection === link.link.substring(1) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={downloadCV}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>

              <motion.a
                href="mailto:abhiksha.bakshi2024@vitstudent.ac.in"
                className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <EnvelopeIcon className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="tel:+919619796620"
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <PhoneIcon className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
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
              className="relative bg-gray-900/95 backdrop-blur-lg border-r border-purple-500/20 w-80 h-full p-6"
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

                <div className="pt-6 border-t border-gray-700">
                  <motion.button
                    onClick={() => {
                      downloadCV();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium"
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
                      className="p-3 bg-gray-800 rounded-lg text-purple-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
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
