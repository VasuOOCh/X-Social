import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-white px-4 md:px-8 lg:px-32 ">
          <Navbar />
        </div>
        <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-32">
          {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}