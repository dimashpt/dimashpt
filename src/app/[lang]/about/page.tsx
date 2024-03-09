import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <section className="flex flex-col flex-grow h-full w-full items-center justify-center">
      <p>{t('greeting')}</p>
    </section>
  );
};

export default AboutPage;
