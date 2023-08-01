import "./globals.css";
import "@/styles/index.scss";
import { Poppins } from "next/font/google";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import Footer from "@/components/Footer/Footer";
import SiteHeader from "./SiteHeader";

export const metadata = {
  title: "TECH SCENE | NL",
  description: "All the latest from the Dutch Tech Scene",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="">
        <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
        
          <SiteHeader />
          <div className={`w-full bg-red-500 flex items-center justify-center p-2`}>
            <p className="text-white">I&#39;ve never done good things, I&#39;ve never done bad things, I never did anything out of the blue.</p>
          </div>
    
          {children}
          <MusicPlayer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
