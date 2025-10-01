import Image from "next/image";
import HalfFillHeading from "./ui/HalfFillHeading";

const ArrowRightIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='3'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
    <polyline points='12 5 19 12 12 19'></polyline>
  </svg>
);

export default function Campuses() {
  const campusData = [
    {
      name: "CANARY WHARF",
      image: "/campus-1.jpg",
    },
    {
      name: "BOROUGH",
      image: "/campus-2.jpg",
    },
    {
      name: "MANCHESTER",
      image: "/campus-3.jpg",
    },
  ];

  return (
    <section id='campuses' className='bg-[#05002C] py-24 sm:py-32 mt-32 xl:mt-60'>
      <div className='relative bg-[#06145A] mx-auto px-6 lg:px-8 py-20'>
        <div className='hidden lg:block'>
          <div
            className='absolute top-52 left-[9rem] bg-[#FF379E] text-white font-[900] text-[30px] uppercase px-5 py-1'
            style={{ transform: "rotate(-10deg)" }}
          >
            Canary Wharf
          </div>
          <div
            className='absolute bottom-36 left-[10rem] bg-[#8EC8EE] text-[#061b88] font-[900] text-[30px] uppercase px-4 py-2'
            style={{ transform: "rotate(20deg)" }}
          >
            Manchester
          </div>
          <div
            className='absolute top-72 right-[5rem] bg-[#00FFD2] text-[#05002C] font-[900] text-[30px] uppercase px-2 py-2'
            style={{ transform: "rotate(20deg)" }}
          >
            Borough
          </div>
        </div>

        <div className='relative -mt-24 xl:-mt-44'>
          <div className='w-full max-w-lg mx-auto xl:max-w-none xl:w-[750px] xl:h-[483px]'>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-2 h-full'>
              {campusData.map((campus) => (
                <div key={campus.name} className='flex flex-col'>
                  <div className='bg-[#8EC8EE] text-[#05002C] font-bold text-sm sm:text-[20px] uppercase p-3 flex justify-between items-center'>
                    <span>{campus.name}</span>
                    <ArrowRightIcon />
                  </div>
                  <div className='flex-grow overflow-hidden aspect-video xl:aspect-auto'>
                    <Image
                      src={campus.image}
                      alt={`View of the ${campus.name} campus location`}
                      className='w-full h-full object-cover'
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='text-center mt-16'>
          <HalfFillHeading
            text='CAMPUSES'
            fillColor='#86DCFF'
            className='text-5xl xl:text-[64px] font-black text-white uppercase tracking-wider'
          />
          <p className='max-w-3xl mx-auto text-white text-lg md:text-[24px] leading-relaxed mt-6'>
            We have multiple locations across the UK, all strategically situated
            in vibrant city centers and easily accessible by public transport.
          </p>
        </div>
      </div>
    </section>
  );
}