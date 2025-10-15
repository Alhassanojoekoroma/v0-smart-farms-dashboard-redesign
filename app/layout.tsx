import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "SmartFarms - Agricultural Management System",
  description: "Manage farmers, operations, and agricultural activities in Sierra Leone",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-hidden pl-64">
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
            </Suspense>
            <main className="flex-1 overflow-y-auto p-6 bg-primary border-background border">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
