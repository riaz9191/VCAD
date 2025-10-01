import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // It's best practice to use Next.js's Link component for navigation

const navItems = [
  { href: "#courses", label: "Courses" },
  { href: "#campuses", label: "Campuses" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact Us" },
];

export default function Header() {
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
      <nav className='hidden md:flex items-center gap-6 lg:gap-10'>
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
      <button className='md:hidden text-white hover:text-[#00C2FF] transition-colors p-2 -mr-2'>
        <Menu className='size-8' />
      </button>
    </header>
  );
}