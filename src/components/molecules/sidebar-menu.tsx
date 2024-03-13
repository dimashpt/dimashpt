'use client';

import { Icons } from '@/assets';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SidebarMenuProps = {
  href: string;
  icon?: React.ReactNode;
  label: string;
  openInNewTab?: boolean;
};

const link = cva(
  'px-5 py-1 flex gap-x-2 hover:text-foreground transition-colors items-center',
  {
    variants: {
      active: {
        true: 'text-foreground bg-primary/10 font-bold',
        false: 'text-muted-foreground',
      },
      openInNewTab: {
        true: '',
        false: 'hover:bg-primary/10',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  href,
  icon,
  label,
  openInNewTab,
}: SidebarMenuProps) => {
  const path = usePathname();
  const active = path === href;
  const className = cn(link({ active, openInNewTab }));

  if (openInNewTab) {
    return (
      <a href={href} target="_blank" className={className}>
        {icon} {label} {openInNewTab ? <Icons.NewTab width={10} /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {icon} {label} {openInNewTab ? <Icons.NewTab width={10} /> : null}
    </Link>
  );
};
