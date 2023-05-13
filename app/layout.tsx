"use client"

import './globals.css'

import { ThirdwebProvider } from "@thirdweb-dev/react";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'MonoBee App',
  description: 'Manage accounts and send tokens through MonoBee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider activeChain="ethereum">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  )
}
