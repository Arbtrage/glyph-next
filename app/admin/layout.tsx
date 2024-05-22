import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { adminMetaData } from "../lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Glyph Admin",
    description: adminMetaData,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
