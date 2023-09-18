// Toggle this to true to debug with multiple cards
const DEBUG_MULTIPLE_CARDS = false;

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function getGridClass(count: number) {
  if (count === 1) return "grid grid-cols-1 mx-auto";
  if (count === 2) return "grid grid-cols-2 gap-8 mx-auto";
  return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto";
}

export default function ProjectsSection() {
  let personalProjects = projects.filter(p => p.type === 'personal');
  let professionalProjects = projects.filter(p => p.type === 'professional');

  if (DEBUG_MULTIPLE_CARDS) {
    // Repeat projects to fill the grid for debugging
    personalProjects = Array(6).fill(personalProjects).flat().map((p, i) => ({ ...p, id: `${p.id}-debug-${i}` }));
    professionalProjects = Array(6).fill(professionalProjects).flat().map((p, i) => ({ ...p, id: `${p.id}-debug-${i}` }));
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {professionalProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Professional Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {personalProjects.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-6">Personal Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
