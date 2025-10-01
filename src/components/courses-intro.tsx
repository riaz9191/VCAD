import Image from "next/image"
import Button from "./ui/button"
import HalfFillHeading from "./ui/HalfFillHeading";

export default function CoursesIntro() {
  return (
    <section className='bg-[#05002C] py-20 mt-5'>
      <div className='max-w-[1750px] mx-auto px-4'>
        <div className='flex gap-36 items-start mx-auto'>
          {/* Left side - Image with border */}
          <div className='flex justify-start w-[677px] h-[709px] mb-10 lg:mb-0'>
            <div className='border-2 border-white w-[677px] h-[709px]'>
              <Image
                src='/course.jpg'
                alt='Creative typography design poster'
                width={677}
                height={709}
                className='w-auto h-[709px] object-cover'
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className='space-y-6'>
            <h2 className='text-5xl lg:text-[64px] font-black text-white leading-tight'>
              WHAT WILL YOU <br />
              <HalfFillHeading text='STUDY?' fillColor='#061665' />
            </h2>

            <p className='text-white/90 text-[24px] leading-8 max-w-3xl'>
              If you join Victoria College of Arts and Design, you can expect
              the highest calibre of teaching, cutting-edge facilities, and
              exceptional support. You will be encouraged to explore your
              creativity and career at the creative and tech industries.
            </p>

            <div className='flex flex-wrap gap-6 pt-4'>
              <Button className='bg-#8EC8EE hover:bg-cyan-500 text-[#05002C] font-bold px-8 py-6 text-base'>
                View Courses
              </Button>
              <Button
                variant='outline'
                className='border border-[#8EC8EE] text-[#8EC8EE] hover:bg-white hover:text-[#0a1628] font-bold px-8 py-6 text-base bg-transparent whitespace-nowrap w-[300px]'
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