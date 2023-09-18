import React from 'react';

const CONTACTS = [
  // {
  //   label: 'Email',
  //   href: 'mailto:',
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0l-4 4-4-4" /></svg>
  //   )
  // },
  {
    label: 'GitHub',
    href: 'https://github.com/kiadorn',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.419 2.865 8.166 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.545 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.745 0 .267.18.579.688.481C19.138 20.184 22 16.438 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexander-hall-lanerfeldt/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.065-1.868-3.065-1.868 0-2.154 1.459-2.154 2.967v5.702h-3v-10h2.881v1.367h.041c.402-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg>
    )
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/kiadorn.bsky.social',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">bsky</text></svg>
    )
  }
];

export default function ContactSection() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-white transition-colors shadow"
          >
            {c.icon}
            <span className="font-semibold">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
