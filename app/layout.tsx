import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carey Rouse – Author & Coach | Relentless Discipline",
  description:
    "Carey Rouse, author of *Find Meaning Through Relentless Discipline*, helps people build lives of purpose through structure, grit, and discipline.",
};

/* ─── NAV LINKS ─── */
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Life Coaching", href: "/life" },
  { label: "Fitness Coaching", href: "/fitness" },
  { label: "My Book", href: "/book" },
  { label: "Contact", href: "/contact" },
];

/* ─── FOOTER DATA ─── */
const resourceLinks = [
  { label: "My Book", href: "/book" },
  {
    label: "1001 Ways Discipline eBook",
    href: "https://careyrouse.com/1001-ways-discipline-ebook/",
  },
  {
    label: "21-Day Discipline Challenge",
    href: "https://careyrouse.com/21-day-discipline-challenge/",
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
        {/* ═══════ HEADER / NAVIGATION ═══════ */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-6 lg:w-[90%]">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="https://careyrouse.com/wp-content/uploads/2025/06/CR-black-on-trans.webp"
                alt="Carey Rouse"
                width={160}
                height={50}
                className="h-[50px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-0 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-[18px] py-[13px] text-[16px] leading-[24px] text-black no-underline transition-colors hover:text-[#0066FF]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger (checkbox toggle) */}
            <label
              htmlFor="mobile-menu-toggle"
              className="flex cursor-pointer items-center justify-center rounded bg-black/5 p-1.5 text-black lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            </label>
          </div>

          {/* Mobile dropdown */}
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            className="peer hidden"
          />
          <nav className="hidden flex-col border-t border-black/10 bg-white peer-checked:flex lg:!hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-[16px] text-black no-underline hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* ═══════ MAIN CONTENT ═══════ */}
        {children}

        {/* ═══════ FOOTER ═══════ */}
        <footer className="border-t border-black bg-white">
          <div className="mx-auto max-w-[1280px] px-4 pt-5 pb-20 md:px-6">
            {/* Divider already via border-t above */}

            {/* 3-column grid */}
            <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-[30%_30%_30%] lg:justify-center">
              {/* Resources */}
              <div className="flex flex-col gap-2 pl-2">
                <h5 className="text-[24px] font-bold leading-[32px] text-black">
                  Resources
                </h5>
                <ul className="flex flex-col gap-0 pl-4">
                  {resourceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work With Me */}
              <div className="flex flex-col gap-2">
                <h5 className="text-[24px] font-bold leading-[32px] text-black">
                  Work With Me
                </h5>
                <ul className="flex flex-col gap-0 pl-4">
                  {workLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stay Updated */}
              <div className="flex flex-col gap-5">
                <h5 className="text-[24px] font-bold leading-[32px] text-black">
                  Stay Updated
                </h5>
                <p className="text-[14px] leading-[20px] text-black">
                  Subscribe for the latest insights and inspiration.
                </p>

                {/* Kit.com embedded form */}
                <form
                  action="https://app.kit.com/forms/8257969/subscriptions"
                  method="post"
                  data-sv-form="8257969"
                  data-uid="6b7e084f63"
                  data-format="inline"
                  className="formkit-form flex flex-col gap-2"
                >
                  <ul
                    className="formkit-alert formkit-alert-error list-none p-0 text-sm text-red-600"
                    data-element="errors"
                    data-group="alert"
                  />
                  <div
                    className="formkit-fields flex flex-col gap-2 sm:flex-row"
                    data-element="fields"
                  >
                    <div className="formkit-field">
                      <input
                        className="formkit-input w-full rounded border border-black/20 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                        type="text"
                        name="fields[first_name]"
                        placeholder="First Name"
                        aria-label="First Name"
                        required
                      />
                    </div>
                    <div className="formkit-field">
                      <input
                        className="formkit-input w-full rounded border border-black/20 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                        type="email"
                        name="email_address"
                        placeholder="Enter Your Email"
                        aria-label="Enter Your Email"
                        required
                      />
                    </div>
                    <button
                      className="formkit-submit cursor-pointer rounded bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-black/80 active:scale-95"
                      data-element="submit"
                      type="submit"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 flex flex-col items-center gap-4 border-t border-black/10 pt-6 sm:flex-row sm:justify-between">
              <p className="text-[14px] leading-[20px] text-black">
                © 2026 Carey Rouse. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/terms-and-conditions"
                  className="text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF]"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF]"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-black transition-colors hover:text-[#0066FF]"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Kit.com JS (loaded after page) */}
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
