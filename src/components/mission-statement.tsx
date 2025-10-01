import Image from "next/image";
import Button from "./ui/button";
import { LuPlay } from "react-icons/lu";

export default function MissionStatement() {
  return (
    <section className='bg-[#05002C] py-24 sm:py-32 overflow-hidden'>
    
      <div className='max-w-[1750px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 xl:grid-cols-5 gap-24 xl:gap-0 items-center'>
          <div className='xl:col-span-2'>
            <figure className='relative'>
              <span className='absolute -top-12 -left-4 xl:-top-20 xl:-left-0'>
                <Image src='/quote.png' alt='quote' width={60} height={60} className="xl:w-20 xl:h-20" />
              </span>
              <blockquote className='text-4xl md:text-5xl xl:text-[64px] font-black text-white leading-tight sm:pl-10 md:pl-20 py-10'>
                A World where <br />
                <span className='text-[#86DCFF]'>EVERYONE has</span> <br />
                <span className='text-[#86DCFF]'>the opportunity</span> <br />
                to fulfil their <br />
                potential
              </blockquote>
              <span className='absolute -bottom-12 right-4 sm:right-10 xl:-bottom-20 xl:right-60 rotate-180'>
                <Image src='/quote.png' alt='quote' width={60} height={60} className="xl:w-20 xl:h-20" />
              </span>
            </figure>
          </div>
          <div className='xl:col-span-3'>
            <div className='relative'>
              <div className='relative w-full aspect-video xl:w-[1058px] xl:h-[584px] overflow-hidden xl:pr-10'>
                <Image
                  src='/video.png'
                  alt="Students collaborating"
                  className='w-full h-full object-cover'
                  fill
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <button
                    className='w-20 h-20 sm:w-28 sm:h-28 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors'
                    aria-label='Play video'
                  >
                    <LuPlay className='w-10 h-10 sm:w-12 sm:h-12 text-black stroke-1' />
                  </button>
                </div>
              </div>
              <div className='relative xl:absolute z-10 mt-[-4rem] xl:mt-0 w-11/12 max-w-2xl xl:max-w-none xl:w-[852px] xl:h-[317px] mx-auto xl:mx-0 xl:-bottom-60 xl:-right-3 bg-[#061665] p-6 lg:p-10 xl:p-14 flex flex-col sm:flex-row  sm:justify-between gap-6'>
                <h3 className='text-[#8EC8EE] text-2xl md:text-3xl xl:text-[40px] font-bold leading-tight flex-1'>
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