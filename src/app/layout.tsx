import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "./providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnlineJobFair",
  description: "PresentedBySuperIdol",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="overflow-hidden">
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
