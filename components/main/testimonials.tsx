"use client";

import { motion } from "framer-motion";
import { StarIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon, UserGroupIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor, VLSI Design",
    organization: "VIT Chennai",
    avatar: AcademicCapIcon,
    content: "Abhiksha demonstrates exceptional understanding of VLSI concepts and shows great potential in semiconductor design. Her analytical skills and attention to detail are remarkable.",
    rating: 5,
    category: "Academic"
  },
  {
    name: "Prof. Meera Sharma",
    role: "Electronics Department Head",
    organization: "VIT Chennai",
    avatar: UserGroupIcon,
    content: "One of the most dedicated students I've encountered. Abhiksha's passion for electronics engineering and innovative thinking make her stand out among her peers.",
    rating: 5,
    category: "Faculty"
  },
  {
    name: "Arjun Patel",
    role: "Project Collaborator",
    organization: "Student Developer",
    avatar: CodeBracketIcon,
    content: "Working with Abhiksha on circuit design projects has been amazing. Her technical expertise and collaborative approach make complex problems seem manageable.",
    rating: 5,
    category: "Peer"
  }
];

export const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-20 relative min-h-screen"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mb-4">
          What People Say
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Feedback from professors, colleagues, and collaborators about my work and dedication
        </p>
      </motion.div>

      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-[rgba(3,0,20,0.6)] to-[rgba(3,0,20,0.4)] backdrop-blur-sm border border-[rgba(112,66,248,0.3)] rounded-xl p-6 hover:border-[rgba(112,66,248,0.6)] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full p-2">
                  <ChatBubbleLeftIcon className="h-4 w-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <testimonial.avatar className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
                    <p className="text-purple-400 text-xs">
                      {testimonial.organization}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full px-3 py-1">
                    <span className="text-purple-400 text-xs font-medium">
                      {testimonial.category}
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          Ready to work together? Let&apos;s create something amazing!
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          Start a Conversation
        </a>
      </motion.div>
    </section>
  );
};
