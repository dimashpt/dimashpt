import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';
import { CodeBlock } from '@/components/organisms';

export const metadata: Metadata = {
  title: 'Education',
};

const AboutEducationPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <CodeBlock
      code={`const education = {\n  university: 'STMIK Mardira Indonesia',\n};`}
    />
  );
};

export default AboutEducationPage;
