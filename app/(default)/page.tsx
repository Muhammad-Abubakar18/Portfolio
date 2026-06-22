export const metadata = {
  title: "Muhammad Abubakar - Software Engineer & Full Stack Developer",
  description: "Portfolio of Muhammad Abubakar - Software Engineer, Full Stack Developer, Cybersecurity Enthusiast, and AI-Powered Web Security Researcher. View my projects, skills, and experience.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Projects from "@/components/Projects";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <Projects />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
