"use client";

import { useState, useEffect } from 'react';
import Campuses from "@/components/campuses";
import CoursesIntro from "@/components/courses-intro";
import HeroSection from "@/components/hero-section";
import MissionStatement from "@/components/mission-statement";
import Navigation from "@/components/shared/navigation";
import Partners from '../components/partners';
import Testimonials from "@/components/testimonials";
import Stories from "@/components/stories";
import Footer from "@/components/shared/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("#courses");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <div className='bg-[#05002C]'>
        <Navigation active={activeSection} />
        <CoursesIntro />
        <MissionStatement />
        <Campuses />
        <Partners />
        <Testimonials />
        <Stories />
        <Footer />
      </div>
      
    </>
  );
}
