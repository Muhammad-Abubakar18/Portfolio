import Link from "next/link";
import Logo from "./logo";
import GooeyNav from "../GooeyNav";

export default function Header() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <GooeyNav
              items={navItems}
              particleCount={18}
              particleDistances={[90, 10]}
              particleR={300}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={1100}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </nav>

          {/* Download CV button */}
          <div className="flex flex-1 items-center justify-end">
            <a
              href="https://drive.google.com/uc?id=YOUR_CV_ID&export=download"
              className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

