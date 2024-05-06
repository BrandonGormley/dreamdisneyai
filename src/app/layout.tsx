import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://dreamdisneyai.vercel.app/'),
    title: 'Dream Disney AI',
    description:
        'Our AI-powered app helps you plan the perfect Disney trip, optimize your park visits, and manage your budget.',
    openGraph: {
        url: 'https://dreamdisneyai.vercel.app/',
        siteName: 'Dream Disney AI',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={rubik.className}>
                <Navbar />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
