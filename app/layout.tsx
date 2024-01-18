import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "material-symbols";

const poppinsFont = Poppins({
  weight: ["700", "400", "300", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "ashOkidesu portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="nord"
      className="snap-y snap-mandatory scroll-smooth"
    >
      <body className={poppinsFont.className}>
        <Navbar />
        <main className="relative overflow-hidden ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
