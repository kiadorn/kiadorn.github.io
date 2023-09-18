import AboutMe from '../components/AboutMe';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';
// import PersonalInterests from '../components/PersonalInterests';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <AboutMe />
        <ProjectsSection />
        {/* <PersonalInterests /> */}
        <ContactSection />
      </div>
    </main>
  );
}
