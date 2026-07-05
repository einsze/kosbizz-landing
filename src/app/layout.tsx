import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KosBizz — Cari kost, kontrakan, apartemen di WhatsApp',
  description:
    'KosBizz adalah operating system operasional properti sewa Indonesia. Cari tempat tinggal semudah kirim pesan. Kelola properti tanpa kompromi.',
  keywords: [
    'kost',
    'kontrakan',
    'apartemen sewa',
    'properti sewa',
    'manajemen kost',
    'aplikasi kost',
    'kosbizz',
  ],
  openGraph: {
    title: 'KosBizz — Cari kost, kontrakan, apartemen di WhatsApp',
    description:
      'AI-powered discovery + operating system manajemen properti sewa Indonesia.',
    url: 'https://kosbizz.com',
    siteName: 'KosBizz',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KosBizz — Property Rental OS',
    description:
      'Cari tempat tinggal semudah kirim pesan. Kelola properti tanpa kompromi.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
