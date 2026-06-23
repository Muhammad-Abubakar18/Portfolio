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
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      id: 1,
      title: 'SecureSphere Audit',
      description: 'AI-powered automated smart contract security auditor detecting vulnerabilities and gas optimizations in Solidity code.',
      image: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      tech: ['Solidity', 'React', 'FastAPI', 'OpenAI API'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/securesphere-audit',
      liveUrl: 'https://securesphere.dev',
      glowColor: '260 80 60',
      borderColors: ['#6366f1', '#a855f7', '#ec4899']
    },
    {
      id: 2,
      title: 'NovaCommerce Hub',
      description: 'Ultra-fast headless e-commerce storefront with incremental static regeneration, GraphQL, and real-time Stripe integration.',
      image: 'linear-gradient(135deg, #0f172a 0%, #064e3b 100%)',
      tech: ['Next.js', 'GraphQL', 'Shopify API', 'Stripe'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/novacommerce-hub',
      liveUrl: 'https://novacommerce-demo.dev',
      glowColor: '140 80 60',
      borderColors: ['#10b981', '#3b82f6', '#06b6d4']
    },
    {
      id: 3,
      title: 'CyberSentinel',
      description: 'Enterprise network threat detection and log analysis dashboard providing real-time packet inspection and alerting.',
      image: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)',
      tech: ['Python', 'Elasticsearch', 'TailwindCSS', 'Go'],
      githubUrl: 'https://github.com/Muhammad-Abubakar18/cybersentinel',
      glowColor: '0 80 60',
      borderColors: ['#ef4444', '#f97316', '#eab308']
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card-container">
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
                style={{ height: '380px' }}
              >
                <div className="project-card-inner">
                  {/* Front Side */}
                  <div className="project-card-front" style={{ background: project.image }}>
                    <div className="absolute inset-0 bg-black/45 z-10" />
                    <div className="relative z-20 flex flex-col justify-between h-full p-6 text-left">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-950/50 rounded-full border border-indigo-800/30">
                          Project {project.id}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[10px] bg-white/10 text-gray-200 px-2 py-0.5 rounded-md font-mono">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded-md font-mono">
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
                    <p className="text-gray-300 text-sm text-left mb-4 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="w-full mb-6">
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

                    <div className="flex gap-4 w-full mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-xl border border-gray-800 transition"
                      >
                        <FiGithub size={16} /> Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded-xl shadow-lg transition"
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
    </section>
  );
}
