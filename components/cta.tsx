"use client";

import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import dynamic from "next/dynamic";
const CircularGallery = dynamic(() => import("./CircularGallery"), { ssr: false });

export default function Cta() {
  const certificates = [
    { image: "/images/Data Science with Python.png", text: "Data Science with Python" },
    { image: "/images/Digital Marketing.png", text: "Digital Marketing" },
    { image: "/images/Fundamentals of DataScience.PNG", text: "Fundamentals of Data Science" },
    { image: "/images/JavaScript.png", text: "JavaScript" },
    { image: "/images/Python.png", text: "Python" },
    { image: "/images/data science.png", text: "Data Science" }
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
