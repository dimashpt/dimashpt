import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';
import { CodeBlock } from '@/components/organisms';

export const metadata: Metadata = {
  title: 'Experience',
};

const AboutExperiencePage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return (
    <CodeBlock
      code={`const experiences = [\n  {\n    company: 'PT. Bina Media Tenggara',\n    position: 'Frontend Developer',\n  },\n  {\n    company: 'PT. Bina Media Tenggara',\n    position: 'Frontend Developer',\n  }\n]`}
    />
  );
};

export default AboutExperiencePage;
