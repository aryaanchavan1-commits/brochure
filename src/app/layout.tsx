import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arynoxtech 2026 — Premium Digital, Software & AI Services | Chiplun, Maharashtra",
  description:
    "Websites, mobile apps, CRM, ERP, AI automation & digital marketing from Chiplun, Maharashtra. Premium tech solutions at 40–70% below metro agency rates. Free consultation.",
  keywords: [
    "web development Chiplun",
    "software company Maharashtra",
    "AI services India",
    "mobile app development",
    "CRM development",
    "ERP solutions",
    "digital marketing Ratnagiri",
    "website design Konkan",
    "Arynoxtech",
  ],
  robots: "index, follow",
  authors: [{ name: "Arynoxtech" }],
  openGraph: {
    type: "website",
    url: "https://arynoxtech.com",
    title: "Arynoxtech — Premium Digital, Software & AI Services at Honest Prices",
    description:
      "Websites, mobile apps, CRM, ERP, AI automation, and digital marketing — built in Chiplun for businesses across India. 40–70% below metro agency rates.",
    images: [
      {
        url: "https://arynoxtech.com/arynox_lion_logo.png",
        width: 512,
        height: 512,
        alt: "Arynoxtech Logo",
      },
    ],
    locale: "en_IN",
    siteName: "Arynoxtech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arynoxtech — Premium Digital, Software & AI Services",
    description:
      "Websites, mobile apps, CRM, ERP, AI automation & digital marketing from Chiplun. 40–70% below metro rates.",
    images: ["https://arynoxtech.com/arynox_lion_logo.png"],
  },
  alternates: {
    canonical: "https://arynoxtech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Arynoxtech",
              alternateName: "Arynoxtech Technology Services",
              description:
                "Premium digital, software, AI automation, and digital marketing services provider based in Chiplun, Maharashtra.",
              url: "https://arynoxtech.com",
              logo: "https://arynoxtech.com/arynox_lion_logo.png",
              image: "https://arynoxtech.com/arynox_lion_logo.png",
              telephone: "+91-8857912586",
              email: "aryaanchavan1@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chiplun",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.5333",
                longitude: "73.5167",
              },
              areaServed: ["Maharashtra", "Konkan", "India"],
              priceRange: "₹3,999 – ₹79,999+",
              openingHours: "Mo-Sa 09:00-19:00",
              sameAs: ["https://wa.me/918857912586"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CRM & ERP Solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Automation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
