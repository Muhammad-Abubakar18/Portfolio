'use client';

import { 
  SiPython, 
  SiJavascript, 
  SiDjango, 
  SiFastapi, 
  SiSpringboot, 
  SiReact, 
  SiDocker, 
  SiPostgresql, 
  SiGit,
  SiPhp,
  SiFirebase,
  SiRedis,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiMysql,
  SiCelery,
  SiJsonwebtokens,
  SiGoogle,
  SiSpring
} from "react-icons/si";
import { FaJava, FaBrain, FaLock, FaServer, FaCode } from "react-icons/fa";
import Particles from "./Particles";

export default function BusinessCategories() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-blue-400" size={18} />,
      skills: ["Python", "Java", "JavaScript", "PHP", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaServer className="text-emerald-400" size={18} />,
      skills: ["React.js", "Django", "Django REST (DRF)", "FastAPI", "Spring Boot", "Tailwind CSS"]
    },
    {
      title: "Databases & DevOps",
      icon: <SiDocker className="text-cyan-400" size={18} />,
      skills: ["PostgreSQL", "MySQL", "Firebase", "Redis", "Docker", "Git", "Celery", "CI/CD"]
    },
    {
      title: "AI, Security & APIs",
      icon: <FaBrain className="text-purple-400" size={18} />,
      skills: ["Gemini API", "Machine Learning", "AI", "REST APIs", "JWT Authentication"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-28 bg-[#090d16] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-45 z-0">
        <Particles
          particleColors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
          particleCount={140}
          particleSpread={6}
          speed={0.12}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">Technical Skills</h2>
          <p className="text-gray-400 text-lg mt-4">
            A comprehensive list of programming languages, frameworks, developer tools, and technologies I work with.
          </p>
        </div>

        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[350px] items-center justify-center overflow-hidden">
            {/* Small blue dots */}
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500/30"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-blue-500/80"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-800 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-800 to-transparent"></div>
            <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-800 to-transparent before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-blue-500"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-800 to-transparent before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-blue-500"></div>
            {/* Diagonal lines */}
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-800 to-transparent"></div>
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-800 to-transparent"></div>
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-800 to-transparent"></div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-800 to-transparent"></div>

            {/* Central Python Logo */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_4s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,rgba(59,130,246,0.8))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-xl shadow-blue-500/5 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-blue-500/5 before:blur-md">
                  <SiPython className="relative text-[#3776AB]" size={42} />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center">
                {/* React.js - Left Inner */}
                <div className="absolute -translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-lg shadow-cyan-500/5 relative">
                      <SiReact className="relative text-[#61DAFB]" size={28} />
                    </div>
                  </div>
                </div>
                {/* Django - Right Inner */}
                <div className="absolute translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-lg shadow-emerald-500/5 relative">
                      <SiDjango className="relative text-[#092E20]" size={28} />
                    </div>
                  </div>
                </div>
                {/* FastAPI - Top Left Outer */}
                <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-lg shadow-teal-500/5 relative">
                      <SiFastapi className="relative text-[#009688]" size={34} />
                    </div>
                  </div>
                </div>
                {/* JavaScript - Top Right Outer */}
                <div className="absolute -translate-y-[82px] translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-lg shadow-yellow-500/5 relative">
                      <SiJavascript className="relative text-[#F7DF1E] rounded" size={32} />
                    </div>
                  </div>
                </div>
                {/* Spring Boot - Bottom Right Outer */}
                <div className="absolute translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-lg shadow-green-500/5 relative">
                      <SiSpringboot className="relative text-[#6DB33F]" size={34} />
                    </div>
                  </div>
                </div>
                {/* Docker - Bottom Left Outer */}
                <div className="absolute -translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-lg shadow-blue-500/5 relative">
                      <SiDocker className="relative text-[#2496ED]" size={36} />
                    </div>
                  </div>
                </div>
                {/* PostgreSQL - Far Left Outermost */}
                <div className="absolute -translate-x-[292px] opacity-60 hover:opacity-100 transition-opacity">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-md">
                      <SiPostgresql className="relative text-[#4169E1]" size={22} />
                    </div>
                  </div>
                </div>
                {/* Git - Far Right Outermost */}
                <div className="absolute translate-x-[292px] opacity-60 hover:opacity-100 transition-opacity">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-gray-800 shadow-md">
                      <SiGit className="relative text-[#F05032]" size={22} />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-xs border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 hover:bg-slate-900/70"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800/80 border border-gray-700/50">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-gray-200">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/5 text-gray-300 border border-gray-800 hover:border-blue-500/20 hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
