"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  HeartIcon, 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ArrowUpIcon 
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaInstagram, FaPinterest, FaGithub } from "react-icons/fa";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/abhiksha-bakshi",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaGithub,
      href: "https://github.com/abhiksha-bakshi",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/abhiksha_bakshi",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: FaPinterest,
      href: "https://pinterest.com/abhiksha_bakshi",
      label: "Pinterest",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-t from-[#030014] via-[#030014]/95 to-transparent border-t border-[rgba(112,66,248,0.3)]">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              Abhiksha Bakshi
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Electronics Engineering student specializing in VLSI design, passionate about 
              creating innovative solutions that bridge theoretical knowledge with practical applications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <MapPinIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm">VIT Chennai, Tamil Nadu, India</span>
              </div>
              <a 
                href="mailto:abhiksha.bakshi2024@vitstudent.ac.in"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <EnvelopeIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm">abhiksha.bakshi2024@vitstudent.ac.in</span>
              </a>
              <a 
                href="tel:+919619796620"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <PhoneIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm">+91 9619796620</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-300 ${social.color} transition-all duration-300 group`}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[rgba(112,66,248,0.3)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span>&copy; {new Date().getFullYear()} Abhiksha Bakshi.</span>
            <span>Made with</span>
            <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and passion for electronics</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-lg px-4 py-2 text-gray-300 hover:text-white hover:border-[rgba(112,66,248,0.6)] transition-all duration-300"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUpIcon className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500" />
    </footer>
  );
};
