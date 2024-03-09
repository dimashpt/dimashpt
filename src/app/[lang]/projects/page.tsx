import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage: NextPage = async () => {
  const { t } = await useTranslation('projects');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default ProjectsPage;
