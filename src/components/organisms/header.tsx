import Link from 'next/link';
import { NavMenu } from '../molecules';
import { NavItem } from '../atoms';

export const Header: React.FC = () => {
  return (
    <nav className="md:grid grid-cols-12 border-b flex items-center justify-between relative overflow-x-auto">
      <Link
        className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors"
        href="/"
      >
        @dimashpt
      </Link>
      <div className="md:col-span-9 lg:col-span-10 flex items-center justify-between">
        <NavMenu>
          <NavItem href="/">_hello</NavItem>
          <NavItem href="/about">_about.me</NavItem>
          <NavItem href="/contact">_contact</NavItem>
          <NavItem href="/projects">_projects</NavItem>
          <NavItem href="/articles">_articles</NavItem>
        </NavMenu>
      </div>
    </nav>
  );
};
