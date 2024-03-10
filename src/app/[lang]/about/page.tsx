import { Metadata, NextPage } from 'next';
import { Icons } from '@/assets';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/atoms';
import { useTranslation } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'About',
};

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

const AboutPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-6 grid-flow-row-dense">
      <aside className="border-r hidden md:flex">
        <div id="accordion" className="flex flex-col w-full">
          <Accordion type="multiple" defaultValue={['profile', 'contact']}>
            <AccordionItem value="profile" className="border-none">
              <AccordionTrigger className="px-5 py-2.5 border-b text-base font-bold hover:no-underline">
                Profile
              </AccordionTrigger>
              <AccordionContent className="py-3">
                <Link
                  href="#"
                  className="px-5 py-1 flex gap-x-2 text-foreground font-bold hover:text-foreground transition-colors items-center bg-primary/10 hover:bg-primary/10"
                >
                  <Icons.Profile />
                  bio.ts
                </Link>
                <Link
                  href="#"
                  className="px-5 py-1 flex gap-x-2 text-muted-foreground hover:text-foreground transition-colors items-center hover:bg-primary/10"
                >
                  <Icons.Work />
                  experience.ts
                </Link>
                <Link
                  href="#"
                  className="px-5 py-1 flex gap-x-2 text-muted-foreground hover:text-foreground transition-colors items-center hover:bg-primary/10"
                >
                  <Icons.Education />
                  education.ts
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact" className="border-none">
              <AccordionTrigger className="px-5 py-2.5 border-b text-base font-bold hover:no-underline">
                Contact
              </AccordionTrigger>
              <AccordionContent className="py-4">
                {socials.map(({ icon: Icon, ...social }) => (
                  <a
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    className="px-5 py-1 flex gap-x-2 text-muted-foreground hover:text-foreground transition-colors items-center"
                  >
                    <Icon />
                    {social.name}
                    <Icons.NewTab height={10} />
                  </a>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>
      <div className="flex flex-col md:col-span-5">
        <div id="tabs" className="flex border-b text-sm">
          <div className="border-r px-5 py-3 flex justify-center items-center">
            personal-profile.tsx
          </div>
        </div>
        <div id="tab-content" className="flex-grow p-5">
          Content
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
