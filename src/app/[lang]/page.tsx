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
        <h5 className="text-base md:text-2xl mt-2 mb-5 text-muted-foreground">
          &gt; {t('common:role')}
        </h5>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>{t('code_comment')}</p>
          <p>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>{t(`code_github.${i}`)}</span>
            ))}
            <a href={t('code_github.3')}>&quot;{t('code_github.3')}&quot;</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
