import { useTranslation } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage: React.FC<BasePageProps> = async ({
  params: { lang },
}: BasePageProps) => {
  const { t } = await useTranslation(lang, '/contact');

  return (
    <div className="content items-center justify-center">
      <p>{t('greeting')}</p>
    </div>
  );
};

export default ContactPage;
