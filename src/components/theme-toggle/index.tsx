'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Dropdown } from '@/components/ui';
import Link from 'next/link';
import { Icons } from '@/assets';

type Props = {
  buttonClassName?: string;
};

const ThemeToggleComponent: React.FC<Props> = ({ buttonClassName }: Props) => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Dropdown.Menu>
      <Dropdown.MenuTrigger asChild>
        <Link
          href="#"
          className="flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
        >
          {resolvedTheme === 'light' ? <Icons.Sun /> : <Icons.Moon />}
        </Link>
      </Dropdown.MenuTrigger>
      <Dropdown.MenuContent align="end">
        <Dropdown.MenuItem onClick={() => setTheme('light')}>
          Light
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => setTheme('dark')}>
          Dark
        </Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => setTheme('system')}>
          System
        </Dropdown.MenuItem>
      </Dropdown.MenuContent>
    </Dropdown.Menu>
  );
};

export default ThemeToggleComponent;
