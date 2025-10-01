export default function Navigation() {
  return (
    <nav className='bg-[#05002C] backdrop-blur-lg sticky top-0 z-50'>
      <div className='flex justify-center items-center whitespace-nowrap max-w-[754px] max-h-[80px] mx-auto border border-[#E018E0] p-[30px] '>
        <ul className='flex items-center justify-center gap-4 text-[16px] '>
          <li>
            <a
              href='#courses'
              className='text-white hover:text-cyan-400 transition-colors uppercase tracking-wide font-extrabold'
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href='#analysis'
              className='text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-wide'
            >
              Campuses
            </a>
          </li>
          <li>
            <a
              href='#partners'
              className='text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-wide'
            >
              Partner institutions
            </a>
          </li>
          <li>
            <a
              href='#testimonials'
              className='text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-wide'
            >
              student testimonials
            </a>
          </li>
          <li>
            <a
              href='#stories'
              className='text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-wide'
            >
              stories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
