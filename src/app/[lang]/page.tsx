import { useTranslation } from '@/lib/i18n';

const RootPage: React.FC<BasePageProps> = async ({
  params: { lang },
}: BasePageProps) => {
  const { t } = await useTranslation(lang, '/');

  return (
    <div className="content items-center justify-center">
      <div className="flex flex-col">
        <p className="text-sm md:text-base text-muted-foreground">
          {t('greeting')}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          {t('common:name')}
        </h1>
        <h5 className="text-base md:text-2xl mt-2 text-muted-foreground">
          &gt; {t('common:role')}
        </h5>
      </div>
    </div>
  );
};

export default RootPage;
