import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axel Rivera Saldaña | Unity & Full Stack Developer",
  description: "Specializing in .NET, React, SQL, and Immersive XR/AR Solutions. Building scalable backend systems and interactive experiences.",
  keywords: [".NET", "Unity", "AR/VR", "React", "C#", "Full Stack", "Developer", "Three.js", "XR", "Augmented Reality"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
