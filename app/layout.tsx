import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zustand',
  description: 'How to work with global state management!!!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-gray-400`}>{children}</body>
    </html>
  );
}
