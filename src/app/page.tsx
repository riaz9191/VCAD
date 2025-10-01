import Campuses from "@/components/campuses";
import CoursesIntro from "@/components/courses-intro";
import HeroSection from "@/components/hero-section";
import MissionStatement from "@/components/mission-statement";
import Navigation from "@/components/shared/navigation";
import Partners from '../components/partners';
import Testimonials from "@/components/testimonials";
import Stories from "@/components/stories";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='bg-[#05002C]'>
        <Navigation />
        <CoursesIntro />
        <MissionStatement />
        <Campuses />
        <Partners />
        <Testimonials />
        <Stories />
        <Footer />
      </div>
      
    </>
  );
}
