import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import CircularGallery from "./CircularGallery";

export default function Cta() {
  const certificates = [
    { image: "/images/certificate-1.png", text: "Software Engineering Certification" },
    { image: "/images/certificate-2.png", text: "Cybersecurity Professional" },
    { image: "/images/certificate-1.png", text: "Advanced React Core" },
    { image: "/images/certificate-2.png", text: "Web Application Pentesting" },
    { image: "/images/certificate-1.png", text: "Django Backend Specialist" },
    { image: "/images/certificate-2.png", text: "Solidity Auditing Specialist" },
    { image: "/images/certificate-1.png", text: "Cloud Architecture Foundations" },
    { image: "/images/certificate-2.png", text: "Threat Modeling Practitioner" }
  ];

  return (
    <section id="certificates" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Certifications & Achievements</h2>
        </div>
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none opacity-50"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          {/* Circular Gallery inside the blue box */}
          <div className="relative h-[480px] w-full py-4 overflow-hidden">
            <CircularGallery
              items={certificates}
              bend={-1.5}
              textColor="#38bdf8"
              borderRadius={0.06}
              scrollEase={0.06}
              scrollSpeed={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
