import Link from 'next/link';

type FooterItemProps = {
  children: React.ReactNode;
  href: string;
};

export const FooterItem: React.FC<FooterItemProps> = ({
  children,
  href,
}: FooterItemProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
    >
      {children}
    </Link>
  );
};
