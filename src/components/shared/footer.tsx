import Image from "next/image";
// Using custom simple SVGs for perfect icon matching, but lucide-react is also a great choice.
import {  FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

export default function Footer() {
  const navLinks = ["Policies", "Contact us", "Meet the Team"];

  return (
    <footer className='bg-[#05002C] px-6 py-12  md:px-12 lg:px-24 mt-44'>
      <div className='mx-auto max-w-[1750px] flex flex-col md:flex-row items-center justify-between gap-8 mb-10'>
        {/* Left Side: Logo and Copyright */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <Image
            src='/images/logo.png'
            alt='Victoria College of Arts and Design Logo'
            width={200}
            height={50}
            className='h-auto'
          />
          <p className='mt-4 text-xs sm:text-[16px] text-white/60'>
            © 2025 Victoria College of Arts and Design, All rights reserved.
          </p>
        </div>

        {/* Right Side: Navigation and Socials within a bordered container */}
        <div className='border border-[#8EC7EE] px-6 py-3'>
          <div className='flex flex-col sm:flex-row items-center gap-6'>
            {/* Navigation Links */}
            <nav className='flex items-center gap-6 '>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href='#'
                  className='text-[#8EC7EE] text-base sm:text-[24px] transition-colors font-[400] hover:text-white'
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className='flex items-center gap-1'>
              <a href='#' aria-label='Facebook'>
                <FacebookIcon className='h-6 w-6 text-[#8EC7EE] hover:text-white transition-colors' />
              </a>
              <a href='#' aria-label='Instagram'>
                <InstagramIcon className='h-6 w-6 text-[#8EC7EE] hover:text-white transition-colors' />
              </a>
              <a href='#' aria-label='YouTube'>
                <YoutubeIcon className='h-6 w-6 text-[#8EC7EE] hover:text-white transition-colors' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
