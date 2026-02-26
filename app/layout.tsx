import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import NextLink from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Carey Rouse – Author & Coach | Relentless Discipline",
  description:
    "Carey Rouse, author of *Find Meaning Through Relentless Discipline*, helps people build lives of purpose through structure, grit, and discipline.",
};

/* ─── FOOTER DATA ─── */
const resourceLinks = [
  { label: "My Book", href: "/book" },
  {
    label: "1001 Ways Discipline eBook",
    href: "/1001-ways-discipline-ebook",
  },
  {
    label: "21-Day Discipline Challenge",
    href: "/21-day-discipline-challenge",
  },
];

const workLinks = [
  { label: "About", href: "/about" },
  { label: "Life Coaching", href: "/life" },
  { label: "Fitness Coaching", href: "/fitness" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/careyrouse/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@careyrouse1",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/careyrouse/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Strava",
    href: "https://www.strava.com/athletes/175445",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google Tag Manager (Script component for better performance) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MFZK3689');`}
        </Script>

        {/* Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://careyrouse.com/#me",
                  "name": "Carey Rouse",
                  "url": "https://careyrouse.com/",
                  "image": "https://careyrouse.com/images/2000-2000 headshot January.webp",
                  "description": "Carey Rouse is a writer, coach, and speaker focused on systems for disciplined living, intentionality, and personal transformation.",
                  "sameAs": [
                    "https://www.linkedin.com/in/careyrouse",
                    "https://www.facebook.com/careyrouse",
                    "https://www.amazon.com/stores/Carey-Rouse/author/B0DYNS4KMB",
                    "https://www.youtube.com/@careyrouse1"
                  ],
                  "jobTitle": "Writer, Coach, and Speaker",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Carey Rouse"
                  }
                },
                {
                  "@type": "Book",
                  "@id": "https://www.amazon.com/dp/B0FJ5QKJ1R",
                  "name": "Find Meaning Through Relentless Discipline: Lessons From Living a Life to the Fullest",
                  "author": {
                    "@id": "https://careyrouse.com/#me"
                  },
                  "url": "https://www.amazon.com/dp/B0FJ5QKJ1R",
                  "image": "https://careyrouse.com/images/3 book 3d cover cropped.webp",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Independent"
                  }
                }
              ]
            })
          }}
        />

        {/* ═══════ HEADER / NAVIGATION ═══════ */}
        <Header />

        {/* ═══════ MAIN CONTENT ═══════ */}
        {children}

        {/* ═══════ FOOTER ═══════ */}
        <Footer
          resourceLinks={resourceLinks}
          workLinks={workLinks}
          socialLinks={socialLinks}
        />

        {/* Kit.com JS (loaded after page) */}
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
