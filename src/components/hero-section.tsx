import Image from "next/image";
import Header from "./shared/header";
import Button from "./ui/button";

export default function HeroSection() {
  return (
    <section className='relative bg-[#05002C] min-h-screen flex flex-col py-8 overflow-hidden px-5 sm:px-10 lg:px-14'>
      <Header />
      <div className='flex-grow flex items-center justify-center'>
        <div className='mx-auto max-w-[1744px] relative z-10 w-full'>
          <div className='flex flex-col xl:flex-row xl:gap-5 items-center justify-center w-full'>
          
            <div className='flex flex-col justify-center text-center xl:text-left p-4 xl:p-0'>
              <p className='mb-6 text-5xl md:text-3xl lg:text-5xl xl:text-[150px] font-black leading-none text-white px-4'>
                WELCOME
                <br />
                TO VCAD
              </p>
              <p className='mt-6 mb-10 max-w-3xl text-base md:text-lg lg:text-xl xl:text-[24px] text-white leading-7 mx-auto xl:mx-0'>
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
            <div className='hidden xl:block min-h-[884.45px] relative flex-shrink-0'>
              <div className='flex flex-wrap gap-12'>
                <div className='relative w-[369px] h-[542px] border-2 border-[#E018E0]'>
                  <Image
                    src='/hero-1.jpg'
                    alt='Fashion'
                    className='h-full w-full object-cover'
                    width={369}
                    height={542}
                  />
                  <h3
                    className='absolute top-[28px] left-[-72px] bg-[#FF379E] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'
                    style={{ transform: "rotate(-15deg)" }}
                  >
                    FASHION
                  </h3>
                  <h3
                    className='absolute bottom-[15px] left-[-32px] bg-[#00FFD2] px-8 py-7 text-sm font-extrabold text-[#061665] uppercase sm:text-[30px]'
                    style={{ transform: "rotate(15deg)" }}
                  >
                    Media
                  </h3>
                  <h3
                    className='absolute bottom-[95px] right-[-110px] bg-[#061665] px-8 py-7 text-sm font-extrabold text-[#00FFD2] uppercase sm:text-[30px] z-10'
                    style={{ transform: "rotate(-15deg)" }}
                  >
                    Graphic Design
                  </h3>
                </div>

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
                  <h3
                    className='absolute bottom-[121px] right-[-122px] bg-[#061665] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'
                    style={{ transform: "rotate(15deg)" }}
                  >
                    Business
                  </h3>
                </div>
              </div>
              <div className='relative -z-10'>
                <div className='absolute right-[-120px] top-[-120px] flex gap-9'>
                  <div className='relative w-[299px] h-[438px] border-2 border-[#E018E0]'>
                    <Image
                      src='/hero-3.jpg'
                      alt='Fashion'
                      className='h-full w-full object-cover filter grayscale'
                      width={299}
                      height={438}
                    />
                    <h3 className='absolute bottom-[120px] left-[-152px] bg-[#061665] px-8 py-7 text-sm font-extrabold text-[#E018E0] uppercase sm:text-[30px]'>
                      management
                    </h3>
                  </div>

                  <div className='top-[-98px] relative w-[365px] h-[535px] border-2 border-[#E018E0]'>
                    <Image
                      src='/hero-4.jpg'
                      alt='Fashion'
                      className='h-full w-full object-cover'
                      width={365}
                      height={535}
                    />
                    <h3
                      className='absolute bottom-[150px] left-[-102px] bg-[#8EC8EE] px-8 py-7 text-sm font-extrabold text-white uppercase sm:text-[30px]'
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
      </div>
    </section>
  );
}