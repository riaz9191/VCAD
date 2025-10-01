import Image from "next/image";
import Button from "./ui/button";

const storiesData = [
  {
    id: 1,
    imageSrc: "/stories-1.jpg",
    title: "INDUCTION IN VCAD CANARY WHARF CAMPUS",
    highlightedPart: null,
    description:
      "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    buttons: [
      { text: "Read article", variant: "primary" },
      { text: "View full gallery", variant: "outline" },
    ],
  },
  {
    id: 2,
    imageSrc: "/stories-2.jpg",
    title: "BE READY FOR APPLYING! FIVE TIPS TO",
    highlightedPart: "BUILD YOUR PORTFOLIO",
    description:
      "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    buttons: [{ text: "Read article", variant: "primary" }],
  },
];

export default function Stories() {
  return (
    <section id='stories' className='bg-[#05002C] py-24 sm:py-32 sm:px-10'>
      <div className='max-w-[1750px] mx-auto px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-[64px] font-black text-white uppercase mb-20'>
          Stories
        </h2>

        <div className='flex flex-col gap-20'>
          {storiesData.map((story) => (
            <div
              key={story.id}
              className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-start'
            >
              <div className=' lg:w-[677px] lg:h-[709px] '>
                <Image
                  src={story.imageSrc}
                  alt={story.title}
                  width={677}
                  height={709}
                  className='w-full h-full object-cover border-2 border-white'
                />
              </div>

              <div className='flex flex-col justify-center items-center text-center xl:items-start xl:text-left'>
                <h3 className='text-4xl md:text-5xl xl:text-[64px] font-black text-white uppercase leading-tight max-w-5xl'>
                  {story.title} <br />
                  {story.highlightedPart && (
                    <span className=' text-[#E018E0] mt-1'>
                      {story.highlightedPart}
                    </span>
                  )}
                </h3>
                <p className='text-white text-lg md:text-[24px] leading-relaxed mt-6 max-w-4xl'>
                  {story.description}
                </p>


                <div className='flex flex-wrap gap-4 mt-8 justify-center xl:justify-start'>
                  {story.buttons.map((button) => (
                    <Button
                      key={button.text}
                      variant={button.variant as "primary" | "outline"}
                      className='font-[900]'
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}