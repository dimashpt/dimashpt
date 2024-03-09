import '#/public/globals.css';
import Favicon from '#/public/favicon.ico';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/atoms';
import { Footer, Header } from '@/components/organisms';
import { languages } from '@/lib/i18n';
import { dir } from 'i18next';

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

export async function generateStaticParams(): Promise<{ lang: string }[]> {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params: { lang },
}: BasePageProps & { children: React.ReactNode }): JSX.Element {
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
}
