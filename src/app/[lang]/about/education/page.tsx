import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';
import { CodeBlock } from '@/components/organisms';

const content = `
const education = [
  {
    school: 'STMIK Mardira Indonesia',
    major: 'Informatics Engineering',
    degree: 'Bachelor of Science',
    graduated: true,
    year: '2019 - 2023',
  },
  {
    school: 'SMK Lugina Rancaekek',
    major: 'Software Engineering',
    degree: 'High School',
    graduated: true,
    year: '2015 - 2018',
  }
];
`;

export const metadata: Metadata = {
  title: 'Education',
};

const AboutEducationPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return <CodeBlock code={content} />;
};

export default AboutEducationPage;
