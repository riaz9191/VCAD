import Image from "next/image";
import Button from "./ui/button";
import HalfFillHeading from "./ui/HalfFillHeading";

export default function CoursesIntro() {
  return (
    <section id='courses' className='bg-[#05002C] py-20 mt-5 overflow-hidden'>
      <div className='max-w-[1760px] mx-auto px-4'>
        <div className='flex flex-col xl:flex-row gap-16 xl:gap-[290px] items-center xl:items-start'>
          <div className='w-full max-w-md md:max-w-lg xl:w-[677px] xl:h-[709px] flex-shrink-0'>
            <div className='border-2 border-white w-full h-full xl:w-[677px] xl:h-[709px]'>
              <Image
                src='/course.jpg'
                alt='Creative typography design poster'
                width={677}
                height={709}
                className='w-full h-full object-cover object-top'
              />
            </div>
          </div>
          <div className='space-y-6 flex flex-col items-center xl:items-start text-center xl:text-left'>

            <h2 className='text-5xl xl:text-[64px] font-black text-white leading-tight'>
              WHAT WILL YOU <br />
              <HalfFillHeading text='STUDY?' fillColor='#061665' />
            </h2>
            <p className='text-white/90 text-lg md:text-[24px] leading-8 max-w-3xl'>
              If you join Victoria College of Arts and Design, you can expect
              the highest calibre of teaching, cutting-edge facilities, and
              exceptional support. You will be encouraged to explore your
              creativity and career at the creative and tech industries.
            </p>

            <div className='flex flex-col sm:flex-row flex-wrap gap-6 pt-4 justify-center xl:justify-start'>
              <Button variant='primary'>View Courses</Button>
              <Button
                variant='outline'
                className='border border-[#8EC8EE] text-[#8EC8EE] hover:bg-white hover:text-[#0a1628] font-bold px-8 py-6 text-base bg-transparent whitespace-nowrap w-full sm:w-[300px]'
              >
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}