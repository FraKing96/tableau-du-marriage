import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tableau du Mariage — Nicole & Francesco",
  description:
    "Scopri il tuo tavolo al matrimonio di Nicole & Francesco. 14 Giugno 2026.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nicole & Francesco",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${lato.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
