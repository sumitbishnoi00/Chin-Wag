import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistRoboto = Roboto_Slab({
  variable: "--font-geist-roboto  ",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://chin-wag-one.vercel.app/"),
  title: "Chin-Wag",
  description: "Avoid inflated costs, keep your identity hidden while searching for Partners, and get rewarded for paying on-time.",
  openGraph: {
    title: "Chin-Wag",
    description: "Avoid inflated costs, keep your identity hidden while searching for Partners, and get rewarded for paying on-time.",
    url: "https://chin-wag-one.vercel.app/",
    siteName: "Stack Audio",
    images: [
      { url: "/assets/images/png/meta.png", width: 1200, height: 630, alt: "Stack Audio" },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/assets/images/png/meta.png"] },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistRoboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
