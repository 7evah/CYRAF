import type { Metadata } from 'next';
import { I18nProviderClient } from '@/locales/client';
import { Toaster } from "@/components/ui/toaster";
import '../globals.css';


export const metadata: Metadata = {
  title: 'Cycraf Security',
  description: 'Enterprise Cyber Defence',
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-gradient-to-b from-gray-50 to-white">
        <I18nProviderClient locale={locale}>
          {children}
          <Toaster />
        </I18nProviderClient>
      </body>
    </html>
  );
}
