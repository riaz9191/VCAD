import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className='mx-auto flex max-w-[1760px] items-center justify-between z-20 relative'>
      {/* Logo */}
      <Image
        src='/images/logo.png' // Using the combined logo as in your code
        alt='Victoria College of Arts and Design Logo'
        width={185} // Adjusted size for better scale
        height={70}
        className='h-auto w-[185px] object-contain px-2'
      />

      {/* Menu Icon */}
      <button className='text-white hover:text-[#00C2FF] transition-colors px-8'>
        <Menu className='size-6' />
      </button>
    </header>
  );
}
