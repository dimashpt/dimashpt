import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Education',
};

const AboutEducationPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <div id="tab-content" className="flex-grow p-5">
      Education
    </div>
  );
};

export default AboutEducationPage;
