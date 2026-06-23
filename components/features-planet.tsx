import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function FeaturesPlanet() {
  return (
    <section id="experience" className="scroll-mt-28 relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 overflow-hidden">
      {/* Background Planet (Globe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none opacity-80" data-aos="zoom-y-out">
        <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
          <Image
            className="rounded-full bg-gray-900"
            src={PlanetImg}
            width={400}
            height={400}
            alt="Planet"
          />
          <Image
            className="absolute -right-64 -top-20 z-10 max-w-none"
            src={PlanetOverlayImg}
            width={789}
            height={755}
            alt="Planet decoration"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Professional Experience
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              My industry internships and technical certifications demonstrating hands-on expertise.
            </p>
          </div>

          {/* Experience Timeline / Alternating Rows */}
          <div className="space-y-16 md:space-y-24 mt-12">
            {/* Internship 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-left order-2 md:order-1" data-aos="fade-right">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-500 font-mono">June 2025 – August 2025</span>
                <h3 className="text-2xl font-bold text-gray-200 mt-2">Software Engineering Intern</h3>
                <h4 className="text-lg text-gray-400 font-medium">Tech Solutions Corp</h4>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Contributed to full-stack web applications using React, Python, and Django. Built secure, optimized REST APIs and automated testing workflows. Collaborated with agile development teams to ship weekly updates.
                </p>
              </div>
              <div className="flex-1 w-full order-1 md:order-2" data-aos="fade-left">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <Image
                    src="/images/certificate-1.png"
                    width={500}
                    height={350}
                    alt="Software Engineering Certificate"
                    className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 w-full order-1" data-aos="fade-right">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <Image
                    src="/images/certificate-2.png"
                    width={500}
                    height={350}
                    alt="Cybersecurity Certificate"
                    className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <div className="flex-1 text-left order-2" data-aos="fade-left">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-500 font-mono">January 2026 – April 2026</span>
                <h3 className="text-2xl font-bold text-gray-200 mt-2">Cybersecurity Intern</h3>
                <h4 className="text-lg text-gray-400 font-medium">SecureNet Labs</h4>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Performed vulnerability assessments, analyzed security logs, and implemented secure OAuth2 authentication flows. Identified threat vectors in web services and formulated secure mitigation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
