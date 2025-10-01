import Image from "next/image";
import Button from "./ui/button";

// Data for the stories. Easy to add more here.
const storiesData = [
  {
    id: 1,
    imageSrc: "/stories-1.jpg",
    title: "INDUCTION IN VCAD CANARY WHARF CAMPUS",
    highlightedPart: null, // No highlighted part for this story
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
    highlightedPart: "BUILD YOUR PORTFOLIO", // This part will be pink
    description:
      "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    buttons: [{ text: "Read article", variant: "primary" }],
  },
];

export default function Stories() {
  return (
    <section className='bg-[#05002C] py-24 sm:py-32'>
      <div className='max-w-[1750px] mx-auto px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-[64px] font-black text-white uppercase mb-20'>
          Stories
        </h2>

        {/* Container for all story items */}
        <div className='flex flex-col gap-20'>
          {storiesData.map((story) => (
            // Grid layout for a single story item (Image + Text)
            <div
              key={story.id}
              className='grid lg:grid-cols-2 gap-12 xl:gap-24 items-start'
            >
              {/* Left Column: Image */}
              <div className=' w-[677px] h-[709px]'>
                <Image
                  src={story.imageSrc}
                  alt={story.title}
                  width={600}
                  height={450}
                  className='w-full h-full object-cover border-2 border-white'
                />
              </div>

              {/* Right Column: Text Content */}
              <div className='flex flex-col justify-center'>
                <h3 className='text-3xl lg:text-[64px] font-black text-white uppercase leading-tight'>
                  {story.title}
                  {/* Render the highlighted part if it exists */}
                  {story.highlightedPart && (
                    <span className='block text-[#FF1C9E] mt-1'>
                      {story.highlightedPart}
                    </span>
                  )}
                </h3>
                <p className='text-white text-base sm:text-[24px] leading-relaxed mt-6 max-w-4xl'>
                  {story.description}
                </p>

                {/* Dynamically render buttons */}
                <div className='flex flex-wrap gap-4 mt-8'>
                  {story.buttons.map((button) => (
                    <Button
                      key={button.text}
                          variant={button.variant as "primary" | "outline"} // Cast type for safety
                          className="font-[900]"
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
