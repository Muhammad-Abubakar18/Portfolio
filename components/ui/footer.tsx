'use client';

import Link from "next/link";
import Logo from "./logo";
import { FiLinkedin, FiGithub, FiMail, FiArrowUpRight } from "react-icons/fi";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block - Branding */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              Software Engineer | Full Stack Developer | Cybersecurity Enthusiast
            </div>
          </div>

          {/* 2nd block - Services */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#services"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#services"
                >
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#services"
                >
                  Security Consulting
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#services"
                >
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - Portfolio */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Portfolio</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#portfolio"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#portfolio"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#portfolio"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#portfolio"
                >
                  GitHub Repos
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block - Resources */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#about"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://drive.google.com/uc?id=YOUR_CV_ID&export=download"
                >
                  Download CV
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-1 text-gray-600 transition hover:text-gray-900"
                  href="https://github.com/Muhammad-Abubakar18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <FiArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block - Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Connect</h3>
            <ul className="flex gap-4">
              <li>
                <a
                  className="flex items-center justify-center text-blue-600 transition hover:text-blue-700"
                  href="https://www.linkedin.com/in/muhammad-abubakar-5846922b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-gray-900 transition hover:text-gray-700"
                  href="https://github.com/Muhammad-Abubakar18"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-red-600 transition hover:text-red-700"
                  href="mailto:m.abubakar.prof@gmail.com"
                  aria-label="Email"
                >
                  <FiMail className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between">
          <div className="mb-4 text-sm text-gray-600 md:mb-0">
            &copy; {new Date().getFullYear()} Muhammad Abubakar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
