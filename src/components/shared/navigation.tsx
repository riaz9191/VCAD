export default function Navigation({ active }: { active: string }) {
  const navItems = [
    { href: "#courses", label: "Courses" },
    { href: "#campuses", label: "Campuses" },
    { href: "#partner-institutions", label: "Partner institutions" },
    { href: "#student-testimonials", label: "student testimonials" },
    { href: "#stories", label: "stories" },
  ];

  return (
    <nav className=' bg-none sticky top-0 z-50'>
      <div className='bg-[#05002C] flex justify-center items-center whitespace-nowrap max-w-[754px] max-h-[80px] mx-auto border border-[#E018E0] p-[30px] '>
        <ul className='flex items-center justify-center gap-4 text-[16px] '>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`hover:text-cyan-400 transition-colors uppercase tracking-wide ${
                  active === item.href
                    ? "text-white font-extrabold"
                    : "text-white/80"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
