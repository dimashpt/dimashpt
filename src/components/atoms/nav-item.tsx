'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
}: NavItemProps) => {
  const path = usePathname();
  const active = path === href;

  return (
    <li className="relative group">
      <Link
        href={href}
        className="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-foreground"
      >
        {children}
      </Link>
      <div
        className={`absolute bottom-0 bg-foreground transition-all ${active ? 'h-0.5' : 'h-0'} group-hover:h-0.5 w-full`}
      />
    </li>
  );
};
