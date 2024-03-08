import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage: React.FC = () => {
  return (
    <div className="content items-center justify-center">
      <p>Contact Page</p>
    </div>
  );
};

export default ContactPage;
