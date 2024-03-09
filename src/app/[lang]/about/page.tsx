import { useTranslation } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: React.FC<BasePageProps> = async ({
  params: { lang },
}: BasePageProps) => {
  const { t } = await useTranslation(lang, '/about');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default AboutPage;
