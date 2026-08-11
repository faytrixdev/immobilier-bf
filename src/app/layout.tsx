import type { Metadata, Viewport } from 'next';
import { agencyInfo } from '@/data/agency';
import './globals.css';

export const metadata: Metadata = {
  title: `${agencyInfo.name} - Agence Immobilière à Ouagadougou`,
  description: agencyInfo.description,
  icons: {
    icon: '/images/logo.webp',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
