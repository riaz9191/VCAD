import Image from "next/image";
import Header from "./shared/header";
import Button from "./ui/button";

export default function HeroSection() {
  return (
    <section className='relative min-h-screen bg-[#05002C] py-12 overflow-hidden px-5 sm:px-10 lg:px-14'>
      <Header />
      {/* Main Content */}
      <div className='mx-auto mt-20 sm:mt-0 max-w-[1744px] min-h-[885px] relative z-10'>
        <div className='flex lg:gap-5 items-center'>
          {/* Left: Heading and CTA */}
          <div className='flex flex-col justify-center'>
            <h1 className='mb-6 text-5xl font-black leading-none text-white md:text-7xl lg:text-[150px] px-4'>
              WELCOME
              <br />
              TO VCAD
            </h1>
            <p className='mt-6 mb-10 max-w-3xl text-base text-white md:text-[24px] leading-7'>
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas. We
              work with a variety of experts and esteemed companies using a
              collaborative approach. Located in London&apos;s Design District,
              we have valuable connections within our industry. Search our
              latest courses.
            </p>
            <div>
              <Button variant='primary'>Apply Now</Button>
            </div>
          </div>

          {/* Right: Course Collage */}
          <div className='hidden lg:block min-h-[884.45px] relative'>
            {/* CARD: Fashion */}
            <div className='flex flex-wrap gap-12'>
              <div className='relative w-[369px] h-[542px] border-2 border-[#FF1C9E]'>
                <Image
                  src='/hero-1.jpg'
                  alt='Fashion'
                  className='h-full w-full object-cover'
                  width={369}
                  height={542}
                />
                <h3
                  className='absolute top-[28px] left-[-72px] bg-[#FF1C9E] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'
                  style={{ transform: "rotate(-15deg)" }}
                >
                  FASHION
                </h3>
              </div>

              {/* CARD: Media */}
              <div className='relative w-[335px] h-[490px] border-2 border-[#E018E0]'>
                <Image
                  src='/hero-2.jpg'
                  alt='Fashion'
                  className='h-full w-full object-cover'
                  width={335}
                  height={490}
                />
                <h3
                  className='absolute top-[11px] right-[-72px] bg-[#E018E0] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'
                  style={{ transform: "rotate(15deg)" }}
                >
                  photography
                </h3>
              </div>
            </div>
            <div className='relative -z-10'>
              <div className='absolute right-[-120px] top-[-120px] flex gap-9'>
                <div className='relative w-[299px] h-[438px] border-2 border-[#FF1C9E]'>
                  <Image
                    src='/hero-3.jpg'
                    alt='Fashion'
                    className='h-full w-full object-cover'
                    width={299}
                    height={438}
                  />
                  <h3 className='absolute bottom-[150px] left-[-72px] bg-[#061665] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'>
                    management
                  </h3>
                </div>

                {/* CARD: Media */}
                <div className='top-[-98px] relative w-[365px] h-[535px] border-2 border-[#E018E0]'>
                  <Image
                    src='/hero-4.jpg'
                    alt='Fashion'
                    className='h-full w-full object-cover'
                    width={365}
                    height={535}
                  />
                  <h3
                    className='absolute bottom-[150px] left-[-72px] bg-[#8EC8EE] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'
                    style={{ transform: "rotate(-15deg)" }}
                  >
                    marketing
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
