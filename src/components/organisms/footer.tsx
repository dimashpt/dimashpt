import { FooterItem } from '../atoms';
import { LocaleToggle, ThemeToggle } from '../molecules';
import { Icons } from '@/assets';
import packageJson from '../../../package.json';
import { useTranslation } from '@/lib/i18n';

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

export const Footer: React.FC = async () => {
  const { t } = await useTranslation('common');

  return (
    <footer className="border-t text-xs flex items-center justify-between select-none relative">
      <div className="flex divide-x divide border-r">
        <FooterItem href="https://github.com/dimashpt/dimashpt" target="_blank">
          <Icons.Tag />v{packageJson.version}
        </FooterItem>
        <FooterItem href="#">
          <Icons.Cross />0
          <Icons.Warning />0
        </FooterItem>
      </div>
      <div className="flex divide-x divide border-l">
        <LocaleToggle />
        <ThemeToggle />
        <FooterItem href="https://github.com/dimashpt" target="_blank">
          {t('username')}
          <Icons.GitHub className="h-4 w-4" />
        </FooterItem>
      </div>
    </footer>
  );
};
