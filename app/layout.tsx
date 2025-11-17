import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// TODO: Import a Header and Footer component once we create them
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChainRunner - Learn Cardano Development',
  description: 'Go from JS dev to Cardano dev, one on-chain quest at a time.',
};

/**
 * This is the Root Layout for the entire application.
 * All other pages will be rendered inside the `children` prop.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}
      >
        {/* TODO: Add a <Header /> component here */}
        {/* <Header /> */}

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* TODO: Add a <Footer /> component here */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
