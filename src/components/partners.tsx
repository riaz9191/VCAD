import Image from "next/image";
import HalfFillHeading from "./ui/HalfFillHeading";

export default function Partners() {
  return (
    <section id='partner-institutions' className='bg-[#05002C] px-6 py-24 sm:py-32 sm:px-20'>
      <div className='max-w-[1760px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-32 items-center'>
        <div className='flex flex-col gap-12 xl:gap-28 items-center xl:items-start text-center xl:text-left'>
          <h2 className='text-5xl xl:text-[64px] font-black text-white uppercase leading-tight'>
            Partner <br />
            <HalfFillHeading text='institutions' fillColor='#E018E0' />
          </h2>

          <div>
            <p className='text-base md:text-[20px] leading-relaxed text-white max-w-md'>
              Our established partnerships with leading universities and institutions
              provide our students with unique pathways to higher education and
              industry connections, ensuring a seamless transition from our college
              to the next stage of their creative and professional journeys.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-16 items-center xl:items-start'>
          <Image
            src='/partner-1.png'
            alt='Ravensbourne University London Logo'
            width={400}
            height={80}
            className='w-full max-w-[400px] xl:max-w-[695px] h-auto'
          />
          <Image
            src='/partner-2.png'
            alt='Arts University Plymouth Logo'
            width={400}
            height={80}
            className='w-full max-w-[400px] xl:max-w-[495px] h-auto'
          />
        </div>
      </div>
    </section>
  );
}