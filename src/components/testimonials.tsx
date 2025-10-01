"use client";

import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
// The user's code imports from lucide-react, so we'll use that.
// Make sure you have `lucide-react` installed: npm install lucide-react
import { Facebook, Instagram, Linkedin } from "lucide-react";
import HalfFillHeading from "./ui/HalfFillHeading";
import Image from "next/image";

// Define the structure of a testimonial
interface Testimonial {
  id: number;
  name: string;
  age: number;
  course: string;
  quote: string;
  image: string;
}

// A list of your local images in the /public folder
const localImages = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.jpg",
  "/testimonial-4.jpg",
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // We'll generate exactly 4 testimonials to fit the grid design
    const fakeTestimonials = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      name: faker.person.fullName(),
      age: faker.number.int({ min: 19, max: 28 }),
      course: faker.helpers.arrayElement([
        "Graphic Design",
        "Fashion",
        "Photography",
        "Media",
      ]),
      quote: `“ ${faker.lorem.words(3)} ”`,
      image: localImages[i] || localImages[0], // Assign images sequentially
    }));
    setTestimonials(fakeTestimonials);
  }, []);

  return (
    <section id='student-testimonials' className='bg-[#05002C] px-6 py-24 sm:py-32 overflow-hidden'>
      <div className='mx-auto max-w-[1600px]'>
        <h2 className='text-4xl sm:text-[64px] font-black text-white uppercase mb-20 max-w-7xl leading-tight '>
          Student <br />
          <HalfFillHeading text='Testimonials' fillColor='#8EC8EE' />
        </h2>
      </div>
      {/* --- MODIFIED SECTION: Changed from flex-scroll to a responsive grid --- */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-[650px] justify-items-center '>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='relative w-[495px] h-[705px] border-2 border-[#E018E0] overflow-hidden mt-32'
            // --- MODIFIED: All cards now have the same rotation ---
            style={{
              transform: "rotate(15deg)",
            }}
          >
            <Image
              src={testimonial.image}
              alt={`Portrait of a student`}
              className='h-full w-full object-cover'
              width={495}
              height={705}
            />
            <div className='absolute inset-0 bg-[#0B1B56]/85'></div>

            <div
              className='absolute inset-0 p-8 text-white flex flex-col items-start justify-center text-center'
              style={{
                transform: "rotate(-15deg)", // ✅ THIS LINE WAS ADDED to un-rotate the text
              }}
            >
              <blockquote className='mb-4 text-2xl sm:text-[48px] font-black leading-tight uppercase'>
                {testimonial.quote}
              </blockquote>
              <p className='text-xs sm:text-[20px] font-bold uppercase tracking-wider mt-4'>
                {testimonial.name} | {testimonial.age} | {testimonial.course}
              </p>
              <div className='flex items-center gap-3 mt-4'>
                <Facebook className='w-8 h-8 text-white' />
                <Instagram className='w-8 h-8 text-white' />
                <Linkedin className='w-8 h-8 text-white' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
