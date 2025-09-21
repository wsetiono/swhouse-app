import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "TechSolution Indonesia - Jasa Pembuatan Website & Aplikasi Mobile Terpercaya",
  description:
    "Jasa pembuatan website profesional dan aplikasi mobile Android/iOS terbaik di Indonesia. Solusi digital terpercaya untuk bisnis Anda dengan harga kompetitif dan kualitas premium.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi mobile",
    "web development indonesia",
    "mobile app development",
    "software house indonesia",
    "pembuatan website murah",
    "aplikasi android ios",
    "jasa IT indonesia",
    "web developer jakarta",
    "aplikasi mobile jakarta",
  ],
  authors: [{ name: "TechSolution Indonesia" }],
  creator: "TechSolution Indonesia",
  publisher: "TechSolution Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techsolution-indonesia.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    title: "TechSolution Indonesia - Jasa Pembuatan Website & Aplikasi Mobile Terpercaya",
    description:
      "Jasa pembuatan website profesional dan aplikasi mobile Android/iOS terbaik di Indonesia. Solusi digital terpercaya untuk bisnis Anda.",
    url: "https://techsolution-indonesia.vercel.app",
    siteName: "TechSolution Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechSolution Indonesia - Software House Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolution Indonesia - Jasa Pembuatan Website & Aplikasi Mobile",
    description: "Jasa pembuatan website profesional dan aplikasi mobile Android/iOS terbaik di Indonesia.",
    images: ["/og-image.jpg"],
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
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.com" />
        <link rel="dns-prefetch" href="//blob.vercel-storage.com" />
        <link rel="preload" href="/modern-software-development-team-working-on-comput.jpg" as="image" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
        <link rel="manifest" href="/manifest.json" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechSolution Indonesia",
              description: "Jasa pembuatan website profesional dan aplikasi mobile Android/iOS terbaik di Indonesia",
              url: "https://techsolution-indonesia.vercel.app",
              logo: "https://techsolution-indonesia.vercel.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-21-1234-5678",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Sudirman No. 123",
                addressLocality: "Jakarta",
                addressRegion: "DKI Jakarta",
                postalCode: "10220",
                addressCountry: "ID",
              },
              sameAs: [
                "https://www.facebook.com/techsolution.indonesia",
                "https://www.instagram.com/techsolution.indonesia",
                "https://www.linkedin.com/company/techsolution-indonesia",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://techsolution-indonesia.vercel.app",
              name: "TechSolution Indonesia",
              image: "https://techsolution-indonesia.vercel.app/og-image.jpg",
              telephone: "+62-21-1234-5678",
              email: "hello@techsolution.id",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Sudirman No. 123",
                addressLocality: "Jakarta Selatan",
                addressRegion: "DKI Jakarta",
                postalCode: "12190",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.2088,
                longitude: 106.8456,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://techsolution-indonesia.vercel.app/#website",
              url: "https://techsolution-indonesia.vercel.app",
              name: "TechSolution Indonesia",
              description: "Jasa pembuatan website profesional dan aplikasi mobile Android/iOS terbaik di Indonesia",
              publisher: {
                "@id": "https://techsolution-indonesia.vercel.app/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://techsolution-indonesia.vercel.app/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "id-ID",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
