'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '../types/project';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ring-1 ring-transparent hover:ring-4 hover:ring-blue-400"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full">
          {/* Static Image always rendered */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered && project.gifUrl ? 'opacity-0' : 'opacity-100'}`}
            draggable={false}
            priority
          />
          {/* GIF overlay, only rendered if gifUrl exists */}
          {project.gifUrl && (
            <Image
              src={project.gifUrl}
              alt={project.title + ' animated'}
              fill
              className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              draggable={false}
              priority={false}
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
              {project.type}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-bg"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-[600px] w-full p-8 relative animate-modal-pop"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mb-4 inline-block">
              {project.type}
            </span>
            <div className="mb-4">
              <h4 className="font-semibold mb-2"></h4>
              <p className="text-gray-600 dark:text-gray-300" style={{ whiteSpace: 'pre-line' }}
                 dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">My Contributions</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {project.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.links && (
              <div className="flex gap-4 mt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaPlay /> Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
