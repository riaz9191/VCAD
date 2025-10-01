import CoursesIntro from "@/components/courses-intro";
import HeroSection from "@/components/hero-section";
import MissionStatement from "@/components/mission-statement";
import Navigation from "@/components/shared/navigation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='bg-[#05002C]'>
        <Navigation />
        <CoursesIntro />
        <MissionStatement />
        {/* <CoursesIntro /> */}
      </div>
    </>
  );
}
