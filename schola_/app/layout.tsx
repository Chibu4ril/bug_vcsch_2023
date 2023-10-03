import "./globals.css";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";

const cabin = Cabin({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VCScholar | Transforming Dreams into Degrees",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}