import { CodeBlock } from '@/components/organisms';
import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

const content = `
const NAME = 'Dimas Hayat Pratama'; // Commonly known as Dimas

const DOB = 'July 22, 2000'; // 23 y.o.

let role = 'Front End / Mobile Developer';
let location = 'Bandung, West Java, Indonesia 40153';

/**
 * About Me
 * --------
 * I'm a highly motivated front-end developer with a 5-year background
 * in building exceptional web and mobile experiences.
 * 
 * ReactJS, Vue.js, React Native, and Flutter are my core strengths.
 * I'm passionate about creating beautiful, responsive, and performant
 * applications that provide a delightful user experience
 * and a constant desire to learn the latest front-end technologies.
 * 
 * I thrive in collaborative environments where I can contribute to
 * crafting products that exceed expectations.
 */
`;

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: NextPage = async () => {
  const { t } = await useTranslation('about');

  return <CodeBlock code={content} />;
};

export default AboutPage;
