import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar/NavBar";
import Image from "next/image";
import background from "../public/grey-bubbles.jpg"
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orest Bodnar",
  description: "Java Developer Portfolio WebSite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <NavBar />
        <Image className='fixed top-0 right-0 z-[-1] w-full h-full blur-2xl' alt='grey bubbles' src={background} />
        <div className="mt-[5rem] w-[90vw] mx-auto lg:w-[85vw] lg:mt-[4.5rem] xl:w-[70vw] 2xl:w-[60vw]">
          {children}
        </div>
        <div className="h-14"></div>
        <Footer />
      </body>
    </html>
  );
}
