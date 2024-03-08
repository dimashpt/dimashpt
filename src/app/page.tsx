import { Icons } from '@/assets';
import { ThemeToggle } from '@/components';
import Link from 'next/link';
import { version } from '../../package.json';

const socials = [
  {
    username: 'dimashpt',
    link: 'https://github.com/dimashpt',
    icon: Icons.GitHub,
  },
  {
    username: 'dimashpt',
    link: 'https://www.linkedin.com/in/dimashpt',
    icon: Icons.LinkedIn,
  },
  {
    username: 'dimashpt',
    link: 'https://twitter.com/dimashpt',
    icon: Icons.X,
  },
  {
    username: 'dimashpt',
    link: 'https://www.instagram.com/dimashpt',
    icon: Icons.Instagram,
  },
  {
    username: 'dimashpt',
    link: 'https://www.facebook.com/dimashpt',
    icon: Icons.Facebook,
  },
];

export default function Home(): JSX.Element {
  return (
    <main>
      <nav className="md:grid grid-cols-12 border-b flex items-center justify-between relative overflow-x-auto">
        <Link
          className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors"
          href="/"
        >
          @dimashpt
        </Link>
        <div className="md:col-span-9 lg:col-span-10 flex items-center justify-between">
          <ul className="md:flex items-center divide-x w-max border-r hidden shrink-0">
            <li className="relative group">
              <Link
                href="/"
                className="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-foreground"
              >
                _hello
              </Link>
              <div className="absolute bottom-0 bg-foreground transition-all h-0.5 group-hover:h-0.5 w-full" />
            </li>
            <li className="relative group">
              <Link
                className="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-muted-foreground"
                href="#"
              >
                _about-me
              </Link>
              <div className="absolute bottom-0 bg-foreground transition-all h-0 group-hover:h-0.5 w-full" />
            </li>
          </ul>
        </div>
      </nav>
      <section className="flex items-center justify-center flex-grow">
        <div className="flex flex-col">
          <p className="text-sm md:text-base text-muted-foreground">
            Hi There! I&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Dimas Pratama
          </h1>
          <h5 className="text-base md:text-2xl mt-2 text-muted-foreground">
            &gt; Front-end developer
          </h5>
        </div>
      </section>
      <footer className="border-t text-xs flex items-center justify-between select-none relative">
        <div className="flex divide-x divide border-r">
          <Link
            href="#"
            target="_blank"
            className="flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
          >
            <Icons.Tag />v{version}
          </Link>
          <Link
            href="#"
            className="flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
          >
            <Icons.Cross />0
            <Icons.Warning />0
          </Link>
        </div>
        <div className="flex divide-x divide border-l">
          <ThemeToggle />
          {[socials[0]].map(({ icon: Icon, ...social }) => (
            <Link
              key={social.link}
              href={social.link}
              target="_blank"
              className="flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
            >
              {social.username}
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
