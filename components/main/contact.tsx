"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaInstagram, FaPinterest, FaGithub } from "react-icons/fa";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Contact = () => {
  const contactItems = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "abhiksha.bakshi2024@vitstudent.ac.in",
      href: "mailto:abhiksha.bakshi2024@vitstudent.ac.in",
      color: "text-purple-400"
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+91 9619796620",
      href: "tel:+919619796620",
      color: "text-cyan-400"
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "VIT Chennai, Tamil Nadu",
      href: null,
      color: "text-pink-400"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/abhiksha-bakshi",
      label: "LinkedIn",
      color: "hover:text-blue-400"
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
    },
    {
      icon: FaGithub,
      href: "https://github.com/abhiksha-bakshi",
      label: "GitHub",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 relative min-h-screen"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mb-4">
          Let's Connect
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to collaborate on exciting electronics and VLSI projects? Let's build something amazing together!
        </p>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 px-6">
        {/* Contact Cards */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
            Contact Information
          </h2>
          
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-r from-[rgba(3,0,20,0.5)] to-[rgba(3,0,20,0.3)] backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-xl p-6 hover:border-[rgba(112,66,248,0.6)] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium flex items-center gap-2"
                      >
                        {item.value}
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    ) : (
                      <p className="text-white text-lg font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`p-3 bg-gradient-to-br from-[rgba(3,0,20,0.5)] to-[rgba(3,0,20,0.3)] backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:border-[rgba(112,66,248,0.6)] hover:shadow-lg hover:shadow-purple-500/20`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced About Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          className="flex-1"
        >
          <div className="bg-gradient-to-br from-[rgba(3,0,20,0.5)] to-[rgba(3,0,20,0.3)] backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-xl p-8 hover:border-[rgba(112,66,248,0.6)] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              About Me
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                  <h3 className="text-xl font-semibold text-white">Education & Expertise</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">
                  Currently pursuing BTech in <span className="text-purple-400 font-semibold">Electronics Engineering</span> with 
                  specialization in <span className="text-cyan-400 font-semibold">VLSI</span> from VIT Chennai. 
                  Passionate about designing cutting-edge electronic systems and exploring semiconductor technology.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-full" />
                  <h3 className="text-xl font-semibold text-white">Interests & Focus</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">
                  My interests span <span className="text-purple-400 font-semibold">VLSI design</span>, 
                  <span className="text-cyan-400 font-semibold"> digital circuit design</span>, 
                  <span className="text-pink-400 font-semibold"> embedded systems</span>, and 
                  <span className="text-blue-400 font-semibold"> IoT applications</span>. 
                  I bridge theoretical knowledge with practical implementation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                  <h3 className="text-xl font-semibold text-white">Let's Collaborate</h3>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">
                  Ready to discuss collaboration opportunities, innovative projects, or share ideas about 
                  electronics and technology? I'm always excited to connect with fellow tech enthusiasts!
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6"
              >
                <a
                  href="mailto:abhiksha.bakshi2024@vitstudent.ac.in"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  Send me an email
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
