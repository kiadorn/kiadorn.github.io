import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'toolbox',
    title: 'Kiadorn Toolbox',
    description: `A collection of tools, re-usable components and design patterns, mostly targetting Unity game development.`,
    detailedDescription: `Across multiple prototype Unity projects, I wanted to create my own shared source for quicker re-use. Majority of the work is not original, but instead fitting my own preferred syntax and gives me more control over the code. Also is a great learning experience to build some systems from scratch.`,
    imageUrl: '/images/unity.png',
    features: ['Re-usable components', 'Design patterns', 'Unity integration'],
    contributions: ['Toolbox development'],
    type: 'personal',
    technologies: ['Unity'],
    links: {
      github: 'https://github.com/kiadorn/KiadornToolbox'
    }
  },
  {
    id: 'augur',
    title: 'Augur',
    description: `An ARPG hobby project exploring larger system implementations.`,
    detailedDescription: `Augur is a solo project focused on building a game around one of my favourite genres. The scope is intentionally large to serve as a creative outlet for prototyping new ideas and learning more advanced implementations.`,
    imageUrl: '/images/augur.png',
    gifUrl: '/images/augur.gif',
    features: ['Scriptable ability system', 'Online multiplayer (Relay)'],
    contributions: ['Game design', 'Gameplay implementation'],
    type: 'personal',
    technologies: ['Unity 6', 'NetCode for GameObjects', 'FMOD', 'Universal Render Pipeline', 'Addressables', 'Behavior Trees AI'],
    links: {}
  },
  {
    id: 'vr-mr-experience',
    title: 'Professional XR Projects',
    description: `Development of XR (Extended Reality) applications for commercial and research use.`,
    detailedDescription: `Worked across multiple XR projects, delivering interactive experiences for training, simulation, and visualization.  Collaborated with multidisciplinary teams to prototype, develop, and deploy solutions for both commercial and research clients.`,
    imageUrl: '/images/vr.avif',
    features: ['Virtual Reality', 'Augmented Reality', 'Mixed Reality', 'Multi-user sessions'],
    contributions: ['System architecture', 'Unity development', 'Deployment', 'Project management', 'Live demos'],
    type: 'professional',
    technologies: ['Unity 6', 'Unity 2023', 'VR/AR/MR', 'VR Toolkit 3.3', 'Unity XR Interaction Toolkit', 'Meta/Oculus SDK', 'LiteNetLib', 'Universal Render Pipeline', 'AWS'],
    links: {}
  },
  {
    id: 'huemanoid',
    title: 'Huemanoid',
    description: `Final year project, fast paced 1v1 multiplayer FPS arena game with zone wide stealth system.`,
    detailedDescription: `Huemanoids is a university project developed by a 5-man team over the course of 10 weeks. It is a fast paced, 1v1 multiplayer FPS arena game played in best of 5 rounds of collecting most points. Points are received from collecting orbs and hitting the opponent by releasing a charged up, long range laser.
    
    The player who utilizes the abilites of dashing and sending clone decoys has a chance to outplay their opponent around the main mechanic: <b>stealth</b>.
    Each player is assigned a color, the map is separated into parts with the same colors which turns the player invisible when matching. Becoming stealthed is a huge advantage, but to reach the collectable orbs the players must reveal themselves.
    
    During playtest and showcase, we have been fortunate to receive a lot of positive feedback.`,
    imageUrl: '/images/huemanoid.png',
    gifUrl: '/images/huemanoid.gif',
    features: ['Stealth mechanic', '1v1 multiplayer', 'Skill-based combat'],
    contributions: ['Gameplay logic implementation', 'Multiplayer implementation', 'Player controller'],
    type: 'personal',
    technologies: ['Unity 2019', 'UNet HL API', 'High Definition Render Pipeline'],
    links: {
      demo: 'https://www.youtube.com/watch?v=ftEWoZiS__0'
    }
  },
  {
    id: 'hoverspeeder',
    title: 'Hover Speeder Prototype',
    description: `A quick prototype of implementing a physics-based hover bike`,
    detailedDescription: `After getting inspired by watching a certain TV series where a hover bike is used to travel a desert planet, I wanted to re-create the effect in Unity.`,
    imageUrl: '/images/speeder.png',
    gifUrl: '/images/speeder.gif',
    features: ['PID Controller', 'Procedurally generated map'],
    contributions: ['Implementation'],
    type: 'personal',
    technologies: ['Unity 2023', 'MapMagic 2', 'Universal Render Pipeline'],
    links: {}
  }
];
