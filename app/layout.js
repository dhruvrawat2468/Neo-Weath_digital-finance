import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { TracingBeam } from "@/components/ui/tracing-beam";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neo Wealth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <TracingBeam>
          <main className="min-h-screen bg-black">{children}</main>
          </TracingBeam>
          <Toaster richColors />

          
        </body>
      </html>
    </ClerkProvider>
  );
}
