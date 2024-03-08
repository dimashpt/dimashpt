import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/atoms';
import { Footer, Header } from '@/components/organisms';
import Favicon from '/public/favicon.ico';
import './globals.css';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

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

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
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
