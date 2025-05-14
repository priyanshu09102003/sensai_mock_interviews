import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SensAI - Mock Interviews",
  description: "An AI Powered platform for preparing for the mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${monaSans.className} antialiased pattern h-full`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}

            <Toaster />
            
            </main>
          <footer className="text-white text-center py-4 border-t border-gray-700">
            © Developed and Designed by Priyanshu
          </footer>
        </div>
      </body>
    </html>
  );
}
