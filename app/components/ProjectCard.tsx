"use client";

import { Project } from "@/types/index";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColor = {
    completed: "bg-green-500/20 text-green-400",
    "in-progress": "bg-yellow-500/20 text-yellow-400",
    archived: "bg-gray-500/20 text-gray-400",
  };

  const statusLabel =
    project.status === "completed"
      ? "Completed"
      : project.status === "in-progress"
        ? "In progress"
        : "Archived";

  const categoryLabel =
    project.category === "frontend"
      ? "Frontend"
      : project.category === "backend"
        ? "Backend"
        : project.category === "fullstack"
          ? "Full-stack"
          : "Security";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="relative h-full rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-gray-800">
          <Image
            src={project.image}
            alt={project.titleEn} // Endi bu xato bermaydi, chunki datada titleEn mavjud
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[project.status]}`}
            >
              {statusLabel}
            </span>
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.titleEn}
            </h3>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">
              {project.descriptionEn}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-300 border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs text-gray-400">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-700/50">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors text-sm font-medium"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm font-medium"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
