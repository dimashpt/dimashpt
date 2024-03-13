import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
};

const ArticlesPage: NextPage = async () => {
  const { t } = await useTranslation('articles');

  return (
    <section className="flex flex-col flex-grow h-full w-full items-center justify-center">
      <p>{t('greeting')}</p>
    </section>
  );
};

export default ArticlesPage;
