import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Island Freeze | Frozen Cocktails & Slushies",
  description:
    "Refreshing frozen cocktails and tropical slushies. Cool down the island way.",
  openGraph: {
    title: "Island Freeze | Frozen Cocktails & Slushies",
    description:
      "Refreshing frozen cocktails and tropical slushies. Cool down the island way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
