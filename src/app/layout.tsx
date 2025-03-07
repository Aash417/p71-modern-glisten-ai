import { repositoryName } from '@/prismicio';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PrismicPreview } from '@prismicio/next';
import { DM_Sans } from 'next/font/google';
import './global.css';

const dmSans = DM_Sans({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-dm-sans',
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={dmSans.variable}>
         <body className="bg-[#070815] text-white">
            <Header />
            <main>{children}</main>
            <Footer />
         </body>
         <PrismicPreview repositoryName={repositoryName} />
      </html>
   );
}
