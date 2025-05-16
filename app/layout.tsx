import type { Metadata } from "next"
import "./globals.css"
import { Profile } from "../components"

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
        <html lang="en">
            <body className={`antialiased`}>
                <div className="h-full w-[25%] bg-main/20">
                    <Profile />
                </div>
                {children}
            </body>
        </html>
    )
}
