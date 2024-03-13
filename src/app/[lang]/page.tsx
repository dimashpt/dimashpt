import { CodeBlock } from '@/components/organisms';
import { useTranslation } from '@/lib/i18n';
import { NextPage } from 'next';

const RootPage: NextPage = async () => {
  const { t } = await useTranslation('home');

  return (
    <section className="flex flex-col h-full w-full items-center justify-center">
      <div className="flex flex-col px-5 md:px-0">
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
          <CodeBlock
            hideLines
            code={`${t('code_comment')}\n${t('code_github')}`}
          />
        </div>
      </div>
    </section>
  );
};

export default RootPage;
