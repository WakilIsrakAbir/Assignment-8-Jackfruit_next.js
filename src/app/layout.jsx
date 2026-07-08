import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'animate.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | SunCart',
    default: 'SunCart - Your Summer Essentials Store',
  },
  description: 'A modern summer eCommerce platform for sunglasses, summer outfits, skincare, and beach accessories.',
};

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
