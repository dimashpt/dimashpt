import { NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';
import { Sidebar } from '@/components/organisms';

const AboutLayout: NextPage<React.PropsWithChildren> = async ({
  children,
}: React.PropsWithChildren) => {
  const { t } = await useTranslation('about');

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-6 grid-flow-row-dense">
      <Sidebar />
      <div className="flex flex-col md:col-span-5">{children}</div>
    </section>
  );
};

export default AboutLayout;
