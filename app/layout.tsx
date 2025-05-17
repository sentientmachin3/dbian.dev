import type { Metadata } from "next"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"

const font = JetBrains_Mono({
    subsets: ["latin"],
    weight: "400",
})

export const metadata: Metadata = {
    title: "dbian - Home",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "favicon-16x16.png",
        },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={font.className}>
            <body className={"antialiased"}>{children}</body>
        </html>
    )
}
