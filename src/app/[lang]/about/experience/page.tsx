import { Metadata, NextPage } from 'next';
import { useTranslation } from '@/lib/i18n';
import { CodeBlock } from '@/components/organisms';

const content = `
const experiences = [
  {
    company: 'Knowledge Catalyst Pte. Ltd.',
    history: [
      {
        position: 'Front End Lead',
        period: 'Jul 2023 - Present',
      },
      {
        position: 'Mobile Developer',
        period: 'Jul 2022 - Jun 2023',
      }
    ]
  },
  {
    company: 'Emveep',
    history: [
      {
        position: 'Front End Developer',
        period: 'Jul 2021 - Jun 2022',
      }
    ]
  },
  {
    company: 'PT. Smooets Teknologi Outsourcing',
    history: [
      {
        position: 'Mobile Developer',
        period: 'Nov 2019 - Jun 2021',
      },
      {
        position: 'Full Stack Developer',
        period: 'Jul 2019 - Oct 2019',
      }
    ]
  },
  {
    company: 'Self-Employed',
    history: [
      {
        position: 'Full Stack Engineer',
        period: 'Jul 2017 - Jun 2019',
      }
    ]
  }
];
`;

export const metadata: Metadata = {
  title: 'Experience',
};

const AboutExperiencePage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return <CodeBlock code={content} />;
};

export default AboutExperiencePage;
