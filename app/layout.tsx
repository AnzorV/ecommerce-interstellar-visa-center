import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Interstellar Visa Center",
    template: "%s - Interstellar Visa Center",
  },
  description: "Interstellar Visa Center, Apply for Space Visa",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}</body>
    </html>
  );
}
