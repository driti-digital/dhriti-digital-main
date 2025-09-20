import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import the Inter font
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhriti Digital",
  description: "Digital Marketing for Manufacturers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Use the Inter font className */}
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}