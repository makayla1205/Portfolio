import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Makayla Boyer",
  description: "Freelance Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <Navbar/>
          <main className="min-h-screen">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
