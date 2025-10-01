"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#courses", label: "Courses" },
  { href: "#campuses", label: "Campuses" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact Us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='mx-auto flex w-full max-w-[1760px] items-center justify-between z-20 relative py-2 px-6 lg:px-12'>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Victoria College of Arts and Design Logo'
          width={185}
          height={70}
          className='h-auto w-[150px] md:w-[185px] object-contain'
        />
      </Link>
    
      <nav className='hidden'>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className='text-white/80 hover:text-white transition-colors text-base font-medium uppercase tracking-wider'
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        className='text-white hover:text-[#00C2FF] transition-colors p-2 -mr-2'
        onClick={toggleMenu}
      >
        <Menu className='size-8' />
      </button>

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-40'>
          <div className='fixed top-0 right-0 h-full w-64 bg-[#05002C] shadow-lg z-50 p-6'>
            <button
              className='absolute top-4 right-4 text-white hover:text-[#00C2FF] transition-colors'
              onClick={toggleMenu}
            >
              <X className='size-8' />
            </button>
            <nav className='flex flex-col items-start gap-6 mt-16'>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='text-white/80 hover:text-white transition-colors text-lg font-medium uppercase tracking-wider'
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  ) ;
}