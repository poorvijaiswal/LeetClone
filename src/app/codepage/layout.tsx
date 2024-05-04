"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            < head >
                <title>Codepage</title>
                <meta name="viewport" content="width=device-width" initial-scale="1"></meta>
                <link rel='icon' href="/favicon.png" />
            </head >
            <body className={inter.className}>
                <Topbar />
                <Sidebar />
                <div className="ml-64 mt-[50px] px-2 py-3 w-[calc(100% - 16rem)] bg-color-dark-layer-2 text-color-dark-gray-7">
                    {children}
                </div>
            </body>
        </html >
    );
}