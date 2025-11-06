import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akash R - Full Stack Developer | React.js & Node.js Expert",
  description:
    "Professional portfolio of Akash R, a passionate full-stack developer specializing in React.js, Node.js, and modern web technologies. Currently pursuing BE in Electronics and Communication from Chennai Institute of Technology.",
  keywords: [
    "Akash R",
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Chennai",
    "Web Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Akash R" }],
  creator: "Akash R",
  publisher: "Akash R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashr.dev",
    title: "Akash R - Full Stack Developer",
    description: "Professional portfolio showcasing full-stack development expertise in React.js, Node.js, and modern web technologies.",
    siteName: "Akash R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash R - Full Stack Developer",
    description: "Professional portfolio showcasing full-stack development expertise in React.js, Node.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
