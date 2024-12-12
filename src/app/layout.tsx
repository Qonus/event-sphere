import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.scss";
import Navbar from "@/compnents/NavbarComponent/Navbar";
import { auth } from '@/auth';
import { dbConnect } from "@/lib/mongo";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Sphere",
  description: "The best platform to keep up with your local events!"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar session={session}></Navbar>
          {children}
        </body>
    </html>
  );
}
