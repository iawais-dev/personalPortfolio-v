import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins', 
  weight:['300','400','500','600','700']
});

export const metadata: Metadata = {
  title: "AwaisPortfolio",
  description: "Passionate web developer dedicated to building responsive, user-friendly, and visually stunning websites that bring ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
