import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage: NextPage = async () => {
  const { t } = await useTranslation('projects');

  return (
    <section className="flex flex-col flex-grow h-full w-full items-center justify-center">
      <p>{t('greeting')}</p>
    </section>
  );
};

export default ProjectsPage;
