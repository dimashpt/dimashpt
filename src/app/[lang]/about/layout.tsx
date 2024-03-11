import { NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';
import { Sidebar, SidebarProps } from '@/components/organisms';
import { Icons } from '@/assets';
import { getLangFromPathname } from '@/lib/utils';
import { headers } from 'next/headers';
import { SidebarMenuProps } from '@/components/molecules';

const socials = [
  {
    name: 'Email',
    link: 'mailto:dimashpt@gmail.com',
    icon: <Icons.Mail />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dimashpt',
    icon: <Icons.LinkedIn />,
  },
  {
    name: 'GitHub',
    link: 'https://www.github.com/in/dimashpt',
    icon: <Icons.GitHub />,
  },
  {
    name: 'Twitter',
    link: 'https://x.com/dimashpt',
    icon: <Icons.X />,
  },
];

const AboutLayout: NextPage<React.PropsWithChildren> = async ({
  children,
}: React.PropsWithChildren) => {
  const { t } = await useTranslation('about');
  const lang = getLangFromPathname(headers().get('x-pathname')!);
  const items: SidebarProps['sections'] = [
    {
      id: 'profile',
      label: t('menu.title_profile'),
      items: [
        {
          href: `/${lang}/about`,
          label: t('menu.item.bio'),
          icon: <Icons.Profile />,
        },
        {
          href: `/${lang}/about/education`,
          label: t('menu.item.edu'),
          icon: <Icons.Education />,
        },
        {
          href: `/${lang}/about/experience`,
          label: t('menu.item.exp'),
          icon: <Icons.Work />,
        },
      ],
    },
    {
      id: 'contact',
      label: t('menu.title_contact'),
      items: socials.map<SidebarMenuProps>((social) => ({
        href: social.link,
        label: social.name,
        icon: social.icon,
        openInNewTab: true,
      })),
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-6 overflow-hidden h-full w-full">
      <Sidebar sections={items} />
      <section className="md:col-span-5 overflow-y-auto h-auto">
        {children}
      </section>
    </section>
  );
};

export default AboutLayout;
