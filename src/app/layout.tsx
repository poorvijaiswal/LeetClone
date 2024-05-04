"use client";
import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
// import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "leetcode clone",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        < head >
          <title>Poorvi</title>
          <meta name="veiwport" content="width=device-width" initial-scale="1"></meta>
          <link rel='icon' href="/favicon.png" />
        </head >
        <ToastContainer />
        <body className={inter.className}>
          {children}
        </body>

      </html>
    </RecoilRoot>
  );
}
