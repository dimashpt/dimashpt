import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default AboutPage;
