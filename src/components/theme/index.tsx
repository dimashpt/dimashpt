'use client';

import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/ui';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

interface ThemeProps extends React.FC<ThemeProviderProps> {
  Toggle: React.FC;
}

export const ThemeProvider: ThemeProps = ({
  children,
  ...props
}: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export const ThemeToggleComponent: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <Dropdown.Menu>
      <Dropdown.MenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
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

ThemeProvider.Toggle = ThemeToggleComponent;

export default ThemeProvider;
