import { ThemeToggle } from '@/components';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <main>
      <nav className="md:grid grid-cols-12 border-b flex items-center justify-between relative overflow-x-auto">
        <Link
          className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors"
          href="/"
        >
          @DIMASHPT
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
          <p>Hi There! I&apos;m</p>
          <h1 className="text-6xl font-bold">Dimas Hayat Pratama</h1>
          <p className="text-2xl mt-2">&gt; Front-end developer</p>
        </div>
      </section>
      <footer className="border-t text-xs flex items-center justify-between select-none relative">
        <div>Left</div>
        <div>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
