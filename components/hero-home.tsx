'use client';

import PageIllustration from "@/components/page-illustration";
import LogoLoop from "@/components/logo-loop";
import Lanyard from "@/components/Lanyard";
import Terminal from "@/components/Terminal";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function HeroHome() {
  // Using text-based tech logos for better compatibility
  const techLogos = [
    { node: <span className="font-bold text-2xl text-blue-600">Py</span>, title: "Python", href: "https://python.org" },
    { node: <span className="font-bold text-2xl text-orange-600">Jv</span>, title: "Java", href: "https://java.com" },
    { node: <span className="font-bold text-2xl text-yellow-500">JS</span>, title: "JavaScript", href: "https://javascript.com" },
    { node: <span className="font-bold text-2xl text-blue-400">⚛</span>, title: "React", href: "https://react.dev" },
    { node: <span className="font-bold text-2xl text-green-600">Dj</span>, title: "Django", href: "https://djangoproject.com" },
    { node: <span className="font-bold text-2xl text-blue-700">🐘</span>, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <span className="font-bold text-2xl text-red-600">📦</span>, title: "Redis", href: "https://redis.io" },
    { node: <span className="font-bold text-2xl text-blue-600">🐳</span>, title: "Docker", href: "https://docker.com" },
    { node: <span className="font-bold text-2xl text-orange-600">⎇</span>, title: "Git", href: "https://git-scm.com" },
    { node: <FiGithub size={28} />, title: "GitHub", href: "https://github.com" },
    { node: <span className="font-bold text-2xl text-orange-500">H5</span>, title: "HTML5", href: "https://html.spec.whatwg.org" },
    { node: <span className="font-bold text-2xl text-blue-500">C3</span>, title: "CSS3", href: "https://w3.org/Style/CSS" },
    { node: <span className="font-bold text-2xl text-purple-600">BS</span>, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <span className="font-bold text-2xl text-orange-700">TF</span>, title: "TensorFlow", href: "https://tensorflow.org" },
  ];

  return (
    <section className="relative overflow-hidden">
      <PageIllustration />
      
      {/* Lanyard hanging from top right behind the nav bar */}
      <div className="absolute top-0 right-0 h-[700px] w-full md:w-[500px] lg:w-[600px] pointer-events-none z-10">
        <div className="w-full h-full pointer-events-auto">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage="/images/profile.jpg"
            imageFit="cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header with Lanyard on right */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left side - Content */}
            <div className="pb-12 text-center lg:text-left lg:pb-16">
            {/* Social Links */}
            <div
              className="mb-6 flex justify-center gap-4 lg:justify-start"
              data-aos="zoom-y-out"
            >
              <a
                href="https://www.linkedin.com/in/muhammad-abubakar-5846922b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Muhammad-Abubakar18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="mailto:m.abubakar.prof@gmail.com"
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-red-600"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
            </div>

            {/* Main Heading */}
            <h1
              className="mb-4 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Muhammad Abubakar
            </h1>

            {/* Subtitle */}
            <p
              className="mb-8 text-lg text-gray-600 md:text-xl"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Software Engineer | Full Stack Developer | Cybersecurity Enthusiast | AI-Powered Web Security Researcher
            </p>

            {/* CTA Buttons */}
            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center lg:mx-0 lg:justify-start"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="mailto:m.abubakar.prof@gmail.com"
                >
                  <span className="relative inline-flex items-center">
                    Get In Touch{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
                <a
                  className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                  href="#portfolio"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Spacer */}
          <div className="relative hidden lg:block h-[400px]" />
          </div>

          {/* Tech Stack - LogoLoop */}
          <div
            className="mx-auto mt-12 max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-600">
              Technologies & Tools
            </p>
            <div className="relative h-24">
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology stack"
              />
            </div>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
