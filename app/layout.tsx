import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

const jetbrainsMono = localFont({
  src: './fonts/JetBrainsMonoBold.woff2',
  display: 'swap',
  weight: '700',
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'yooveloper.dev',
  description: '유원영 | Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${pretendard.variable} ${jetbrainsMono.variable}`}>
      <body className='font-pretendard'>{children}</body>
    </html>
  );
}
