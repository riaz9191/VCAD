import Image from "next/image";
import HalfFillHeading from "./ui/HalfFillHeading";

export default function Partners() {
  return (
    <section id='partner-institutions' className='bg-[#05002C] px-6 py-24 sm:py-32 sm:px-20'>
      <div className='max-w-[1760px] mx-auto grid grid-cols-2 gap-32 items-center '>
        {/* Left Column: Title and Description */}
        <div className='flex flex-col gap-28 '>
          <h2 className='text-4xl  font-black text-white uppercase leading-tight sm:text-[64px]'>
            Partner <br />
            {/* This span creates the pink highlight effect behind the text */}
            <HalfFillHeading text='institutions' fillColor='#E018E0' />
          </h2>

          <div>
            
            <p className='text-[20px] leading-relaxed text-white max-w-md'>
              jfslkjfslkjafklsajfklsajfkljsadlkj `ldkjakldjkldjkldjk` djkl
              `jdkls`
              kdljslkjdklsjdklsjdksjdksjdksjdksldjklsjdklsjdksjdksjdksjkdjskdj
              sldjksldjklsjdksjdksjdksjdksjdksjdksjkdjskdjksjdksjdksjdksjkdjskdj
              skdjskdksjdks
            </p>
          </div>
        </div>

        {/* Right Column: Partner Logos */}
        <div className='flex flex-col gap-16'>
          <Image
            src='/partner-1.png'
            alt='Ravensbourne University London Logo'
            width={400}
            height={80}
            className='w-full max-w-[695px] h-auto'
          />
          <Image
            src='/partner-2.png'
            alt='Arts University Plymouth Logo'
            width={400}
            height={80}
            className='w-full max-w-[495px] h-auto'
          />
        </div>
      </div>
    </section>
  );
}
