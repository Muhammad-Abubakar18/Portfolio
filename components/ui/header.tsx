'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import GooeyNav from "../GooeyNav";

export default function Header() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experiences", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "experience", "certificates", "contact"];
    
    const handleScroll = () => {
      const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 180;

      let currentActiveIndex = 0;
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el && scrollPosition >= el.offsetTop) {
          currentActiveIndex = i;
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentActiveIndex = sectionIds.length - 1;
      }

      setActiveIndex(prev => {
        if (prev !== currentActiveIndex) {
          return currentActiveIndex;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-30 w-full md:top-2">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 relative">
        <div className="relative flex h-14 items-center justify-between gap-1 sm:gap-3 rounded-2xl bg-white/90 px-2 sm:px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Logo */}
          <div className="relative z-10 flex items-center">
            <Logo />
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="relative z-10 hidden md:flex flex-1 items-center justify-center">
            <GooeyNav
              items={navItems}
              activeIndex={activeIndex}
              onActiveIndexChange={setActiveIndex}
              particleCount={18}
              particleDistances={[90, 10]}
              particleR={300}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={1100}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </nav>

          {/* Navigation Links (Mobile) */}
          <nav
            className="relative z-10 flex md:hidden items-center flex-1 mx-2 overflow-x-auto py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`text-[9px] font-bold uppercase transition-colors px-1.5 py-0.5 rounded-md whitespace-nowrap ${
                    activeIndex === idx
                      ? "text-blue-600 bg-blue-50/50"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Download Resume Button */}
          <div className="relative z-10 flex items-center justify-end">
            <a
              href="/Muhammad_Abubakar_Resume.pdf"
              download="Muhammad_Abubakar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-200 hover:bg-gray-900 px-2.5 py-1 text-[9px] sm:text-xs font-bold uppercase rounded-lg transition whitespace-nowrap"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

