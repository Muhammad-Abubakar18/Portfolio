"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import whatsappIcon from "@/components/assets/whatsapp-icon.png";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
      
      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/923328534807"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="WhatsApp"
      >
        <Image src={whatsappIcon} alt="WhatsApp" className="h-9 w-9 object-contain" />
      </a>
    </>
  );
}
