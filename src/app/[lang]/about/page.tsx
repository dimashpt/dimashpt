import { CodeBlock } from '@/components/organisms';
import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return <CodeBlock code={`const NAME = 'Dimas Hayat Pratama';`} />;
};

export default AboutPage;
