import React from 'react';

export default function AboutMe() {
  return (
      <section className="py-16 px-4 max-w-3xl mx-auto flex flex-col items-center text-center">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-blue-500"
        />
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-200 dark:text-gray-300 max-w-xl">
          Hi! I'm Alexander, a developer specializing with working in 3D engines, and definitely not with web development, but here we are.
          <br />I enjoy building interactive experiences and solving complex problems with creative solutions.
        </p>
      </section>
  );
}
