'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarMenuProps = {
  href: string;
  icon?: React.ReactNode;
  iconSuffix?: React.ReactNode;
  label: string;
  openInNewTab?: boolean;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  href,
  icon,
  iconSuffix,
  label,
  openInNewTab,
}: SidebarMenuProps) => {
  const path = usePathname();
  const active = path === href;
  const className = `px-5 py-1 flex gap-x-2 hover:text-foreground transition-colors items-center ${active ? 'text-foreground bg-primary/10' : 'text-muted-foreground'} ${!openInNewTab && 'hover:bg-primary/10'}`;

  if (openInNewTab) {
    return (
      <a href={href} target="_blank" className={className}>
        {icon} {label} {iconSuffix}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {icon} {label} {iconSuffix}
    </Link>
  );
};
