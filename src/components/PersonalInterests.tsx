import React from 'react';
import { FaBook, FaMusic } from 'react-icons/fa';

const interests = [
  {
    icon: <FaMusic className="text-blue-500 w-6 h-6" />, 
    label: 'Music',
    description: 'I try to practice keyboard/piano everyday! Especially like exploring funk and soul music.'
  },
  {
    icon: <FaBook className="text-green-600 w-6 h-6" />,
    label: 'Personal Note Taking',
    description: 'I\'ve fallen for Obsidian.md to take notes about all the books and movies I consume. Also to learn music theory.'
  }
];

export default function PersonalInterests() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-6">Personal Interests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {interests.map((interest, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            {interest.icon}
            <div className="text-left">
              <div className="font-semibold text-lg">{interest.label}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{interest.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
