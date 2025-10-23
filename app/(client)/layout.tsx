import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
          <html lang="en">
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1"> 
                  {children}

          </main>
        <Footer />
        </div>
    </html>
    </ClerkProvider>
  );
}
