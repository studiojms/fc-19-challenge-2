import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FC Blog',
  description: 'A blog app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-8">{children}</body>
    </html>
  );
}
