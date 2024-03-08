import { FooterItem, ThemeToggle } from '../atoms';
import { Icons } from '@/assets';
import packageJson from '../../../package.json';

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

export const Footer: React.FC = () => {
  return (
    <footer className="border-t text-xs flex items-center justify-between select-none relative">
      <div className="flex divide-x divide border-r">
        <FooterItem href="#">
          <Icons.Tag />v{packageJson.version}
        </FooterItem>
        <FooterItem href="#">
          <Icons.Cross />0
          <Icons.Warning />0
        </FooterItem>
      </div>
      <div className="flex divide-x divide border-l">
        <ThemeToggle />
        {[socials[0]].map(({ icon: Icon, ...social }) => (
          <FooterItem key={social.link} href={social.link}>
            {social.username}
            <Icon className="h-4 w-4" />
          </FooterItem>
        ))}
      </div>
    </footer>
  );
};
