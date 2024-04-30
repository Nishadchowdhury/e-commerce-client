import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/Modal-provider";
import ToastProvider from "@/providers/Toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" >
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
