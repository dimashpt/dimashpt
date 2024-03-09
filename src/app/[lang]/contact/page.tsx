import { useTranslation } from '@/lib/i18n';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage: NextPage = async () => {
  const { t } = await useTranslation('contact');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default ContactPage;
