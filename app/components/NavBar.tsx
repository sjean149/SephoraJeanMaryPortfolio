const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-5 gap-y-2 px-4 py-3 text-sm sm:text-base md:gap-8 md:py-4"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-300 transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
