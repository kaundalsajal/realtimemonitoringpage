import type { Metadata } from "next";
import { DM_Sans,Urbanist} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["700", "600", "500", "400", "300"],
  variable: "--font-body",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  weight: ["700", "600", "500", "400", "300"],
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real-Time Monitoring",
  description: "Real-time Monitoring Your Infrstracture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center">{children}</body>
    </html>
  );
}
