"use client";

import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import HalfFillHeading from "./ui/HalfFillHeading";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  age: number;
  course: string;
  quote: string;
  image: string;
}

const localImages = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.jpg",
  "/testimonial-4.jpg",
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fakeTestimonials = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      name: faker.person.fullName(),
      age: faker.number.int({ min: 19, max: 28 }),
      course: faker.helpers.arrayElement(["Graphic Design", "Fashion", "Photography", "Media"]),
      quote: `“ ${faker.lorem.words(3)} ”`,
      image: localImages[i] || localImages[0],
    }));
    setTestimonials(fakeTestimonials);
  }, []);

  return (
    <section id='student-testimonials' className='bg-[#05002C] px-6 py-24 sm:py-32 overflow-hidden lg:px-20'>
      <div className='mx-auto max-w-[1750px]'>
        <h2 className='text-4xl sm:text-[64px] font-black text-white uppercase mb-16 xl:mb-20 max-w-7xl leading-tight'>
          Student <br />
          <HalfFillHeading text='Testimonials' fillColor='#8EC8EE' />
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 xl:gap-y-20 xl:gap-x-[650px] justify-items-center pt-20 xl:pt-0'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='relative w-full  xl:w-[495px] aspect-[2/3] xl:h-[705px] border-2 border-[#E018E0] overflow-hidden xl:mt-32'
            style={{
              transform: "rotate(15deg)",
            }}
          >
            <Image
              src={testimonial.image}
              alt={`Portrait of a student`}
              className='h-full w-full object-cover'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-[#0B1B56]/85'></div>

            <div
              className='absolute inset-0 p-6 sm:p-8 text-white flex flex-col items-center justify-center text-center'
              style={{
                transform: "rotate(-15deg)",
              }}
            >
              <blockquote className='mb-4 text-3xl sm:text-[48px] font-black leading-tight uppercase'>
                {testimonial.quote}
              </blockquote>
              <p className='text-sm sm:text-[20px] font-bold uppercase tracking-wider mt-4'>
                {testimonial.name} | {testimonial.age} | {testimonial.course}
              </p>
              <div className='flex items-center gap-3 mt-4'>
                <Facebook className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                <Instagram className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                <Linkedin className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}