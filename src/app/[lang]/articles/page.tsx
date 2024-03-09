import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
};

const ArticlesPage: NextPage = async () => {
  const { t } = await useTranslation('articles');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default ArticlesPage;
