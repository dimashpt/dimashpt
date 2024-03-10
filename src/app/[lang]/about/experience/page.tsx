import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Experience',
};

const AboutExperiencePage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <div id="tab-content" className="flex-grow p-5">
      Experience
    </div>
  );
};

export default AboutExperiencePage;
