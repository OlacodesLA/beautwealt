import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Beautwealt Electronics: Shaping the Future with Innovation and Empowerment.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
  manifest: "https://beautwealt.com/site.webmanifest",
  openGraph: {
    title:
      "Beautwealt Electronics: Shaping the Future with Innovation and Empowerment.",
    description:
      "Discover the intersection of technology, innovation, and empowerment at Beautwealt Electronics. Our mission is to sculpt a future of beauty and wealth through excellence, continuous innovation, and cutting-edge Electronics Workshops. Explore our commitment to shaping technology and enriching lives.",
    url: "https://beautwealt.com",
    siteName: "Beautwealt Electronics",
    images: [
      {
        url: "https://beautwealt.com/logo-compressed.png",
        type: "image/png",
        width: 256,
        height: 256,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "app",
    title:
      "Beautwealt Electronics: Shaping the Future with Innovation and Empowerment.",
    description:
      "Discover the intersection of technology, innovation, and empowerment at Beautwealt Electronics. Our mission is to sculpt a future of beauty and wealth through excellence, continuous innovation, and cutting-edge Electronics Workshops. Explore our commitment to shaping technology and enriching lives.",
    images: {
      url: "https://beautwealt.com/logo-compressed.png",
      alt: "Beaultwealt Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`min-h-screen ${inter.className}`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
