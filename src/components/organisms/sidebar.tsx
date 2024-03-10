import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../atoms';
import { useTranslation } from '@/lib/i18n';
import { Icons } from '@/assets';
import { SidebarMenu } from '../molecules';
import { headers } from 'next/headers';
import { getLangFromPathname } from '@/lib/utils';

const socials = [
  {
    name: 'Email',
    link: 'mailto:dimashpt@gmail.com',
    icon: Icons.Mail,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dimashpt',
    icon: Icons.LinkedIn,
  },
  {
    name: 'GitHub',
    link: 'https://www.github.com/in/dimashpt',
    icon: Icons.GitHub,
  },
  {
    name: 'Twitter',
    link: 'https://x.com/dimashpt',
    icon: Icons.X,
  },
];

export const Sidebar: React.FC = async () => {
  const lang = getLangFromPathname(headers().get('x-pathname')!);
  const { t } = await useTranslation('nav');

  return (
    <aside className="border-r hidden md:flex">
      <div id="accordion" className="flex flex-col w-full">
        <Accordion type="multiple" defaultValue={['profile', 'contact']}>
          <AccordionItem value="profile" className="border-none">
            <AccordionTrigger className="px-5 py-2.5 border-b text-base font-bold hover:no-underline">
              Profile
            </AccordionTrigger>
            <AccordionContent className="py-3">
              <SidebarMenu
                href={`/${lang}/about`}
                icon={<Icons.Profile />}
                label="bio.ts"
              />
              <SidebarMenu
                href={`/${lang}/about/education`}
                icon={<Icons.Education />}
                label="education.ts"
              />
              <SidebarMenu
                href={`/${lang}/about/experience`}
                icon={<Icons.Work />}
                label="experience.ts"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="contact" className="border-none">
            <AccordionTrigger className="px-5 py-2.5 border-b text-base font-bold hover:no-underline">
              Contact
            </AccordionTrigger>
            <AccordionContent className="py-4">
              {socials.map(({ icon: Icon, ...social }) => (
                <SidebarMenu
                  key={social.link}
                  href={social.link}
                  openInNewTab
                  label={social.name}
                  icon={<Icon />}
                  iconSuffix={<Icons.NewTab width={10} />}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};
