"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      <div className="container mx-auto px-4 text-center">
        <Image
          src="/pfp.jpg"
          alt="Salah Zanabili"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Salah Zanabili</h1>
        <h2 className="text-2xl md:text-3xl text-primary mb-6">
          Web Developer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {`I'm a passionate web developer with expertise in React, Next.js, and
          modern web technologies. I love creating responsive and user-friendly
          applications that solve real-world problems.`}
        </p>
        <a
          href="#skills"
          onClick={scrollToSkills}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="Scroll to Skills section"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
