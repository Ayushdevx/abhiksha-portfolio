"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative min-h-screen"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Explore my latest work in electronics, VLSI design, and innovative technology solutions
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-300 mb-6 text-lg">
          Interested in collaborating or want to see more of my work?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/abhiksha-bakshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            View GitHub
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};
