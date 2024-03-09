import '#/public/globals.css';
import Favicon from '#/public/favicon.ico';
import type { Metadata, NextPage } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/atoms';
import { Footer, Header } from '@/components/organisms';
import { dir } from 'i18next';

type BaseLayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};

const font = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | dimashpt',
    default: 'Portfolio | dimashpt',
  },
  description: 'Portfolio of dimashpt',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

const RootLayout: NextPage<BaseLayoutProps> = ({
  children,
  params: { lang },
}: BaseLayoutProps) => {
  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
