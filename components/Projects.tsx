'use client';

import React from 'react';
import BorderGlow from './BorderGlow';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Particles from './Particles';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  glowColor: string;
  borderColors: string[];
  level: string;
  videoUrl?: string;
  isPrivate?: boolean;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      id: 1,
      title: 'Intrusion Eye',
      description: 'A comprehensive network and system security monitoring platform designed to detect network security events and intrusions. The application features a modern, clean dashboard providing real-time alerts, scheduled scans, and robust user management integrated with machine learning classification.',
      image: 'linear-gradient(135deg, #0f172a 0%, #312e81 100%)',
      tech: ['Python', 'Django', 'React.js', 'PostgreSQL', 'Celery', 'Redis', 'Machine Learning'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/testingIntrusionEye',
      glowColor: '250 80 60',
      borderColors: ['#6366f1', '#3b82f6', '#10b981'],
      level: 'Professional',
      videoUrl: '/projects/intru_video.mp4',
      isPrivate: true
    },
    {
      id: 2,
      title: 'Image Forensic and Sentiment Analysis',
      description: 'A comprehensive platform unifying digital image forensic analysis with AI-powered sentiment detection. The application is designed to detect image tampering, authenticate sources, and analyze facial expressions for emotional context.',
      image: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      tech: ['Python', 'FastAPI', 'Machine Learning', 'Image Processing'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/Image-Forensic-and-Sentiment-Analysis-',
      glowColor: '260 80 60',
      borderColors: ['#6366f1', '#a855f7', '#ec4899'],
      level: 'Professional',
      videoUrl: '/projects/Image Forensic Demo.mp4'
    },
    {
      id: 3,
      title: 'MedLo – Medicine Reminder App',
      description: 'A smart Android application designed to help users efficiently manage and track their medication schedules. It provides an intuitive interface for setting reminders and viewing daily schedules.',
      image: 'linear-gradient(135deg, #0f172a 0%, #064e3b 100%)',
      tech: ['Java', 'Android Studio'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/MedLo',
      glowColor: '140 80 60',
      borderColors: ['#10b981', '#3b82f6', '#06b6d4'],
      level: 'Intermediate',
      videoUrl: '/projects/Medlo-Demo.mp4'
    },
    {
      id: 4,
      title: 'Wheel & Deal – Car Buying Platform',
      description: 'A comprehensive web-based platform that simplifies the online car buying process. It allows users to browse, compare, and purchase cars through a seamless and user-friendly interface.',
      image: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/Wheel-Deal',
      glowColor: '0 80 60',
      borderColors: ['#ef4444', '#f97316', '#eab308'],
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'FlexStart – Resume Maker Website',
      description: 'A dynamic web-based resume builder that empowers users to create, preview, and download professional resumes effortlessly using customizable templates.',
      image: 'linear-gradient(135deg, #0f172a 0%, #312e81 100%)',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/FlexStart',
      glowColor: '250 80 60',
      borderColors: ['#6366f1', '#3b82f6', '#10b981'],
      level: 'Intermediate',
      videoUrl: '/projects/FlexStart-Demo.mp4'
    },
    {
      id: 6,
      title: 'Todo App (Frontend)',
      description: 'A responsive task management frontend application built to help users organize their daily tasks efficiently.',
      image: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/Todo_App_FrontEnd',
      glowColor: '260 80 60',
      borderColors: ['#6366f1', '#a855f7', '#ec4899'],
      level: 'Fundamental'
    },
    {
      id: 7,
      title: 'Rock-Paper-Scissors Game',
      description: 'A classic, interactive web-based Rock-Paper-Scissors game featuring a clean UI and real-time score tracking against a computer opponent.',
      image: 'linear-gradient(135deg, #0f172a 0%, #064e3b 100%)',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/Rock-Paper-Scissor-Game',
      glowColor: '140 80 60',
      borderColors: ['#10b981', '#3b82f6', '#06b6d4'],
      level: 'Fundamental',
      videoUrl: '/projects/Rock Paper Scissor.mp4'
    },
    {
      id: 8,
      title: 'Responsive Calculator',
      description: 'A fully functional, responsive web calculator designed with a sleek interface for performing arithmetic operations on any device.',
      image: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/Responsive-Calculator',
      glowColor: '0 80 60',
      borderColors: ['#ef4444', '#f97316', '#eab308'],
      level: 'Fundamental'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#090d16] relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 pointer-events-none opacity-45 z-0">
        <Particles
          particleColors={["#6366f1", "#a855f7", "#3b82f6"]}
          particleCount={150}
          particleSpread={7}
          speed={0.15}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
        />
      </div>
      {/* Background glow ornaments */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">
            A curated showcase of my engineering work across full-stack development, smart contracts, and cybersecurity.
          </p>
        </div>

        <div className="w-full flex flex-col gap-20">
          {['Professional', 'Intermediate', 'Fundamental'].map((level) => {
            const levelProjects = projectsList.filter(p => p.level === level);
            if (levelProjects.length === 0) return null;
            return (
              <div key={level} className="w-full">
                <div className="flex items-center gap-6 mb-10">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-800"></div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase tracking-widest">
                    {level} Level
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-800"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-8 w-full">
                  {levelProjects.map((project) => (
                    <div key={project.id} className="project-card-container w-full md:w-[calc(50%-1rem)] max-w-[600px] h-[480px] sm:h-[440px] md:h-[400px] lg:h-[380px]">
                      <BorderGlow
                        className="w-full h-full"
                        edgeSensitivity={20}
                        glowColor={project.glowColor}
                        backgroundColor="#0b0f19"
                        borderRadius={24}
                        glowRadius={25}
                        glowIntensity={1.5}
                        coneSpread={30}
                        animated
                        colors={project.borderColors}
                        fillOpacity={0.15}
                        style={{ height: '100%' }}
                      >
                        <div className="project-card-inner">
                          {/* Front Side */}
                          <div className="project-card-front" style={{ background: project.image }}>
                            {project.videoUrl && (
                              <video
                                src={project.videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-screen"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/45 z-10" />
                            <div className="relative z-20 flex flex-col justify-between h-full p-6 text-center">
                              <div className="flex justify-center items-center gap-2">
                                <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-950/50 rounded-full border border-indigo-800/30 whitespace-nowrap">
                                  Project {project.id}
                                </span>
                                {project.isPrivate && (
                                  <span className="px-2 py-0.5 text-[10px] font-bold text-red-400 uppercase bg-red-950/50 rounded-full border border-red-800/30 whitespace-nowrap">
                                    Private
                                  </span>
                                )}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="text-[10px] bg-white/10 text-gray-200 px-2 py-0.5 rounded-md font-mono whitespace-nowrap">
                                      {t}
                                    </span>
                                  ))}
                                  {project.tech.length > 3 && (
                                    <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded-md font-mono whitespace-nowrap">
                                      +{project.tech.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Back Side */}
                          <div className="project-card-back">
                            <h3 className="text-xl font-bold text-white mb-3 text-left w-full border-b border-gray-800 pb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm text-justify mb-4 flex-grow leading-relaxed">
                              {project.description}
                            </p>

                            <div className="w-full mb-4">
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 text-left">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t, i) => (
                                  <span key={i} className="text-[11px] bg-gray-900 border border-gray-800 text-emerald-400 px-2.5 py-1 rounded-md font-mono">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4 w-full mt-auto relative z-50">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-xl border border-gray-800 transition relative z-50 pointer-events-auto cursor-pointer"
                              >
                                <FiGithub size={16} /> Code
                              </a>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded-xl shadow-lg transition relative z-50 pointer-events-auto cursor-pointer"
                                >
                                  <FiExternalLink size={16} /> Live
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </BorderGlow>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
