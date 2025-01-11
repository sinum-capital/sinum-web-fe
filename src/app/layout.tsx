import type {Metadata} from "next";
import "../assets/styles/style.scss";
import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sinum",
    description: "Make money easy",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
        <body>{children}</body>
        </html>
    );
}
