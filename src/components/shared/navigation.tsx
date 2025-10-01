"use client"; 

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation({ active }: { active: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#courses", label: "Courses" },
    { href: "#campuses", label: "Campuses" },
    { href: "#partner-institutions", label: "Partner institutions" },
    { href: "#student-testimonials", label: "student testimonials" },
    { href: "#stories", label: "stories" },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setIsOpen(false)} 
            className={`block py-2 hover:text-cyan-400 transition-colors uppercase tracking-wide ${active === item.href
                ? "text-white font-extrabold"
                : "text-white/80"
              }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <nav className='bg-[#05002C] md:bg-transparent sticky top-0 z-50'>
      {/* Desktop Navigation (Original component, hidden on mobile) */}
      <div className='hidden md:flex justify-center items-center whitespace-nowrap max-w-[754px] h-[80px] mx-auto border border-[#E018E0] bg-[#05002C] p-[30px]'>
        <ul className='flex items-center justify-center gap-4 text-[16px]'>
          <NavLinks />
        </ul>
      </div>

      {/* Mobile Header (Visible on mobile only) */}
      <div className='md:hidden flex justify-between items-center p-4 border-b border-[#E018E0]/20'>
        <a href='#' className='text-white font-bold text-lg'>
          VCAD
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white focus:outline-none'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-[#05002C] border-b border-[#E018E0]/20'>
          <ul className='flex flex-col items-center justify-center gap-4 text-[16px] py-4'>
            <NavLinks />
          </ul>
        </div>
      )}
    </nav>
  );
}