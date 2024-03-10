import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <div id="tab-content" className="flex-grow p-5">
      Bio
    </div>
  );
};

export default AboutPage;
