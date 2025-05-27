import Navbar from "@/components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";
import "./globals.css";
import { baseUrl } from "@/lib/utils";
import { WelcomeToast } from "@/components/welcome-toast";
import { Toaster } from "sonner";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,  
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <main>
          {children}
          <Toaster closeButton />
          <WelcomeToast />
        </main>
      </body>
    </html>
  );
}
