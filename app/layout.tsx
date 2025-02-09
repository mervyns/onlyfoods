import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnlyFoods - Secret Asian Recipes",
  description: "Premium Asian recipe marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fsc-api"
          src="https://sbl.onfastspring.com/sbl/1.0.1/fastspring-builder.min.js"
          strategy="afterInteractive"
          data-storefront="mervyn.test.onfastspring.com/popup-mervyn"
          data-continuous="true"
          data-popup-closed="onPopupClose"
          data-decorate-callback="onFastSpringDecorate"
          data-debug="true"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{
          __html: `
            window.onFastSpringDecorate = function(data) {
              // If data is a string, it's the session URL
              if (typeof data === 'string' && data.includes('session')) {
                return data;
              }
              // If it's an object with path, it's a product path
              if (data && data.path) {
                return 'https://mervyn.test.onfastspring.com/popup-mervyn/products/' + data.path;
              }
              return null;
            };
          `
        }} />
        {children}
      </body>
    </html>
  );
}
