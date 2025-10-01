import Image from "next/image";
import Button from "./ui/button";
import { LuPlay } from "react-icons/lu";

export default function MissionStatement() {
  return (
    <section className='bg-[#05002C] py-24 sm:py-32'>
      <div className='custom-container mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-5 gap-12 xl:gap-0 items-center'>
          {/* Left side - Quote */}
          <div className='lg:col-span-2'>
            <figure className='relative'>
              <span className='absolute -top-20 -left- text-9xl font-bold text-white/50 leading-none'>
                <Image src='/quote.png' alt='quote' width={80} height={80} />
              </span>
              <blockquote className='text-4xl lg:text-[64px] font-black text-white leading-tight sm:pl-20 py-10'>
                A World where <br />
                <span className='text-[#86DCFF]'>EVERYONE has</span> <br />
                <span className='text-[#86DCFF]'>the opportunity</span> <br />
                to fulfil their <br />
                potential
              </blockquote>
              <span className='absolute -bottom-20 right-60 text-9xl font-bold text-white/50 leading-none rotate-180'>
                <Image src='/quote.png' alt='quote' width={80} height={80} />
              </span>
            </figure>
          </div>

          {/* Right side - Image and CTA */}
          <div className='lg:col-span-3'>
            {/* Video Thumbnail */}
            <div className='relative'>
              <div className='relative w-[1058px] h-[584px]  overflow-hidden pr-10'>
                <Image
                  src='/video.png'
                  alt="Students collaborating around a computer with a 'Digital Marketing' screen"
                  className='w-full h-full object-cover'
                  width={1000}
                  height={1000}
                />
                {/* Play button overlay */}
                <div className='absolute inset-0 flex items-center justify-center '>
                  <button
                    className='w-28 h-28 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors '
                    aria-label='Play video'
                  >
                    <LuPlay className='w-12 h-12 text-black stroke-1' />
                  </button>
                </div>
                {/* CTA Card */}
              </div>
              <div className='absolute z-10 -bottom-60 -right-3 bg-[#061665] p-6 mt-[-4rem] mx-auto w-[852px] h-[317px]  lg:mt-0  lg:p-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                <h3 className='text-[#8EC8EE] text-xl lg:text-[40px] font-bold leading-tight flex-1'>
                  There&apos;s Still Time <br />
                  to Apply for <br /> September 2025
                </h3>
                <Button variant='primary'>View Courses</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
