import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "noted app",
  description: "aplikasi yang digunakan untuk mencatat pengeluaran harian anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
