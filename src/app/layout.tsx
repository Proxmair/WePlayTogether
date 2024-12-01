import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from './StoreProvider'
import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/siderbar/Sidebar";
import Footer from "@/components/layout/footer/Footer";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400", // Regular weight
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700", // Bold weight
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800", // Extra Bold weight
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Play Together",
  description: "A Project to Unite gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
         <StoreProvider>
          <Header />
          <Sidebar />
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
