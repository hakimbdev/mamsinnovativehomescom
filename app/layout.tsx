import type React from "react"
import type { Metadata } from "next/types"
import "./globals.css"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import HeaderWrapper from "@/components/header-wrapper"
// import { SupabaseProvider } from "@/context/SupabaseProvider"
import { AuthProvider } from "@/components/auth/auth-provider"

export const metadata: Metadata = {
  title: "Mams Innovative Homes",
  description: "We create real estate investment opportunities that delivers great value and returns",
  generator: 'v0.dev',
  icons: {
    icon: {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365276/Happy_New_Year.png_pags3x.png",
      sizes: "any",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <AuthProvider>
          <HeaderWrapper />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </AuthProvider>
      </body>
    </html>
  )
}
