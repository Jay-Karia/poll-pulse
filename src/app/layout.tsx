import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poll Pulse",
  description: "📊 Voting made easy",
  icons: [
    {
      url: '/poll.png',
      href: '/poll.png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("h-full", inter.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
