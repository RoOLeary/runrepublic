import './globals.css';
import '@/styles/index.scss';

import { Poppins } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
// import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';
import { ViewTransitions } from "next-view-transitions";
import SiteHeader from './SiteHeader';

export const metadata = {
  title: 'Run Republic - The Home of Running',
  description:
    'Run Republic is the home of running; the perfect running blog, full of running advice and running tips. You can keep up to date easily!',
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
    <html lang="en" className={poppins.className}>
      <body className="">
        <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
          <div className="mb-2">
            <SiteHeader />
          </div>
          {children}
          {/* <MusicPlayer /> */}
          <Footer />
        </div>
      </body>
    </html>
    </ViewTransitions>
  );
}
