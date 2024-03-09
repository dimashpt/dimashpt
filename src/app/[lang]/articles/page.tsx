import { useTranslation } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
};

const ArticlesPage: React.FC<BasePageProps> = async ({
  params: { lang },
}: BasePageProps) => {
  const { t } = await useTranslation(lang, '/articles');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default ArticlesPage;
