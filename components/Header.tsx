'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Signal', href: '/blog' },
  { label: '/about', href: '#' },
];

export default function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-matrix/50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-mono font-bold text-matrix tracking-widest">
          FLESH & CODE
        </Link>

        <ul className="flex gap-8 items-center font-mono text-sm tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-all duration-300 ${
                    isActive
                      ? 'text-matrix shadow-sm'
                      : 'text-static hover:text-chrome'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
