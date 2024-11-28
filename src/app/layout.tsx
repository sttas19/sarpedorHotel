import type { Metadata, Viewport } from "next";

import "./globals.css";
import type { Layout } from "@/lib/types";
import { fontsClassName } from "@/lib/fonts";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sarpedor Hotel",
  description: "Sarpedor Hotel",
};

const RootLayout: Layout = ({ children }) => (
  <html
    dir="ltr"
    lang="ru"
    suppressHydrationWarning
    suppressContentEditableWarning
  >
    <body className={fontsClassName}>
      <Header />
      <main className="bg-[#F5F5F5] ">{children}</main>
      <Footer />
    </body>
  </html>
);

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "black" },
  ],
};

export default RootLayout;
