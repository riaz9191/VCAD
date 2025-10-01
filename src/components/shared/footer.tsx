import Image from "next/image";
import { Facebook, Instagram, Youtube } from 'lucide-react'; // Correctly import from lucide-react

export default function Footer() {
  const navLinks = ["Policies", "Contact us", "Meet the Team"];

  return (
    <footer className='bg-[#05002C] px-6 py-12 md:px-12 lg:px-24 xl:mt-44'>
      <div className='mx-auto max-w-[1750px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8'>
        {/* Left Side */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <Image
            src='/images/logo.png' 
            alt='Victoria College of Arts and Design Logo'
            width={200}
            height={50}
            className='h-auto'
          />
          <p className='mt-4 text-sm md:text-[16px] text-white/60'>
            © 2025 Victoria College of Arts and Design, All rights reserved.
          </p>
        </div>

        {/* Right Side: Navigation and Socials */}
        <div className='w-full max-w-2xl'>
          <div className='border border-[#8EC7EE] px-6 py-4'>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-6'>
              <nav className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12'>
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href='#'
                    className='text-[#8EC7EE] text-lg sm:text-xl md:text-[24px] transition-colors font-[400] hover:text-white whitespace-nowrap'
                  >
                    {link}
                  </a>
                ))}
              </nav>

              {/* Social Icons */}
              <div className='flex items-center gap-4'>
                <a href='#' aria-label='Facebook'>
                  <Facebook className='h-6 w-6 text-[#8EC7EE] hover:text-white transition-colors' />
                </a>
                <a href='#' aria-label='Instagram'>
                  <Instagram className='h-6 w-6 text-[#8EC7EE] hover:text-white transition-colors' />
                </a>
                <a href='#' aria-label='YouTube'>
                  <Youtube className='h-6 w-6 text-[#8EC7EE] hover:text-white transition-colors' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}