import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage: React.FC = () => {
  return (
    <div className="content items-center justify-center">
      <p>About Page</p>
    </div>
  );
};

export default AboutPage;
