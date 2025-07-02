"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[rgba(3,0,20,0.6)] to-[rgba(3,0,20,0.4)] backdrop-blur-sm border border-[rgba(112,66,248,0.3)] hover:border-[rgba(112,66,248,0.6)] transition-all duration-500 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent z-10" />
          <Image
            src={src}
            alt={title}
            width={400}
            height={300}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay with project type indicator */}
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2">
              <CodeBracketIcon className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Project</span>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        </div>

        {/* Content */}
        <div className="relative p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">
              {description}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-gray-700/50">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-white font-medium text-sm group-hover:gap-3 transition-all duration-300"
            >
              View Project
              <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};
