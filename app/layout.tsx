import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Top from "./components/Top";
import ClickDetector from "./components/ClickDetector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo Next App",
  description: "My sandbox next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClickDetector />
        <div className='navigation-container'>
          <Top />
        </div>
        <div className='page-container'>
          <div className='page-layout'>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
